import connectDB from '../../../../lib/mongodb';
import Staff from '../../../../models/Staff';
import User from '../../../../models/User';
import { requireAuth } from '../../../../lib/auth';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const staff = await Staff.find()
        .populate('user', '-password')
        .populate('subjects')
        .populate('classes.class')
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        count: staff.length,
        data: staff
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching staff'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { userData, staffData } = req.body;
      
      // Create user first
      const user = await User.create({
        ...userData,
        role: 'staff',
        createdBy: req.user._id
      });

      // Create staff profile
      const staff = await Staff.create({
        ...staffData,
        user: user._id
      });

      const populatedStaff = await Staff.findById(staff._id)
        .populate('user', '-password')
        .populate('subjects');

      res.status(201).json({
        success: true,
        message: 'Staff created successfully',
        data: populatedStaff
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error creating staff'
      });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

export default requireAuth(handler, ['admin']);

