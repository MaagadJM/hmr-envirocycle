import logo from '../assets/images/enviro_logo_dark.png'

export default function Footer() {
  const links = ['About Us', 'Services', 'Industries', 'Insights', 'Career']

  return (
    <footer className="bg-[#0a0e1a] border-t border-[#1e2d3d] py-12 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          {/* Logo */}
          <a href="#" className="inline-block mb-6">
            <img src={logo} alt="Envirocycle" className="h-9 w-auto" />
          </a>

          {/* Nav links */}
          <ul className="flex flex-col gap-3 mb-8 ml-1.5">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-[#6abf4b] text-sm transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-1.5">
            <a
              href="#"
              className="w-9 h-9 rounded bg-[#0f1623] border border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded bg-[#0f1623] border border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-[#1877f2] hover:border-[#1877f2] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Contact */}
        <div className="flex flex-col gap-4 md:items-end">
          <a
            href="mailto:info@envirocycle-inc.com"
            className="flex items-center gap-3 text-gray-400 hover:text-[#6abf4b] transition-colors text-sm"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@envirocycle-inc.com
          </a>
          <a
            href="tel:+639178349596"
            className="flex items-center gap-3 text-gray-400 hover:text-[#6abf4b] transition-colors text-sm"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +63 917 834 9596
          </a>
          <div className="flex items-start gap-3 text-gray-400 text-sm md:text-right">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>
              CA Yulo Avenue, Silangan Industrial Park<br />
              Canlubang, Calamba City<br />
              Laguna, Philippines
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
