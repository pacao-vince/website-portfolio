import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "../emails/ContactEmail"; // React Email template

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const html = render(<ContactEmail name={name} email={email} message={message} />);

      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "vpacao.pbox@parsu.edu.ph",
        subject: `New message from ${name}`,
        reply_to: email,
        html, // use rendered HTML instead of JSX
      });

      res.status(200).json(data);
    } catch (error) {
      console.error("Send error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}