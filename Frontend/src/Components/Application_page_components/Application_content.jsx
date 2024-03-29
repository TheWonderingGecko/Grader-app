import { useState, useEffect, useRef } from 'react'
import { useApplication } from '../../hooks/useApplication'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Application_content = () => {
  const isAuthenticated = useAuth()

  if (!isAuthenticated) {
    return null
  }
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  const userEmail = user.email
  const userId = user.student_id
  const userFirstName = user.firstName
  const userLastName = user.lastName
  const usableCourses = user.courses
  const navigate = useNavigate()
  const [degree, setDegree] = useState('')
  const [gpa, setGpa] = useState('')
  const [major, setMajor] = useState('')
  const [level, setLevel] = useState('')
  const [semester, setSemester] = useState('')
  const [isGTA, setIsGTA] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [gtaCertificationFile, setGtaCertificationFile] = useState(null)
  const [resumeFile, setResumeFile] = useState('')
  const [selectedClasses, setSelectedClasses] = useState([])
  const [courses, setCourses] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const [error, setError] = useState('')
  const formRef = useRef(null)
  const { addAPP, successApp, errorApp } = useApplication()

  const fetchCourses = async () => {
    console.log('change')
    console.log(usableCourses)
    const response = await fetch(
      'https://weekend-warriors-umkc-grader.onrender.com/api/courses'
    )
    const json = await response.json()

    if (response.ok) {
      if (isGTA === 'true') {
        const filteredClasses = json.filter((course) =>
          usableCourses.includes(course.code)
        )
        setCourses(filteredClasses)
        console.log('X')
      } else {
        const filteredClasses = json.filter(
          (course) =>
            course.position === 'grader' && usableCourses.includes(course.code)
        )

        setCourses(filteredClasses)
        console.log('Y')
      }
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [isGTA])

  const selectClass = (_id) => {
    const selectedClass = courses.find((cls) => cls._id === _id)

    if (selectedClasses.find((cls) => cls._id === _id)) {
      return // Exit the function without updating the state
    }

    if (selectedClasses.length >= 5) {
      // Remove the first element of the array using slice method
      const updatedClasses = selectedClasses.slice(1)
      // Add the selected class to the end of the updatedClasses array
      updatedClasses.push(selectedClass)
      setSelectedClasses(updatedClasses)
    } else {
      // Add the selected class to the end of the selectedClasses array
      setSelectedClasses([...selectedClasses, selectedClass])
    }
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleGtaCertificationChange = (e) => {
    setGtaCertificationFile(e.target.files[0])
  }

  const handleApplication = async (e) => {
    e.preventDefault()
    let tempEmptyFields = []

    if (!gpa) {
      tempEmptyFields.push('GPA')
    }

    if (!major) {
      tempEmptyFields.push('Major')
    }

    if (!level) {
      tempEmptyFields.push('Degree')
    }

    if (isGTA === null) {
      tempEmptyFields.push('GTA')
    }

    if (selectedFile === null || selectedFile.type !== 'application/pdf') {
      tempEmptyFields.push('Resume')
    }

    if (isGTA === 'true') {
      if (
        gtaCertificationFile === null ||
        gtaCertificationFile.type !== 'application/pdf'
      ) {
        tempEmptyFields.push('GTA_Certification')
      }
    }

    if (selectedClasses.length === 0) {
      tempEmptyFields.push('Classes')
    }

    if (tempEmptyFields.length > 0) {
      setEmptyFields(tempEmptyFields)

      return setError('Please fill out all required fields')
    }

    try {
      const application = {
        firstName: user.firstName,
        lastName: user.lastName,
        studentID: user.student_id,
        umkcEmail: user.email,
        gpa: gpa,
        major: major,
        level: level,

        isGTA: isGTA,
        resumeFile: selectedFile,
        gtaCertificationFile: gtaCertificationFile,
      }

      if (selectedFile) {
        const formData = new FormData() // Create a new FormData object
        formData.append('resume', selectedFile) // Append the file to the FormData object
        formData.append('gtaCertification', gtaCertificationFile) // Append the file to the FormData object

        const uploadResponse = await fetch(
          // Send the file to the server
          'https://weekend-warriors-umkc-grader.onrender.com/uploads',
          {
            method: 'POST',
            body: formData,
          }
        )

        if (uploadResponse.ok) {
          const uploadedFileData = await uploadResponse.json()
          // Set the path of the uploaded file in the application object
          application.resumeFile = uploadedFileData.resume
          application.gtaCertificationFile = uploadedFileData.gtaCertification
        } else {
          setError('Error uploading file.')
          return
        }
      }

      for (let cls of selectedClasses) {
        const applications = courses.find(
          (course) => course._id === cls._id
        ).applications
        await addAPP(cls._id, applications, application) // Add the application to the database utilizing the addAPP function from the useApplication hook
        navigate('/thanks')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="overflow-auto h-5/6 bg-slate-200">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="w-3/4 p-2 text-2xl font-bold bg-umkc_light_blue rounded-b-md text-umkc_yellow">
          CSEE GTA/Grader Application
        </h2>
        <form
          onSubmit={handleApplication}
          ref={formRef}
          className="text-xl font-bold"
        >
          <fieldset className="flex flex-col items-center justify-center grid-cols-2 gap-3 md:grid justify-items-center md:gap-6 md:text-left md:mt-5 lg:grid-cols-3">
            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  First Name:
                </h3>
              </label>
              <input
                value={userFirstName}
                readOnly
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue bg-slate-700 text-umkc_dark_yellow"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Last Name:
                </h3>
              </label>
              <input
                type="text"
                readOnly
                value={userLastName}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue bg-slate-700 text-umkc_dark_yellow"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Student ID:
                </h3>
              </label>
              <input
                type="text"
                readOnly
                value={userId}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue bg-slate-700 text-umkc_dark_yellow"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  UMKC Email:
                </h3>
              </label>
              <input
                type="email"
                value={userEmail}
                readOnly
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue bg-slate-700 text-umkc_dark_yellow"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  UMKC Cumulative GPA:
                </h3>
              </label>
              <select
                name="gpa"
                id="gpa"
                className={
                  (emptyFields.includes('GPA')
                    ? 'border-error'
                    : 'border-umkc_light_blue') +
                  ' w-full p-2 bg-white border-2 rounded-md   '
                }
                onChange={(e) => setGpa(e.target.value)}
                required
              >
                <option>--Select an option--</option>
                <option value={2.0}>2.0 or greater </option>
                <option value={2.5}>2.5 or greater</option>
                <option value={3.0}>3.0 or greater</option>
                <option value={3.5}>3.5 or greater</option>
                <option value={4.0}>4.0 or greater</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="major">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Current Major:
                </h3>
              </label>
              <select
                id="major"
                className={
                  'w-full p-2 bg-white border-2 rounded-md  ' +
                  (emptyFields.includes('Major')
                    ? 'border-error'
                    : 'border-umkc_light_blue')
                }
                onChange={(e) => setMajor(e.target.value)}
                required
              >
                <option>--Select an option--</option>
                <option value="CS">CS</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="level">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Current Degree:
                </h3>
              </label>
              <select
                id="level"
                className={
                  'w-full p-2 bg-white border-2 rounded-md ' +
                  (emptyFields.includes('Degree')
                    ? 'border-error'
                    : 'border-umkc_light_blue')
                }
                onChange={(e) => setLevel(e.target.value)}
              >
                <option>--Select an option--</option>
                <option value="BS">N/A</option>
                <option value="BS">BS</option>
                <option value="MS">MS</option>
                <option value="PHD">PHD</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label
                className="flex flex-col items-center justify-center"
                htmlFor="GTA"
              >
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 text-center'>
                  Do you have a GTA certificate/ previous degree from US
                  institution?
                </h3>
                {isGTA === 'false' && (
                  <div>
                    <a
                      href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-umkc_light_blue fade-in "
                    >
                      How to obtain GTA certificate?
                    </a>
                  </div>
                )}
              </label>
              <select
                id="GTA"
                className={
                  'w-full p-2 bg-white border-2 rounded-md ' +
                  (emptyFields.includes('GTA')
                    ? 'border-error'
                    : 'border-umkc_light_blue')
                }
                onChange={(e) => {
                  setIsGTA(e.target.value)
                }}
                required
              >
                <option value="In Progress">--Select an option--</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            {isGTA === 'true' && (
              <div
                className={
                  'flex flex-col justify-end w-3/4 h-full gap-3 fade-in'
                }
              >
                <label htmlFor="Certification ">
                  <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 '>
                    GTA Certification{' '}
                    <span className="text-sm text-error">(.pdf) only</span>
                  </h3>
                </label>
                <input
                  type="file"
                  id="Certification"
                  name="Certification"
                  accept=".pdf"
                  className={
                    'w-full bg-white p-2 border-2 rounded-md ' +
                    (emptyFields.includes('GTA_Certification')
                      ? 'border-error'
                      : 'border-umkc_light_blue')
                  }
                  onChange={handleGtaCertificationChange}
                />
              </div>
            )}

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="resume">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 '>
                  Resume Document{' '}
                  <span className="text-sm text-error">(.pdf) only</span>
                </h3>
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                className={
                  'w-full bg-white p-2 border-2 rounded-md ' +
                  (emptyFields.includes('Resume')
                    ? 'border-error'
                    : 'border-umkc_light_blue')
                }
                onChange={handleFileChange}
              />
            </div>

            <div className="w-5/6 md:col-span-2 lg:col-span-3">
              <label
                className="flex items-center justify-center"
                htmlFor="Classes"
              >
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 '>
                  Please select up to 5 classes you'd like to apply for:
                </h3>
              </label>
              <div
                className={
                  'grid grid-cols-2 gap-3 p-2 overflow-auto border-2 lg:grid-cols-3 h-60 ' +
                  (emptyFields.includes('Classes')
                    ? 'border-error'
                    : 'border-umkc_light_blue')
                }
              >
                {courses &&
                  courses.map(({ _id, code, semester, applications }) => {
                    return (
                      <div
                        key={_id}
                        className={` p-2  border-2 rounded-md border-umkc_light_blue fade-in text-center h-32 flex flex-col items-center justify-center md:h-auto max-h-32 ${
                          selectedClasses.some((cls) => cls._id === _id)
                            ? ' bg-umkc_dark_blue text-umkc_yellow border-umkc_yellow'
                            : ' bg-white'
                        }`}
                        onClick={() => selectClass(_id)}
                      >
                        <div className="class">
                          <p className="class-name">
                            <strong>{code}</strong>
                          </p>
                          <p className="class-sem">
                            (<strong>{semester}</strong>)
                          </p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            {error && (
              <div className="p-2 bg-red-100 border text-error border-error md:col-span-2 lg:col-span-3">
                {error}
              </div>
            )}
            <button className="p-2 text-2xl font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue md:col-span-2 lg:col-span-3">
              {' '}
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
export default Application_content
