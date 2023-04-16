import { useState } from 'react'

export const useCourseEdit = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  const courseEdit = async (id, notes) => {
    // setIsLoading(true)
    setError(null)

    const response = await fetch(
      'http://localhost:5000/api/courses/update/' + id,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      }
    )

    if (!response.ok) {
      const json = await response.json()
      setError(json.message)
      console.log(json.message)
    }

    if (response.ok) {
      //   const json = await response.json()
      setSuccess(true)
      console.log('success')
      //save user to local storage
      //   localStorage.setItem('user', JSON.stringify(json))

      //   //update the authContext
      //   dispatch({ type: 'LOGIN', payload: json })
    }
  }
  return { courseEdit, success, error }
}
