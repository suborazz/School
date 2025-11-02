import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  relationship: {
    type: String,
    enum: ['father', 'mother', 'guardian'],
    required: true
  },
  occupation: {
    type: String,
    trim: true
  },
  workDetails: {
    company: String,
    designation: String,
    officeAddress: String,
    officePhone: String
  },
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  alternateContact: {
    name: String,
    relation: String,
    phone: String
  },
  annualIncome: {
    type: Number
  },
  documents: [{
    name: String,
    type: String,
    url: String,
    uploadedAt: Date
  }]
}, {
  timestamps: true
});

// Index for faster queries
parentSchema.index({ user: 1 });

export default mongoose.models.Parent || mongoose.model('Parent', parentSchema);

