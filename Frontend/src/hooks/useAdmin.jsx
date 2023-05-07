import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAdmin = () => {
  const userString = localStorage.getItem('user')
  const user = JSON.parse(userString)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.position !== 'Admin') {
      navigate('/login', { replace: true })
    }
  }, [user, navigate])

  return user.position !== 'Admin' ? true : null
}

export default useAdmin
