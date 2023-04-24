import Admin_Link_Test from '../Components/Admin_page_components/Admin_Link_Test'
import useAuth from '../hooks/useAuth'

const Admin = () => {
  useAuth()
  return <Admin_Link_Test />
}
export default Admin
