import heroBanner from '../assets/images/banners/industries/industries-main-banner.png'
import bgChallengeDark from '../assets/images/environmental-impact/building-a-circular-future-background.png'
import iconRegulatory from '../assets/images/icons/industries-icons/industries-regulatory-compliance.png'
import iconWaste from '../assets/images/icons/industries-icons/industries-waste-reduction.png'
import iconAsset from '../assets/images/icons/industries-icons/industries-asset-value-recovery.png'
import iconESG from '../assets/images/icons/industries-icons/industries-esg-sustainability.png'

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

    </div>
  )
}
