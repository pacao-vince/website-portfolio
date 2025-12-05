import { Resend } from "resend";
import ContactEmail from "../emails/ContactEmail"; // React Email template

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "vpacao.pbox@parsu.edu.ph",
        subject: `New message from ${name}`,
        reply_to: email,
        react: <ContactEmail name={name} email={email} message={message} />,
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}