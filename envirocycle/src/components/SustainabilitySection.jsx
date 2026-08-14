import { useState } from 'react'
import canonEnviro from '../assets/images/sustainability/canon_enviro.jpg'

const slides = [
  {
    title: 'Sustainability in Action',
    body: 'Envirocycle teamed up with Canon Philippines for an E-Bin launch and e-waste awareness session—making it easier to dispose of electronics responsibly.',
    img: canonEnviro,
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
    <section className="bg-gray-200 dark:bg-[#0d1220] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 min-h-[280px]">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{slide.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-lg">{slide.body}</p>
            <button className="w-fit flex items-center gap-2 border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-white text-sm px-5 py-2 rounded-full hover:border-[#6abf4b] hover:text-[#6abf4b] transition-colors">
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-300 dark:border-[#1e2d3d]">
            {slide.img
              ? <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              : <div className="w-full h-full bg-[#0f1623] flex items-center justify-center text-gray-600 text-xs">Event Photo</div>
            }
          </div>
        </div>

        {/* Dots & arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#6abf4b]' : 'bg-gray-300 dark:bg-[#1e2d3d] hover:bg-gray-400 dark:hover:bg-gray-500'}`}
            />
          ))}
          <button onClick={next} className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
