const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import models (using CommonJS for the seed script)
const User = require('../models/User');
const Student = require('../models/Student');
const Staff = require('../models/Staff');
const Parent = require('../models/Parent');
const Class = require('../models/Class');
const Subject = require('../models/Subject');

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dav_school_db');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Student.deleteMany({});
    await Staff.deleteMany({});
    await Parent.deleteMany({});
    await Class.deleteMany({});
    await Subject.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create users
    const adminUser = await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@davschool.edu.in',
      password: 'admin123',
      role: 'admin',
      phone: '+91 7488770476',
      dateOfBirth: new Date('1980-01-01'),
      gender: 'male',
      address: {
        street: '123 School Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        country: 'India'
      }
    });

    const teacherUser = await User.create({
      firstName: 'John',
      lastName: 'Teacher',
      email: 'teacher@davschool.edu.in',
      password: 'teacher123',
      role: 'staff',
      phone: '+91 9876543210',
      dateOfBirth: new Date('1985-05-15'),
      gender: 'male',
      address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
      }
    });

    const parentUser = await User.create({
      firstName: 'Jane',
      lastName: 'Parent',
      email: 'parent@davschool.edu.in',
      password: 'parent123',
      role: 'parent',
      phone: '+91 9876543211',
      dateOfBirth: new Date('1982-08-20'),
      gender: 'female',
      address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
      }
    });

    const studentUser = await User.create({
      firstName: 'Mike',
      lastName: 'Student',
      email: 'student@davschool.edu.in',
      password: 'student123',
      role: 'student',
      phone: '+91 9876543212',
      dateOfBirth: new Date('2010-03-10'),
      gender: 'male',
      address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India'
      }
    });

    console.log('✅ Created users');

    // Create subjects
    const subjects = await Subject.create([
      { name: 'Mathematics', code: 'MATH', category: 'Core' },
      { name: 'Science', code: 'SCI', category: 'Core' },
      { name: 'English', code: 'ENG', category: 'Language' },
      { name: 'History', code: 'HIST', category: 'Arts' },
    ]);

    console.log('✅ Created subjects');

    // Create classes
    const class10 = await Class.create({
      name: 'Class 10',
      grade: 10,
      sections: ['A', 'B', 'C'],
      capacity: 40,
      academicYear: '2024-2025',
      subjects: subjects.map(s => s._id),
      isActive: true
    });

    console.log('✅ Created classes');

    // Create staff
    const staff = await Staff.create({
      user: teacherUser._id,
      employeeId: 'EMP001',
      department: 'Teaching',
      designation: 'Senior Teacher',
      dateOfJoining: new Date('2015-06-01'),
      qualification: {
        degree: 'M.Sc',
        specialization: 'Mathematics',
        university: 'Mumbai University'
      },
      subjects: [subjects[0]._id],
      salary: {
        basicSalary: 50000,
        allowances: {
          houseRent: 10000,
          transport: 2000,
          medical: 3000
        }
      },
      status: 'active'
    });

    console.log('✅ Created staff');

    // Create parent
    const parent = await Parent.create({
      user: parentUser._id,
      relationship: 'father',
      occupation: 'Engineer',
      workDetails: {
        company: 'Tech Corp',
        designation: 'Senior Engineer'
      }
    });

    console.log('✅ Created parent');

    // Create student
    const student = await Student.create({
      user: studentUser._id,
      admissionNumber: 'ADM2024001',
      rollNumber: '101',
      class: class10._id,
      section: 'A',
      academicYear: '2024-2025',
      dateOfAdmission: new Date('2024-04-01'),
      parents: [parent._id],
      bloodGroup: 'O+',
      status: 'active'
    });

    // Update parent with child
    parent.children = [student._id];
    await parent.save();

    console.log('✅ Created student');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📋 Default Credentials:');
    console.log('Admin: admin@davschool.edu.in / admin123');
    console.log('Teacher: teacher@davschool.edu.in / teacher123');
    console.log('Parent: parent@davschool.edu.in / parent123');
    console.log('Student: student@davschool.edu.in / student123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

