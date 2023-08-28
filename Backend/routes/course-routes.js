const express = require('express')
const {
  getAllCourses,
  addCourse,
  getById,
  deleteCourse,
  updateCourse,
} = require('../controllers/course-controller')

const courseRouter = express.Router()

courseRouter.get('/', getAllCourses) // when a get request is made to /api/courses, the getAllCourses function in course-controller is called
courseRouter.post('/add', addCourse) // when a post request is made to /api/courses/add, the addCourse function in course-controller is called
courseRouter.put('/update/:id', updateCourse) // when a put request is made to /api/courses/update/:id, the updateCourse function in course-controller is called
courseRouter.get('/:id', getById) // when a get request is made to /api/courses/:id, the getById function in course-controller is called
courseRouter.delete('/:id', deleteCourse) // when a delete request is made to /api/courses/:id, the deleteCourse function in course-controller is called

module.exports = courseRouter
