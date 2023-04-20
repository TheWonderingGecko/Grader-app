import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'

export const useLogin = () => {
  const [error, setError] = useState('')
  const [user, setUser] = useState('')
  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(user) // This will log the updated value of the `user` state.
  }, [user])

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
      const json = await response.json()
      const value = json

      console.log(json)
      setUser(value)

      console.log(user)
      setSuccess(true)
      //save user to local storage
      //   localStorage.setItem('user', JSON.stringify(json))

      //   //update the authContext
      //   dispatch({ type: 'LOGIN', payload: json })
    }
    console.log(user)
  }

  return { login, success, error, user_value: user }
}
