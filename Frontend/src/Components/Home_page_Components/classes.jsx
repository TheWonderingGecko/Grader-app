import { classes } from './HomeData'
import '../../CSS/classes.css'

const Classes = () => {
  return (
    <div className="classes">
      {classes.map(({ id, name, sem, postion, Notes, Course_Description }) => {
        return (
          <>
            <label key={id} className="class">
              <>
                <p className="class-name">
                  <strong>{name}</strong>
                </p>
                <p className="class-sem">
                  (<strong>{sem}</strong>)
                </p>
              </>
              <div className="Extra-details">details</div>
            </label>
          </>
        )
      })}
    </div>
  )
}
export default Classes
