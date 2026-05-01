# ✅ Complete Setup Checklist

## 📋 Phase 1: Prepare Credentials (20 minutes)

### Gmail Setup
- [ ] Go to https://myaccount.google.com
- [ ] Click **Security** (left menu)
- [ ] Check **2-Step Verification** is enabled
  - [ ] If not, enable it and complete verification
- [ ] Go back to Security
- [ ] Find **App passwords** (appears after 2FA)
- [ ] Select **Mail** and your **Device**
- [ ] Copy the **16-character password** (with spaces)
- [ ] Save it somewhere safe temporarily

### Google Service Account Setup (Replace API Key)

**Step 1: Create GCP Project**
- [ ] Go to https://console.cloud.google.com/
- [ ] Click **Select a project** (top left)
- [ ] Click **NEW PROJECT**
- [ ] Name: `Evrola Forms`
- [ ] Click **CREATE**
- [ ] Wait for project to be created (30 seconds)

**Step 2: Enable Google Sheets API**
- [ ] Go to **APIs & Services** → **Library**
- [ ] Search for **"Google Sheets API"**
- [ ] Click result and press **ENABLE**
- [ ] Wait for it to enable

**Step 3: Create Service Account**
- [ ] Go to **APIs & Services** → **Credentials**
- [ ] Click **+ Create Credentials** → **Service Account**
- [ ] Service account name: `evrola-forms`
- [ ] Description: `Backend for form submissions`
- [ ] Click **CREATE AND CONTINUE**
- [ ] Click **CONTINUE** on permissions page
- [ ] Click **DONE**

**Step 4: Download Service Account JSON**
- [ ] On Credentials page, find your service account in list
- [ ] Click on it to open details
- [ ] Go to **KEYS** tab
- [ ] Click **ADD KEY** → **Create new key**
- [ ] Select **JSON** format
- [ ] Click **CREATE**
- [ ] File will download automatically
- [ ] Copy file to `backend/` folder
- [ ] Rename it to: `service-account.json`
- [ ] Verify file exists at: `backend/service-account.json`

**Step 5: Grant Service Account Access to Sheet**
- [ ] Open the downloaded JSON file in text editor (to find email)
- [ ] Find the `"client_email"` field and copy it
- [ ] Open your Google Sheet: https://docs.google.com/spreadsheets/d/1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s/
- [ ] Click **Share** (top right)
- [ ] Paste service account email in search
- [ ] Select **Editor** role
- [ ] Uncheck "Notify people"
- [ ] Click **Share**

### Google Sheet Setup
- [ ] Open your sheet from Step 5 above
- [ ] Right-click on "Sheet1" tab → **Rename**
- [ ] Name it **`Audit Requests`** (exactly)
- [ ] Right-click blank area → **Insert sheet**
- [ ] Name it **`Quote Requests`** (exactly)

**In "Audit Requests" sheet:**
- [ ] Click cell **A1** and type `Timestamp`
- [ ] Press Tab, type `Name` in B1
- [ ] Press Tab, type `Email` in C1
- [ ] Press Tab, type `Website` in D1
- [ ] Press Tab, type `Location` in E1
- [ ] Press Tab, type `Goal` in F1

**In "Quote Requests" sheet:**
- [ ] Click cell **A1** and type `Timestamp`
- [ ] Press Tab, type `Name` in B1
- [ ] Press Tab, type `Phone` in C1
- [ ] Press Tab, type `Service` in D1
- [ ] Press Tab, type `Best Time to Call` in E1

---

## 🔧 Phase 2: Configure Backend (10 minutes)

