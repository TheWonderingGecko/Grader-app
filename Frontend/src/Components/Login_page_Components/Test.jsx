import '../../CSS/loginPage.css'

import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div className="loginPage-content">
      <Link to="/">
        <strong>Return to Homepage</strong>
      </Link>
      <Link to="/application">
        <strong>Go to Application page</strong>
      </Link>
      <Link to="/admin">
        <strong>Go to Admin page</strong>
      </Link>
    </div>
  )
}
export default Test
