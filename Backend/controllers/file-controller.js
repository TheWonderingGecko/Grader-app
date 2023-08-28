// Import the required modules
const multer = require('multer') // Library for handling file uploads
const path = require('path') // Node.js module for handling file paths

// Configure multer storage settings
const storage = multer.diskStorage({
  // Set the storage settings for multer to use when uploading files to the server
  destination: (req, file, cb) => {
    // Set the destination directory for uploaded files to the uploads folder in the root directory of the project folder structure
    cb(null, 'uploads/') // Set the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for each uploaded file
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname) // Set the filename to the fieldname (resume or gtaCertification), followed by the current date and time, followed by the file extension
    )
  },
})

// Create a multer middleware instance with the configured storage
const upload = multer({ storage: storage }).fields([
  // Define fields and their maximum upload count
  { name: 'resume', maxCount: 1 }, // Field name is 'resume', allowing 1 file
  { name: 'gtaCertification', maxCount: 1 }, // Field name is 'gtaCertification', allowing 1 file
])

// File upload function
const uploadFiles = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // Handle errors during file upload
      return res.status(500).json({ message: 'Error uploading files.' })
    }

    // If successful, send the file paths in the response
    res.json({
      resume: req.files.resume[0].path, // Path of the uploaded resume file
      gtaCertification: req.files.gtaCertification
        ? req.files.gtaCertification[0].path // Path of the uploaded GTA certification file, if uploaded
        : null, // If no GTA certification file uploaded, set as null
    })
  })
}

// Export the uploadFiles function for use in other modules
module.exports = { uploadFiles }
