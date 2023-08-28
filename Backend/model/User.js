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
    // Admin or Student
    type: String,
    enum: ['Admin', 'Student'], // Admin or Student
    required: true,
  },
  courses: [
    {
      type: String,
    },
  ],
})

userSchema.statics.login = async function (email, password) {
  // login a user by email and password and return the user if successful
  if (!email || !password) throw Error('Email and password are required') // check if email and password are provided

  const user = await this.findOne({ email }) // find the user by email

  if (!user) throw Error('Incorrect email') // if no user is found throw an error saying incorrect email

  const isPasswordCorrect = bcrypt.compareSync(password, user.password) // compare the password with the hashed password in the database
  if (!isPasswordCorrect) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
// users
