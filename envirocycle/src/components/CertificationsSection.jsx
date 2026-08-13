import { useState } from 'react'

const certs = [
  {
    label: 'R2 v3 Certified',
    bg: '#0f1623',
    content: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-4 border-[#6abf4b] flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#6abf4b] font-black text-sm leading-none">R2</div>
            <div className="text-[#6abf4b] font-bold text-xs leading-none">v3</div>
          </div>
        </div>
        <span className="text-white text-xs font-semibold mt-1">CERTIFIED</span>
      </div>
    ),
  },
  {
    label: 'ISO Certified',
    bg: '#0f1623',
    content: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center bg-gray-700">
          <div className="text-center">
            <div className="text-white font-black text-sm leading-none">ISO</div>
          </div>
        </div>
        <span className="text-gray-300 text-xs font-medium mt-1">9001:2015 • 45001 • 14001</span>
      </div>
    ),
  },
  {
    label: 'DENR Certified',
    bg: '#0f1623',
    content: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-900/30">
          <svg viewBox="0 0 40 40" className="w-9 h-9">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M20 8 C14 12 10 16 10 22 C10 28 14 32 20 32 C26 32 30 28 30 22 C30 16 26 12 20 8Z" fill="#166534" opacity="0.8"/>
            <path d="M20 14 L20 28 M14 20 L26 20" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-blue-300 text-xs font-medium mt-1">Environmental</span>
      </div>
    ),
  },
  {
    label: 'BSI Certified',
    bg: '#0f1623',
    content: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center bg-red-900/20">
          <div className="text-center">
            <div className="text-red-400 font-black text-sm leading-none">bsi</div>
          </div>
        </div>
        <span className="text-gray-300 text-xs font-medium mt-1">ISO 9001:1 Certified</span>
      </div>
    ),
  },
  {
    label: 'ANAB Accredited',
    bg: '#0f1623',
    content: (
      <div className="flex flex-col items-center gap-1">
        <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center bg-orange-900/20">
          <div className="text-center">
            <div className="text-orange-400 font-black text-xs leading-none">ANAB</div>
          </div>
        </div>
        <span className="text-gray-300 text-xs font-medium mt-1">ACCREDITED</span>
      </div>
    ),
  },
]

export default function CertificationsSection() {
  const [current, setCurrent] = useState(0)
  const visible = 5

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(certs.length - visible, c + 1))

  return (
    <section className="bg-[#0d1220] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-8">Certifications &amp; Compliances</h2>

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="flex-shrink-0 w-[calc(20%-13px)] bg-[#0f1623] border border-[#1e2d3d] rounded-xl p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-[#6abf4b]/40 transition-colors"
                >
                  {c.content}
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= certs.length - visible}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
