import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Best-effort per-process protection. A shared limiter is needed across serverless instances.
const attempts = new Map<string, { count: number; expires: number }>();
const windowMs = 10 * 60 * 1000;

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { success: false, error: "Ongeldig verzoek." },
      { status: 415 },
    );
  }
  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { success: false, error: "Uw bericht is te lang." },
        { status: 413 },
      );
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid body");
    body = parsed;
  } catch {
    return NextResponse.json(
      { success: false, error: "Ongeldig verzoek." },
      { status: 400 },
    );
  }
  if (body.website) return NextResponse.json({ success: true });

  const limits: Record<string, number> = {
    name: 120,
    email: 254,
    company: 160,
    projectType: 100,
    budget: 100,
    timeline: 100,
    message: 5000,
  };
  const data: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = body[key] ?? "";
    if (typeof value !== "string" || value.length > limit)
      return NextResponse.json(
        { success: false, error: "Controleer de ingevulde velden." },
        { status: 400 },
      );
    data[key] = value.trim();
  }
  if (
    !data.name ||
    /[\r\n]/.test(data.name) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    data.message.length < 10 ||
    (body.maintenance !== undefined && typeof body.maintenance !== "boolean")
  ) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Vul uw naam, een geldig e-mailadres en een bericht van minimaal 10 tekens in.",
      },
      { status: 400 },
    );
  }
  const now = Date.now();
  for (const [key, entry] of attempts)
    if (entry.expires <= now) attempts.delete(key);
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const entry = attempts.get(ip) || { count: 0, expires: now + windowMs };
  if (entry.count >= 5 || (!attempts.has(ip) && attempts.size >= 10000)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "U heeft meerdere berichten verstuurd. Probeer het over tien minuten opnieuw of neem direct contact op.",
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }
  attempts.set(ip, { ...entry, count: entry.count + 1 });
  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS ||
    !process.env.EMAIL_TO
  ) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Het formulier is tijdelijk niet beschikbaar. Neem rechtstreeks contact op via e-mail of telefoon.",
      },
      { status: 503 },
    );
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject: `Nieuwe projectaanvraag van ${data.name}`,
      text: `Naam: ${data.name}\nE-mail: ${data.email}\nBedrijf: ${data.company || "Niet ingevuld"}\nProject: ${data.projectType || "Te bespreken"}\nBudget: ${data.budget || "Te bespreken"}\nOpleverdatum: ${data.timeline || "Te bespreken"}\nInteresse in onderhoud: ${body.maintenance ? "Ja" : "Nee"}\n\n${data.message}`,
    });
    return NextResponse.json({ success: true });
  } catch {
    console.error("Contact e-mail kon niet worden verstuurd.");
    return NextResponse.json(
      {
        success: false,
        error:
          "Versturen is niet gelukt. Probeer het later opnieuw of neem rechtstreeks contact op.",
      },
      { status: 500 },
    );
  }
}
