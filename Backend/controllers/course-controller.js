const Course = require('../model/Course')

const getAllCourses = async (req, res, next) => {
  let courses
  try {
    courses = await Course.find({}) // find all courses
  } catch (err) {
    return console.log(err)
  }
  if (!courses) {
    // if no courses are found
    return res.status(404).json({ message: 'No courses found' })
  }
  return res.status(200).json(courses)
}

const addCourse = async (req, res, next) => {
  const newCourse = new Course(req.body)
  let savedCourse
  try {
    savedCourse = await newCourse.save() // save the course
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
  // get a course by id
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
  // update a course
  const courseId = req.params.id
  let course
  try {
    course = await Course.findByIdAndUpdate(courseId, req.body, { new: true }) // find the course by id and update it
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
  // delete a course
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
  // export the functions so they can be used in other files in the backend folder
  getAllCourses,
  addCourse,
  getById,
  deleteCourse,
  updateCourse,
}
