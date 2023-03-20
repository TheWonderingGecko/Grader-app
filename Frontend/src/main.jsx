import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CoursesContextProvider } from './context/CourseContext'
import './CSS/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoursesContextProvider>
      <App />
    </CoursesContextProvider>
  </React.StrictMode>
)
