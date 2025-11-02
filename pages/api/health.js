export default function handler(req, res) {
  res.json({
    status: 'success',
    message: 'DAV School Management System API is running',
    timestamp: new Date().toISOString()
  });
}

