export default function handler(req, res) {
  res.json({
    name: process.env.SCHOOL_NAME || 'DAV School',
    phone: process.env.SCHOOL_PHONE || '+91 7488770476',
    email: process.env.SCHOOL_EMAIL || 'info@davschool.edu.in',
    address: process.env.SCHOOL_ADDRESS || 'India'
  });
}

