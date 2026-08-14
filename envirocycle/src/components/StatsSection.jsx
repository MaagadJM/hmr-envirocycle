import { useState } from 'react'
import img14000 from '../assets/images/environmental-impact/14,000 Tonnes.png'
import img5228 from '../assets/images/environmental-impact/5,228 Tonnes.png'
import img8000 from '../assets/images/environmental-impact/8,000 Tonnes.png'
import imgMillion from '../assets/images/environmental-impact/Over 1 Million.png'

const stats = [
  {
    img: img14000,
    value: '+14,000 Tonnes',
    description: 'Waste successfully prevented from being dumped in landfills through HMR\'s regenerative and efficient circular supply chain',
  },
  {
    img: img5228,
    value: '+5,228 Tonnes',
    description: 'Metric Tonnes CO2e prevented',
  },
  {
    img: img8000,
    value: '+8,000 Tonnes',
    description: 'In customer returns alone from major retailers around the world that have been regenerated, re-marketed, and also sold for reuse',
  },
  {
    img: imgMillion,
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
          <p className="text-[#86a73e] font-medium mt-1">Creating Measurable Environmental Impact</p>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2d3d] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6abf4b] transition-colors disabled:opacity-30"
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
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[calc(25%-12px)] bg-[#0f1623] border border-[#1e2d3d] rounded-xl p-6 flex flex-col gap-3 items-center text-center hover:border-[#6abf4b]/30 transition-colors"
                >
                  <img src={s.img} alt={s.value} className="w-32 h-32 object-contain mx-auto" />
                  <div className="text-[#86a73e] font-bold text-lg">{s.value}</div>
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
