import heroBanner from '../assets/images/banners/industries/industries-main-banner.png'
import lastSectionBanner from '../assets/images/banners/industries/industries-last-section-banner.png'
import bgChallengeDark from '../assets/images/environmental-impact/building-a-circular-future-background.png'
import iconRegulatory from '../assets/images/icons/industries-icons/industries-regulatory-compliance.png'
import iconWaste from '../assets/images/icons/industries-icons/industries-waste-reduction.png'
import iconAsset from '../assets/images/icons/industries-icons/industries-asset-value-recovery.png'
import iconESG from '../assets/images/icons/industries-icons/industries-esg-sustainability.png'
import imgIT from '../assets/images/icons/industries-icons/information-technology-it.png'
import imgPublicSector from '../assets/images/icons/industries-icons/public-sector.png'
import imgFMCG from '../assets/images/icons/industries-icons/fmcg.png'
import imgAutomotive from '../assets/images/icons/industries-icons/automotive.png'
import imgTelecommunications from '../assets/images/icons/industries-icons/telecommunications.png'
import imgManufacturing from '../assets/images/icons/industries-icons/manufacturing.png'
import imgMining from '../assets/images/icons/industries-icons/mining.png'
import imgEnergy from '../assets/images/icons/industries-icons/energy.png'
import imgHealthcare from '../assets/images/icons/industries-icons/healthcare.png'
import imgRetail from '../assets/images/icons/industries-icons/retail.png'
import imgBanking from '../assets/images/icons/industries-icons/banking-fintech.png'
import imgBPO from '../assets/images/icons/industries-icons/business-process-outsourcing-bpo.png'

const industriesItems = [
  {
    img: imgIT,
    name: 'Information Technology (IT)',
    desc: 'Technology evolves quickly, making responsible IT asset management essential. We help organizations securely manage retired IT equipment through refurbishment, IT Asset Disposition (ITAD), asset recovery, and responsible electronics recycling.',
  },
  {
    img: imgPublicSector,
    name: 'Public Sector',
    desc: 'Government agencies require transparent, compliant, and environmentally responsible asset and waste management solutions. Envirocycle supports public sector organizations through secure ITAD, hazardous waste management, electronics refurbishment, and sustainability reporting.',
  },
  {
    img: imgFMCG,
    name: 'FMCG',
    desc: 'Fast-moving consumer goods companies generate significant volumes of packaging materials, surplus assets, and production waste. Our circular economy solutions help improve resource recovery while supporting sustainability commitments.',
  },
  {
    img: imgAutomotive,
    name: 'Automotive',
    desc: 'From manufacturing operations to end-of-life materials, the automotive industry benefits from responsible resource recovery, hazardous waste management, reverse logistics, and supply chain sustainability initiatives.',
  },
  {
    img: imgTelecommunications,
    name: 'Telecommunications',
    desc: 'As network infrastructure evolves, telecommunications providers require secure management of retired equipment and responsible recovery of valuable materials. Envirocycle supports asset recovery, ITAD, and electronics refurbishment throughout the technology lifecycle.',
  },
  {
    img: imgManufacturing,
    name: 'Manufacturing',
    desc: 'Manufacturers face increasing pressure to reduce waste, improve resource efficiency, and meet sustainability objectives. We help recover secondary-grade materials, manage hazardous waste, optimize reverse logistics, and support ESG initiatives.',
  },
  {
    img: imgMining,
    name: 'Mining',
    desc: 'Mining operations generate complex waste streams and retire significant volumes of industrial equipment. Envirocycle provides responsible asset recovery, hazardous waste management, and material recovery solutions that support environmental compliance.',
  },
  {
    img: imgEnergy,
    name: 'Energy',
    desc: 'Energy companies continue to invest in cleaner and more sustainable operations. Envirocycle helps manage retired assets, hazardous waste, and material recovery while supporting environmental reporting and sustainability programs.',
  },
  {
    img: imgBanking,
    name: 'Banking & Fintech',
    desc: 'Financial institutions regularly refresh technology infrastructure and manage sensitive information. Our secure IT Asset Disposition services help protect data while maximizing the value of retired technology assets.',
  },
  {
    img: imgHealthcare,
    name: 'Healthcare',
    desc: 'Hospitals, laboratories, and healthcare providers require careful management of technology assets and regulated waste. Envirocycle delivers responsible environmental solutions that support compliance and operational efficiency.',
  },
  {
    img: imgRetail,
    name: 'Retail',
    desc: 'Retail businesses manage large networks of stores, point-of-sale systems, and technology assets. We support responsible asset recovery, electronics refurbishment, reverse logistics, and sustainability initiatives across multiple locations.',
  },
  {
    img: imgBPO,
    name: 'Business Process Outsourcing (BPO)',
    desc: 'BPO companies depend on large volumes of IT equipment to support daily operations. Envirocycle helps organizations securely retire, refurbish, and recover technology assets while supporting ESG and sustainability goals.',
  },
]

