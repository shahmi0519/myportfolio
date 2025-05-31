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

    // Send email using EmailJS
    const emailJSResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_r4lw8dl", // Replace with your actual Service ID
        template_id: "emplate_cxlqjnv", // Replace with your actual Template ID
        user_id: "r2_jJdK0jFl5ArBdN", // Replace with your actual User ID
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
    } else {
      throw new Error("Failed to send email via EmailJS")
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
