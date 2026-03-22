import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;
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

  return NextResponse.json({
    ok: true,
    message: "Request received",
  });
}
