// app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Hier runnen we het op node want heb server power nodig 
// Edge is leuk en aardig maar niet voor deze heavy lifting
export const runtime = "nodejs"; 

// Hier komt die POST request binnen
export async function POST(req: Request) {
  try {
    // ff al die data uit de JSON trekken
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      maintenance, // Checkboxje erbij
    } = await req.json();

    // Transportertje opzetten om die mail 
    //  env variables 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Het mailtje zelf in elkaar knutselen
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nieuw project-aanvraag van ${name}`, // Ding dong! Nieuwe klant!
      text: `
Naam: ${name}
Email: ${email}
Bedrijf: ${company || "Niet ingevuld"}
Project Type: ${projectType || "Niet ingevuld"}
Budget: ${budget || "Niet ingevuld"}
Timeline: ${timeline || "Niet ingevuld"}
Abonnement: ${maintenance ? "JA - Service & Onderhoud (€79/mnd)" : "Nee"}

Project Beschrijving:
${message || "Geen bericht ingevuld"}
      `,
    };

    // PANG! Versturen die handel
    await transporter.sendMail(mailOptions);

    //Stuurt 200 als er error is
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    // Foutje loggen 
    const errorMessage =
      err instanceof Error ? err.message : "Onbekende fout";


    console.error("Mail error:", errorMessage);

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
