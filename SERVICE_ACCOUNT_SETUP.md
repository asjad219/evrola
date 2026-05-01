# 🔐 Google Service Account Setup Guide

## What is a Service Account?

A Service Account is a special Google Cloud account that your backend uses to authenticate with Google Sheets. Unlike API keys, it's:
- ✅ More secure (contains all necessary credentials)
- ✅ Better for server-to-server communication
- ✅ Requires explicit permission sharing
- ✅ Easier to revoke access if needed

---

## Step-by-Step Setup

### Step 1: Create a Google Cloud Project

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Click **Select a project** dropdown (top left)
3. Click **NEW PROJECT**
4. Enter:
   ```
   Project name: Evrola Forms
   ```
5. Click **CREATE**
6. Wait for the project to be created (may take 30 seconds)

### Step 2: Enable Google Sheets API

1. In Cloud Console, go to **APIs & Services** → **Library**
2. Search for **"Google Sheets API"** in the search box
3. Click the **Google Sheets API** result
4. Click the **ENABLE** button
5. Wait for it to become enabled (progress bar may show briefly)

### Step 3: Create a Service Account

1. Still in Cloud Console, go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** button (blue button top area)
3. Select **Service Account** from the dropdown
4. Fill in the form:
   ```
   Service account name: evrola-forms
   Service account ID: (auto-fills, leave as is)
   Description: Backend for form submissions
   ```
5. Click **CREATE AND CONTINUE**
6. On the next screen, click **CONTINUE** (skip optional permission details)
7. Click **DONE** on the final screen

### Step 4: Download Service Account JSON Key

1. In Cloud Console, go back to **APIs & Services** → **Credentials**
2. Under "Service Accounts", find your newly created service account: **evrola-forms**
3. Click on it to open the details page
4. Go to the **KEYS** tab
5. Click **ADD KEY** → **Create new key**
6. Select **JSON** as the key type
7. Click **CREATE**
8. A JSON file will automatically download to your Downloads folder
   - Default name: `[project-id]-[random].json`

### Step 5: Move Service Account JSON to Backend Folder

1. **Copy** the downloaded JSON file
2. Navigate to your project: `files-mentioned-by-the-user-hvac/backend/`
3. **Paste** the file there
4. **Rename** it to: **`service-account.json`**
5. Verify it's now at: `backend/service-account.json`

**Important:** This file contains sensitive credentials. Never commit it to Git (it's in `.gitignore`).

### Step 6: Share Google Sheet with Service Account

1. Open the downloaded JSON file in a text editor (VS Code, Notepad, etc.)
2. Find the line with `"client_email":`
3. Copy the entire email address inside the quotes
   - Example: `service-account-evrola@my-project-12345.iam.gserviceaccount.com`
4. Open your **Google Sheet**: https://docs.google.com/spreadsheets/d/1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s/
5. Click **Share** button (top right)
6. Paste the service account email in the "Add people and groups" field
7. Select **Editor** role from dropdown
8. **Uncheck** "Notify people" checkbox
9. Click **Share**
10. You should see "Sharing settings updated"

---

## Verify Setup

### Check File Exists
```bash
# In terminal, navigate to backend folder:
cd backend
ls  # On Mac/Linux
# or
dir  # On Windows

# You should see: service-account.json
```

### Check JSON is Valid
1. Open `backend/service-account.json` in VS Code
2. It should contain valid JSON with these fields:
   - `type`: "service_account"
   - `project_id`: Your project name
   - `private_key_id`: A string
   - `private_key`: Large text block starting with "-----BEGIN PRIVATE KEY-----"
   - `client_email`: The email address you shared with
   - `client_id`: A number
   - Other fields...

### Check Sheet is Shared
1. Open your Google Sheet
2. Click **Share** button
3. Look for your service account email in the shared list
4. It should show as **Editor** role
5. If not visible, repeat Step 6 above

---

## Configure Backend

Edit `backend/.env`:
```env
# Gmail (from Part 1)
GMAIL_USER=zamanasjad4@gmail.com
GMAIL_PASSWORD=paste_your_app_password

# Google Sheets (Service Account)
GOOGLE_SHEET_ID=1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json

# Notifications
NOTIFICATION_EMAIL=zamanasjad4@gmail.com

# Server
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## Test Connection

### Method 1: Start Backend
```bash
cd backend
npm install
npm start
```

You should see:
```
✅ Google Sheets API initialized with Service Account
✅ Email configured successfully
🚀 Backend server running on http://localhost:3001
```

If you see errors, check:
1. Service account file exists at `backend/service-account.json`
2. File is valid JSON (can open in VS Code)
3. Sheet is shared with service account email
4. `GOOGLE_SERVICE_ACCOUNT_PATH` in .env is correct

### Method 2: Test API Directly
```bash
# In backend folder, after backend is running:
node test-api.js
```

Should show successful test submissions.

---

## Troubleshooting

### "GOOGLE_SERVICE_ACCOUNT_PATH not set"
- Check `.env` file has line: `GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json`
- Check spelling is exact (including path)

### "Cannot read properties of undefined (reading 'private_key')"
- Your JSON file is invalid or missing
- Check file exists at `backend/service-account.json`
- Try re-downloading it from Google Cloud

### "Permission denied" or "Cannot add to sheet"
- Service account not shared with sheet
- Go back to Step 6 and share the sheet again
- Make sure it's set to **Editor** role

### "404 Not Found" from Google Sheets API
- Check `GOOGLE_SHEET_ID` in `.env` is correct
- Verify sheet ID matches: `1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s`

### Waiting for permissions to sync
- Sometimes Google Cloud takes 1-2 minutes to fully sync permissions
- Wait a minute and try again
- Restart backend with `npm start`

---

## Security Best Practices

1. **Never commit** `service-account.json` to Git (it's in `.gitignore`)
2. **Never share** the JSON file publicly or via email
3. **Store safely** - Keep backup in secure location
4. **Rotate keys** - Regenerate annually or when left the project
5. **Limit scope** - Service account only has Sheets API access
6. **Revoke access** - Delete key in Google Cloud when no longer needed

---

## Revoking Access

If you ever need to disable this service account:

1. Go to **Google Cloud Console** → **APIs & Services** → **Credentials**
2. Find the service account under "Service Accounts"
3. Click **DELETE** to remove it completely
4. Or go to **KEYS** tab and delete individual keys

This immediately revokes access to all sheets.

---

## Additional Resources

- [Google Cloud Service Accounts Documentation](https://cloud.google.com/iam/docs/service-accounts)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Setting up Service Accounts Guide](https://cloud.google.com/docs/authentication/getting-started)

