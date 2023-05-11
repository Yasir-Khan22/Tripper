import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Vans from './pages/Vans'
import Home from './pages/Home'
import VanDetail from "./pages/VanDetail"

function App() {
  return (
    <>
      <header>
        <Link to="/" className='site-logo'>Tripper</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Camper Van's</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </>
  )
}

export default App
