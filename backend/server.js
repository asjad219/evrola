import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import config from './config.js';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = config.port;
const SHEET_ID = config.googleSheetId;
const NOTIFICATION_EMAIL = config.notificationEmail;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.gmailUser,
    pass: config.gmailPassword,
  },
});

// Test email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
  } else {
    console.log('✅ Email configured successfully');
  }
});

// Initialize Google Sheets API with Service Account
let sheets;
let authClient;

async function initializeGoogleSheets() {
  try {
    const serviceAccountPath = process.env.GOOGLE_SERVICE_ACCOUNT_PATH;
    
    if (!serviceAccountPath) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_PATH not set in .env');
    }

    // Read and parse service account JSON
    const serviceAccount = JSON.parse(
      fs.readFileSync(serviceAccountPath, 'utf8')
    );

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

    console.log('✅ Google Sheets API initialized with Service Account');
  } catch (error) {
    console.error('❌ Failed to initialize Google Sheets:', error.message);
    console.error('Make sure GOOGLE_SERVICE_ACCOUNT_PATH is set and file exists');
    process.exit(1);
  }
}

// Initialize on startup
await initializeGoogleSheets();

// Helper function to append data to Google Sheets
async function appendToSheet(range, values) {
  try {
    const request = {
      spreadsheetId: SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [values],
      },
    };

    const result = await sheets.spreadsheets.values.append(request);
    console.log(`✅ Row added to ${range}:`, result.data);
    return { success: true, data: result.data };
  } catch (error) {
    console.error('❌ Google Sheets error:', error.message);
    throw new Error(`Failed to add data to sheet: ${error.message}`);
  }
}

// Helper function to send email
async function sendEmail(subject, htmlContent, recipientEmail) {
  try {
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

// FORMAT: AUDIT FORM ENDPOINT
app.post('/api/submit-audit', async (req, res) => {
  try {
    const { name, email, website, location, goal } = req.body;

    // Validation
    if (!name || !email || !website || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const timestamp = new Date().toISOString();
    const sheetValues = [timestamp, name, email, website, location, goal || ''];

    // Append to Google Sheets
    await appendToSheet('Audit Requests!A1', sheetValues);

    // Send confirmation email to user
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
        
        <p>We typically respond within 24 hours with a detailed audit report showing where your website is losing leads.</p>
        
        <p>Best regards,<br><strong>Evrola Team</strong></p>
      </div>
    `;

    await sendEmail('Free Website Audit Request Received', userEmailHtml, email);

    // Send notification email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066ff;">🆕 New Audit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> Contact via email</p>
        <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
        <p><strong>Service Area:</strong> ${location}</p>
        <p><strong>Goal:</strong> ${goal || 'Not specified'}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
        
        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <a href="https://docs.google.com/spreadsheets/d/${SHEET_ID}" style="background: #0066ff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Google Sheets</a>
        </p>
      </div>
    `;

    await sendEmail('New Audit Request from ' + name, adminEmailHtml, NOTIFICATION_EMAIL);

    res.json({
      success: true,
      message: 'Audit request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-audit:', error);
    res.status(500).json({ error: error.message });
  }
});

// QUOTE FORM ENDPOINT
app.post('/api/submit-quote', async (req, res) => {
  try {
    const { name, phone, service, time } = req.body;

    // Validation
    if (!name || !phone || !service || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const timestamp = new Date().toISOString();
    const sheetValues = [timestamp, name, phone, service, time];

    // Append to Google Sheets
    await appendToSheet('Quote Requests!A1', sheetValues);

    // Send confirmation email to user (if email provided, optional in quote form)
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

    // Send notification email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff6b35;">🔥 New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Best Time to Call:</strong> ${time}</p>
        <p><strong>Submitted:</strong> ${timestamp}</p>
        
        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <a href="https://docs.google.com/spreadsheets/d/${SHEET_ID}" style="background: #ff6b35; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Google Sheets</a>
        </p>
      </div>
    `;

    await sendEmail('New Quote Request from ' + name, adminEmailHtml, NOTIFICATION_EMAIL);

    res.json({
      success: true,
      message: 'Quote request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-quote:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running ✅' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 Google Sheet ID: ${SHEET_ID}`);
  console.log(`📧 Notifications to: ${NOTIFICATION_EMAIL}`);
  console.log(`🌍 Frontend URL: ${config.frontendUrl}`);
  console.log(`📝 Environment: ${config.nodeEnv}\n`);
});
