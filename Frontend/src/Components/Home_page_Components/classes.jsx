import { classes } from './HomeData'
import { useState } from 'react'
import '../../CSS/classes.css'

const Classes = () => {
  // const [showMore, setShowMore] = useState('')

  // const changeDetails = () => {
  //   setShowMore('Extra-details')
  // }

  return (
    <div className="classes">
      {classes.map(({ id, name, sem, position, Notes, Course_Description }) => {
        return (
          <>
            <label
              key={id}
              className="class-container"
              // onClick={() => setShowMore(id)}
            >
              <div className="class">
                <p className="class-name">
                  <strong>{name}</strong>
                </p>
                <p className="class-sem">
                  (<strong>{sem}</strong>)
                </p>
              </div>

              {/* {showMore == id && ( */}
              <div className="Extra-details">
                <p className="position">Position: {position}</p>
                <p className="Notes">Notes: {Notes}</p>
                <a href={Course_Description} target="_blank">
                  Course Description
                </a>
              </div>
              {/* )} */}
            </label>
          </>
        )
      })}
    </div>
  )
}
export default Classes
