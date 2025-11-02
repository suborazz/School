import { verifyToken } from './generateToken';
import User from '../models/User';
import connectDB from './mongodb';

export async function authenticateUser(req) {
  try {
    // Get token from headers
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return null;
    }

    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return null;
    }

    // Connect to database
    await connectDB();

    // Get user from token
    const user = await User.findById(decoded.id).select('-password');
    
    return user;
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}

export function requireAuth(handler, allowedRoles = []) {
  return async (req, res) => {
    const user = await authenticateUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route',
      });
    }

    // Check if user role is allowed
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to access this resource',
      });
    }

    // Attach user to request
    req.user = user;

    return handler(req, res);
  };
}

export function optionalAuth(handler) {
  return async (req, res) => {
    const user = await authenticateUser(req);
    req.user = user; // May be null
    return handler(req, res);
  };
}

