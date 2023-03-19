import { useState } from 'react'

export const useLogin = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  const login = async (email, password) => {
    // setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const json = await response.json()
      setError(json.message)
    }

    if (response.ok) {
      //   const json = await response.json()
      setSuccess(true)
      //save user to local storage
      //   localStorage.setItem('user', JSON.stringify(json))

      //   //update the authContext
      //   dispatch({ type: 'LOGIN', payload: json })
    }
  }
  return { login, success, error }
}
