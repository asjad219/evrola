# 🚀 Setup Guide: Form Submissions to Google Sheets & Email

## Overview
This backend system automatically:
- ✅ Stores form submissions in your Google Sheet
- ✅ Sends confirmation emails to users
- ✅ Sends admin notifications to your email
- ✅ Validates and handles errors properly

---

## 📋 Prerequisites

### 1. **Get Gmail App Password** (for sending emails)

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** in the left menu
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security → Find "App passwords" (appears after 2FA is enabled)
5. Select **Mail** and **Windows Computer** (or your device)
6. Google will generate a 16-character password
7. Copy this password

**In `.env` file, update:**
```
GMAIL_USER=zamanasjad4@gmail.com
GMAIL_PASSWORD=paste_your_16_char_password_here
```

### 2. **Create Google Service Account** (for Google Sheets access)

A Service Account is a special Google Cloud account that your backend uses to authenticate with Google Sheets. This is more secure than API keys.

**Step 1: Create a GCP Project**
1. Go to Google Cloud Console: https://console.cloud.google.com/
2. Click **Select a project** (top left)
3. Click **NEW PROJECT**
4. Name it: `Evrola Forms`
5. Click **CREATE**
6. Wait for it to be created (may take 30 seconds)

**Step 2: Enable Google Sheets API**
1. Go to **APIs & Services** → **Library**
2. Search for **"Google Sheets API"**
3. Click result and press **ENABLE**
4. Wait for it to enable

**Step 3: Create Service Account**
1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **Service Account**
3. Enter:
   - Service account name: `evrola-forms`
   - Service account ID: (auto-fills)
   - Description: `Backend for form submissions`
4. Click **CREATE AND CONTINUE**
5. Click **CONTINUE** on permissions page (skip optional steps)
6. Click **DONE**

**Step 4: Create Key**
1. On Credentials page, find your service account in the list
2. Click on it to open details
3. Go to **KEYS** tab
4. Click **ADD KEY** → **Create new key**
5. Select **JSON** format
6. Click **CREATE**
7. A JSON file will download automatically

**Step 5: Add Service Account to Your Sheet**
1. Open your downloaded JSON file in a text editor
2. Find the `"client_email"` field (looks like: `service-account-name@project-id.iam.gserviceaccount.com`)
3. Copy everything inside the quotes
4. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s/
5. Click **Share** (top right)
6. Paste the email address in the search box
7. Select **Editor** role
8. Uncheck "Notify people"
9. Click **Share**

**Step 6: Save Service Account JSON to Backend**
1. Copy your downloaded JSON file
2. Navigate to `backend/` folder in your project
3. Paste the file there and rename it to: `service-account.json`
4. Verify the file exists at: `backend/service-account.json`

### 3. **Setup Google Sheets**

1. Open your existing Google Sheet: https://docs.google.com/spreadsheets/d/1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s/
2. Create two sheets (tabs at bottom):
   - **Sheet 1:** Rename to `Audit Requests`
   - **Sheet 2:** Rename to `Quote Requests`

3. **For Audit Requests sheet**, add headers in Row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Website
   E1: Location
   F1: Goal
   ```

4. **For Quote Requests sheet**, add headers in Row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Phone
   D1: Service
   E1: Best Time to Call
   ```

---

## 🔧 Installation & Setup

### Step 1: Install Backend Dependencies

Open terminal in the `backend` folder:

```bash
cd backend
npm install
```

### Step 2: Configure Environment Variables

Edit `backend/.env` and add:

```env
# Your Gmail credentials
GMAIL_USER=zamanasjad4@gmail.com
GMAIL_PASSWORD=xxxx xxxx xxxx xxxx

# Your Google Sheets configuration
GOOGLE_SHEET_ID=1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json

# Your notification email
NOTIFICATION_EMAIL=zamanasjad4@gmail.com

# Server config
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**What is `GOOGLE_SERVICE_ACCOUNT_PATH`?**
- This is the path to the `service-account.json` file you downloaded from Google Cloud
- Keep it in the `backend/` folder
- It contains all authentication credentials for accessing Google Sheets

### Step 3: Start the Backend

In the `backend` folder, run:

```bash
npm start
```

You should see:
```
🚀 Backend server running on http://localhost:3001
✅ Email configured successfully
```

If email fails, check your App Password is correct.

### Step 4: Start Frontend (in another terminal)

In root folder:
```bash
npm run dev
```

---

## ✅ Testing

1. **Test Backend Health Check:**
   - Open: http://localhost:3001/api/health
   - Should show: `{"status":"Backend is running ✅"}`

2. **Test Audit Form:**
   - Go to http://localhost:5173
   - Scroll to "Free audit" section
   - Fill in the form with test data
   - Click "Request My Free Audit"
   - Check for success message (green)
   - Check your email (zamanasjad4@gmail.com) for confirmation
   - Check Google Sheet for new row

3. **Test Quote Form:**
   - Scroll to bottom right (floating quote widget)
   - Fill in the form with test data
   - Click "Get My Free Quote"
   - Check for success message (green)
   - Check your email for admin notification
   - Check Quote Requests sheet

---

## 🐛 Troubleshooting

### "Cannot find module" error
```bash
npm install
```

### "Email configuration error"
- Check GMAIL_PASSWORD is correct (16 characters with spaces)
- Verify 2FA is enabled on Gmail
- Try generating new App Password

### "Failed to initialize Google Sheets" or "GOOGLE_SERVICE_ACCOUNT_PATH not set"
- Make sure `backend/service-account.json` file exists
- Verify path in `.env` is correct: `GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json`
- Check the service account has "Editor" access to your Google Sheet
- Verify the JSON file is valid (try opening it in VS Code)

### "Backend connection refused"
- Make sure backend is running: `npm start` in backend folder
- Check PORT 3001 is not blocked
- Verify FRONTEND_URL in .env

### "Cannot add to Google Sheet" or "Permission denied"
- Verify service account email has "Editor" role in Google Sheet share settings
- Check sheet names match exactly: "Audit Requests" and "Quote Requests"
- Verify sheet headers are in Row 1
- Make sure service-account.json file is valid and accessible

### Form shows error but backend is running
- Check browser console (F12 → Console) for detailed error
- Check backend terminal for error logs
- Verify service-account.json is in the backend folder

---

## 📊 What Happens After Submission

### Audit Form Submission:
1. ✅ Data added to "Audit Requests" sheet
2. ✅ Confirmation email sent to user's email
3. ✅ Admin notification sent to NOTIFICATION_EMAIL
4. ✅ Success message shown on website

### Quote Form Submission:
1. ✅ Data added to "Quote Requests" sheet
2. ✅ Admin notification sent to NOTIFICATION_EMAIL
3. ✅ Success message shown on website

---

## 🔒 Security Notes

- Never commit `.env` file (already in .gitignore)
- Don't share your API keys publicly
- Gmail App Password is specific to this app only
- Consider rotating credentials periodically

---

## 📞 Support

For issues:
1. Check error message in browser console (F12)
2. Check backend console for detailed logs
3. Verify all environment variables are set
4. Check Google Sheet exists and is not protected

---

## 🎯 Next Steps

After testing locally:
- Deploy backend to Vercel, Heroku, or Railway
- Update FRONTEND_URL in backend .env
- Update frontend BACKEND_URL to production URL
- Deploy frontend to Vercel or similar

