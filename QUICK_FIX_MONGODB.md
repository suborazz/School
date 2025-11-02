# 🔧 QUICK FIX - MongoDB Connection Error

## ❌ **Error You're Getting:**
```
POST http://localhost:3000/api/auth/login 500 (Internal Server Error)
MongoParseError: Invalid scheme, expected connection string to start with "mongodb://"
```

---

## ✅ **SOLUTION (3 Steps - 2 Minutes):**

### **Step 1: Create .env.local File**

**Option A - Using VS Code (Recommended):**
1. In VS Code, **right-click** in the file explorer (left sidebar)
2. Click **"New File"**
3. Type exactly: `.env.local`
4. Press **Enter**

**Option B - Using PowerShell:**
```powershell
cd E:\Project\School
New-Item -Path ".env.local" -ItemType File
```

---

### **Step 2: Copy Content**

I've created a template file for you: `env.local.template`

**Copy this content into your `.env.local` file:**

```bash
MONGODB_URI=mongodb://localhost:27017/dav_school_db
JWT_SECRET=school_secret_key_change_this_in_production_min_32_chars
SCHOOL_NAME=School
SCHOOL_PHONE=+91 7488770476
SCHOOL_EMAIL=sstm476@gmail.com
SCHOOL_ADDRESS=India
NODE_ENV=development
```

**OR just rename the template file:**
```powershell
# In PowerShell:
cd E:\Project\School
Copy-Item env.local.template .env.local
```

---

### **Step 3: Restart Server**

```bash
# Press Ctrl+C in terminal to stop server
# Then restart:
npm run dev
```

---

## 🎯 **Expected Result:**

After restart, you should see:
```
✅ MongoDB Connected Successfully
✓ Ready in X seconds
```

**No more errors!** 🎉

---

## ⚠️ **If MongoDB Is Not Installed:**

You have 2 options:

### **Option 1: Install MongoDB Locally (Simple)**

**Windows:**
```powershell
# Download and install from:
# https://www.mongodb.com/try/download/community

# After install, MongoDB runs automatically
# Use: mongodb://localhost:27017/dav_school_db
```

### **Option 2: Use MongoDB Atlas (Cloud - Free)**

1. **Go to:** https://www.mongodb.com/cloud/atlas/register
2. **Sign up** for free
3. **Create** a free cluster (M0 - Free forever)
4. **Get connection string**
5. **Update `.env.local`:**
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dav_school_db
   ```

---

## 🚀 **Quick Test Commands:**

### **Check if .env.local exists:**
```powershell
cd E:\Project\School
Get-Item .env.local
```

### **View .env.local content:**
```powershell
Get-Content .env.local
```

### **Create .env.local from template:**
```powershell
Copy-Item env.local.template .env.local
```

---

## 📝 **Checklist:**

- [ ] `.env.local` file created in root folder
- [ ] File contains `MONGODB_URI=mongodb://localhost:27017/dav_school_db`
- [ ] File contains `JWT_SECRET=...` (min 32 characters)
- [ ] MongoDB is running (if using local)
- [ ] Server restarted with `npm run dev`

---

## ✅ **After Fix - Login Will Work!**

When `.env.local` is correct:
1. ✅ MongoDB connects
2. ✅ Login works
3. ✅ All API routes work
4. ✅ Dashboard loads
5. ✅ Full functionality!

---

## 🎯 **Summary:**

**Problem:** Missing `.env.local` file  
**Solution:** Create `.env.local` with MongoDB URI  
**File:** Copy from `env.local.template`  
**Location:** `E:\Project\School\.env.local`  
**Action:** Restart server after creating

---

**Create the file now and your website will work perfectly!** 🚀

**See also:** `CREATE_ENV_FILE.md` for detailed guide

