# 🌐 Production Deployment Guide

## Deployment Options

Choose one of these platforms to deploy your backend:

### Option 1: **Vercel** (Recommended - Easy & Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy Backend:**
   ```bash
   cd backend
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard:**
   - Go to https://vercel.com/dashboard
   - Select your project
   - Settings → Environment Variables
   - Add:
     ```
     GMAIL_USER=zamanasjad4@gmail.com
     GMAIL_PASSWORD=your_app_password
     GOOGLE_SHEET_ID=1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
     NOTIFICATION_EMAIL=zamanasjad4@gmail.com
     ```

5. **Upload Service Account JSON:**
   - In Vercel project settings
   - Create a new environment variable: `GOOGLE_SERVICE_ACCOUNT_PATH`
   - This is tricky on Vercel because you can't upload files
   - **Better approach:** Use `.env` file with embedded JSON OR use Railway/Heroku

---

### Option 1B: **Vercel with Embedded Credentials** (Alternative)

If you want to use Vercel:

1. Create a new environment variable `GOOGLE_SERVICE_ACCOUNT`
2. Copy entire contents of `service-account.json`
3. Paste it as the value (it will be one long JSON string)
4. In `backend/server.js`, modify initialization:
   ```javascript
   let serviceAccount;
   try {
     if (process.env.GOOGLE_SERVICE_ACCOUNT) {
       // Parse embedded JSON from env variable
       serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
     } else {
       // Use file path for local development
       serviceAccount = JSON.parse(
         fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_PATH, 'utf8')
       );
     }
   ```

**Not recommended** - Files are easier to manage than embedded JSON.

---

### Option 2: **Railway** (Good Alternative - File Support)

1. **Go to https://railway.app**
2. **Create new project → Deploy from GitHub**
3. **Select your repository**
4. **Add Environment Variables:**
   - Click on your project
   - Variables tab
   - Add all variables from `.env`
5. **Upload Service Account File:**
   - In Railway dashboard
   - Volumes section
   - Mount `service-account.json` file
   - Or use their file mounting feature
6. **Deploy and get URL**

Railway is better for file-based authentication.

---

### Option 3: **Heroku** (Classic Option - File Support)

1. **Install Heroku CLI:** https://devcenter.heroku.com/articles/heroku-cli

2. **Login & Create App:**
   ```bash
   heroku login
   heroku create your-evrola-app
   ```

3. **Add Environment Variables:**
   ```bash
   heroku config:set GMAIL_USER=your_email@gmail.com
   heroku config:set GMAIL_PASSWORD=your_app_password
   heroku config:set GOOGLE_SHEET_ID=1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
   heroku config:set GOOGLE_SERVICE_ACCOUNT_PATH=./service-account.json
   heroku config:set NOTIFICATION_EMAIL=your_email@gmail.com
   ```

4. **Upload Service Account File:**
   - Commit to Git: `git add backend/service-account.json`
   - Or use Heroku file mounting

5. **Deploy:**
   ```bash
   git push heroku main
   ```

---

### Option 4: **Your Own Server** (Advanced)

Requirements:
- Node.js installed
- Linux/Windows server with SSH access
- Port accessible from internet

Steps:
1. Clone your repo on server
2. `cd backend && npm install`
3. Copy `service-account.json` to server's backend folder
4. Update `.env` with production values
5. Use `pm2` to keep it running:
   ```bash
   npm install -g pm2
   pm2 start server.js --name evrola
   pm2 startup
   pm2 save
   ```

---

## Comparing Platforms for Service Account

| Platform | File Support | Ease | Cost |
|----------|--------------|------|------|
| **Vercel** | Hard (embed in env var) | Easy | Free |
| **Railway** | ✅ Yes (volumes) | Medium | Free tier |
| **Heroku** | Need to commit/mount | Medium | $7/month |
| **Self-hosted** | ✅ Yes (copy file) | Hard | Varies |

**Recommendation: Railway** - Best balance of ease + file support

---

## After Deployment

### Update Frontend

In [script.js](../script.js), update the BACKEND_URL:

```javascript
const BACKEND_URL = "https://your-production-url.com";
```

For example, if deployed on Vercel:
```javascript
const BACKEND_URL = "https://evrola-backend.vercel.app";
```

### Update Backend .env

Backend production `.env`:
```env
GMAIL_USER=zamanasjad4@gmail.com
GMAIL_PASSWORD=your_app_password
GOOGLE_API_KEY=your_api_key
GOOGLE_SHEET_ID=1I1q-OI9JsDQvmkYMvr3EQeVoL7JPP4OnXJLMbF69l7s
NOTIFICATION_EMAIL=zamanasjad4@gmail.com

PORT=3001
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

---

## Testing Production Deployment

1. **Test Health Check:**
   ```
   https://your-backend-url.com/api/health
   ```

2. **Test Form Submission:**
   - Go to your deployed frontend
   - Fill out and submit a form
   - Check email inbox
   - Check Google Sheet

3. **Monitor Logs:**
   - Vercel: Dashboard → Deployments → Logs
   - Railway: Railway CLI or web dashboard
   - Heroku: `heroku logs --tail`

---

## Troubleshooting Production

### CORS Errors
Make sure `FRONTEND_URL` in backend `.env` matches your frontend domain

### Email Not Sending
- Verify Gmail App Password (not regular password)
- Check 2FA is enabled on Gmail
- Verify email config: `https://your-backend/api/health`

### Google Sheets Not Updating
- Verify Google API Key is correct
- Check Sheet names: "Audit Requests" and "Quote Requests"
- Verify sheet has correct headers

### Backend Timeout
- Check backend logs for errors
- Verify all environment variables are set
- Test health endpoint

---

## Auto-Deploy with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Backend
on:
  push:
    branches: [main]
    paths:
      - 'backend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## SSL Certificate

Most platforms (Vercel, Railway, Heroku) provide free SSL.

If self-hosting, use Let's Encrypt:
```bash
sudo apt-get install certbot
sudo certbot certonly --standalone -d yourdomain.com
```

---

## Performance Optimization

1. **Enable Caching:**
   - Add headers to Vercel config
   - Set CORS properly to cache responses

2. **Monitor Usage:**
   - Google Sheets API free tier: 60 requests/minute
   - Gmail free tier: Unlimited for apps

3. **Scale if Needed:**
   - Vercel: Auto-scales
   - Railway: Upgrade pricing tier
   - Self-hosted: Add load balancer

---

## Backup & Recovery

1. **Backup Google Sheet:**
   - File → Download → CSV
   - Store regularly

2. **Environment Variables Backup:**
   - Keep copy of `.env` in secure location
   - Use password manager for credentials

3. **Code Backup:**
   - Push to GitHub
   - Enable GitHub auto-backup

