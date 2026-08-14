import { useState } from 'react'
import iconICT from '../assets/images/service-logo/ICT Asset Disposition  (ITAD R2v3).png'
import iconAsset from '../assets/images/service-logo/Asset Recovery & Disposal.png'
import iconHazardous from '../assets/images/service-logo/Disposal of Hazardous Waste.png'
import iconReinstatement from '../assets/images/service-logo/Reinstatement & Demolition.png'

const services = [
  {
    icon: iconICT,
    title: 'ICT ASSET DISPOSITION (ITAD R2V3)',
    description: 'Secure and compliant IT asset lifecycle management.',
    color: '#86a73e',
  },
  {
    icon: iconAsset,
    title: 'ASSET RECOVERY & DISPOSAL',
    description: 'Recover value through responsible asset disposition.',
    color: '#86a73e',
  },
  {
    icon: iconHazardous,
    title: 'DISPOSAL OF HAZARDOUS WASTE',
    description: 'Licensed hazardous waste management from collection to disposal.',
    color: '#86a73e',
  },
  {
    icon: iconReinstatement,
    title: 'REINSTATEMENT & DEMOLITION',
    description: 'Fast, compliant restoration for offices, warehouses, and commercial spaces.',
    color: '#86a73e',
  },
]

export default function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const visible = 4

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(services.length - visible, c + 1))

  return (
    <section className="bg-[#0a0e1a] pb-12 px-12 md:px-20 lg:px-28 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-light tracking-tighter text-white py-8">Services</h2>

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2d3d] flex items-center justify-center text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[calc(25%-12px)] overflow-hidden bg-[#0b1120] border border-white rounded-2xl flex flex-col items-center gap-5 text-center hover:border-[#6abf4b]/60 transition-colors"
                  style={{ padding: '22px 32px' }}
                >
                  <img src={s.icon} alt={s.title} className="w-26 h-26 object-contain" />
                  <h3 className="text-sm font-bold leading-snug tracking-wide wrap-break-word w-full" style={{ color: s.color }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed wrap-break-word w-full">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= services.length - visible}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2d3d] flex items-center justify-center text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
