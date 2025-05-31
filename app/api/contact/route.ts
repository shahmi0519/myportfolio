import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Portfolio

From: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio contact form
Time: ${new Date().toLocaleString()}
    `

    // Method 1: Using EmailJS (Recommended)
    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
          template_params: {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "shahmiahamedaj@gmail.com",
          },
        }),
      })

      if (emailJSResponse.ok) {
        return NextResponse.json(
          {
            success: true,
            message: "Message sent successfully! I will get back to you soon.",
          },
          { status: 200 },
        )
      }
    }

    // Method 2: Using Resend
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "portfolio@yourdomain.com",
          to: ["shahmiahamedaj@gmail.com"],
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>From:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background: white; padding: 20px; border-left: 4px solid #007bff;">
                <h3>Message:</h3>
                <p style="line-height: 1.6;">${message}</p>
              </div>
              <div style="margin-top: 20px; padding: 10px; background: #e9ecef; border-radius: 4px; font-size: 12px; color: #666;">
                Sent from your portfolio contact form on ${new Date().toLocaleString()}
              </div>
            </div>
          `,
        }),
      })

      if (resendResponse.ok) {
        return NextResponse.json(
          {
            success: true,
            message: "Message sent successfully! I will get back to you soon.",
          },
          { status: 200 },
        )
      }
    }

    // Method 3: Using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      const sendGridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "shahmiahamedaj@gmail.com" }],
              subject: `Portfolio Contact: ${subject}`,
            },
          ],
          from: { email: "portfolio@yourdomain.com" },
          content: [
            {
              type: "text/html",
              value: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                    New Contact Form Submission
                  </h2>
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>From:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Subject:</strong> ${subject}</p>
                  </div>
                  <div style="background: white; padding: 20px; border-left: 4px solid #007bff;">
                    <h3>Message:</h3>
                    <p style="line-height: 1.6;">${message}</p>
                  </div>
                  <div style="margin-top: 20px; padding: 10px; background: #e9ecef; border-radius: 4px; font-size: 12px; color: #666;">
                    Sent from your portfolio contact form on ${new Date().toLocaleString()}
                  </div>
                </div>
              `,
            },
          ],
        }),
      })

      if (sendGridResponse.ok) {
        return NextResponse.json(
          {
            success: true,
            message: "Message sent successfully! I will get back to you soon.",
          },
          { status: 200 },
        )
      }
    }

    // Fallback - log the message (for development)
    console.log("Email to send:", emailContent)
    console.log("Recipient:", "shahmiahamedaj@gmail.com")

    return NextResponse.json(
      {
        success: true,
        message: "Message received! I will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
