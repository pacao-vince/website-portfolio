// /api/contact.js
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "../emails/ContactEmail.jsx";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = render(
      <ContactEmail name={name} email={email} message={message} />
    );

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vpacao.pbox@parsu.edu.ph",
      subject: `New message from ${name}`,
      reply_to: email,
      html,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Send error:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: error?.message || error,
    });
  }
}