const challengeItems = [
  {
    icon: iconRegulatory,
    title: 'Regulatory\nCompliance',
    desc: 'Meet evolving environmental regulations with licensed, compliant, and responsible waste and asset management solutions.',
  },
  {
    icon: iconWaste,
    title: 'Waste\nReduction',
    desc: 'Reduce waste by extending product lifecycles, recovering valuable materials, and supporting circular economy initiatives.',
  },
  {
    icon: iconAsset,
    title: 'Asset Value\nRecovery',
    desc: 'Unlock the remaining value of retired equipment, surplus assets, and secondary-grade materials through responsible recovery solutions.',
  },
  {
    icon: iconESG,
    title: 'ESG &\nSustainability',
    desc: 'Support environmental goals with services that contribute to ESG initiatives, greenhouse gas reduction strategies, and long-term sustainability performance.',
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-white dark:bg-[#0a0e1a]">
      {/* Hero banner */}
      <div className="relative w-full">
        <img src={heroBanner} alt="Industries" className="w-full h-auto block" />
        <div className="absolute -bottom-25 left-20 bg-[#122447]/80 px-8 py-6 md:px-14 md:py-10 max-w-[60%]">
          <h1 className="text-white font-extralight leading-tight tracking-tighter text-xl md:text-4xl lg:text-5xl drop-shadow-lg">
            Sustainable Solutions Built Around Your Industry
          </h1>
        </div>
      </div>

      {/* Intro content */}
      <div className="px-8 pt-40 pb-12 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          Every industry has its own operational challenges, regulatory requirements, and sustainability goals.
          From managing industrial equipment, retired IT assets and hazardous waste to improving resource recovery
          and ESG performance, organizations need solutions that are practical, compliant, and aligned with the way
          they operate. Envirocycle partners with businesses across a wide range of industries, delivering Green
          Technology solutions that help recover value, reduce environmental impact, and support circular economy
          initiatives. Whether you're operating a manufacturing facility, a corporate office, a hospital, or a
          nationwide retail network, our services are designed to meet your industry's evolving environmental and
          operational needs.
        </p>
        <button className="border border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm px-6 py-2.5 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-navy transition-colors">
          Talk to our Team
        </button>

        <hr className='my-10' />


      </div>

      {/* Addressing Today's Environmental Challenges */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <h6 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-4xl">Addressing Today's Environmental Challenges</h6>
        <div className="relative grid grid-cols-2 items-stretch min-h-120">
          <div className="bg-white dark:bg-[#0a0e1a]" />
          <div className="absolute bg-[#27316b] w-130 h-120 object-cover -top-20 right-0" />
          <div className="absolute top-[15%] left-[0%] w-2/3 bg-[#122447]/80 px-8 py-6 md:px-10 md:py-8">
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3">
              No matter the industry, organizations are facing increasing expectations around environmental
              responsibility, operational efficiency, and regulatory compliance. Businesses are looking for
              practical ways to reduce waste, recover value from existing assets, and demonstrate measurable
              progress toward their sustainability goals.
            </p>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Envirocycle helps organizations navigate these challenges through integrated environmental
              solutions that support compliance, strengthen ESG performance, and contribute to a more
              circular economy.
            </p>
          </div>
        </div>
      </div>

      {/* Environmental Challenges */}
      <div
        className="relative px-8 py-16 md:px-20 lg:px-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgChallengeDark})` }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10">
          <h2 className="text-white font-extralight leading-tight tracking-tighter text-3xl md:text-4xl mb-10">
            Environmental Challenges
          </h2>
          <div className="grid grid-cols-4 divide-x divide-gray-600/50 border-l border-gray-600/50">
            {challengeItems.map(({ icon, title, desc }) => (
              <div key={title} className="pr-6 flex flex-col gap-4">
                <img src={icon} alt={title} className="w-26 h-26 object-contain" />
                <p className="text-green-accent font-semibold uppercase text-sm tracking-wide whitespace-pre-line ml-6">{title}</p>
                <p className="text-gray-300 text-xs leading-relaxed ml-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Support */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-navy">
        <h2 className="text-gray-900 dark:text-white font-extralight leading-tight tracking-tighter text-3xl md:text-4xl mb-10">
          Industries We Support
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industriesItems.map(({ img, name, desc }) => (
            <div key={name} className="flex flex-col">
              <div className="relative">
                <img src={img} alt={name} className="w-full h-44 object-cover block" />
                <div className="absolute -bottom-5 left-0 bg-green-accent w-[80%] px-3 py-2">
                  <p className="text-white text-md font-semibold leading-snug">{name}</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-8">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnering Across Industries - CTA Banner */}
      <div className="px-8 py-16 md:px-20 lg:px-28 bg-white dark:bg-[#0a0e1a]">
        <div className="relative rounded-2xl overflow-hidden px-10 py-12 md:px-16 md:py-14 [box-shadow:10px_10px_30px_rgba(0,0,0,0.25),-10px_-10px_30px_rgba(255,255,255,1)] dark:[box-shadow:8px_8px_20px_rgba(0,0,0,0.6),-8px_-8px_20px_rgba(255,255,255,0.05)]">
          <img src={lastSectionBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 max-w-[55%]">
            <h2 className="text-white font-extralight leading-tight tracking-tighter text-2xl md:text-4xl mb-4">
              Partnering Across Industries for a More Sustainable Future
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              Every organization faces unique environmental and operational challenges, but the objective remains the same reducing waste, recovering value, and operating more sustainably.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Whether you're managing a nationwide enterprise, a manufacturing facility, a healthcare network, or a growing technology company, Envirocycle provides practical environmental solutions tailored to your industry's needs. Together, we help businesses strengthen compliance, improve resource efficiency, and build a more sustainable future.
            </p>
            <button className="border border-white text-white text-sm px-6 py-2.5 rounded-full hover:bg-white hover:text-navy transition-colors">
              Talk to our Team
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
