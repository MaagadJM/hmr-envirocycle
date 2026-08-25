import heroBanner from '../assets/images/banners/about-us/about-us-main-banner.png'

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white dark:bg-[#0a0e1a]">
      {/* Hero banner — full width */}
      <div className="relative w-full">
        <img src={heroBanner} alt="About Us" className="w-full h-auto block" />
        <div className="absolute -bottom-30 left-20 bg-[#122447]/80 px-8 py-6 md:px-14 md:py-10 max-w-[60%]">
          <h1 className="text-white font-extralight leading-tight tracking-tighter text-xl md:text-4xl lg:text-5xl drop-shadow-lg">
            Building a More Sustainable Future Through Responsible Environmental Solutions
          </h1>
        </div>
      </div>

      {/* Content section */}
      <div className="px-8 pt-44 pb-12 md:px-20 lg:px-28 bg-[#0a0e1a]">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Sustainability is more than a business objective—it's a shared responsibility.
          Envirocycle helps organizations recover value, reduce environmental impact, and strengthen environmental
          compliance through practical Green Technology solutions. From IT Asset Disposition (ITAD) and electronics
          refurbishment to hazardous waste management, circular economy initiatives, and ESG reporting,
          We partner with businesses to create measurable environmental and business value.
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          Together, we're helping organizations build smarter, more sustainable operations.
        </p>
        <button className="border border-white text-white text-sm px-6 py-2.5 rounded-full hover:bg-white hover:text-[#0a0e1a] transition-colors">
          Talk to our Team
        </button>

        <hr className="border-gray-600 my-10" />

      </div>
    </div>
  )
}
