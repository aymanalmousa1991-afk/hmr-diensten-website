const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

// Rate limiting (simpel in-memory)
const rateLimit = new Map();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60000;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// MongoDB connectie
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB verbonden'))
    .catch(err => console.error('❌ MongoDB fout:', err.message));
}

// Review schema
const reviewSchema = new mongoose.Schema({
  name: String,
  location: String,
  text: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', reviewSchema);

// ================ API ROUTES ================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// === Reviews ===
app.get('/api/reviews', async (req, res) => {
  try {
    if (MONGODB_URI && mongoose.connection.readyState === 1) {
      const reviews = await Review.find().sort({ createdAt: -1 }).limit(50);
      res.json({ success: true, data: reviews });
    } else {
      // Fallback naar default reviews
      const defaultReviews = [
        { name: 'Fatima El-Amrani', location: 'Eindhoven', text: 'Geweldig schoonmaakbedrijf! Alles was brandschoon.', rating: 5 },
        { name: 'Dennis Bakker', location: 'Amsterdam', text: 'Professioneel en betrouwbaar! Kantoor ziet er piekfijn uit.', rating: 5 },
        { name: 'Linda de Kort', location: 'Rotterdam', text: 'Binnen 24 uur stonden ze voor de deur. Mijn huis was in 2 uur weer als nieuw.', rating: 5 },
      ];
      res.json({ success: true, data: defaultReviews });
    }
  } catch (e) {
    res.json({ success: true, data: [] });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const { name, location, text, rating } = req.body;
    if (!name || !location || !text) {
      return res.status(400).json({ success: false, error: 'Vul alle verplichte velden in' });
    }
    if (MONGODB_URI && mongoose.connection.readyState === 1) {
      const review = new Review({ name, location, text, rating: rating || 5 });
      await review.save();
      res.json({ success: true });
    } else {
      res.json({ success: true }); // Alleen bevestigen zonder opslag
    }
  } catch (e) {
    res.status(500).json({ success: false, error: 'Er ging iets mis' });
  }
});

// === Offerte ===
app.post('/api/offerte', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: 'Te veel aanvragen. Probeer het later opnieuw.' });
    }

    const { name, email, phone, service, message, _honeypot } = req.body;

    // Honeypot check
    if (_honeypot) {
      return res.json({ success: true, emailSent: false });
    }

    // Validatie
    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: 'Vul alle verplichte velden in' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Ongeldig e-mailadres' });
    }

    // Sanitize
    const sanitize = (str) => String(str).replace(/<[^>]*>/g, '').trim();
    const cleanName = sanitize(name);
    const cleanMessage = sanitize(message);
    const cleanService = sanitize(service);
    const cleanPhone = phone ? sanitize(phone) : '';

    const MAIL_TO = process.env.OFFERTE_EMAIL_TO || 'hmrdiensten@gmail.com';
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    let emailSent = false;

    // HTML e-mail
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#00AEEF;padding:20px;border-radius:8px 8px 0 0">
          <h1 style="color:white;margin:0;font-size:22px">Nieuwe Offerte Aanvraag</h1>
        </div>
        <div style="padding:20px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;width:130px">Naam</td><td style="padding:10px;border:1px solid #ddd">${cleanName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">E-mail</td><td style="padding:10px;border:1px solid #ddd"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">Telefoon</td><td style="padding:10px;border:1px solid #ddd">${cleanPhone || '-'}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9">Dienst</td><td style="padding:10px;border:1px solid #ddd">${cleanService}</td></tr>
          </table>
          <h3 style="color:#00AEEF;margin-top:24px;margin-bottom:8px">Bericht</h3>
          <p style="background:#f9f9f9;padding:14px;border-radius:6px;line-height:1.6;margin:0">${cleanMessage}</p>
          <hr style="border:1px solid #eee;margin-top:24px" />
          <p style="color:#999;font-size:12px">Verzonden via HMR DIENSTEN API | ${new Date().toLocaleString('nl-NL')}</p>
        </div>
      </div>
    `;

    // Verzenden via SendGrid
    if (SENDGRID_API_KEY && SENDGRID_API_KEY.startsWith('SG.')) {
      try {
        const sendgridRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
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
        if (sendgridRes.ok) emailSent = true;
      } catch (e) {
        console.error('SendGrid fout:', e.message);
      }
    }

    res.json({ success: true, emailSent });
  } catch (error) {
    console.error('Offerte error:', error);
    res.status(500).json({ error: 'Interne server fout' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ HMR DIENSTEN API draait op poort ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
});
