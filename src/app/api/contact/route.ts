import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function readRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, string>;
  const requiredFields = ["name", "company", "phone", "email", "requestType", "message"];

  const missingField = requiredFields.find((field) => !isNonEmptyString(payload[field]));

  if (missingField) {
    return NextResponse.json(
      { ok: false, message: `Missing field: ${missingField}` },
      { status: 400 },
    );
  }

  if (!emailPattern.test(String(payload.email))) {
    return NextResponse.json(
      { ok: false, message: "Invalid email address" },
      { status: 400 },
    );
  }

  try {
    const host = readRequiredEnv("SMTP_HOST");
    const port = Number(readRequiredEnv("SMTP_PORT"));
    const user = readRequiredEnv("SMTP_USER");
    const pass = readRequiredEnv("SMTP_PASS");
    const secure = process.env.SMTP_SECURE === "true";

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "Urr@impexfeed.ru";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: "New contact request from impexfeed.com",
      text: [
        "A new contact request was submitted.",
        "",
        `Name: ${payload.name}`,
        `Company: ${payload.company}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Request type: ${payload.requestType}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    });

    return NextResponse.json({
      ok: true,
      message: "Request received",
    });
  } catch (error) {
    console.error("Contact form email send failed:", error);
    return NextResponse.json(
      { ok: false, message: "Email delivery failed" },
      { status: 500 },
    );
  }
}
