const User = require('../model/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt') // for hashing the password
const jwt = require('jsonwebtoken') // for creating a token

const createToken = (_id) => {
  // create a token for the user
  return jwt.sign({ _id }, process.env.secret, {
    // sign the token with the secret key and the user id
    expiresIn: '1h', // set the expiry time to 1 hour
  })
}

const getAllUsers = async (req, res, next) => {
  // get all users
  let users
  try {
    users = await User.find() // find all users
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(404).json({ message: 'No Users Found' })
  }
  return res.status(200).json({ users })
}

const signup = async (req, res, next) => {
  // signup a user and create a token
  const { name, email, password } = req.body

  let existingUser
  try {
    existingUser = await User.findOne({ email })
  } catch (err) {
    return console.log(err)
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: 'User already exists! Login instead' })
  }
  const hashedPassword = bcrypt.hashSync(password) // hash the password using bcrypt and store it in a variable called hashedPassword

  const user = new User({
    // create a new user
    name,
    email,
    password: hashedPassword,
    grades: [],
  })

  try {
    await user.save() // save the user to the database
  } catch (err) {
    return console.log(err)
  }
  return res.status(201).json({ user })
}

const userLogin = async (req, res) => {
  // login a user
  const { email, password } = req.body

  try {
    const user = await User.login(email, password) // login the user
    const token = createToken(user._id) // create a token for the user
    res.status(200).json([user, token])
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getAllUsers, signup, userLogin } // export the functions
