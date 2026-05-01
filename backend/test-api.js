#!/usr/bin/env node

/**
 * Manual API Test Script
 * Use this to test backend endpoints without the frontend
 * 
 * Usage: node test-api.js
 */

const BASE_URL = 'http://localhost:3001';

async function testHealth() {
  console.log('\n📍 Testing Health Check...');
  try {
    const response = await fetch(`${BASE_URL}/api/health`);
    const data = await response.json();
    console.log('✅ Health Check:', data);
    return true;
  } catch (error) {
    console.error('❌ Health Check Failed:', error.message);
    return false;
  }
}

async function testAuditForm() {
  console.log('\n📍 Testing Audit Form Submission...');
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    website: 'https://example.com',
    location: 'Phoenix, AZ',
    goal: 'Increase sales leads',
  };

  try {
    const response = await fetch(`${BASE_URL}/api/submit-audit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Audit Form Submitted:', data);
      console.log('   Check your Google Sheet and email inbox!');
    } else {
      console.error('❌ Audit Form Error:', data.error);
    }
  } catch (error) {
    console.error('❌ Audit Form Request Failed:', error.message);
  }
}

async function testQuoteForm() {
  console.log('\n📍 Testing Quote Form Submission...');
  const testData = {
    name: 'Test Customer',
    phone: '+1-555-123-4567',
    service: 'HVAC redesign',
    time: 'Morning',
  };

  try {
    const response = await fetch(`${BASE_URL}/api/submit-quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Quote Form Submitted:', data);
      console.log('   Check your Google Sheet and email inbox!');
    } else {
      console.error('❌ Quote Form Error:', data.error);
    }
  } catch (error) {
    console.error('❌ Quote Form Request Failed:', error.message);
  }
}

async function runTests() {
  console.log('🧪 Evrola Backend API Tests');
  console.log('============================');

  const healthOk = await testHealth();

  if (!healthOk) {
    console.error('\n⚠️  Backend is not running!');
    console.error('Please start the backend with: npm start');
    process.exit(1);
  }

  await testAuditForm();
  await testQuoteForm();

  console.log('\n============================');
  console.log('✅ All tests completed!');
  console.log('\nCheck your email inbox and Google Sheet for the test submissions.');
}

runTests();
