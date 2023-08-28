require('dotenv').config()

const express = require('express') // import express dependency

const cors = require('cors') // import cors dependency
const mongoose = require('mongoose') // import mongoose dependency
const graderRouter = require('./routes/grader-routes')
const courseRouter = require('./routes/course-routes')
const fileController = require('./controllers/file-controller')
const router = require('./routes/user-routes')
const PORT = process.env.PORT || 5000

// const app = express()
const app = express()

//allows us to parse json
app.use(express.json())

app.use(
  cors({
    origin: '*', // allow requests from all origins in a production environment, this should be set to the url of the frontend
  })
)

// add middleware to log all requests
app.use((req, res, next) => {
  console.log(req.path, req.method)

  next() // call next middleware
})
app.use('/api/user', router) // tell express to use this router for all routes starting with /api/user
app.post('/uploads', fileController.uploadFiles) // specifies that wen a post request is made to /uploads, the uploadFiles function in fileController is called
app.use('/uploads', express.static('uploads')) // specifies that when a get request is made to /uploads, the files in the uploads folder are served
app.use('/api/grader', graderRouter) // tell express to use this router for all routes starting with /api/grader
app.use('/api/courses', courseRouter) // tell express to use this router for all routes starting with /api/courses
mongoose // connect to database
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT)) //listen for requests
  .then(() => console.log('Connected to database and listening to  ' + PORT))
  .catch((err) => console.log(err)) // catches any errors that occur when connecting to the database

// 4UJ9ha9pRNjfIEBc
