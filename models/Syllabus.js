import mongoose from 'mongoose';

const syllabusSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  academicYear: {
    type: String,
    required: true
  },
  term: {
    type: String,
    enum: ['Term 1', 'Term 2', 'Annual'],
    required: true
  },
  topics: [{
    title: {
      type: String,
      required: true
    },
    description: String,
    duration: String,
    learningObjectives: [String],
    isCompleted: {
      type: Boolean,
      default: false
    },
    completedDate: Date
  }],
  fileUrl: {
    type: String
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
syllabusSchema.index({ class: 1, subject: 1, academicYear: 1 });

export default mongoose.models.Syllabus || mongoose.model('Syllabus', syllabusSchema);

