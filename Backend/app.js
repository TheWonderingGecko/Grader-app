import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import graderRouter from '../Backend-2/routes/grader-routes'
import router from '../Backend-2/routes/user-routes'

const app = express()
app.use(express.json())
app.use('/api/user', router)
app.use('/api/grader', graderRouter)

app.use(cors())

app.use(function (req, res, next) {
  console.log(req.path, req.method)

  next()
})
mongoose
  .connect(
    'mongodb+srv://admin:4UJ9ha9pRNjfIEBc@cluster0.ggy9cda.mongodb.net/GraderApp?retryWrites=true&w=majority'
  )
  .then(() => app.listen(2000))
  .then(() =>
    console.log('Connected to database and listening to localhost 5000')
  )
  .catch((err) => console.log(err))

export default app

// 4UJ9ha9pRNjfIEBc
