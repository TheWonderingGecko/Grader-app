import { classes } from './HomeData'
import { useState } from 'react'
import '../../CSS/classes.css'

const Classes = () => {
  const [showMore, setShowMore] = useState('')
  const [selectedMajor, setSelectedMajor] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')
  const [allClasses, setAllClasses] = useState(classes)
  const [filteredClasses, setFilteredClasses] = useState(classes)

  // const changeDetails = () => {
  //   setShowMore('Extra-details')
  // }

  const sortByMajor = (Major) => {
    setShowMore('')
    if (selectedMajor === Major) {
      setFilteredClasses(
        allClasses.filter((cls) => {
          return (
            (!selectedSemester || cls.sem === selectedSemester) &&
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
            (!selectedSemester || cls.sem === selectedSemester) &&
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
      const newClasses = allClasses.filter((cls) => cls.sem === semester)
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
            (!selectedSemester || cls.sem === selectedSemester) &&
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
            (!selectedSemester || cls.sem === selectedSemester) &&
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
            (!selectedSemester || cls.sem === selectedSemester) &&
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
            (!selectedSemester || cls.sem === selectedSemester) &&
            (!selectedPosition || cls.position === selectedPosition)
          )
        })
      )
      setSelectedLevel(level)
    }
  }

  return (
    <>
      <div className="div_container">
        <form className="filter">
          <fieldset>
            <legend>
              <h3>Major</h3>
            </legend>
            <label htmlFor="CS">
              <input
                type="radio"
                id="CS"
                name="Major"
                value="CS"
                checked={selectedMajor === 'CS'}
                onClick={() => sortByMajor('CS')}
              />
              CS
            </label>

            <label htmlFor="ECE">
              <input
                type="radio"
                id="ECE"
                name="Major"
                value="ECE"
                checked={selectedMajor === 'ECE'}
                onClick={() => sortByMajor('ECE')}
              />
              ECE
            </label>

            <label htmlFor="IT">
              <input
                type="radio"
                id="IT"
                name="Major"
                value="IT"
                checked={selectedMajor === 'IT'}
                onClick={() => sortByMajor('IT')}
              />
              IT
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Position</h3>
            </legend>
            <label htmlFor="Instructor">
              <input
                type="radio"
                id="Instructor"
                name="position"
                value="Instructor"
                checked={selectedPosition === 'Instructor'}
                onClick={() => sortByPosition('Instructor')}
              />
              Instructor
            </label>

            <label htmlFor="Grader">
              <input
                type="radio"
                id="Grader"
                name="position"
                value="Grader"
                checked={selectedPosition === 'Grader'}
                onClick={() => sortByPosition('Grader')}
              />
              Grader
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Semester</h3>
            </legend>
            <label htmlFor="Fall">
              <input
                type="radio"
                id="Fall"
                name="semester"
                value="Fall"
                checked={selectedSemester === 'Fall'}
                onClick={() => sortBySemester('Fall')}
              />
              Fall
            </label>

            <label htmlFor="Spring">
              <input
                type="radio"
                id="Spring"
                name="semester"
                value="Spring"
                checked={selectedSemester === 'Spring'}
                onClick={() => sortBySemester('Spring')}
              />
              Spring
            </label>

            <label htmlFor="Summer">
              <input
                type="radio"
                id="Summer"
                name="semester"
                value="Summer"
                checked={selectedSemester === 'Summer'}
                onClick={() => sortBySemester('Summer')}
              />
              Summer
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Level</h3>
            </legend>
            <label htmlFor="Undergraduate">
              <input
                type="radio"
                id="Undergraduate"
                name="level"
                value="Undergraduate"
                checked={selectedLevel === 'Undergraduate'}
                onClick={() => sortByLevel('Undergraduate')}
              />
              Undergraduate
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

        <div className="classes">
          {filteredClasses.map(
            ({ id, name, sem, position, Notes, Course_Description, major }) => {
              return (
                <>
                  <label
                    key={id}
                    className="class-container"
                    onClick={() => setShowMore(id)}
                  >
                    <div className="class">
                      <p className="class-name">
                        <strong>{name}</strong>
                      </p>
                      <p className="class-sem">
                        (<strong>{sem}</strong>)
                      </p>
                    </div>

                    {showMore == id && (
                      <div className="Extra-details">
                        <p className="position">Position: {position}</p>
                        <p className="Major">Course Major: {major}</p>
                        <p className="Notes">Notes: {Notes}</p>
                        <a href={Course_Description} target="_blank">
                          Course Description
                        </a>
                      </div>
                    )}
                  </label>
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
