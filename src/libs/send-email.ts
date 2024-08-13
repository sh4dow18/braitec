// Send Email Library Requirements
import nodemailer from "nodemailer";
// Send Email Library Nodemailer Transporter
// Used to define Gmail's requirements for sending an email by code
const TRANSPORTER = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: process.env.BRAITEC_EMAIL,
    pass: process.env.BRAITEC_APP_PASSWORD,
  },
});
// Send Email Library Main Function
// Used to send an email as HTML
export default function SendEmail(html: string) {
  return TRANSPORTER.sendMail({
    from: process.env.BRAITEC_EMAIL,
    to: process.env.BRAITEC_EMAIL,
    subject: "Contacto desde Braitec",
    html: html,
  });
}
