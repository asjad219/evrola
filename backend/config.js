import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = [
  'GMAIL_USER',
  'GMAIL_PASSWORD',
  'GOOGLE_SHEET_ID',
  'GOOGLE_SERVICE_ACCOUNT_PATH',
  'NOTIFICATION_EMAIL',
];

const optionalEnvVars = [
  'PORT',
  'NODE_ENV',
  'FRONTEND_URL',
];

// Validate required environment variables
const missing = requiredEnvVars.filter(
  (envVar) => !process.env[envVar]
);

if (missing.length > 0) {
  console.error('❌ Missing required environment variables:');
  missing.forEach((envVar) => {
    console.error(`   - ${envVar}`);
  });
  console.error('\nPlease update your .env file with the required values.');
  console.error('See SETUP_GUIDE.md for instructions.\n');
  process.exit(1);
}

export const config = {
  // Required
  gmailUser: process.env.GMAIL_USER,
  gmailPassword: process.env.GMAIL_PASSWORD,
  googleSheetId: process.env.GOOGLE_SHEET_ID,
  googleServiceAccountPath: process.env.GOOGLE_SERVICE_ACCOUNT_PATH,
  notificationEmail: process.env.NOTIFICATION_EMAIL,

  // Optional
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
};

export default config;
