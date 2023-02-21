import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './CSS/index.css'
import Navbar from './Components/Home_page_Components/Navbar'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
