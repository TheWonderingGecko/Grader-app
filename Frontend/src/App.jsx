import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import './CSS/index.css'
import Navbar from './Components/Global_components/Navbar'

import Application from './pages/Application'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="app_form" element={<Application />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
