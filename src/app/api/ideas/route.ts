import sgMail from "@sendgrid/mail";
import { NextRequest } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const { name, email, company, phone, category, title, problem, currentProcess, desiredOutcome, wishlist, budget, timeline, additionalInfo } = await request.json();

  if (!name || !email || !title || !problem || !desiredOutcome || !wishlist) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:8px 0;color:#666;width:140px;vertical-align:top;"><strong>${label}</strong></td><td style="padding:8px 0;">${value}</td></tr>` : "";

  try {
    await sgMail.send({
      from: "contact@epistemiai.com",
      to: "mark.merlene@gmail.com",
      replyTo: email,
      subject: `New Idea Submission: ${title} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 650px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Idea Submission</h2>
          <h3 style="color: #333; margin-bottom: 4px;">${title}</h3>
          <p style="color: #888; margin-top: 0;">${category}</p>

          <h4 style="color: #555; margin-bottom: 8px;">Contact Info</h4>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Name", name)}
            ${row("Email", `<a href="mailto:${email}">${email}</a>`)}
            ${row("Company", company)}
            ${row("Phone", phone)}
          </table>

          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

          <h4 style="color: #555; margin-bottom: 8px;">The Idea</h4>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Problem", problem.replace(/\n/g, "<br/>"))}
            ${row("Current Process", currentProcess.replace(/\n/g, "<br/>"))}
            ${row("Success Looks Like", desiredOutcome.replace(/\n/g, "<br/>"))}
          </table>

          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

          <h4 style="color: #555; margin-bottom: 8px;">Wishlist & Details</h4>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Wishlist", wishlist.replace(/\n/g, "<br/>"))}
            ${row("Budget", budget)}
            ${row("Timeline", timeline)}
            ${row("Additional Info", additionalInfo.replace(/\n/g, "<br/>"))}
          </table>
        </div>
      `,
    });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ success: true });
}
