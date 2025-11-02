import connectDB from '../../../lib/mongodb';
import Parent from '../../../models/Parent';
import { requireAuth } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const parent = await Parent.findOne({ user: req.user._id })
      .populate({
        path: 'children',
        populate: {
          path: 'user class',
          select: '-password'
        }
      });

    if (!parent) {
      return res.status(404).json({
        success: false,
        message: 'Parent profile not found'
      });
    }

    res.json({
      success: true,
      count: parent.children.length,
      data: parent.children
    });
  } catch (error) {
    console.error('Get children error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching children'
    });
  }
}

export default requireAuth(handler, ['parent']);

