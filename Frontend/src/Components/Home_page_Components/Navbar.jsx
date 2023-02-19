import logo from '../../Images/Logo.png'
import '../../CSS/Navbar.css'

const Navbar = () => {
  return (
    <header className="Nav-bar">
      <img src={logo} className="school-name " />
      <button type="button" className="Login-btn">
        Login <span className="material-symbols-outlined">login</span>
      </button>
    </header>
  )
}
export default Navbar
