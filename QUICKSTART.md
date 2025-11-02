# ⚡ Quick Start Guide - Next.js School Management System

Get your school management system up and running in 5 minutes!

## 🚀 Installation (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Environment
Create `.env.local` file in root directory:
```bash
MONGODB_URI=mongodb://localhost:27017/dav_school_db
JWT_SECRET=your_secret_key_minimum_32_characters_long
SCHOOL_NAME=DAV School
SCHOOL_PHONE=+91 7488770476
SCHOOL_EMAIL=info@davschool.edu.in
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🔐 Login

Use these credentials to test:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@davschool.edu.in | admin123 |
| **Staff** | teacher@davschool.edu.in | teacher123 |
| **Parent** | parent@davschool.edu.in | parent123 |
| **Student** | student@davschool.edu.in | student123 |

## 📊 Optional: Seed Database

If you want sample data:
```bash
npm run seed
```

## 🌐 Access Portals

- **Home**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Admin Dashboard**: http://localhost:3000/admin/dashboard
- **Staff Dashboard**: http://localhost:3000/staff/dashboard
- **Parent Dashboard**: http://localhost:3000/parent/dashboard
- **Student Dashboard**: http://localhost:3000/student/dashboard

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run seed     # Seed database with sample data
npm run lint     # Run ESLint
```

## 📱 Features to Test

### Admin Portal
- ✅ Dashboard with stats
- ✅ User management
- ✅ Reports and analytics

### Staff Portal
- ✅ Mark attendance
- ✅ Add grades
- ✅ Upload study materials
- ✅ View schedule

### Parent Portal
- ✅ View child's attendance
- ✅ Check grades
- ✅ Pay fees (Razorpay demo)
- ✅ Contact teachers

### Student Portal
- ✅ View attendance
- ✅ Check grades
- ✅ Access study materials
- ✅ View assignments

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### MongoDB connection error
1. Make sure MongoDB is running
2. Check MONGODB_URI in `.env.local`
3. For MongoDB Atlas, check network access settings

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

1. Read [README.md](./README.md) for detailed documentation
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment
3. Review [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) to understand the architecture

## 💡 Tips

- Use Chrome DevTools for debugging
- Check browser console for errors
- API routes are in `pages/api/`
- Components are in `components/`
- Models are in `models/`

## 🎯 Project Structure

```
School/
├── pages/           # Pages & API routes
├── components/      # React components
├── models/          # MongoDB models
├── lib/             # Utilities
├── context/         # Auth context
├── styles/          # CSS
└── public/          # Static files
```

## 📞 Need Help?

- Email: info@davschool.edu.in
- Phone: +91 7488770476

---

Happy coding! 🎉

