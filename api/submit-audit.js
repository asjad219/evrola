import { google } from 'googleapis';
import nodemailer from 'nodemailer';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, website, location, goal } = req.body;

    // Validation
    if (!name || !email || !website || !location) {
      return res.status(400).json({ error: 'Missing required fields: name, email, website, location' });
    }

    // Verify env vars
    if (!process.env.GOOGLE_SERVICE_ACCOUNT || !process.env.GOOGLE_SHEET_ID || !process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Parse service account
    let serviceAccount;
    try {
      serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    } catch (e) {
      console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT:', e.message);
      return res.status(500).json({ error: 'Service account configuration error' });
    }

    // Initialize Google Sheets
    const authClient = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({
      version: 'v4',
      auth: authClient,
    });

    const timestamp = new Date().toISOString();
    const sheetValues = [timestamp, name, email, website, location, goal || ''];

    // Append to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Audit Requests!A1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [sheetValues],
      },
    });

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Send user confirmation email
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066ff;">Audit Request Received ✅</h2>
        <p>Hi ${name},</p>
        <p>Thank you for requesting a free audit! We've received your submission and will review your website shortly.</p>
        
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>Service Area:</strong> ${location}</p>
          <p><strong>Goal:</strong> ${goal || 'Not specified'}</p>
        </div>
        
        <p>We typically respond within 24 hours with a detailed audit report.</p>
        <p>Best regards,<br><strong>Evrola Team</strong></p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Free Website Audit Request Received',
      html: userEmailHtml,
    });

    // Send admin notification email
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066ff;">🆕 New Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
        <p><strong>Service Area:</strong> ${location}</p>
        <p><strong>Goal:</strong> ${goal || 'Not specified'}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Audit Request from ' + name,
      html: adminEmailHtml,
    });

    return res.json({
      success: true,
      message: 'Audit request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-audit:', error.message);
    return res.status(500).json({ error: error.message || 'Server error' });
  }
}
