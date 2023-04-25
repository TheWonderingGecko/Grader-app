import Admin_Link_Test from '../Components/Admin_page_components/Admin_Link_Test'
import useAuth from '../hooks/useAuth'
import useAdmin from '../hooks/useAdmin'

const Admin = () => {
  const isAuthenticated = useAuth()

  if (!isAuthenticated) {
    return null
  }
  useAdmin()

  return (
    <div className="fade-in">
      <Admin_Link_Test />
    </div>
  )
}
export default Admin
