const express = require('express')
const {
  getAllUsers,
  signup,
  userLogin,
} = require('../controllers/user-controller')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/signup', signup)
router.post('/login', userLogin)

module.exports = router
