import { Html } from "@react-email/html";

export default function ContactEmail({ name, email, message }) {
  return (
    <Html>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Html>
  );
}