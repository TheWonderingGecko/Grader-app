import logo from '../../Images/Logo.png'
import '../../CSS/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="Nav-bar">
      <div className="school_department">
        <img src={logo} className="school-name " />
        <p className="department">Science and Engineering</p>
      </div>
      <Link to="/login">
        <button type="button" className="btn btn-login">
          {' '}
          <strong>APPLY NOW</strong>
        </button>
      </Link>
    </header>
  )
}
export default Navbar
