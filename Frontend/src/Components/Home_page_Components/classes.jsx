import { classes } from './HomeData'
import '../../CSS/classes.css'

const Classes = () => {
  return (
    <div className="classes">
      {classes.map(({ id, name, sem }) => {
        return (
          <label key={id} className="class">
            <p className="class-name">
              <strong>{name}</strong>
            </p>
            <p className="class-sem">
              (<strong>{sem}</strong>)
            </p>
          </label>
        )
      })}
    </div>
  )
}
export default Classes
