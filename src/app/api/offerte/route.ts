import { NextRequest, NextResponse } from 'next/server';

function buildEmailHtml(name: string, email: string, phone: string, service: string, message: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#0f766e;padding:20px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:22px">Nieuwe Offerte Aanvraag</h1>
      </div>
      <div style="padding:20px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:130px">Naam</td><td style="padding:10px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">E-mail</td><td style="padding:10px;border:1px solid #ddd"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">Telefoon</td><td style="padding:10px;border:1px solid #ddd">${phone || '-'}</td></tr>
          <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">Gewenste dienst</td><td style="padding:10px;border:1px solid #ddd">${service}</td></tr>
        </table>
        <h3 style="color:#0f766e;margin-top:24px;margin-bottom:8px">Bericht</h3>
        <p style="background:#f9f9f9;padding:14px;border-radius:6px;line-height:1.6;margin:0">${message}</p>
        <hr style="border:1px solid #eee;margin-top:24px" />
        <p style="color:#999;font-size:12px">Verzonden via hmrdiensten.nl | ${new Date().toLocaleString('nl-NL')}</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Vul alle verplichte velden in' }, { status: 400 });
    }

    const MAIL_TO = process.env.OFFERTE_EMAIL_TO || 'hmrdiensten@gmail.com';
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    let emailSent = false;
    const html = buildEmailHtml(name, email, phone, service, message);

    // Verzenden via SendGrid (beide afzenders zijn geverifieerd)
    if (SENDGRID_API_KEY && SENDGRID_API_KEY.startsWith('SG.')) {
      try {
        const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: MAIL_TO }],
              subject: `Nieuwe offerte aanvraag van ${name}`,
              reply_to: { email },
            }],
            from: { email: 'hmrdiensten@gmail.com', name: 'HMR DIENSTEN Offerte' },
            content: [{ type: 'text/html', value: html }],
          }),
        });

        if (res.ok) {
          emailSent = true;
          console.log('Offerte e-mail verzonden via SendGrid naar', MAIL_TO);
        } else {
          const errText = await res.text();
          console.error('SendGrid error:', res.status, errText);
          // Stuur fout terug naar de frontend
          return NextResponse.json({ 
            success: true, 
            emailSent: false, 
            sendgridError: `Status ${res.status}: ${errText.substring(0, 200)}` 
          });
        }
      } catch (sendgridErr) {
        console.error('SendGrid mislukt:', sendgridErr);
      }
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (error) {
    console.error('Offerte error:', error);
    return NextResponse.json({ error: 'Interne server fout' }, { status: 500 });
  }
}
