# ✅ Setup Checklist - Next.js School Management System

Use this checklist to ensure your system is properly set up.

## 📋 Pre-Installation

- [ ] Node.js v16+ installed
- [ ] npm or yarn installed
- [ ] MongoDB installed (or MongoDB Atlas account)
- [ ] Git installed (optional)
- [ ] Code editor (VS Code recommended)

## 🔧 Installation Steps

### 1. Dependencies
- [ ] Run `npm install`
- [ ] Wait for all packages to install
- [ ] Check for any error messages

### 2. Environment Variables
- [ ] Create `.env.local` file in root directory
- [ ] Add `MONGODB_URI`
- [ ] Add `JWT_SECRET` (min 32 characters)
- [ ] Add `SCHOOL_NAME`
- [ ] Add `SCHOOL_PHONE`
- [ ] Add `SCHOOL_EMAIL`
- [ ] Add Cloudinary credentials (if using file uploads)
- [ ] Add Razorpay credentials (if using payments)

Example `.env.local`:
```bash
MONGODB_URI=mongodb://localhost:27017/dav_school_db
JWT_SECRET=your_super_secret_key_at_least_32_chars
SCHOOL_NAME=DAV School
SCHOOL_PHONE=+91 7488770476
SCHOOL_EMAIL=info@davschool.edu.in
```

### 3. Database Setup
- [ ] MongoDB is running (if local)
- [ ] Can connect to MongoDB
- [ ] Run `npm run seed` to populate database
- [ ] Verify seed script completed successfully

### 4. Start Development Server
- [ ] Run `npm run dev`
- [ ] Server starts without errors
- [ ] Open http://localhost:3000
- [ ] See the home page

## 🧪 Testing

### Basic Functionality
- [ ] Home page loads
- [ ] Navigation works
- [ ] Login page accessible
- [ ] Footer displays correctly

### Authentication
- [ ] Can login as Admin (admin@davschool.edu.in / admin123)
- [ ] Can login as Staff (teacher@davschool.edu.in / teacher123)
- [ ] Can login as Parent (parent@davschool.edu.in / parent123)
- [ ] Can login as Student (student@davschool.edu.in / student123)
- [ ] After login, redirected to appropriate dashboard
- [ ] Logout works correctly

### Admin Dashboard
- [ ] Dashboard loads
- [ ] Stats display correctly
- [ ] Quick actions visible
- [ ] Recent activity shown
- [ ] Can navigate back to home

### Staff Dashboard
- [ ] Dashboard loads
- [ ] Stats display correctly
- [ ] Today's schedule shown
- [ ] Quick actions work

### Parent Dashboard
- [ ] Dashboard loads
- [ ] Children cards display
- [ ] Stats are visible
- [ ] Quick actions available

### Student Dashboard
- [ ] Dashboard loads
- [ ] Attendance stats shown
- [ ] Grades display
- [ ] Assignments listed

### Protected Routes
- [ ] Cannot access admin dashboard without login
- [ ] Cannot access staff dashboard without login
- [ ] Role-based access control works
- [ ] Redirects to login when not authenticated

### Public Pages
- [ ] About page loads
- [ ] Admission page loads
- [ ] Contact page loads
- [ ] Gallery page loads
- [ ] Privacy policy loads
- [ ] Terms of service loads
- [ ] Sitemap loads

## 🎨 Customization (Optional)

- [ ] Update school name in `.env.local`
- [ ] Change school contact info
- [ ] Update colors in `tailwind.config.js`
- [ ] Add school logo to `/public`
- [ ] Update navbar branding
- [ ] Customize footer content

## 📊 Database Verification

- [ ] Users collection has 4 users
- [ ] Student collection has data
- [ ] Staff collection has data
- [ ] Parent collection has data
- [ ] Class collection has data
- [ ] Subject collection has data

## 🔒 Security Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] JWT_SECRET is strong and unique
- [ ] Default passwords noted for changing
- [ ] MongoDB not exposed to public internet (if local)
- [ ] No sensitive data in code

## 🚀 Ready for Development

If all items above are checked, you're ready to:
- [ ] Start developing new features
- [ ] Customize the system
- [ ] Add more API routes
- [ ] Create additional pages

## 📦 Production Deployment (Later)

When ready to deploy:
- [ ] Read `DEPLOYMENT.md`
- [ ] Set up MongoDB Atlas
- [ ] Set up Cloudinary account
- [ ] Set up Razorpay account
- [ ] Create Vercel account
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Test production deployment
- [ ] Change default passwords

## 🐛 Troubleshooting

If something doesn't work:

### Check 1: Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check 2: Environment Variables
- Verify `.env.local` exists
- Check all required variables are set
- No typos in variable names

### Check 3: MongoDB
- Is MongoDB running?
- Can you connect to it?
- Check the connection string

### Check 4: Port
- Is port 3000 available?
- Kill any process using port 3000

### Check 5: Logs
- Check terminal for error messages
- Check browser console for errors
- Look for specific error details

## 📞 Getting Help

If you're stuck:
1. Check the error message carefully
2. Read `QUICKSTART.md`
3. Read `README.md`
4. Check `MIGRATION_GUIDE.md`
5. Contact: info@davschool.edu.in

## ✨ Success!

When all items are checked, your system is fully operational! 🎉

**Next Steps:**
1. Explore all features
2. Customize for your school
3. Add additional features
4. Deploy to production

---

**Happy coding!** 🚀

