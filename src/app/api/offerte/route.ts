import { NextRequest, NextResponse } from 'next/server';

// Simpele rate limiting in-memory
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // max 5 aanvragen
const RATE_LIMIT_WINDOW = 60000; // per 60 seconden

function buildEmailHtml(name: string, email: string, phone: string, service: string, message: string) {
  const date = new Date().toLocaleString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
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
        <p style="color:#999;font-size:12px">Verzonden via hmrdiensten.nl | ${date}</p>
      </div>
    </div>
  `;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Te veel aanvragen. Probeer het later opnieuw.' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, phone, service, message, _honeypot } = body;

    // Honeypot check (anti-spam)
    if (_honeypot) {
      // Bot gedetecteerd, doe alsof het gelukt is
      return NextResponse.json({ success: true, emailSent: false });
    }

    // Validatie
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Vul alle verplichte velden in' }, { status: 400 });
    }

    // E-mail validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 });
    }

    // XSS preventie: strip HTML tags
    const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').trim();
    const cleanName = sanitize(name);
    const cleanMessage = sanitize(message);
    const cleanService = sanitize(service);
    const cleanPhone = phone ? sanitize(phone) : '';

    const MAIL_TO = process.env.OFFERTE_EMAIL_TO || 'hmrdiensten@gmail.com';
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    let emailSent = false;
    const html = buildEmailHtml(cleanName, email, cleanPhone, cleanService, cleanMessage);

    // Verzenden via SendGrid
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
              subject: `Nieuwe offerte aanvraag van ${cleanName}`,
              reply_to: { email },
            }],
            from: { email: 'hmrdiensten@gmail.com', name: 'HMR DIENSTEN Offerte' },
            content: [{ type: 'text/html', value: html }],
          }),
        });

        if (res.ok) {
          emailSent = true;
        } else {
          const errText = await res.text();
          console.error('SendGrid error:', res.status, errText);
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
