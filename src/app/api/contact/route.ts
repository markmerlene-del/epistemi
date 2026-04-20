import sgMail from "@sendgrid/mail";
import { NextRequest } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const { name, email, company, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sgMail.send({
      from: "contact@epistemiai.com",
      to: "mark.merlene@gmail.com",
      replyTo: email,
      subject: `New Contact: ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 100px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Company</strong></td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #333;">Message</h3>
          <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ success: true });
}
