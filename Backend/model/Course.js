import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  major: {
    type: String,
    enum: ['cs', 'ece', 'it'],
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  position: {
    type: String,
    enum: ['instructor', 'grader'],
    required: true
  },
  semester: {
    type: String,
    enum: ['fall', 'spring', 'summer'],
    required: true
  },
  level: {
    type: String,
    enum: ['undergraduate', 'graduate'],
    required: true
  }
});

export default mongoose.model('Course', courseSchema);

