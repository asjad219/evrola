import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { handleCors } from './_utils.js';

export default async function handler(req, res) {
  if (handleCors(req, res)) {
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, time } = req.body || {};

    if (!name || !phone || !service || !time) {
      return res.status(400).json({
        error: 'Missing required fields: name, phone, service, time',
      });
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT || !process.env.GOOGLE_SHEET_ID || !process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    let serviceAccount;
    try {
      serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    } catch (error) {
      console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT:', error.message);
      return res.status(500).json({ error: 'Service account configuration error' });
    }

    const authClient = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({
      version: 'v4',
      auth: authClient,
    });

    const timestamp = new Date().toISOString();
    const sheetValues = [timestamp, name, phone, service, time];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Quote Requests!A1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [sheetValues],
      },
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066ff;">Quote Request Received ✅</h2>
        <p>Hi ${name},</p>
        <p>Thank you for requesting a free quote! We'll contact you at <strong>${phone}</strong> during your preferred time window.</p>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Best Time to Call:</strong> ${time}</p>
        </div>
        
        <p>Expect a call within the next 24 hours!</p>
        <p>Best regards,<br><strong>Evrola Team</strong></p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: name.includes('@') ? name : process.env.NOTIFICATION_EMAIL,
      subject: 'Quote Request Received',
      html: userEmailHtml,
    });

    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b35;">🔥 New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Best Time to Call:</strong> ${time}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Quote Request from ' + name,
      html: adminEmailHtml,
    });

    return res.json({
      success: true,
      message: 'Quote request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-quote:', error.message);
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
