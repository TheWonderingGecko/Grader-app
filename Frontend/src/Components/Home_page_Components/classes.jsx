import { useEffect, useState } from 'react'
import '../../CSS/classes.css'
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
    <>
      {!enableFilter && (
        <button className=" btn filter-btn" onClick={filterHandler}>
          Filter
        </button>
      )}
      <div className="div_container">
        {enableFilter && (
          <form className="filter">
            <button className="btn close-btn" onClick={filterHandler}>
              Close
            </button>
            <legend>
              <h3>Major</h3>
            </legend>
            <fieldset>
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

            <fieldset>
              <legend>
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
                grader
              </label>
            </fieldset>

            <fieldset>
              <legend>
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

            <fieldset>
              <legend>
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
                UnderGraduate
              </label>

              <label htmlFor="Graduate">
                <input
                  type="radio"
                  id="Graduate"
                  name="level"
                  value="Graduate"
                  checked={selectedLevel === 'Graduate'}
                  onClick={() => sortByLevel('Graduate')}
                />
                Graduate
              </label>
            </fieldset>
          </form>
        )}

        <div className="classes">
          {console.log(allClasses)}
          {!isLoading &&
            filteredClasses.map(
              ({
                _id,
                code,
                name,
                major,
                notes,
                position,
                semester,
                level,
              }) => {
                return (
                  <>
                    <div
                      key={_id}
                      className="class-container"
                      onClick={() => {
                        showMore === _id ? setShowMore('') : setShowMore(_id)
                      }}
                    >
                      <div className="class">
                        <p className="class-name">
                          <strong>{code}</strong>
                        </p>
                        <p className="class-sem">
                          (<strong>{semester}</strong>)
                        </p>
                      </div>

                      {showMore === _id && (
                        <div className="Extra-details">
                          <p className="position">Position: {position}</p>
                          <p className="Major">Course Major: {major}</p>
                          <p className="Notes">Notes: {notes}</p>
                          <a href="" target="_blank">
                            Course Description
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                )
              }
            )}
        </div>
      </div>
    </>
  )
}
export default Classes
