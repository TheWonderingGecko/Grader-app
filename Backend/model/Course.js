const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  umkcEmail: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    enum: ['cs', 'ece', 'it'],
    required: true,
  },
  level: {
    type: String,
    enum: ['BS', 'MS', 'PHD'],
    required: true,
  },
  semester: {
    type: String,
    enum: ['Fall', 'Spring', 'Summer'],
    required: true,
  },
  isGTA: {
    type: Boolean,
    required: true,
  },
  resumeFile: {
    type: String,
    required: true,
  },
})

const courseSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    enum: ['cs', 'ece', 'it'],
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    enum: ['instructor', 'grader'],
    required: true,
  },
  semester: {
    type: String,
    enum: ['fall', 'spring', 'summer'],
    required: true,
  },
  level: {
    type: String,
    enum: ['undergraduate', 'graduate'],
    required: false,
  },

  applications: [applicationSchema],
})

module.exports = mongoose.model('Course', courseSchema)
