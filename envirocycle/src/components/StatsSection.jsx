import { useState } from 'react'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M24 14 C18 14 14 18 14 24 C14 30 18 34 24 34 C30 34 34 30 34 24" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 8 L24 14 M30 10 L24 14 L28 19" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: '+14,000 Tonnes',
    description: 'Waste successfully prevented from being dumped in landfills through HMR\'s regenerative and efficient circular supply chain',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6 L28 18 L40 18 L30 26 L34 38 L24 30 L14 38 L18 26 L8 18 L20 18 Z" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    value: '+5,228 Tonnes',
    description: 'Metric Tonnes CO2e prevented',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="28" width="8" height="12" rx="1" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="20" y="20" width="8" height="20" rx="1" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="32" y="12" width="8" height="28" rx="1" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M10 22 L22 14 L34 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="8" r="2" fill="#f59e0b"/>
      </svg>
    ),
    value: '+8,000 Tonnes',
    description: 'In customer returns alone from major retailers around the world that have been regenerated, re-marketed, and also sold for reuse',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M14 24 L20 30 L34 16" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: 'Over 1 Million',
    description: 'SKUs Successfully Sold for Reuse',
  },
]

export default function StatsSection() {
  const [current, setCurrent] = useState(0)
  const visible = 4

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(stats.length - visible, c + 1))

  return (
    <section className="bg-[#0a0e1a] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white">Building a Circular Future</h2>
          <p className="text-[#6abf4b] font-medium mt-1">Creating Measurable Environmental Impact</p>
        </div>

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
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[calc(25%-12px)] bg-[#0f1623] border border-[#1e2d3d] rounded-xl p-6 flex flex-col gap-3 hover:border-[#f59e0b]/30 transition-colors"
                >
                  <div>{s.icon}</div>
                  <div className="text-[#f59e0b] font-bold text-lg">{s.value}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={current >= stats.length - visible}
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
