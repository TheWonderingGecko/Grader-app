const multer = require('multer')
const path = require('path')

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage: storage }).fields([
  { name: 'resume', maxCount: 1 },
  { name: 'gtaCertification', maxCount: 1 },
])

// File upload function
const uploadFiles = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading files.' })
    }

    // If successful, send the file paths in the response
    res.json({
      resume: req.files.resume[0].path,
      gtaCertification: req.files.gtaCertification
        ? req.files.gtaCertification[0].path
        : null,
    })
  })
}

module.exports = { uploadFiles }
