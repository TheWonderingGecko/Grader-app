const mongoose = require('mongoose')
const Grader = require('./Grader')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  student_id: {
    type: Number,
    unique: true,
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

  position: {
    type: String,
    enum: ['Admin', 'Student'],
    required: true,
  },
  courses: [
    {
      type: String,
    },
  ],
})

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error('Email and password are required')

  const user = await this.findOne({ email })

  if (!user) throw Error('Incorrect email')

  const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  if (!isPasswordCorrect) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
// users
