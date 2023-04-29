require('dotenv').config()

const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const graderRouter = require('./routes/grader-routes')
const courseRouter = require('./routes/course-routes')
const fileController = require('./controllers/file-controller')
const router = require('./routes/user-routes')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use(
  cors({
    origin: '*',
  })
)

app.use((req, res, next) => {
  console.log(req.path, req.method)

  next()
})
app.use('/api/user', router)
app.post('/uploads', fileController.uploadFiles)
app.use('/uploads', express.static('uploads'))
app.use('/api/grader', graderRouter)
app.use('/api/courses', courseRouter)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT))
  .then(() => console.log('Connected to database and listening to  ' + PORT))
  .catch((err) => console.log(err))

// 4UJ9ha9pRNjfIEBc
