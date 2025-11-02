import connectDB from '../../../lib/mongodb';
import Staff from '../../../models/Staff';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const staff = await Staff.findOne({ user: req.user._id })
      .populate('user', '-password')
      .populate('subjects')
      .populate('classes.class');

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: 'Staff profile not found'
      });
    }

    res.json({
      success: true,
      data: staff
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching profile'
    });
  }
}

export default requireAuth(handler, ['staff']);

