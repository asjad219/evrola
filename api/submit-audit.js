import { handleCors, initializeGoogleSheets, appendToSheet, sendEmail } from './_utils.js';

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, website, location, goal } = req.body;

    // Validation
    if (!name || !email || !website || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets
    await initializeGoogleSheets();

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
          <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}" style="background: #0066ff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Google Sheets</a>
        </p>
      </div>
    `;

    await sendEmail('New Audit Request from ' + name, adminEmailHtml, process.env.NOTIFICATION_EMAIL);

    res.json({
      success: true,
      message: 'Audit request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-audit:', error);
    res.status(500).json({ error: error.message });
  }
}
