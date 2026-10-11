import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { senderEmail, message } = await request.json();

    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Contact From Portfolio Website <onboarding@resend.dev>",
      to: "nipundileka199957@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      text: message,
    });

    return NextResponse.json({ data });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
