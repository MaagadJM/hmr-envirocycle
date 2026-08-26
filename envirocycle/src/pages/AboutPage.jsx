import heroBanner from '../assets/images/banners/about-us/about-us-main-banner.png'
import whoWeAreImg from '../assets/images/banners/about-us/about-us-who-we-are-banner.png'

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

        {/* Our Sustainability Journey */}
        <div className="mb-4">
          <p className="text-[#6abf4b] text-sm md:text-xl font-semibold mb-2">Our Sustainability Journey</p>
          <p className="text-gray-300 text-sm md:text-base">Instead of beginning with company history, begin with your purpose.</p>
        </div>

        <div className="mt-8 flex flex-col">
          {[
            {
              title: 'Recover Resources',
              desc: 'We help businesses recover value from products, materials, and assets that still have economic and environmental potential.',
            },
            {
              title: 'Protect Critical Assets',
              desc: 'From secure IT Asset Disposition to responsible hazardous waste management, we help organizations reduce risk while protecting valuable resources.',
            },
            {
              title: 'Reduce Environmental Impact',
              desc: 'Through circular economy solutions, responsible recovery, and sustainable waste management, we help businesses reduce their environmental footprint.',
            },
            {
              title: 'Build a Circular Economy',
              desc: 'Everything we do supports a future where resources remain in productive use for as long as possible.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="py-6 border-b border-gray-700">
              <h3 className="text-sm md:text-md font-medium text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Who We Are */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-[#0a0e1a]">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10">Who We Are</h2>
        <div className="relative grid grid-cols-2 items-stretch">
          <div className="bg-white dark:bg-[#0a0e1a]" />
          <img src={whoWeAreImg} alt="Who We Are" className="w-full h-full object-cover block" />
          <div className="absolute top-[15%] left-[5%] w-2/3 bg-[#122447]/80 px-8 py-6 md:px-10 md:py-8">
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3">
              Envirocycle is a Green Technology company committed to helping organizations manage resources more responsibly through practical environmental solutions. Working across multiple industries, we deliver services that recover value, improve resource efficiency, strengthen regulatory compliance, and support Environmental, Social, and Governance (ESG) initiatives.
            </p>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              By combining technical expertise with sustainable practices, we help businesses transition toward a more circular and environmentally responsible future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-[#0a0e1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold mb-6">Our Mission</h2>
            <div className="bg-[#122447] p-6 rounded-lg">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Envirocycle Philippines, Inc. (EPI) is and well organized by its stake holder as the leading provider of the comprehensive asset management services, handling excess and obsolete industrial and consumer electronics in an environmentally safe manner.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-semibold mb-6">Our Vision</h2>
            <div className="bg-[#122447] p-6 rounded-lg">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Envirocycle Philippines, Inc. (EPI) envision ourselves as one-stop-shop provider of environmentally-safe waste management technologies not only in the field of e-waste but in other aspects of waste solution. We will, continually innovate, improve our methodologies, and adapt technological changes that improve our capabilities and efficiencies, limiting environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
