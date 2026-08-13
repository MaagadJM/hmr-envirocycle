import { useState } from 'react'

const slides = [
  {
    title: 'Sustainability in Action',
    body: 'Envirocycle teamed up with Canon Philippines for an E-Bin launch and e-waste awareness session—making it easier to dispose of electronics responsibly.',
    img: null,
  },
  {
    title: 'Responsible E-Waste Collection',
    body: 'Our certified collection programs ensure electronics are handled with care, preventing toxic materials from entering landfills and water systems.',
    img: null,
  },
  {
    title: 'Circular Supply Chain',
    body: 'We partner with industry leaders to build regenerative supply chains that maximize asset life and reduce environmental footprint.',
    img: null,
  },
  {
    title: 'Community Awareness',
    body: 'Through education campaigns and community events, we empower individuals and businesses to make more sustainable choices every day.',
    img: null,
  },
  {
    title: 'Zero Landfill Commitment',
    body: 'Our goal is zero landfill waste from IT assets. Through reuse, refurbishment, and responsible recycling, we are making that vision a reality.',
    img: null,
  },
]

export default function SustainabilitySection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <section className="bg-[#0d1220] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 min-h-[280px]">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white mb-4">{slide.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">{slide.body}</p>
            <button className="flex items-center gap-2 border border-gray-500 text-white text-sm px-5 py-2 rounded-full hover:border-[#6abf4b] hover:text-[#6abf4b] transition-colors">
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Image placeholder */}
          <div className="flex-shrink-0 w-full md:w-80 h-52 rounded-xl bg-[#0f1623] border border-[#1e2d3d] flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Event Photo</span>
            </div>
          </div>
        </div>

        {/* Dots & arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#6abf4b]' : 'bg-[#1e2d3d] hover:bg-gray-500'}`}
            />
          ))}
          <button onClick={next} className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
