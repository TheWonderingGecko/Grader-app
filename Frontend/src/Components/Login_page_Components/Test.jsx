import '../../CSS/loginPage.css'

import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div className="loginPage-content">
      <Link to="/">
        <strong>Return to Homepage</strong>
      </Link>
    </div>
  )
}
export default Test
