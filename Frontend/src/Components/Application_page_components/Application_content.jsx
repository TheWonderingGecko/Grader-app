import { useState, useEffect, useRef } from 'react'
import { useApplication } from '../../hooks/useApplication'
import { Link } from 'react-router-dom'

const Application_content = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [studentID, setStudentID] = useState('')
  const [umkcEmail, setUMKCEmail] = useState('')
  const [degree, setDegree] = useState('')
  const [gpa, setGpa] = useState('')
  const [major, setMajor] = useState('')
  const [level, setLevel] = useState('')
  const [semester, setSemester] = useState('')
  const [isGTA, setIsGTA] = useState(false)
  const [resumeFile, setResumeFile] = useState('')
  const [selectedClasses, setSelectedClasses] = useState([])
  const [courses, setCourses] = useState(null)
  const formRef = useRef(null)
  const { addAPP, successApp, errorApp } = useApplication()

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/api/courses')
      const json = await response.json()

      if (response.ok) {
        setCourses(json)
      }
    }

    fetchCourses()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setSelectedClasses([])
    setFirstName('')
    setLastName('')
    setStudentID('')
    setUMKCEmail('')
    setDegree('')
    setGpa('')
    formRef.current.reset()
  }

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

  const handleApplication = (e) => {
    e.preventDefault()
    const application = {
      firstName: firstName,
      lastName: lastName,
      studentID: studentID,
      umkcEmail: umkcEmail,
      degree: degree,
      gpa: gpa,
      major: major,
      level: level,
      semester: semester,
      isGTA: isGTA,
      resumeFile: resumeFile,
    }

    for (let cls of selectedClasses) {
      const applications = courses.find(
        (course) => course._id === cls._id
      ).applications
      addAPP(cls._id, applications, application)
    }
  }

  return (
    <div className="overflow-auto h-5/6 bg-slate-200">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="w-3/4 p-2 text-2xl font-bold bg-umkc_light_blue rounded-b-md text-umkc_yellow">
          CSEE GTA/Grader Application
        </h2>
        <form onSubmit={onSubmit} ref={formRef} className="text-xl font-bold">
          <fieldset className="flex flex-col items-center justify-center grid-cols-2 gap-3 md:grid justify-items-center md:gap-6 md:text-left md:mt-5 lg:grid-cols-3">
            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  First Name:
                </h3>
              </label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
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
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
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
                onChange={(e) => setStudentID(e.target.value)}
                value={studentID}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
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
                onChange={(e) => setUMKCEmail(e.target.value)}
                value={umkcEmail}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label>
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Degree:
                </h3>
              </label>
              <input
                type="text"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
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
              <input
                type="float"
                onChange={(e) => setGpa(e.target.value)}
                value={gpa}
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
                // className={emptyFields.includes('title') ? 'error' : ''}
                required
              />
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="major">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Current Major:
                </h3>
              </label>
              <select
                id="major"
                className="w-full p-2 bg-white border-2 rounded-md border-umkc_light_blue"
                onChange={(e) => setMajor(e.target.value)}
                required
              >
                <option value="">--Select an option--</option>
                <option value="CS">CS</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="level">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500'>
                  Current Level:
                </h3>
              </label>
              <select
                id="level"
                className="w-full p-2 bg-white border-2 rounded-md border-umkc_light_blue"
                onChange={(e) => setLevel(e.target.value)}
                required
              >
                <option value="">--Select an option--</option>
                <option value="BS">BS</option>
                <option value="MS">MS</option>
                <option value="PHD">PHD</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="semester">
                <h3>What term are you applying for? </h3>
              </label>
              <select
                id="semester"
                className="w-full p-2 bg-white border-2 rounded-md border-umkc_light_blue"
                onChange={(e) => setSemester(e.target.value)}
                required
              >
                <option value="">--Select an option--</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label className="flex items-center justify-center" htmlFor="GTA">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 '>
                  Do you have a GTA certificate/ previous degree from US
                  institution?
                </h3>
              </label>
              <select
                id="GTA"
                className="w-full p-2 bg-white border-2 rounded-md border-umkc_light_blue"
                onChange={(e) => setIsGTA(e.target.value)}
                required
              >
                <option value="">--Select an option--</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div className="flex flex-col justify-end w-3/4 h-full gap-3">
              <label htmlFor="resume">
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 '>
                  Resume Document
                </h3>
              </label>
              <input
                type="text"
                id="resume"
                name="resume"
                className="w-full p-2 border-2 rounded-md border-umkc_light_blue"
                onChange={(e) => setResumeFile(e.target.value)}
              />
            </div>

            <div className="w-5/6 md:col-span-2 lg:col-span-3">
              <label
                className="flex items-center justify-center"
                htmlFor="Classes"
              >
                <h3 className='before:content-["*"] before:mr-0.5 before:text-red-500 w-3/4'>
                  Please select up to 5 classes you'd like to apply for:
                </h3>
              </label>
              <div className="grid grid-cols-2 gap-3 p-2 overflow-auto border-2 lg:grid-cols-3 h-60 border-umkc_light_blue ">
                {courses &&
                  courses.map(({ _id, code, semester, applications }) => {
                    return (
                      <div
                        key={_id}
                        className={` p-2  border-2 rounded-md border-umkc_light_blue text-center ${
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

            <button
              className="p-2 text-2xl font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue md:col-span-2 lg:col-span-3"
              onClick={handleApplication}
            >
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
