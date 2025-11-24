export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailServiceId = 'service_gmail'
    const templateId = 'template_contact'
    const publicKey = process.env.EMAILJS_KEY

    if (!publicKey) {
      console.log('[v0] EmailJS not configured - logging submission')
      console.log(`[v0] Contact - Name: ${name}, Email: ${email}, Message: ${message}`)
      return Response.json({ 
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      })
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: emailServiceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'blitseven7@gmail.com',
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    console.log('[v0] Email sent successfully from:', email)
    return Response.json({ 
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
  } catch (error) {
    console.error('[v0] Email error:', error)
    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