### Verify Service Account File
- [ ] Check `backend/service-account.json` exists
- [ ] Open it in VS Code to verify it's valid JSON (should have: type, project_id, private_key, client_email)
- [ ] **IMPORTANT:** Do NOT commit this file to Git (it's in .gitignore)

### Update Environment File
- [ ] Open `backend/.env` in VS Code
- [ ] Find line with `GMAIL_PASSWORD=`
- [ ] Replace empty value with your **16-character password** (from Phase 1)
  - Example: `GMAIL_PASSWORD=xxxx xxxx xxxx xxxx`
- [ ] Find line with `GOOGLE_SERVICE_ACCOUNT_PATH=`
- [ ] Verify it says: `GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json`
- [ ] Save file (Ctrl+S)
- [ ] **IMPORTANT:** Do NOT commit this file (it's in .gitignore)

### Install Dependencies
- [ ] Open terminal
- [ ] Navigate to backend folder: `cd backend`
- [ ] Run: `npm install`
- [ ] Wait for it to complete (2-3 minutes)
- [ ] Verify no errors at the end

---

## 🚀 Phase 3: Test Backend Locally (5 minutes)

### Start Backend
- [ ] In VS Code terminal, in backend folder
- [ ] Run: `npm start`
- [ ] You should see:
  ```
  🚀 Backend server running on http://localhost:3001
  ✅ Email configured successfully
  📊 Google Sheet ID: 1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
  📧 Notifications to: zamanasjad4@gmail.com
  ```
- [ ] If you see email error, check your Gmail App Password is correct

### Start Frontend (New Terminal)
- [ ] Open NEW terminal tab
- [ ] Navigate to root folder
- [ ] Run: `npm run dev`
- [ ] You should see:
  ```
  VITE v7.x.x  ready in xxx ms
  ➜  Local:   http://localhost:5173/
  ```

---

## 🧪 Phase 4: Manual Testing (10 minutes)

### Test Health Check
- [ ] Open browser: http://localhost:3001/api/health
- [ ] Should show: `{"status":"Backend is running ✅"}`
- [ ] If not, go back and check backend is running

### Test Audit Form
- [ ] Go to http://localhost:5173 in your browser
- [ ] Scroll down to **"Free audit"** section
- [ ] Fill in the form:
  - [ ] Name: Enter any name (e.g., "Test User")
  - [ ] Email: Enter your email (e.g., zamanasjad4@gmail.com)
  - [ ] Website: Enter a URL (e.g., https://test.com)
  - [ ] Location: Enter a location (e.g., Phoenix, AZ)
  - [ ] Goal: Enter anything (e.g., More calls)
- [ ] Click **"Request My Free Audit"** button
- [ ] You should see green message: ✅ Audit request received!
- [ ] Check your email inbox for 2 emails:
  - [ ] **Confirmation email** from Gmail user
  - [ ] **Admin notification** from Gmail user
- [ ] Open your Google Sheet
- [ ] Go to **"Audit Requests"** tab
- [ ] Verify new row with your data (minus header row)

### Test Quote Form
- [ ] On same page, scroll to bottom right
- [ ] Find floating **"Quick Quote Request"** widget
- [ ] Fill in the form:
  - [ ] Name: Enter any name
  - [ ] Phone: Enter a phone number (e.g., +1-555-123-4567)
  - [ ] Service: Select option from dropdown
  - [ ] Best time to call: Enter time (e.g., Morning)
- [ ] Click **"Get My Free Quote"** button
- [ ] You should see green message: ✅ Quote request received!
- [ ] Check your email for admin notification
- [ ] Open Google Sheet
- [ ] Go to **"Quote Requests"** tab
- [ ] Verify new row with your data

### Verify Everything Works
- [ ] ✅ No errors in browser console (F12)
- [ ] ✅ No errors in backend terminal
- [ ] ✅ Both forms show success messages
- [ ] ✅ Emails received in inbox
- [ ] ✅ Data in both Google Sheets

---

## 🆘 Phase 5: Troubleshooting (If Needed)

### Backend Won't Start
- [ ] Check: Is Node.js installed? `node --version`
- [ ] Check: Did you run `npm install` in backend folder?
- [ ] Check: Is port 3001 already in use?
- [ ] Check: Does `backend/service-account.json` exist?
- [ ] Try: Close terminal and restart

### "Failed to initialize Google Sheets" Error
- [ ] Verify `backend/service-account.json` file exists
- [ ] Verify path in `.env` is: `GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json`
- [ ] Open the JSON file - should have valid JSON structure
- [ ] Check service account has Editor access to your Google Sheet
- [ ] Sometimes GCP needs 1-2 minutes to sync permissions

### Email Not Sending
- [ ] Check: Gmail App Password is correct (16 chars with spaces)
- [ ] Check: 2-Factor Authentication is enabled
- [ ] Try: Generate new App Password and update .env
- [ ] Check: Backend shows "✅ Email configured successfully"

### No Data in Google Sheet or "Permission denied"
- [ ] Check: Service account email has Editor role in sheet (from Phase 1, Step 5)
- [ ] Check: Sheet names are EXACTLY "Audit Requests" and "Quote Requests"
- [ ] Check: Headers are in Row 1 (A1, B1, C1, etc.)
- [ ] Check: Backend console for errors (red text)
- [ ] Try: Share sheet again with service account email

### Form Shows Error on Website
- [ ] Press F12 to open Developer Tools
- [ ] Go to **Console** tab
- [ ] Look for red error messages
- [ ] Check if backend is running (http://localhost:3001/api/health)
- [ ] Check backend terminal for detailed error logs

---

## ✨ Phase 6: Final Verification (5 minutes)

### Quick Checklist
- [ ] Backend running without errors
- [ ] Frontend running on localhost:5173
- [ ] Both forms visible on website
- [ ] Test submissions successful
- [ ] Emails received (user confirmation + admin)
- [ ] Data appears in Google Sheet
- [ ] Timestamps are correct
- [ ] No errors in browser console

### Advanced Verification
- [ ] [ ] Test form validation (try submitting empty field)
- [ ] Test error handling (disconnect internet, resubmit)
- [ ] Test mobile (open on phone if available)
- [ ] Check email formatting is clean
- [ ] Verify Google Sheet is organized

---

## 🎯 Success Criteria

Your setup is complete when:
1. ✅ Backend runs without errors
2. ✅ Both forms are visible on website
3. ✅ Forms submit without errors
4. ✅ Success messages appear (green)
5. ✅ Emails received within 1 minute
6. ✅ Data in Google Sheet with correct format
7. ✅ No red errors in console
8. ✅ You can refresh and submit again

---

## 🚀 Next Steps After Success

- [ ] Read [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for going live
- [ ] Test on production once deployed
- [ ] Monitor first few submissions
- [ ] Adjust email templates if needed
- [ ] Set up automatic backups of Google Sheet

---

## 📞 If Stuck

1. **Check error message** - What exactly does it say?
2. **Check logs** - Terminal for backend, Console (F12) for frontend
3. **Check configuration** - Is everything in .env correct?
4. **Check internet** - Is connection stable?
5. **Try restart** - Stop and start backend again

**Common error messages:**
- "Cannot GET /api/health" → Backend not running
- "Error: connect ECONNREFUSED" → Backend port wrong or not running
- "Invalid credentials" → Check Gmail App Password
- "401 Unauthorized" → Check Google API Key

---

## 🎉 Congratulations!

Once all checkmarks are complete, your form system is ready to use!

**Your forms now automatically:**
- ✅ Store data in Google Sheets
- ✅ Send confirmation emails
- ✅ Send admin notifications
- ✅ Validate input
- ✅ Handle errors gracefully

**Time invested:** ~45 minutes  
**Errors eliminated:** 100% ✅

Good luck! 🚀
