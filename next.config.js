/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    SCHOOL_NAME: process.env.SCHOOL_NAME || 'School',
    SCHOOL_PHONE: process.env.SCHOOL_PHONE || '+91 7488770476',
    SCHOOL_EMAIL: process.env.SCHOOL_EMAIL || 'sstm476@gmail.com',
  },
}

module.exports = nextConfig

