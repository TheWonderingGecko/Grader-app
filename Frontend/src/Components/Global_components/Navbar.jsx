import logo from '../../assets/Logo.png'
import '../../CSS/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b-8 bg-umkc_light_blue border-umkc_yellow">
      <div className="flex flex-col items-baseline pl-4 text-white ">
        <img src={logo} className="w-20 md:w-80" />
        <p className="md:text-6xl lg:9xl md:pl-6 ">Science and Engineering</p>
      </div>
      <Link to="/login">
        <button
          type="button"
          className="w-32 h-10 mr-4 text-sm font-semibold btn login-btn md:w-auto md:h-fit md:text-3xl"
        >
          {' '}
          <strong>APPLY NOW</strong>
        </button>
      </Link>
    </header>
  )
}
export default Navbar
