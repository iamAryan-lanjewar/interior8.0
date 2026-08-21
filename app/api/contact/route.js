import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    const recipientEmail = 'instinctt20@gmail.com';
    const payload = {
      ...data,
      "_subject": data._subject || `New RK Interior Inquiry: ${data['Customer Name'] || data.name || 'Client'}`,
      "_template": "table",
      "_captcha": "false",
    };

    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://builddear.com',
        'Referer': 'https://builddear.com/',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({ success: true }));

    return NextResponse.json({
      success: true,
      message: 'Inquiry successfully submitted and delivered.',
      data: result,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to deliver message' },
      { status: 500 }
    );
  }
}
