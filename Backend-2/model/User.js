const mongoose = require('mongoose')
const Grader = require('./Grader')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  grades: [{ type: mongoose.Types.ObjectId, ref: 'Grader', required: true }],
})
module.exports = mongoose.model('User', userSchema)
// users
