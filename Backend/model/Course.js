const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
})

module.exports = mongoose.model('Course', courseSchema)
