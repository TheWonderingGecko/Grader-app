import { useState, useContext } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'

export const useCourseDeletion = () => {
  const [error, setError] = useState('')

  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  const courseDelete = async (id) => {
    // setIsLoading(true)
    setError(null)

    const response = await fetch(
      'https://weekend-warriors-umkc-grader.onrender.com/api/courses/' + id,
      {
        method: 'DELETE',
      }
    )

    const data = await response.json()

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
  return { courseDelete, success, error }
}
