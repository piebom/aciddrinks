import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { naam, adres, telefoonnummer, email } = body;

    // Validate required fields
    if (!naam || !adres || !telefoonnummer || !email) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "ACID Landing Page <noreply@aciddrinks.com>",
      to: "drop@aciddrinks.com",
      subject: `Nieuwe aanvraag van ${naam}`,
      html: `
        <h2>Nieuwe aanvraag van ACID Landing Page</h2>
        <p><strong>Naam van de zaak:</strong> ${naam}</p>
        <p><strong>Adres:</strong> ${adres}</p>
        <p><strong>Telefoonnummer:</strong> ${telefoonnummer}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Fout bij het verzenden van de email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email succesvol verzonden", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Interne serverfout" },
      { status: 500 }
    );
  }
}

