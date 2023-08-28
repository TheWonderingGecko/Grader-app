const mongoose = require('mongoose')
const Grader = require('../model/Grader')
const User = require('../model/User')

const getAllGraders = async (req, res, next) => {
  // get all graders
  let graders
  try {
    graders = await Grader.find()
  } catch (err) {
    return console.log(err)
  }
  if (!graders) {
    return res.status(404).json({ message: 'No graders found' })
  }
  return res.status(200).json({ graders })
}

const addGrade = async (req, res, next) => {
  // add a grade
  const { title, description, image, user } = req.body

  let existingUser
  try {
    existingUser = await User.findById(user)
  } catch (err) {
    console.log(err)
  }
  if (!existingUser) {
    return res.status(400).json({ message: 'Unable to find user by this id' })
  }
  const grade = new Grader({
    title,
    description,
    image,
    user,
  })
  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await grade.save({ session })
    existingUser.grades.push(grade)
    await existingUser.save({ session })
    await session.commitTransaction()
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err })
  }
  return res.status(200).json({ grade })
}

const updateGrade = async (req, res, next) => {
  const { title, description } = req.body
  const gradeID = req.params.id
  let grade
  try {
    grade = await Grader.findByIdAndUpdate(gradeID, {
      title,
      description,
    })
  } catch (err) {
    return console.log(err)
  }
  if (!grade) {
    return res.status(500).json({ message: 'Unable to update the blog' })
  }
  return res.status(200).json({ grade })
}

const getById = async (req, res, next) => {
  const id = req.params.id
  let grade
  try {
    grade = await Grader.findById(id)
  } catch (err) {
    console.log(err)
  }
  if (!grade) {
    return res.status(404).json({ message: 'No grade found' })
  }
  return res.status(200).json({ grade })
}

const deleteGrade = async (req, res, next) => {
  const id = req.params.id

  let grade
  try {
    grade = await Grader.findByIdAndRemove(id).populate('user')
    await grade.user.grades.pull(grade)
    await grade.user.save()
  } catch (err) {
    console.log(err)
  }
  if (!grade) {
    return res.status(500).json({ message: 'Unable to delete' })
  }
  return res.status(200).json({ message: 'Successfully deleted' })
}

const getByUserId = async (req, res, next) => {
  const userId = req.params.id
  let userGrades
  try {
    userGrades = await User.findById(userId).populate('grades')
  } catch (err) {
    return console.log(err)
  }
  if (!userGrades) {
    return res.status(404).json({ message: 'No grade found' })
  }
  return res.status(200).json({ grades: userGrades })
}

module.exports = {
  getAllGraders,
  addGrade,
  getById,
  getByUserId,
  deleteGrade,
  updateGrade,
}
