import '../../CSS/adminPage.css'
import '../../CSS/tailwind.css'
import { Link } from 'react-router-dom'

const Admin_Link_Test = () => {
  return (
    <div className="adminPage-content lg:bg-red-500">
      <Link to="/">
        <strong>Return to Homepage</strong>
      </Link>
    </div>
  )
}
export default Admin_Link_Test
