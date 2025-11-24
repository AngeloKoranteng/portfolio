import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nieuw project-aanvraag van ${name}`,
      text: `
Naam: ${name}
Email: ${email}
Bedrijf: ${company || "Niet ingevuld"}
Project Type: ${projectType || "Niet ingevuld"}
Budget: ${budget || "Niet ingevuld"}
Timeline: ${timeline || "Niet ingevuld"}

Project Beschrijving:
${message || "Geen bericht ingevuld"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Onbekende fout";

    console.error("Mail error:", errorMessage);

    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500 }
    );
  }
}
