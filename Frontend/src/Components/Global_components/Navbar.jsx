import logo from '../../assets/Logo.png'
import '../../CSS/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=" bg-umkc_light_blue flex justify-between sticky top-0 items-center border-b-8 border-umkc_yellow">
      <div className="flex flex-col  items-baseline pl-4 text-white  ">
        <img src={logo} className="w-20 md:w-80" />
        <p className="md:text-6xl lg:9xl md:pl-6 ">Science and Engineering</p>
      </div>
      <Link to="/login">
        <button
          type="button"
          className="btn login-btn w-32 text-sm mr-4 h-10 font-semibold md:w-auto md:h-fit md:text-3xl"
        >
          {' '}
          <strong>APPLY NOW</strong>
        </button>
      </Link>
    </header>
  )
}
export default Navbar
