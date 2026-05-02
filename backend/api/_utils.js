function getAllowedOrigin(requestOrigin) {
  const defaultAllowedOrigins = [
    'http://localhost:5173',
    'https://evrola.vercel.app',
  ];
  const raw = process.env.FRONTEND_URLS || '';
  const allowedOrigins = raw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  const finalAllowedOrigins = allowedOrigins.length > 0 ? allowedOrigins : defaultAllowedOrigins;

  if (!requestOrigin) {
    return '*';
  }

  if (finalAllowedOrigins.includes(requestOrigin)) {
    return requestOrigin;
  }

  return 'null';
}

export function setCorsHeaders(res, requestOrigin) {
  res.setHeader('Access-Control-Allow-Origin', getAllowedOrigin(requestOrigin));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  res.setHeader('Access-Control-Max-Age', '86400');
}

export function handleCors(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res, req.headers.origin);
    res.status(200).end();
    return true;
  }
  setCorsHeaders(res, req.headers.origin);
  return false;
}
