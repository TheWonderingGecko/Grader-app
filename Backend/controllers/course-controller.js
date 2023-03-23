const Course = require('../model/Course')

const getAllCourses = async (req, res, next) => {
  let courses
  try {
    courses = await Course.find({})
  } catch (err) {
    return console.log(err)
  }
  if (!courses) {
    return res.status(404).json({ message: 'No courses found' })
  }
  return res.status(200).json(courses)
}

const addCourse = async (req, res, next) => {
  const newCourse = new Course(req.body)
  let savedCourse
  try {
    savedCourse = await newCourse.save()
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: err.message })
  }

  if (!savedCourse) {
    return res.status(404).json({ message: 'Course could not be saved' })
  }

  return res.status(201).json({ savedCourse })
}

const getById = async (req, res, next) => {
  const id = req.params.id
  let course
  try {
    course = await Course.findById(id)
  } catch (err) {
    console.log(err)
  }
  if (!course) {
    return res.status(404).json({ message: 'No course found' })
  }
  return res.status(200).json({ course })
}

const updateCourse = async (req, res, next) => {
  const courseId = req.params.id
  let course
  try {
    course = await Course.findByIdAndUpdate(courseId, req.body, { new: true })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Unable to update the course' })
  }
  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }
  return res.status(200).json({ course })
}

const deleteCourse = async (req, res, next) => {
  const id = req.params.id
  let course
  try {
    course = await Course.findByIdAndRemove(id)
  } catch (err) {
    console.log(err)
  }
  if (!course) {
    return res.status(500).json({ message: 'Unable to delete' })
  }
  return res.status(200).json({ message: 'Successfully deleted' })
}

module.exports = {
  getAllCourses,
  addCourse,
  getById,
  deleteCourse,
  updateCourse,
}
