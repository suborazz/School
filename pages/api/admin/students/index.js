import connectDB from '../../../../lib/mongodb';
import Student from '../../../../models/Student';
import User from '../../../../models/User';
import { requireAuth } from '../../../../lib/auth';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const students = await Student.find()
        .populate('user', '-password')
        .populate('class')
        .populate('parents')
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        count: students.length,
        data: students
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching students'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { userData, studentData } = req.body;
      
      // Create user first
      const user = await User.create({
        ...userData,
        role: 'student',
        createdBy: req.user._id
      });

      // Create student profile
      const student = await Student.create({
        ...studentData,
        user: user._id
      });

      const populatedStudent = await Student.findById(student._id)
        .populate('user', '-password')
        .populate('class');

      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        data: populatedStudent
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error creating student'
      });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

export default requireAuth(handler, ['admin']);

