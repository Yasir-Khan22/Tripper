import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import Home from './pages/Home'
import VanDetail from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path='/host' element={<HostLayout />}>
            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/review' element={<Reviews />} />
            <Route path='/host/income' element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
