import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './Components/Global_components/Navbar'

import Application from './pages/Application'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="h-screen App bg-slate-300">
      <HashRouter>
        <Navbar />
        <div className="h-3/4 pages">
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
