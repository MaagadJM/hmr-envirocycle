import { useState } from 'react'
import logoDark from '../assets/images/enviro_logo_dark.png'
import logoLight from '../assets/images/enviro_logo_light.png'

export default function Navbar({ darkMode, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-gray-200 dark:border-[#1e2d3d]">
      <div className="w-full px-4 md:px-6 flex items-center justify-between h-20 md:grid md:grid-cols-3">
        {/* Logo */}
        <div className="flex items-center md:justify-center">
          <a href="#">
            <img src={darkMode ? logoDark : logoLight} alt="Envirocycle" className="h-auto w-28 sm:w-36 md:w-52" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {['Insights', 'Industries', 'Services', 'About Us'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-[#0a0e1a] dark:hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 md:justify-center">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 dark:bg-[#0f1623] border border-gray-200 dark:border-[#1e2d3d] rounded-full px-4 py-1.5">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-gray-700 dark:text-gray-300 outline-none w-28 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleDark}
            className="flex items-center bg-gray-100 dark:bg-[#0f1623] border border-gray-200 dark:border-[#1e2d3d] rounded-full p-1 gap-1"
          >
            <span className={`p-1 rounded-full transition-colors ${!darkMode ? 'bg-yellow-400 text-black' : 'text-gray-400'}`}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7a5 5 0 100 10A5 5 0 0012 7zm0-2a1 1 0 000-2 1 1 0 000 2zM12 19a1 1 0 000 2 1 1 0 000-2zm7-7a1 1 0 002 0 1 1 0 00-2 0zM3 12a1 1 0 00-2 0 1 1 0 002 0zm15.07-6.07a1 1 0 001.41-1.41 1 1 0 00-1.41 1.41zM5.93 18.07a1 1 0 00-1.41 1.41 1 1 0 001.41-1.41zM18.07 18.07a1 1 0 001.41 1.41 1 1 0 00-1.41-1.41zM5.93 5.93a1 1 0 00-1.41-1.41 1 1 0 001.41 1.41z"/>
              </svg>
            </span>
            <span className={`p-1 rounded-full transition-colors ${darkMode ? 'bg-[#1e2d3d] text-white' : 'text-gray-400'}`}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0e1a] border-t border-gray-200 dark:border-[#1e2d3d] px-6 py-4 flex flex-col gap-4">
          {['Insights', 'Industries', 'Services', 'About Us'].map((item) => (
            <a key={item} href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#0a0e1a] dark:hover:text-white text-sm font-medium">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
