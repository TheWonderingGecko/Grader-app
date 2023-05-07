import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  }, [token, navigate])

  return token ? true : null
}

export default useAuth
