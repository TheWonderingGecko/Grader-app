import { useState } from 'react'

export const useApplication = () => {
  // custom hook to add application to course
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  //   const [isLoading, setIsLoading] = useState(false)

  const addAPP = async (id, applications, application) => {
    // setIsLoading(true)
    setError(null)

    const response = await fetch(
      // fetch call to add application to course
      'https://weekend-warriors-umkc-grader.onrender.com/api/courses/update/' +
        id,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applications: [...applications, application],
        }),
      }
    )

    const json = await response.json()

    if (!response.ok) {
      const json = await response.json()
      setError(json.message)
      console.log(json.message)
    }

    if (response.ok) {
      //   const json = await response.json()
      setSuccess(true)
      console.log(application)
      console.log('success')
      //save user to local storage
      //   localStorage.setItem('user', JSON.stringify(json))

      //   //update the authContext
      //   dispatch({ type: 'LOGIN', payload: json })
    }
  }
  return { addAPP, success, error }
}
