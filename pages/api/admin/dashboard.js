import connectDB from '../../../lib/mongodb';
import Student from '../../../models/Student';
import Staff from '../../../models/Staff';
import Parent from '../../../models/Parent';
import Class from '../../../models/Class';
import AttendanceStaff from '../../../models/AttendanceStaff';
import AttendanceStudent from '../../../models/AttendanceStudent';
import Fee from '../../../models/Fee';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();

    // Get counts
    const totalStudents = await Student.countDocuments({ status: 'active' });
    const totalStaff = await Staff.countDocuments({ status: 'active' });
    const totalParents = await Parent.countDocuments();
    const totalClasses = await Class.countDocuments({ isActive: true });

    // Get today's attendance
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const staffPresentToday = await AttendanceStaff.countDocuments({
      date: { $gte: today },
      status: 'present'
    });

    const studentsPresentToday = await AttendanceStudent.countDocuments({
      date: { $gte: today },
      status: 'present'
    });

    // Get fee statistics
    const totalFeesPending = await Fee.aggregate([
      { $match: { status: { $in: ['pending', 'partial', 'overdue'] } } },
      { $group: { _id: null, total: { $sum: '$amountPending' } } }
    ]);

    const totalFeesCollected = await Fee.aggregate([
      { $match: { status: 'paid' } },
      { $group: { _id: null, total: { $sum: '$amountPaid' } } }
    ]);

    // Get recent activities
    const recentStudents = await Student.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('user', 'firstName lastName email')
      .populate('class', 'name grade');

    res.json({
      success: true,
      data: {
        counts: {
          students: totalStudents,
          staff: totalStaff,
          parents: totalParents,
          classes: totalClasses
        },
        attendance: {
          staffPresent: staffPresentToday,
          studentsPresent: studentsPresentToday
        },
        fees: {
          pending: totalFeesPending[0]?.total || 0,
          collected: totalFeesCollected[0]?.total || 0
        },
        recentActivities: recentStudents
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data'
    });
  }
}

export default requireAuth(handler, ['admin']);

