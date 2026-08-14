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

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-[#0a0e1a]' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <Hero />
      <ServicesSection />
      <SustainabilitySection />
      <StatsSection />
      <CertificationsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
