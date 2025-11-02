# 🔧 FIX MongoDB Connection Error

## ❌ **The Problem:**
```
MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"
```

**Cause:** Missing or invalid `.env.local` file

---

## ✅ **SOLUTION - Create .env.local File:**

### **Step 1: Create the file**
In your project root (`E:\Project\School`), create a new file named:
```
.env.local
```

### **Step 2: Copy this content into the file:**

```bash
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dav_school_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long_please_change_this
JWT_EXPIRE=30d

# School Information
SCHOOL_NAME=School
SCHOOL_PHONE=+91 7488770476
SCHOOL_EMAIL=sstm476@gmail.com
SCHOOL_ADDRESS=India

# Cloudinary Configuration (Optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay Configuration (Optional)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Node Environment
NODE_ENV=development
```

### **Step 3: Save the file**

### **Step 4: Restart the server**
```bash
# Press Ctrl+C to stop
# Then restart:
npm run dev
```

---

## 💡 **If You Don't Have MongoDB Installed:**

### **Option 1: Install MongoDB Locally (Recommended for Development)**

**Windows:**
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will run automatically
4. Use connection string: `mongodb://localhost:27017/dav_school_db`

### **Option 2: Use MongoDB Atlas (Free Cloud Database)**

1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster (M0)
4. Get connection string
5. Update `.env.local`:
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dav_school_db
```

---

## 🚀 **Quick Fix (Try This First):**

### **Create .env.local file manually:**

1. **Right-click** in VS Code Explorer
2. Click **"New File"**
3. Name it: `.env.local`
4. **Paste** the content from Step 2 above
5. **Save** the file (Ctrl+S)
6. **Restart** server:
   ```bash
   # Stop server: Ctrl+C
   npm run dev
   ```

---

## ✅ **After Creating .env.local:**

The error will disappear and you'll see:
```
✓ Ready in X seconds
✅ MongoDB Connected Successfully
```

---

## 🎯 **Summary:**

**Issue:** Missing `.env.local` file  
**Solution:** Create `.env.local` with MongoDB URI  
**Location:** `E:\Project\School\.env.local`  
**Required:** `MONGODB_URI` variable  

---

**Create the file now and restart!** 🚀

