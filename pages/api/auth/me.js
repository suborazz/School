import connectDB from '../../../lib/mongodb';
import User from '../../../models/User';
import Student from '../../../models/Student';
import Staff from '../../../models/Staff';
import Parent from '../../../models/Parent';
import Class from '../../../models/Class';
import Subject from '../../../models/Subject';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const user = await User.findById(req.user._id);

    // Get additional details based on role
    let additionalData = {};
    if (user.role === 'student') {
      const student = await Student.findOne({ user: user._id })
        .populate('class')
        .populate('parents');
      additionalData.studentInfo = student;
    } else if (user.role === 'staff') {
      const staff = await Staff.findOne({ user: user._id })
        .populate('subjects')
        .populate('classes.class');
      additionalData.staffInfo = staff;
    } else if (user.role === 'parent') {
      const parent = await Parent.findOne({ user: user._id })
        .populate('children');
      additionalData.parentInfo = parent;
    }

    res.json({
      success: true,
      user,
      ...additionalData
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user data'
    });
  }
}

export default requireAuth(handler);

