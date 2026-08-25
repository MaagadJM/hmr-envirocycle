import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import SustainabilitySection from './components/SustainabilitySection'
import StatsSection from './components/StatsSection'
import CertificationsSection from './components/CertificationsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState('home')

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#0a0e1a]' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} currentPage={page} navigate={setPage} />
      {page === 'home' && (
        <>
          <Hero />
          <ServicesSection />
          <SustainabilitySection />
          <StatsSection />
          <CertificationsSection />
          <CTASection />
        </>
      )}
      {page === 'about' && <AboutPage />}
      <Footer />
    </div>
  )
}

export default App
