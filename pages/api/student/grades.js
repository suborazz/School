import connectDB from '../../../lib/mongodb';
import Student from '../../../models/Student';
import Grade from '../../../models/Grade';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const student = await Student.findOne({ user: req.user._id });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student profile not found'
      });
    }

    const grades = await Grade.find({ student: student._id })
      .populate('subject', 'name code')
      .populate('class', 'name grade')
      .populate('enteredBy', 'firstName lastName')
      .sort({ examDate: -1 });

    // Calculate statistics
    const stats = {
      totalExams: grades.length,
      averagePercentage: grades.reduce((acc, g) => acc + g.percentage, 0) / (grades.length || 1),
      passed: grades.filter(g => g.isPassed).length,
      failed: grades.filter(g => !g.isPassed).length
    };

    res.json({
      success: true,
      data: grades,
      stats
    });
  } catch (error) {
    console.error('Get grades error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching grades'
    });
  }
}

export default requireAuth(handler, ['student']);

