import { classes } from './HomeData'
import { useState } from 'react'
import '../../CSS/classes.css'

const Classes = () => {
  const [showMore, setShowMore] = useState('')
  const [classesData, setclasssesData] = useState(classes)

  // const changeDetails = () => {
  //   setShowMore('Extra-details')
  // }

  const removeItemsByValue = (Current_Level) => {
    let newClasses = classesData.filter(
      (classes) => classes.Current_Level !== Current_Level
    )
    setclasssesData(newClasses)
  }

  return (
    <>
      <div className="div_container">
        <form className="filter">
          <label htmlFor="myLevel">BS</label>
          <input
            type="radio"
            id="myLevel"
            className="level"
            onClick={() => removeItemsByValue('BS')}
          />
        </form>

        <div className="classes">
          {classesData.map(
            ({ id, name, sem, position, Notes, Course_Description }) => {
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
