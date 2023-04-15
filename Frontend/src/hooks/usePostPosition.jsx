import { useState } from 'react'

export const usePostPosition = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  const coursePost = async (code, name, major, notes, position, semester) => {
    // setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5000/api/courses/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, name, major, notes, position, semester }),
    })

    if (!response.ok) {
      const json = await response.json()
      setError(json.message)
      console.log(json.message)
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
  return { coursePost, success, error }
}
