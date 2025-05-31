// Email service configuration
// Updated with your correct email address: shahmiahamedaj@gmail.com

// Method 1: EmailJS (Recommended for client-side)
export const sendEmailWithEmailJS = async (formData: any) => {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      template_params: {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "shahmiahamedaj@gmail.com", // Updated email
      },
    }),
  })

  return response.json()
}

// Method 2: Resend (Server-side)
export const sendEmailWithResend = async (formData: any) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "portfolio@yourdomain.com",
      to: ["shahmiahamedaj@gmail.com"], // Updated email
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #007bff;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>
          <div style="margin-top: 20px; padding: 10px; background: #e9ecef; border-radius: 4px; font-size: 12px; color: #666;">
            Sent from your portfolio contact form on ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    }),
  })

  return response.json()
}

// Method 3: SendGrid
export const sendEmailWithSendGrid = async (formData: any) => {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "shahmiahamedaj@gmail.com" }], // Updated email
          subject: `Portfolio Contact: ${formData.subject}`,
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
              <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
              <p><strong>Subject:</strong> ${formData.subject}</p>
            </div>
            <div style="background: white; padding: 20px; border-left: 4px solid #007bff;">
              <h3>Message:</h3>
              <p style="line-height: 1.6;">${formData.message}</p>
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

  return response.json()
}
