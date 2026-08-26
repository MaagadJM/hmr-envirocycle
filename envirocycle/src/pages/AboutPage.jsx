import heroBanner from '../assets/images/banners/about-us/about-us-main-banner.png'
import whoWeAreImg from '../assets/images/banners/about-us/about-us-who-we-are-banner.png'
import certificationsStrip from '../assets/images/icons/about-us-icons/about-us-certifications-compliences.png'
import iconGreenTechDark from '../assets/images/icons/about-us-icons/green-technology-expertise-dark.png'
import iconGreenTechLight from '../assets/images/icons/about-us-icons/green-technology-expertise-light.png'
import iconCircularDark from '../assets/images/icons/about-us-icons/circular-economy-solutions-dark.png'
import iconCircularLight from '../assets/images/icons/about-us-icons/circular-economy-solutions-light.png'
import iconEndToEndDark from '../assets/images/icons/about-us-icons/end-to-end-environmental-services-dark.png'
import iconEndToEndLight from '../assets/images/icons/about-us-icons/end-to-end-environmental-services-light.png'
import iconRegulatoryDark from '../assets/images/icons/about-us-icons/regulatory-compliance-support-dark.png'
import iconRegulatoryLight from '../assets/images/icons/about-us-icons/regulatory-compliance-support-light.png'
import iconSustainableDark from '../assets/images/icons/about-us-icons/sustainable-resource-recovery-dark.png'
import iconSustainableLight from '../assets/images/icons/about-us-icons/sustainable-resource-recovery-light.png'
import iconIndustryDark from '../assets/images/icons/about-us-icons/industry-focused-solutions-dark.png'
import iconIndustryLight from '../assets/images/icons/about-us-icons/industry-focused-solutions-light.png'

const whyChooseItems = [
  { label: 'Green Technology Expertise', dark: iconGreenTechDark, light: iconGreenTechLight },
  { label: 'Circular Economy Solutions', dark: iconCircularDark, light: iconCircularLight },
  { label: 'End-to-End Environmental Services', dark: iconEndToEndDark, light: iconEndToEndLight },
  { label: 'Regulatory Compliance Support', dark: iconRegulatoryDark, light: iconRegulatoryLight },
  { label: 'Sustainable Resource Recovery', dark: iconSustainableDark, light: iconSustainableLight },
  { label: 'Industry-Focused Solutions', dark: iconIndustryDark, light: iconIndustryLight },
]

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
      <div className="px-8 pt-44 pb-12 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          Sustainability is more than a business objective—it's a shared responsibility.
          Envirocycle helps organizations recover value, reduce environmental impact, and strengthen environmental
          compliance through practical Green Technology solutions. From IT Asset Disposition (ITAD) and electronics
          refurbishment to hazardous waste management, circular economy initiatives, and ESG reporting,
          We partner with businesses to create measurable environmental and business value.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          Together, we're helping organizations build smarter, more sustainable operations.
        </p>
        <button className="border border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm px-6 py-2.5 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-navy transition-colors">
          Talk to our Team
        </button>

        <hr className="border-gray-300 dark:border-gray-600 my-10" />

        {/* Our Sustainability Journey */}
        <div className="mb-4">
          <p className="text-[#6abf4b] text-sm md:text-xl font-semibold mb-2">Our Sustainability Journey</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Instead of beginning with company history, begin with your purpose.</p>
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
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-5xl">Who We Are</h2>
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
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <div className="relative min-h-105">

          {/* Mission — top left, 60% wide */}
          <div className="absolute top-0 left-0 w-[55%]">
            <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-5xl mb-4">Our Mission</h2>
            <div className="bg-[#122447] p-6 rounded-lg">
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                Envirocycle Philippines, Inc. (EPI) is and well <br /> organized by its stake holder as the leading provider <br /> of the comprehensive asset management services, <br /> handling excess and obsolete industrial and consumer <br /> electronics in an environmentally safe manner.
              </p>
            </div>
          </div>

          {/* Vision — same top as Mission, right side, z on top */}
          <div className="absolute top-30 right-0 w-[55%] z-10">
            <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-5xl ml-80 mb-4">Our Vision</h2>
            <div className="bg-[#4971c0] p-6 rounded-lg">
              <p className="text-gray-300 text-right text-sm md:text-lg leading-relaxed">
                Envirocycle Philippines, Inc. (EPI) envision ourselves as <br /> one-stop-shop provider of environmentally-safe waste <br /> management technologies not only in the fiel of e-waste but <br /> in other aspects of waste solution. We will, continually innovate, <br /> improve our methodologies, and adapt technological changes <br /> that improve our capabilities and efficiencies, <br /> limiting environmental impact.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Our Core Values */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-5xl mb-6">Our Core Values</h2>
        <div className="bg-[#122447] p-8 md:p-10 rounded-lg">
          {[
            {
              name: 'Integrity',
              desc: 'we are honest and sincere in our business dealings.',
            },
            {
              name: 'Creativity',
              desc: 'we will continuously challenge ourselves to come up with innovative ideas and maintain attitude of ingenuity and resourcefulness so that we can give the best quality of products and services.',
            },
            {
              name: 'Passion for Excellence',
              desc: 'we will strive to be the best in the deliverance of our goods and services and continuously raise our levels of performance. We will uphold the maxim that "good is not always good enough".',
            },
            {
              name: 'Customer and Results Oriented',
              desc: 'we shall work for the benefit and advantage of the common good. We will measure our success against the satisfaction of our clients, sales, profitability, investor value and the extent of opportunities we provide for our people. We shall yield results even beyond what is expected from us.',
            },
          ].map(({ name, desc }) => (
            <div key={name} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 mb-6 last:mb-0 items-start">
              <p className="text-white font-semibold">{name}</p>
              <p className="text-gray-300 text-sm leading-relaxed">- {desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Organizations Choose Envirocycle */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <div className="flex items-center gap-6 mb-12">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-xl md:text-3xl text-center whitespace-nowrap">
            Why Organizations Choose Envirocycle
          </h2>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>
        <div className="grid grid-cols-3 gap-10 md:gap-16">
          {whyChooseItems.map(({ label, dark, light }) => (
            <div key={label} className="flex flex-col items-center gap-4 text-center">
              <img src={dark} alt={label} className="w-26 h-26 object-contain dark:hidden" />
              <img src={light} alt={label} className="w-26 h-26 object-contain hidden dark:block" />
              <p className="text-green-accent text-xs md:text-lg leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Compliances strip */}
      <div className="px-8 md:px-20 lg:px-28 bg-[#c8c8c8] dark:bg-white">
        <img src={certificationsStrip} alt="Certifications and Compliances" className="w-full h-auto block" />
      </div>

    </div>
  )
}
