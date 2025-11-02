# 🔄 Migration Guide: React + Express → Next.js

This document explains the migration from React + Express to Next.js architecture.

## 📊 Architecture Changes

### Before (React + Express)
```
project/
├── client/              # React frontend (port 3000)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/              # Express backend (port 5000)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── package.json
```

### After (Next.js)
```
project/
├── pages/               # Pages & API routes (single app)
│   ├── api/            # Backend API routes
│   ├── admin/
│   ├── staff/
│   └── index.js
├── components/          # React components
├── models/              # MongoDB models
├── lib/                 # Utilities
├── context/             # React Context
├── styles/              # CSS
└── package.json
```

## 🔑 Key Changes

### 1. Routing

**Before (React Router):**
```javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
</Routes>
```

**After (Next.js File-based Routing):**
```
pages/
├── index.js              → /
├── login.js              → /login
└── admin/
    └── dashboard.js      → /admin/dashboard
```

### 2. Navigation

**Before:**
```javascript
import { Link, useNavigate } from 'react-router-dom';

<Link to="/about">About</Link>
const navigate = useNavigate();
navigate('/dashboard');
```

**After:**
```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

<Link href="/about"><a>About</a></Link>
const router = useRouter();
router.push('/dashboard');
```

### 3. Backend API Routes

**Before (Express):**
```javascript
// server/routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  // Login logic
});

module.exports = router;

// server/server.js
app.use('/api/auth', authRoutes);
```

**After (Next.js API Routes):**
```javascript
// pages/api/auth/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  // Login logic
}
```

### 4. Database Connection

**Before (Express):**
```javascript
// server/server.js
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected'))
  .catch(err => console.error(err));
```

**After (Next.js with cached connection):**
```javascript
// lib/mongodb.js
let cached = global.mongoose;

async function connectDB() {
  if (cached.conn) return cached.conn;
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
```

### 5. Module System

**Before (CommonJS):**
```javascript
const User = require('../models/User');
const express = require('express');
module.exports = router;
```

**After (ES Modules):**
```javascript
import User from '../models/User';
import express from 'express';
export default handler;
```

### 6. Authentication

**Before (Express Middleware):**
```javascript
// middleware/auth.js
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
};

// Usage
router.get('/me', auth, controller.getMe);
```

**After (Next.js HOF):**
```javascript
// lib/auth.js
export function requireAuth(handler) {
  return async (req, res) => {
    const user = await authenticateUser(req);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    return handler(req, res);
  };
}

// Usage
export default requireAuth(async function handler(req, res) {
  // Handler logic
});
```

### 7. Environment Variables

**Before:**
```javascript
// Backend
process.env.JWT_SECRET

// Frontend (with CRA)
process.env.REACT_APP_API_URL
```

**After:**
```javascript
// Server-side
process.env.JWT_SECRET

// Client-side (must be prefixed)
process.env.NEXT_PUBLIC_API_URL
```

### 8. Static Assets

**Before:**
```
client/public/logo.png → /logo.png
```

**After:**
```
public/logo.png → /logo.png
```

### 9. Global Styles

**Before:**
```javascript
// client/src/index.js
import './index.css';
```

**After:**
```javascript
// pages/_app.js
import '../styles/globals.css';
```

## 📝 Models Migration

Models remain mostly the same, but export syntax changes:

**Before:**
```javascript
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({...});
module.exports = mongoose.model('User', userSchema);
```

**After:**
```javascript
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({...});
export default mongoose.models.User || mongoose.model('User', userSchema);
```

**Note:** The `mongoose.models.User ||` prevents model recompilation in development.

## 🎨 Components Migration

Components mostly stay the same, but with updated imports:

**Before:**
```javascript
import { Link } from 'react-router-dom';

export default function Nav() {
  return <Link to="/about">About</Link>;
}
```

**After:**
```javascript
import Link from 'next/link';

export default function Nav() {
  return <Link href="/about"><a>About</a></Link>;
}
```

## 🔐 Protected Routes

**Before:**
```javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  if (!user) return <Navigate to="/login" />;
  return children;
}
```

**After:**
```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  if (!user) return null;
  return children;
}
```

## 📦 Dependencies

### Removed
- `express` (replaced by Next.js API routes)
- `cors` (handled by Next.js)
- `react-router-dom` (replaced by Next.js routing)
- `concurrently` (no longer need to run separate servers)
- `nodemon` (Next.js has hot reload built-in)
- `helmet`, `morgan`, `compression` (Next.js handles these)

### Added
- `next` (framework)

### Kept
- All React dependencies
- MongoDB and Mongoose
- JWT and bcrypt
- Cloudinary and Razorpay
- React Icons
- React Hot Toast
- Tailwind CSS

## 🚀 Performance Benefits

1. **Single Server:** No more CORS issues
2. **API Routes:** Built-in serverless functions
3. **Automatic Code Splitting:** Faster page loads
4. **Static Generation:** Better SEO
5. **Image Optimization:** Built-in Next/Image
6. **Fast Refresh:** Better DX

## ⚡ Running the App

**Before:**
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend  
cd client && npm start
```

**After:**
```bash
# Single command
npm run dev
```

## 🎯 API Endpoint Examples

### Login Endpoint

**Before (Express):**
```javascript
// server/controllers/authController.js
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Logic...
    res.json({ success: true, token, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// server/routes/auth.js
router.post('/login', authController.login);
```

**After (Next.js):**
```javascript
// pages/api/auth/login.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  
  try {
    const { email, password } = req.body;
    // Logic...
    res.json({ success: true, token, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Next.js Routing](https://nextjs.org/docs/routing/introduction)
- [Migrating from CRA](https://nextjs.org/docs/migrating/from-create-react-app)

## ✅ Migration Checklist

- [x] Create Next.js project structure
- [x] Convert all Express routes to Next.js API routes
- [x] Update all React Router Links to Next.js Links
- [x] Convert models to ES6 modules
- [x] Update database connection with caching
- [x] Migrate authentication system
- [x] Convert all pages to Next.js pages
- [x] Update protected route logic
- [x] Configure Tailwind CSS
- [x] Update environment variables
- [x] Test all features
- [x] Update documentation
- [x] Create deployment guide

---

Migration completed successfully! 🎉

