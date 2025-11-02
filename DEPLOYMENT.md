# 🚀 Deployment Guide - Next.js School Management System

This guide will help you deploy your Next.js School Management System to production.

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas account created
- [ ] Database connection string obtained
- [ ] Cloudinary account setup (for image uploads)
- [ ] Razorpay account setup (for payments)
- [ ] All environment variables ready
- [ ] Code pushed to GitHub

## 🔧 Environment Variables Setup

Create the following environment variables in your deployment platform:

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dav_school_db

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_characters
JWT_EXPIRE=30d

# School Info
SCHOOL_NAME=DAV School
SCHOOL_PHONE=+91 7488770476
SCHOOL_EMAIL=info@davschool.edu.in
SCHOOL_ADDRESS=India

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id

# App URL
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## ☁️ Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository

```bash
git init
git add .
git commit -m "Initial commit - Next.js School Management System"
git branch -M main
git remote add origin https://github.com/yourusername/school-management.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. Add all environment variables
7. Click "Deploy"

### Step 3: Post-Deployment

1. Visit your deployed URL
2. Run database seed (if API endpoint created)
3. Test all login credentials
4. Change default passwords

## 🌐 Deploy to Netlify

### Step 1: Build Command

Update your `package.json`:
```json
{
  "scripts": {
    "build": "next build",
    "export": "next export"
  }
}
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy

## 🐳 Deploy with Docker

### Create Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Deploy

```bash
docker build -t school-management .
docker run -p 3000:3000 school-management
```

## 📊 Database Setup (MongoDB Atlas)

### Step 1: Create Cluster

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up / Log in
3. Create new project: "School Management"
4. Build a Database → Shared (Free)
5. Choose cloud provider and region
6. Create cluster

### Step 2: Configure Access

1. **Database Access:**
   - Create database user
   - Set username and password
   - Database User Privileges: "Read and write to any database"

2. **Network Access:**
   - Add IP Address
   - For development: "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IP addresses

### Step 3: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy connection string
4. Replace `<password>` with your database password
5. Replace `myFirstDatabase` with `dav_school_db`

Example:
```
mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/dav_school_db?retryWrites=true&w=majority
```

## 🗄️ Seed Production Database

### Method 1: Using API Endpoint

Create `/pages/api/seed.js` (temporary):
```javascript
import connectDB from '../../lib/mongodb';
// Import your seed logic

export default async function handler(req, res) {
  // Add authentication check
  if (req.headers.authorization !== `Bearer ${process.env.SEED_SECRET}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  await connectDB();
  // Run seed logic
  
  res.json({ message: 'Database seeded' });
}
```

Then visit: `https://your-domain.com/api/seed?secret=your_secret`

**⚠️ Delete this endpoint after seeding!**

### Method 2: Using MongoDB Compass

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect using your connection string
3. Create database: `dav_school_db`
4. Manually create initial documents

## 🔒 Security Checklist

- [ ] Strong JWT_SECRET (min 32 characters)
- [ ] MongoDB access restricted to specific IPs
- [ ] Change all default passwords
- [ ] Enable HTTPS (Vercel does this automatically)
- [ ] Set secure environment variables
- [ ] Rate limiting enabled
- [ ] Input validation on all forms
- [ ] CORS properly configured

## 📈 Post-Deployment Tasks

1. **Test All Features:**
   - [ ] Login with all roles
   - [ ] Create/Read/Update/Delete operations
   - [ ] File uploads
   - [ ] Payment processing
   - [ ] Email notifications

2. **Monitor:**
   - Set up error tracking (Sentry)
   - Monitor API performance
   - Check database usage

3. **Backup:**
   - Set up automated database backups
   - MongoDB Atlas has automatic backups

## 🐛 Troubleshooting

### Cannot connect to database
- Check connection string
- Verify network access settings in MongoDB Atlas
- Ensure environment variable is set correctly

### Build fails
- Check for missing dependencies
- Verify Node.js version compatibility
- Check build logs for specific errors

### API routes not working
- Ensure all environment variables are set
- Check API route syntax
- Verify authentication middleware

## 📞 Support

For deployment issues:
- Email: info@davschool.edu.in
- Phone: +91 7488770476

---

🎉 Congratulations! Your school management system should now be live!

