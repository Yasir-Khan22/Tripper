import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home"

function App() {
  return (
    <>
      <header>
        <Link to="/" className='logo'>#Tripper</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
