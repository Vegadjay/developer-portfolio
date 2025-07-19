import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, subject, message } = body;

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please contact the administrator.",
        },
        { status: 500 },
      );
    }

    // Handle single email submission (from Contact.tsx component)
    if (email && !name && !subject && !message) {
      // Validate email
      if (!email.trim()) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 },
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please enter a valid email address" },
          { status: 400 },
        );
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        secure: true,
        port: 465,
      });

      // Verify transporter configuration
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.error("Transporter verification failed:", verifyError);
        return NextResponse.json(
          {
            error:
              "Email service configuration error. Please check your credentials.",
          },
          { status: 500 },
        );
      }

      // Email content for single email submission
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 },
      );
    }

    // Handle full form submission (from contact page)
    if (name && email && subject && message) {
      // Validate all fields
      if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
        return NextResponse.json(
          { error: "All fields are required" },
          { status: 400 },
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please enter a valid email address" },
          { status: 400 },
        );
      }

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        secure: true,
        port: 465,
      });

      // Verify transporter configuration
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.error("Transporter verification failed:", verifyError);
        return NextResponse.json(
          {
            error:
              "Email service configuration error. Please check your credentials.",
          },
          { status: 500 },
        );
      }

      // Email content for full form submission
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px; margin-top: 10px;">${message}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 },
      );
    }

    // If neither case matches, return error
    return NextResponse.json(
      { error: "Invalid form data. Please check your submission." },
      { status: 400 },
    );
  } catch (error: any) {
    console.error("Email sending error:", error);

    // Provide more specific error messages
    if (error.code === "EAUTH") {
      return NextResponse.json(
        {
          error:
            "Email authentication failed. Please check your email credentials.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
