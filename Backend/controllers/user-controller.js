const User = require('../model/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.secret, {
    expiresIn: '1h',
  })
}

const getAllUsers = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (err) {
    console.log(err)
  }
  if (!users) {
    return res.status(404).json({ message: 'No Users Found' })
  }
  return res.status(200).json({ users })
}

const signup = async (req, res, next) => {
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
  const hashedPassword = bcrypt.hashSync(password)

  const user = new User({
    name,
    email,
    password: hashedPassword,
    grades: [],
  })

  try {
    await user.save()
  } catch (err) {
    return console.log(err)
  }
  return res.status(201).json({ user })
}

const userLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.status(200).json([user, token])
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getAllUsers, signup, userLogin }
