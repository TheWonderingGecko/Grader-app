import '../../CSS/tailwind.css'
import Position_card from './Position_card'
import { classes } from '../../HomeData'
import { useState, useEffect } from 'react'
import BigRoo from '../../assets/Big_roo.png'
import { usePostPosition } from '../../hooks/usePostPosition'

const Admin_Link_Test = () => {
  const [newClass, setNewClass] = useState(null)

  const [createCourse, setCreateCourse] = useState(false)
  const { coursePost, success, error } = usePostPosition()

  useEffect(() => {
    const getClasses = async () => {
      const classesFromServer = await fetch('http://localhost:5000/api/courses')
      const data = await classesFromServer.json()

      if (classesFromServer.ok) {
        setNewClass(data)
      }
    }
    getClasses()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await coursePost(
      //this is the function from the hook
      e.target.courseCode.value,
      e.target.courseName.value,
      e.target.courseMajor.value,
      e.target.courseNotes.value,
      e.target.coursePosition.value,
      e.target.courseSemester.value
    )

    setCreateCourse(false)
  }

  return (
    <div className="relative flex h-screen overflow-hidden font-bold text-center text-black lg:text-xl ">
      <div className="flex flex-col items-center h-full basis-1/4 bg-slate-400 md:justify-start md:pl-4 lg:basis-1/6 ">
        <img src={BigRoo} alt="Umkc" />

        <form className="flex flex-col gap-4 pl-1 text-center md:text-left md:p-2">
          <legend className="">
            <h3>Major</h3>
          </legend>
          <fieldset className="flex flex-col items-start justify-between pb-4 md:flex-row md:gap-2">
            <label htmlFor="cs" className="">
              <input type="radio" id="cs" name="Major" value="cs" />
              CS
            </label>

            <label htmlFor="ece">
              <input type="radio" id="ece" name="Major" value="ece" />
              ECE
            </label>

            <label htmlFor="it">
              <input type="radio" id="it" name="Major" value="it" />
              IT
            </label>
          </fieldset>

          <legend className="pb-2">
            <h3>Position</h3>
          </legend>
          <fieldset className="flex flex-col items-start justify-start pb-4 md:flex-row md:gap-2">
            <label htmlFor="instructor">
              <input
                type="radio"
                id="instructor"
                name="position"
                value="instructor"
              />
              Inst.
            </label>

            <label htmlFor="grader">
              <input type="radio" id="grader" name="position" value="grader" />
              grader
            </label>
          </fieldset>

          <legend className="pb-2">
            <h3>Semester</h3>
          </legend>

          <fieldset className="flex flex-col items-start pb-4 md:flex-row md:gap-2">
            <label htmlFor="fall">
              <input type="radio" id="fall" name="semester" value="fall" />
              Fall
            </label>

            <label htmlFor="spring">
              <input type="radio" id="spring" name="semester" value="spring" />
              Spring
            </label>

            <label htmlFor="summer">
              <input type="radio" id="summer" name="semester" value="summer" />
              Summer
            </label>
          </fieldset>

          <legend className="pb-2 ">
            <h3>Level</h3>
          </legend>
          <fieldset className="flex flex-col items-start md:flex-row md:gap-2">
            <label htmlFor="undergraduate">
              <input
                type="radio"
                id="undergraduate"
                name="level"
                value="underGraduate"
              />
              BS
            </label>

            <label htmlFor="graduate">
              <input type="radio" id="graduate" name="level" value="graduate" />
              MS
            </label>

            <label htmlFor="Doctorate">
              <input
                type="radio"
                id="Doctorate"
                name="level"
                value="Doctorate"
              />
              PHD
            </label>
          </fieldset>
        </form>
        <button
          className="w-3/4 mt-8 rounded-md bg-umkc_yellow text-umkc_dark_blue"
          onClick={() => setCreateCourse(true)}
        >
          Open Position
        </button>

        {createCourse && (
          <div className="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black/95">
            <div className="relative z-50 flex flex-col w-5/6 p-4 overflow-hidden border-4 rounded-lg bg-slate-100 border-umkc_light_blue gap-y-4">
              <div className="flex justify-between px-2 ">
                <button
                  onClick={() => setCreateCourse(false)}
                  className="px-4 py-2 font-bold rounded-md bg-umkc_yellow text-umkc_dark_blue"
                >
                  Close
                </button>
              </div>
              <form
                className="flex flex-col gap-2 text-lg h-[50vh] overflow-auto"
                onSubmit={handleSubmit}
                handleSubmit
              >
                <div className="text-lg font-bold text-left">
                  <label htmlFor="courseCode">Course code:</label>
                  <input
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    className="w-full p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                    required
                  />
                </div>
                <div className="text-lg font-bold text-left">
                  <label htmlFor="courseName">Course Name:</label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    className="w-full p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                    required
                  />
                </div>
                <div className="text-lg font-bold text-left">
                  <label htmlFor="courseMajor">Course Major:</label>
                  <input
                    type="text"
                    id="courseMajor"
                    name="courseMajor"
                    className="w-full p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                    required
                  />
                </div>

                <div className="text-lg font-bold text-left">
                  <label htmlFor="coursePosition">Course Position:</label>
                  <input
                    type="textarea"
                    id="coursePosition"
                    name="coursePosition"
                    className="w-full p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                    required
                  />
                </div>

                <div className="text-lg font-bold text-left">
                  <label htmlFor="courseSemester">Course Semester:</label>
                  <input
                    type="text"
                    id="courseSemester"
                    name="courseSemester"
                    className="w-full p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                    required
                  />
                </div>

                <div className="text-lg font-bold text-left">
                  <label htmlFor="courseNotes">Course Notes:</label>
                  <input
                    type="text"
                    id="courseNotes"
                    name="courseNotes"
                    className="w-full h-40 p-2 border-2 rounded-md outline-none border-umkc_light_blue"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold rounded-md bg-umkc_yellow text-umkc_dark_blue"
                >
                  Create Position
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col basis-3/4 bg-slate-200 lg:basis-5/6">
        <div className="flex items-center justify-center p-4 text-3xl border-b-2 shadow-lg border-umkc_light_blue bg-umkc_light_blue text-umkc_yellow">
          Open Courses
        </div>
        <div className="grid grid-cols-1 gap-3 pt-4 overflow-auto h-5/6 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:h-3/4 ">
          {newClass &&
            newClass.map(
              ({
                _id,
                code,
                name,
                major,
                notes,
                position,
                semester,
                applications,
                level,
              }) => (
                <Position_card
                  title={code}
                  sem={semester}
                  position={position}
                  notes={notes}
                  major={major}
                  applications={applications}
                  id={_id}
                  key={_id}
                />
              )
            )}
        </div>
      </div>
    </div>
  )
}
export default Admin_Link_Test
