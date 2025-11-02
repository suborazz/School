# 🔌 API Routes Reference

## ✅ **Completed API Routes**

### Authentication (`/api/auth/*`)
- ✅ POST `/api/auth/login` - User login
- ✅ POST `/api/auth/register` - User registration  
- ✅ GET `/api/auth/me` - Get current user
- ✅ PUT `/api/auth/update-password` - Update password
- ✅ PUT `/api/auth/update-profile` - Update profile

### Admin (`/api/admin/*`)
- ✅ GET `/api/admin/dashboard` - Dashboard statistics
- ✅ GET `/api/admin/students` - Get all students
- ✅ POST `/api/admin/students` - Create student
- ✅ GET `/api/admin/staff` - Get all staff
- ✅ POST `/api/admin/staff` - Create staff

### Staff (`/api/staff/*`)
- ✅ GET `/api/staff/profile` - Get staff profile

### Parent (`/api/parent/*`)
- ✅ GET `/api/parent/children` - Get children list

### Student (`/api/student/*`)
- ✅ GET `/api/student/grades` - Get student grades

### General
- ✅ GET `/api/health` - Health check
- ✅ GET `/api/school-info` - School information

---

## 📝 **Template for Additional Routes**

### Basic GET Route
```javascript
// pages/api/[route]/[name].js
import connectDB from '../../../lib/mongodb';
import Model from '../../../models/Model';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const data = await Model.find()
      .populate('relatedField')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: data.length,
      data
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching data'
    });
  }
}

export default requireAuth(handler, ['admin']); // Or ['staff', 'admin'], etc.
```

### Basic POST Route
```javascript
async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const item = await Model.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Created successfully',
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating item'
    });
  }
}

export default requireAuth(handler, ['admin']);
```

### Basic PUT Route (Update)
```javascript
async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { id } = req.query; // From /api/route/[id].js
    
    const item = await Model.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.json({
      success: true,
      message: 'Updated successfully',
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating item'
    });
  }
}

export default requireAuth(handler, ['admin']);
```

### Basic DELETE Route
```javascript
async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { id } = req.query;
    
    const item = await Model.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.json({
      success: true,
      message: 'Deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting item'
    });
  }
}

export default requireAuth(handler, ['admin']);
```

---

## 🚀 **How to Add More Routes**

### Example: Add Attendance Routes

1. **Create file**: `pages/api/staff/attendance.js`
2. **Import models**: AttendanceStudent, Student
3. **Create handler**: Handle GET, POST methods
4. **Protect route**: Use requireAuth with ['staff', 'admin']
5. **Test**: Use Postman or frontend

### Example Implementation:

```javascript
// pages/api/staff/attendance.js
import connectDB from '../../../lib/mongodb';
import AttendanceStudent from '../../../models/AttendanceStudent';
import Student from '../../../models/Student';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    // Get attendance records
    const { date, classId } = req.query;
    const filter = {};
    if (date) filter.date = new Date(date);
    if (classId) filter.class = classId;

    const attendance = await AttendanceStudent.find(filter)
      .populate('student')
      .sort({ date: -1 });

    return res.json({ success: true, data: attendance });
  }

  if (req.method === 'POST') {
    // Mark attendance
    const attendance = await AttendanceStudent.create({
      ...req.body,
      markedBy: req.user.staffId // Assuming you have this
    });

    return res.status(201).json({
      success: true,
      message: 'Attendance marked',
      data: attendance
    });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}

export default requireAuth(handler, ['staff', 'admin']);
```

---

## 📚 **Additional Routes to Implement**

### Admin Routes
- `/api/admin/users` - User management
- `/api/admin/classes` - Class management
- `/api/admin/subjects` - Subject management
- `/api/admin/fees` - Fee management
- `/api/admin/reports` - Generate reports

### Staff Routes
- `/api/staff/attendance/mark` - Mark student attendance
- `/api/staff/grades` - Add/update grades
- `/api/staff/lms` - Upload content
- `/api/staff/salary` - View salary

### Parent Routes
- `/api/parent/fees/[studentId]` - Child's fees
- `/api/parent/attendance/[studentId]` - Child's attendance
- `/api/parent/grades/[studentId]` - Child's grades

### Student Routes
- `/api/student/attendance` - View attendance
- `/api/student/lms` - Access materials
- `/api/student/assignments` - View assignments

---

## 💡 **Tips**

1. **File structure**: `pages/api/[role]/[resource]/[action].js`
2. **Always**: Connect to DB first
3. **Always**: Check req.method
4. **Always**: Use requireAuth
5. **Always**: Handle errors properly

---

## 🔐 **Authentication Levels**

```javascript
// No auth required
export default handler;

// Any authenticated user
export default requireAuth(handler);

// Specific role
export default requireAuth(handler, ['admin']);

// Multiple roles
export default requireAuth(handler, ['admin', 'staff']);
```

---

This template system allows you to quickly add any missing routes!

