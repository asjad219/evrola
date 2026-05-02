import { google } from 'googleapis';
import nodemailer from 'nodemailer';

let sheets;
let authClient;
let transporter;

// Initialize transporter
export function initializeEmail() {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  return transporter;
}

// Initialize Google Sheets
export async function initializeGoogleSheets() {
  try {
    if (sheets) return sheets; // Already initialized

    let serviceAccount;

    // Try embedded JSON first (for Vercel)
    if (process.env.GOOGLE_SERVICE_ACCOUNT) {
      try {
        serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
      } catch (parseError) {
        throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT JSON format: ' + parseError.message);
      }
    } else {
      throw new Error('GOOGLE_SERVICE_ACCOUNT environment variable not set');
    }

    // Create auth client
    authClient = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize sheets API
    sheets = google.sheets({
      version: 'v4',
      auth: authClient,
    });

    return sheets;
  } catch (error) {
    console.error('❌ Failed to initialize Google Sheets:', error.message);
    throw error;
  }
}

// Append data to Google Sheets
export async function appendToSheet(range, values) {
  try {
    if (!sheets) {
      await initializeGoogleSheets();
    }

    const request = {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [values],
      },
    };

    const result = await sheets.spreadsheets.values.append(request);
    console.log(`✅ Row added to ${range}`);
    return { success: true, data: result.data };
  } catch (error) {
    console.error('❌ Google Sheets error:', error.message);
    throw new Error(`Failed to add data to sheet: ${error.message}`);
  }
}

// Send email
export async function sendEmail(subject, htmlContent, recipientEmail) {
  try {
    if (!transporter) {
      initializeEmail();
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${recipientEmail}`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

// Enable CORS
export function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Handle OPTIONS requests for CORS
export function handleCors(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.status(200).end();
    return true;
  }
  setCorsHeaders(res);
  return false;
}
