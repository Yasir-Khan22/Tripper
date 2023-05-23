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
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path='vans'>
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='review' element={<Reviews />} />
            <Route path='income' element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
