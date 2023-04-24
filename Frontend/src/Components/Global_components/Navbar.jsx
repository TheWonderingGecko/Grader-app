import logo from '../../assets/Logo.png'
import '../../CSS/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b-8 bg-umkc_light_blue border-umkc_yellow ">
      <div
        className="flex flex-col items-baseline pl-4 text-white cursor-pointer md:justify-start"
        onClick={handleClick}
      >
        <img src={logo} className="w-20 md:w-20" />
        <p className="md:text-xl lg:9xl md:pl-1 ">Science and Engineering</p>
      </div>
      <Link to="/login">
        <button
          type="button"
          className="w-32 h-10 mr-4 text-sm font-semibold rounded-md btn login-btn md:w-auto md:h-fit md:text-xl md:p-2"
        >
          {' '}
          <strong>APPLY NOW</strong>
        </button>
      </Link>

      <button
        type="button"
        className="w-32 h-10 mr-4 text-sm font-semibold rounded-md btn login-btn md:w-auto md:h-fit md:text-xl md:p-2"
        onClick={handleLogout}
      >
        Logout{' '}
      </button>
    </header>
  )
}
export default Navbar
