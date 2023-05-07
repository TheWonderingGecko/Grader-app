import logo from '../../assets/Logo.png'
import '../../CSS/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

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
        <img src={logo} className="w-20 lg:w-40" />
        {!user && (
          <p className="md:text-xl lg:9xl md:pl-1 ">Science and Engineering</p>
        )}
      </div>
      {!user && (
        <Link to="/login">
          <button
            type="button"
            className="p-2 mr-4 text-sm font-semibold rounded-md bg-umkc_yellow text-umkc_light_blue lg:text-2xl hover:bg-umkc_dark_yellow "
          >
            {' '}
            <strong>APPLY NOW</strong>
          </button>
        </Link>
      )}

      {user && (
        <div className="flex items-end justify-start gap-2 px-2 py-2 font-semibold text-white lg:text-2xl ">
          <span>{user}</span>
          <span
            className="cursor-pointer material-symbols-outlined"
            onClick={handleLogout}
          >
            logout
          </span>
        </div>
      )}
    </header>
  )
}
export default Navbar
