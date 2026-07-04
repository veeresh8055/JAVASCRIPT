import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import SimgleContact from './components/SimgleContact'

const Home = () => (
  <div className="contacts-page">
    <Navbar />
    <Dashboard />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contactId" element={<SimgleContact />} />
        <Route path="/contactupdate" element={<Navigate to="/" replace />} />
        <Route path="/contactupdate/:contactId" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
