const express = require('express')
const {
  getAllGraders,
  addGrade,
  updateGrade,
  getById,
  deleteGrade,
  getByUserId,
} = require('../controllers/grader-controller')

const graderRouter = express.Router()

graderRouter.get('/', getAllGraders)
graderRouter.post('/add', addGrade)
graderRouter.put('/update/:id', updateGrade)
graderRouter.get('/:id', getById)
graderRouter.delete('/:id', deleteGrade)
graderRouter.get('/user/:id', getByUserId)

module.exports = graderRouter
