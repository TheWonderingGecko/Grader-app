import { useEffect, useState } from 'react'
import BigRoo from '../../assets/Big_roo.png'

import { useCoursesContext } from '../../hooks/useCoursesContext'

const Classes = () => {
  const [showMore, setShowMore] = useState('')
  const [selectedMajor, setSelectedMajor] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')
  const [courses, setCourses] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [allClasses, setAllClasses] = useState(courses)
  const [filteredClasses, setFilteredClasses] = useState(courses)
  const [enableFilter, setEnableFilter] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/api/courses')
      const json = await response.json()

      if (response.ok) {
        setIsLoading(false)
        setCourses(json)
        setAllClasses(json)
        setFilteredClasses(json)
        console.log(courses)
      }
    }

    fetchCourses()
  }, [])

  const sortByMajor = (Major) => {
    setShowMore('')
    if (selectedMajor === Major) {
      setFilteredClasses(
        allClasses.filter((cls) => {
          return (
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedPosition || cls.position === selectedPosition) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedMajor(null)
    } else {
      const newClasses = allClasses.filter((cls) => cls.major === Major)
      setFilteredClasses(
        newClasses.filter((cls) => {
          return (
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedPosition || cls.position === selectedPosition) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedMajor(Major)
    }
  }

  const sortBySemester = (semester) => {
    setShowMore('')
    if (selectedSemester === semester) {
      setFilteredClasses(
        allClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedPosition || cls.position === selectedPosition) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedSemester(null)
    } else {
      const newClasses = allClasses.filter((cls) => cls.semester === semester)
      setFilteredClasses(
        newClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedPosition || cls.position === selectedPosition) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedSemester(semester)
    }
  }

  const sortByPosition = (position) => {
    setShowMore('')
    if (selectedPosition === position) {
      setFilteredClasses(
        allClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedPosition(null)
    } else {
      const newClasses = allClasses.filter((cls) => cls.position === position)
      setFilteredClasses(
        newClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedLevel || cls.level === selectedLevel)
          )
        })
      )
      setSelectedPosition(position)
    }
  }

  const sortByLevel = (level) => {
    setShowMore('')
    if (selectedLevel === level) {
      setFilteredClasses(
        allClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedPosition || cls.position === selectedPosition)
          )
        })
      )
      setSelectedLevel(null)
    } else {
      const newClasses = allClasses.filter((cls) => cls.level === level)
      setFilteredClasses(
        newClasses.filter((cls) => {
          return (
            (!selectedMajor || cls.major === selectedMajor) &&
            (!selectedSemester || cls.semester === selectedSemester) &&
            (!selectedPosition || cls.position === selectedPosition)
          )
        })
      )
      setSelectedLevel(level)
    }
  }

  const filterHandler = () => {
    setEnableFilter(!enableFilter)
    setSelectedMajor('')
    setSelectedSemester('')
    setSelectedPosition('')
    setSelectedLevel('')
    setShowMore('')
    setFilteredClasses(courses)
  }

  return (
    <div className="relative flex items-start w-screen h-screen overflow-hidden">
      <div className="relative flex flex-col items-start w-full text-center h-5/6 basis-1/3">
        <img
          src={BigRoo}
          alt="Big Roo"
          className="absolute h-32 bottom-6 md:w-full md:h-48 lg:hidden"
        />
        {!enableFilter && (
          <div className="flex justify-center w-full">
            <button
              className="w-3/4 p-2 font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue"
              onClick={filterHandler}
            >
              Filter
            </button>
          </div>
        )}

        {enableFilter && (
          <form className="flex flex-col gap-2 p-4 bg-white border-4 border-l-0 rounded-r-lg border-umkc_light_blue md:w-full">
            <button
              className="p-2 font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue"
              onClick={filterHandler}
            >
              Close
            </button>

            <fieldset className="flex flex-col items-start gap-1 text-lg md:flex-row md:gap-4">
              <legend className="text-xl font-semibold">
                <h3>Major</h3>
              </legend>
              <label htmlFor="cs">
                <input
                  type="radio"
                  id="cs"
                  name="Major"
                  value="cs"
                  checked={selectedMajor === 'cs'}
                  onClick={() => sortByMajor('cs')}
                />
                CS
              </label>

              <label htmlFor="ece">
                <input
                  type="radio"
                  id="ece"
                  name="Major"
                  value="ece"
                  checked={selectedMajor === 'ece'}
                  onClick={() => sortByMajor('ece')}
                />
                ECE
              </label>

              <label htmlFor="it">
                <input
                  type="radio"
                  id="it"
                  name="Major"
                  value="it"
                  checked={selectedMajor === 'it'}
                  onClick={() => sortByMajor('it')}
                />
                IT
              </label>
            </fieldset>

            <fieldset className="flex flex-col items-start gap-1 text-lg md:flex-row md:gap-4">
              <legend className="text-xl font-semibold">
                <h3>Position</h3>
              </legend>
              <label htmlFor="instructor">
                <input
                  type="radio"
                  id="instructor"
                  name="position"
                  value="instructor"
                  checked={selectedPosition === 'instructor'}
                  onClick={() => sortByPosition('instructor')}
                />
                Instructor
              </label>

              <label htmlFor="grader">
                <input
                  type="radio"
                  id="grader"
                  name="position"
                  value="grader"
                  checked={selectedPosition === 'grader'}
                  onClick={() => sortByPosition('grader')}
                />
                Grader
              </label>
            </fieldset>

            <fieldset className="flex flex-col items-start gap-1 text-lg md:flex-row md:gap-4">
              <legend className="text-xl font-semibold">
                <h3>Semester</h3>
              </legend>
              <label htmlFor="fall">
                <input
                  type="radio"
                  id="fall"
                  name="semester"
                  value="fall"
                  checked={selectedSemester === 'fall'}
                  onClick={() => sortBySemester('fall')}
                />
                Fall
              </label>

              <label htmlFor="spring">
                <input
                  type="radio"
                  id="spring"
                  name="semester"
                  value="spring"
                  checked={selectedSemester === 'spring'}
                  onClick={() => sortBySemester('spring')}
                />
                Spring
              </label>

              <label htmlFor="summer">
                <input
                  type="radio"
                  id="summer"
                  name="semester"
                  value="summer"
                  checked={selectedSemester === 'summer'}
                  onClick={() => sortBySemester('summer')}
                />
                Summer
              </label>
            </fieldset>

            <fieldset className="flex flex-col items-start gap-1 text-lg md:flex-row md:gap-4 ">
              <legend className="text-xl font-semibold">
                <h3>Level</h3>
              </legend>
              <label htmlFor="undergraduate">
                <input
                  type="radio"
                  id="undergraduate"
                  name="level"
                  value="underGraduate"
                  checked={selectedLevel === 'undergraduate'}
                  onClick={() => sortByLevel('undergraduate')}
                />
                B.S
              </label>

              <label htmlFor="graduate">
                <input
                  type="radio"
                  id="graduate"
                  name="level"
                  value="graduate"
                  checked={selectedLevel === 'graduate'}
                  onClick={() => sortByLevel('graduate')}
                />
                MS
              </label>
            </fieldset>
          </form>
        )}
      </div>

      <div className=" bg-center grid grid-cols-1 gap-3 overflow-auto h-3/4 justify-items-center basis-2/3 md:grid-cols-2 lg:grid-cols-3 lg:bg-[url('../assets/Big_roo.png')] lg:gap-8 ">
        {console.log(allClasses)}
        {!isLoading &&
          filteredClasses.map(
            ({ _id, code, name, major, notes, position, semester, level }) => {
              return (
                <div
                  key={_id}
                  className="text-center bg-white border-4 rounded-lg shadow-xl w-60 border-umkc_light_blue h-fit lg:hover:bg-umkc_dark_blue lg:hover:text-umkc_yellow group"
                  onClick={() => {
                    showMore === _id ? setShowMore('') : setShowMore(_id)
                  }}
                >
                  <div className="">
                    <div className="flex flex-wrap items-center justify-between h-20 p-4 text-lg">
                      <p className="">
                        <strong>{code}</strong>
                      </p>
                      <p className="uppercase ">
                        (<strong>{semester}</strong>)
                      </p>
                    </div>

                    {showMore === _id && (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 font-semibold text-l">
                        <p className="">Position: {position}</p>
                        <p className="">Course Major: {major}</p>
                        <p className="">Notes: {notes}</p>
                        <a
                          href="https://catalog.umkc.edu/course-offerings/undergraduate/comp-sci/"
                          target="_blank"
                          className="underline text-umkc_light_blue group-hover:text-umkc_yellow"
                        >
                          Course Description
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}
export default Classes
