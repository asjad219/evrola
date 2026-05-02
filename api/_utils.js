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
function getAllowedOrigin(requestOrigin) {
  const defaultAllowedOrigins = [
    'http://localhost:5173',
    'https://evrola.vercel.app',
  ];
  const raw = process.env.FRONTEND_URLS || process.env.FRONTEND_URL || '';
  const allowedOrigins = raw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  const finalAllowedOrigins = allowedOrigins.length > 0 ? allowedOrigins : defaultAllowedOrigins;

  if (!requestOrigin) {
    return '*';
  }

  if (finalAllowedOrigins.includes(requestOrigin)) {
    return requestOrigin;
  }

  return 'null';
}

export function setCorsHeaders(res, requestOrigin) {
  res.setHeader('Access-Control-Allow-Origin', getAllowedOrigin(requestOrigin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

// Handle OPTIONS requests for CORS
export function handleCors(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res, req.headers.origin);
    res.status(200).end();
    return true;
  }
  setCorsHeaders(res, req.headers.origin);
  return false;
}
