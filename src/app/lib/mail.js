"use server";
import nodemailer from "nodemailer";
import { htmlTemplate } from "../data";
export async function sendMail({ to, subject, body }) {
  try {
    const { MY_EMAIL, SMTP_EMAIL, SMTP_PASS } = process.env;
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS,
      },
    });

    const htmlContent = htmlTemplate(body);
    const response = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject: "Thanks for reaching out",
      html: htmlContent,
    });

    await transport.sendMail({
      from: SMTP_EMAIL,
      to: MY_EMAIL,
      subject: "Message From Portfolio Website",
      html: `
      <p>Message received from ${to}</p>
      <p>Subject: ${subject}</p>
      <p>Message: ${body}</p>
      `,
    });

    return { response, success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}
