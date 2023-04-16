import { createContext, useReducer } from 'react'
export const CoursesContext = createContext()

export const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return {
        courses: action.payload,
      }

    case 'CREATE_COURSE':
      return {
        courses: [action.payload, ...state.courses],
      }

    case 'UPDATE_COURSE':
      const updatedCourses = state.courses.map((c) => {
        if (c._id === action.payload._id) {
          return { ...c, ...action.payload }
        }
        return c
      })
      return {
        courses: updatedCourses,
      }

    case 'DELETE_COURSE':
      return {
        courses: state.courses.filter((c) => c._id !== action.payload._id),
      }
    default:
      return state
  }
}

export const CoursesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coursesReducer, {
    courses: null,
  })

  return (
    <CoursesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoursesContext.Provider>
  )
}
