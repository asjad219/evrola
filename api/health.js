import { handleCors } from './_utils.js';

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method === 'GET') {
    res.json({ status: 'Backend is running ✅' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
