import { NextResponse } from 'next/server';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config(); // Load environment variables

export async function POST(request) {
  try {
    // Parse the request body
    const { email, subject, message } = await request.json();

    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender's email
      to: 'saisaurav78@gmail.com', // Recipient email
      subject: subject, // Email subject
      text: message, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return error response
    return NextResponse.json(
      { message: 'Failed to send email. Please try again.' },
      { status: 500 },
    );
  }
}
