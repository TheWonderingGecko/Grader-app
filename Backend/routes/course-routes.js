const express = require('express')
const {
  getAllCourses,
  addCourse,
  getById,
  deleteCourse,
  updateCourse,
} = require('../controllers/course-controller')

const courseRouter = express.Router()

courseRouter.get('/', getAllCourses)
courseRouter.post('/add', addCourse)
courseRouter.put('/update/:id', updateCourse)
courseRouter.get('/:id', getById)
courseRouter.delete('/:id', deleteCourse)

module.exports = courseRouter
