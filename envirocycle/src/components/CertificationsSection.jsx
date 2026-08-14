import { useState } from 'react'
import imgR2v3 from '../assets/images/certifications/r2-v3.png'
import imgDenr from '../assets/images/certifications/denr.png'
import imgGreenhouse from '../assets/images/certifications/greenhouse-gases.png'
import imgICT from '../assets/images/certifications/anab-accredited.png'
import imgISO from '../assets/images/certifications/iso-globe.png'

const certs = [
  { label: 'R2 v3 Certified', img: imgR2v3 },
  { label: 'ISO Certified', img: imgISO },
  { label: 'DENR Certified', img: imgDenr },
  { label: 'Greenhouse Gases', img: imgGreenhouse },
  { label: 'ICT Asset Disposition', img: imgICT },
]

export default function CertificationsSection() {
  const [current, setCurrent] = useState(0)
  const visible = 5

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(certs.length - visible, c + 1))

  return (
    <section className="bg-white dark:bg-[#0d1220] py-16 px-4 sm:px-8 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Certifications &amp; Compliances</h2>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {certs.map((c, i) => (
            <div
              key={i}
              className={`bg-[#0f1623] border border-gray-400 rounded-xl p-4 flex items-center justify-center min-h-[100px] hover:border-[#6abf4b]/40 transition-colors${i === certs.length - 1 && certs.length % 2 !== 0 ? ' col-span-2 max-w-[50%] mx-auto w-full' : ''}`}
            >
              <img src={c.img} alt={c.label} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Desktop: slider */}
        <div className="hidden md:flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 dark:border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {certs.map((c, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[calc(20%-13px)] bg-[#0f1623] border border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-[#6abf4b]/40 transition-colors"
                >
                  <img src={c.img} alt={c.label} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= certs.length - visible}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 dark:border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
