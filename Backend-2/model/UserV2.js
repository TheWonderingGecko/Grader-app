const mongoose = require('mongoose')

const userV2Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
  undergradDegree: {
    type: String,
    required: false,
  },
  gpa: {
    type: Number,
    required: true,
  },
  hoursCompleted: {
    type: Number,
    required: true,
  },
  graduatingSemester: {
    type: String,
    enum: [
      'fall23',
      'spring23',
      'summer23',
      'fall24',
      'spring24',
      'summer24',
      'fall25',
      'spring25',
      'summer25',
      'fall26',
      'spring26',
      'summer26',
    ],
  },
  major: {
    type: String,
    enum: ['cs', 'ece', 'it'],
    required: true,
  },
  level: {
    type: String,
    enum: ['undergraduate', 'graduate', 'doctoral'],
  },
  applySemester: {
    type: String,
    enum: ['fall', 'spring', 'summer'],
  },
  gtaCertified: {
    type: String,
    enum: ['yes', 'no', 'not interested'],
    required: false,
  },
  resumeFilePath: {
    type: String,
    required: false,
  },
  transcriptFilePath: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('UserV2', userV2Schema)
