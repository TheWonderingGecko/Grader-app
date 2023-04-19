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
  const [allClasses, setAllClasses] = useState(null)
  const [filteredClasses, setFilteredClasses] = useState(null)
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

  const clearFilter = (e) => {
    e.preventDefault()
    setSelectedMajor('')
    setSelectedSemester('')
    setSelectedPosition('')
    setSelectedLevel('')
    setShowMore('')
    setFilteredClasses(courses)
  }

  const setFilterHandler = () => {
    setEnableFilter(!enableFilter)
  }

  return (
    <div className="relative flex items-start w-screen h-full ">
      <div className="relative flex flex-col items-start w-full h-full overflow-auto text-center basis-1/3">
        {!enableFilter && (
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <button
              className="w-3/4 p-2 font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue"
              onClick={setFilterHandler}
            >
              Filter
            </button>

            <button
              className="w-3/4 p-2 font-bold rounded-lg shadow-md bg-umkc_light_blue text-umkc_yellow"
              onClick={clearFilter}
            >
              Clear
            </button>
          </div>
        )}

        {enableFilter && (
          <div className="fixed top-0 z-30 flex items-center justify-center w-screen h-screen md:h-full bg-black/95 md:w-full md:static md:bg-white md:border-l-0 md:rounded-r-lg md:border-umkc_light_blue md:border-4 ">
            <form
              className="relative flex flex-col gap-2 p-4 bg-white border-4 rounded-lg md:rounded-r-lg md:border-l-0 border-umkc_light_blue md:w-full md:border-none"
              onSubmit={clearFilter}
            >
              <button
                className="p-2 font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue"
                onClick={setFilterHandler}
              >
                Close
              </button>

              <button className="hidden p-2 font-bold rounded-lg shadow-md md:block bg-umkc_light_blue text-umkc_yellow">
                Clear
              </button>

              <fieldset className="flex items-start gap-1 text-lg md:gap-4">
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

              <fieldset className="flex items-start gap-1 text-lg md:flex-col md:gap-4">
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
            </form>
          </div>
        )}
        <img
          src={BigRoo}
          alt="Big Roo"
          className="h-32 md:w-full md:h-48 lg:hidden"
        />
      </div>

      <div className=" h-full w-full  grid grid-cols-1 gap-3 overflow-auto  justify-items-center basis-2/3 md:grid-cols-2 landscape:grid-cols-2 lg:grid-cols-3 lg:bg-[url('../assets/Big_roo.png')] lg:gap-8  lg:landscape:h-[70vh] rounded-md lg:landscape:bg-[10%,60%] p-2 pt-0">
        {!isLoading &&
          filteredClasses.map(
            ({ _id, code, name, major, notes, position, semester, level }) => {
              return (
                <div
                  key={_id}
                  className="w-5/6 text-center bg-white border-4 rounded-lg shadow-xl cursor-pointer border-umkc_light_blue h-fit lg:hover:bg-umkc_dark_blue lg:hover:text-umkc_yellow group lg:w-60 "
                  onClick={() => {
                    showMore === _id ? setShowMore('') : setShowMore(_id)
                  }}
                >
                  <div className="h-fit min-h-[5rem]">
                    <div className="flex flex-wrap items-center justify-between p-4 text-lg text-left md:h-20">
                      <p className="">
                        <strong>{code}</strong>
                      </p>
                      <p className="uppercase ">
                        (<strong>{semester}</strong>)
                      </p>
                    </div>

                    {showMore === _id && (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 font-semibold text-left text-l">
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
