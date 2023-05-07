import { useNavigation } from 'react-router-dom'

const useLogout = () => {
  const navigate = useNavigation()
  localStorage.removeItem('token')
  navigate('/')
}
export default useLogout
