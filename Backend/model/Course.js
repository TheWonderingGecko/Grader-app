const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
  // define the schema for an application
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentID: {
    type: Number,
    required: true,
  },
  umkcEmail: {
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
  gtaCertificationFile: {
    type: String,
    required: false,
  },
})

const courseSchema = new Schema({
  // define the schema for a course
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

  applications: [applicationSchema], // an array of applications
})

module.exports = mongoose.model('Course', courseSchema) // export the model
