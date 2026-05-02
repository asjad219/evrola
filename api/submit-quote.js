import { handleCors, initializeGoogleSheets, appendToSheet, sendEmail } from './_utils.js';

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, time } = req.body;

    // Validation
    if (!name || !phone || !service || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets
    await initializeGoogleSheets();

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
          <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}" style="background: #ff6b35; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">View in Google Sheets</a>
        </p>
      </div>
    `;

    await sendEmail('New Quote Request from ' + name, adminEmailHtml, process.env.NOTIFICATION_EMAIL);

    res.json({
      success: true,
      message: 'Quote request submitted successfully',
    });
  } catch (error) {
    console.error('Error in /api/submit-quote:', error);
    res.status(500).json({ error: error.message });
  }
}
