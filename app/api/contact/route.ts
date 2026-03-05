import { NextResponse } from "next/server";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'jainvihaan65@gmail.com';
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || `noreply@${process.env.VERCEL_URL || "localhost"}`;

function sanitize(s: any) {
  return String(s || "").replace(/[&<>"']/g, (c) => {
    return (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as Record<string, string>
    )[c] || '';
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!message || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const subject = `New contact form submission from ${name || "Unknown"}`;
    const html = `
      <p><strong>Name:</strong> ${sanitize(name)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      <p><strong>Message:</strong></p>
      <pre>${sanitize(message)}</pre>
    `;

    if (SENDGRID_API_KEY) {
      const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: TO_EMAIL }] }],
          from: { email: FROM_EMAIL },
          reply_to: { email: email || FROM_EMAIL },
          subject,
          content: [{ type: "text/html", value: html }],
        }),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => "");
        console.error("SendGrid error", resp.status, text);
        return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback for local dev: log to console
    console.warn("SendGrid not configured; submission logged to server console.");
    console.log({ name, email, message });
    return NextResponse.json({ ok: true, logged: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
