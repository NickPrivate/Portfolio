import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Get environment variables
    const webhookUrl = process.env.WEBHOOK_URL
    const webhookSecret = process.env.WEBHOOK_SECRET
    
    if (!webhookUrl || !webhookSecret) {
      console.error('Missing webhook configuration')
      return NextResponse.json(
        { error: 'Webhook configuration missing' },
        { status: 500 }
      )
    }

    // Prepare the payload with the secret
    const payload = {
      ...body,
      secret: webhookSecret
    }

    // Send to n8n webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', webhookResponse.status)
      return NextResponse.json(
        { error: 'Webhook request failed' },
        { status: webhookResponse.status }
      )
    }

    // Parse the response from n8n
    const webhookData = await webhookResponse.json()
    
    // Check if the response contains the expected secret and status
    if (webhookData.status !== 'ok') {
      console.error('Invalid webhook response:', webhookData)
      return NextResponse.json(
        { error: 'Invalid webhook response' },
        { status: 400 }
      )
    }

    // Return success response
    return NextResponse.json({ status: 'ok' })

  } catch (error) {
    console.error('Error in webhook handler:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
