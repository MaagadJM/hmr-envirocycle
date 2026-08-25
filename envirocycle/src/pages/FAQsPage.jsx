import { useState } from 'react'
import heroBanner from '../assets/images/banners/faqs/faqs-main-banner.png'

const faqCategories = [
  {
    category: 'General Services',
    items: [
      {
        q: 'What types of IT assets can Envirocycle securely process?',
        a: 'Envirocycle can securely process a wide range of IT assets including computers, laptops, servers, networking equipment, mobile devices, printers, and peripherals — regardless of brand, age, or condition.',
      },
      {
        q: "Who typically uses Envirocycle's IT Asset Disposition (ITAD) services?",
        a: 'Our ITAD services are used by corporations, government agencies, healthcare providers, educational institutions, and any organisation that needs to responsibly retire end-of-life IT equipment.',
      },
      {
        q: 'What industries does Envirocycle serve?',
        a: 'We serve a broad range of industries including finance, healthcare, retail, manufacturing, telecommunications, and the public sector across the Philippines.',
      },
      {
        q: 'What is IT Asset Disposition (ITAD)?',
        a: 'IT Asset Disposition (ITAD) is the process of safely and responsibly disposing of obsolete or unwanted IT equipment in a manner that is both environmentally responsible and data-secure.',
      },
      {
        q: 'Why should my company use a professional ITAD provider instead of disposing of equipment internally?',
        a: "Professional ITAD providers ensure data security, regulatory compliance, and environmentally responsible recycling — reducing your company's liability and environmental footprint far beyond what internal disposal can achieve.",
      },
    ],
  },
  {
    category: 'Data Security & Compliance',
    items: [
      {
        q: 'How can I be sure my data has been permanently destroyed?',
        a: 'Envirocycle follows R2v3-certified data destruction protocols, including physical shredding and DoD-compliant wiping, and provides a Certificate of Data Destruction for every job.',
      },
      {
        q: 'What data destruction methods does Envirocycle use?',
        a: 'We use a combination of physical destruction (shredding, degaussing) and software-based overwriting methods that meet international data sanitization standards.',
      },
      {
        q: 'Do you provide on-site data destruction services?',
        a: 'Yes, we offer on-site data destruction for clients who require witnessed destruction of sensitive media without assets leaving their premises.',
      },
      {
        q: 'How do you ensure the chain of custody of our IT assets?',
        a: 'Every asset is tracked from pickup to final disposition using serialized manifests and real-time reporting, ensuring a fully auditable chain of custody.',
      },
      {
        q: "Are Envirocycle's IT asset disposal and data destruction services compliant with the Data Privacy Act and other applicable regulations?",
        a: 'Yes. Our processes are aligned with the Philippine Data Privacy Act (RA 10173), R2v3, ISO 14001, and other applicable local and international regulations.',
      },
      {
        q: "Why do Envirocycle's certifications matter?",
        a: 'Our R2v3, ISO 14001, and DENR certifications are third-party validated proof that we operate to the highest standards of environmental responsibility and data security — protecting your company from liability.',
      },
      {
        q: 'How do you protect sensitive business information throughout the disposal process?',
        a: 'Assets are handled under strict chain-of-custody controls with access limited to vetted personnel, and all data-bearing media is sanitized before any downstream processing.',
      },
      {
        q: 'Can you securely destroy defective or damaged storage devices?',
        a: 'Yes. Damaged drives that cannot be wiped via software are physically shredded or degaussed to ensure no data can be recovered.',
      },
    ],
  },
  {
    category: 'Asset Recovery & Recycling',
    items: [
      {
        q: 'What happens to my IT assets after secure data destruction?',
        a: 'After data destruction, assets are evaluated for reuse, refurbishment, or responsible recycling. Nothing goes to landfill — every component is routed through our certified downstream processes.',
      },
      {
        q: 'Can my old IT equipment still have value?',
        a: 'Yes. Many end-of-life IT assets retain residual market value. Envirocycle assesses each asset and can return revenue to your organisation through our remarketing program.',
      },
      {
        q: 'Do you refurbish and remarket reusable IT equipment?',
        a: 'Yes. Equipment that meets quality standards is refurbished, tested, and remarketed — extending its life cycle and reducing environmental impact while generating value for your business.',
      },
      {
        q: 'Do you recycle equipment that cannot be refurbished or reused?',
        a: 'Absolutely. All non-reusable equipment is dismantled and processed through our R2v3-certified recycling facilities, ensuring materials are recovered responsibly.',
      },
      {
        q: 'What happens to equipment that cannot be repaired or resold?',
        a: 'Equipment beyond repair or resale is broken down into raw materials — metals, plastics, and components — and directed to certified downstream recyclers in compliance with environmental regulations.',
      },
      {
        q: 'Can you help maximize the value of our retired IT assets?',
        a: 'Yes. Our asset recovery specialists assess your inventory and develop a disposition strategy that balances data security, regulatory compliance, and maximum return on your retired assets.',
      },
    ],
  },
  {
    category: 'Collection & Logistics',
    items: [
      {
        q: 'How quickly can Envirocycle collect and process our IT assets?',
        a: 'Collection timelines depend on volume and location, but we typically schedule pickups within 3–5 business days of confirmation. Rush collections can be arranged for urgent needs.',
      },
      {
        q: 'Can Envirocycle collect IT assets from multiple locations nationwide?',
        a: 'Yes. We have the capacity to coordinate multi-site collections across the Philippines, consolidating assets from multiple offices or branches into a single managed disposition process.',
      },
      {
        q: 'Is there a minimum quantity of IT assets required for collection?',
        a: 'We handle collections of all sizes — from a single device to thousands of units. Contact our team to discuss the best approach for your volume.',
      },
      {
        q: 'Can Envirocycle provide regular or scheduled IT asset collection services?',
        a: 'Yes. We offer scheduled collection programs for organisations that regularly retire equipment, ensuring a seamless and ongoing disposal process.',
      },
      {
        q: 'Can you support large-scale office relocations or technology refresh projects?',
        a: 'Absolutely. We specialise in large-scale technology refresh and office relocation projects, providing logistics, data destruction, and disposition services under one coordinated program.',
      },
      {
        q: 'Can Envirocycle collect assets outside Metro Manila?',
        a: 'Yes. Our collection services extend beyond Metro Manila to key cities and provinces across the Philippines. Contact us to confirm coverage for your specific location.',
      },
    ],
  },
  {
    category: 'Documentation & Reporting',
    items: [
      {
        q: 'What documentation will I receive after my assets have been processed?',
        a: 'You will receive a comprehensive end-of-life report including a Certificate of Data Destruction, Certificate of Treatment, serialized asset manifest, and downstream recycling documentation.',
      },
      {
        q: 'Do you issue Certificates of Data Destruction?',
        a: 'Yes. Every data destruction job — whether software-based wiping or physical destruction — is accompanied by a Certificate of Data Destruction detailing the method used and assets covered.',
      },
      {
        q: 'Will I receive a Certificate of Treatment (COT)?',
        a: 'Yes. A Certificate of Treatment is issued for all processed assets, confirming that equipment was handled in accordance with environmental regulations and our certified processes.',
      },
      {
        q: 'Can you provide serialized inventory reports of all processed assets?',
        a: 'Yes. We provide detailed serialized reports listing each asset by make, model, and serial number — giving you full visibility and an auditable record of your entire disposition event.',
      },
      {
        q: 'Can Envirocycle customize reports to meet our internal compliance requirements?',
        a: 'Yes. We can tailor reporting formats and data fields to align with your internal compliance, audit, or ESG reporting requirements.',
      },
    ],
  },
  {
    category: 'Sustainability & ESG',
    items: [
      {
        q: 'How does responsible IT asset disposal support our ESG and sustainability goals?',
        a: 'Proper ITAD diverts e-waste from landfills, reduces carbon emissions from raw material extraction, and supports circular economy principles — all of which contribute directly to ESG reporting metrics and sustainability commitments.',
      },
      {
        q: 'How does Envirocycle help reduce electronic waste?',
        a: 'By maximising asset reuse, refurbishment, and certified material recovery, Envirocycle ensures that the majority of retired IT equipment is kept out of landfills and back in productive use.',
      },
      {
        q: 'Can Envirocycle help our company meet sustainability or environmental reporting requirements?',
        a: 'Yes. We provide environmental impact reports — including tonnes of e-waste diverted, CO₂ equivalents avoided, and materials recovered — to support your sustainability disclosures and ESG reporting.',
      },
      {
        q: 'How does ITAD support a circular economy?',
        a: 'ITAD keeps materials in use longer through reuse and refurbishment, and recovers raw materials when products reach end-of-life — reducing demand for virgin resources and closing the loop on electronics.',
      },
    ],
  },
  {
    category: 'Working with Envirocycle',
    items: [
      {
        q: 'How do I schedule an IT asset collection?',
        a: "Simply contact our team via our website inquiry form or email. We'll assess your needs, confirm logistics, and schedule a pickup at a time that works for you.",
      },
      {
        q: 'What should we do before scheduling a collection?',
        a: 'We recommend compiling a rough inventory of assets to be retired and identifying any specific data security requirements. Our team will guide you through the rest of the process.',
      },
      {
        q: "Can Envirocycle customize its services to meet our company's requirements?",
        a: 'Yes. We tailor our ITAD programs to match your operational, compliance, and reporting needs — from collection scheduling to data destruction methods and documentation.',
      },
      {
        q: 'Do you offer one-time projects as well as ongoing partnerships?',
        a: 'Yes. We support both one-time disposition events and long-term managed ITAD partnerships with scheduled collections and dedicated account management.',
      },
      {
        q: 'How do I request a quotation?',
        a: "You can request a quotation through our website contact form or by reaching out directly to our sales team. Provide a rough asset count and we'll get back to you promptly.",
      },
      {
        q: 'Why should I choose Envirocycle as my ITAD partner?',
        a: "Envirocycle is the Philippines' leading R2v3-certified ITAD provider, combining rigorous data security, environmental compliance, and transparent reporting — giving you confidence that your assets are handled responsibly from start to finish.",
      },
    ],
  },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 dark:border-[#1e2d3d]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 md:py-5 text-left text-sm md:text-md font-medium text-gray-800 dark:text-gray-100 hover:text-[#6abf4b] transition-colors gap-4"
      >
        <span>{q}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-4 text-md text-gray-500 dark:text-gray-400 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <div className="pt-20 mx-auto md:mx-72">
      {/* Hero banner */}
      <div className="relative w-full flex items-stretch">
        <div className="w-[30%] bg-white dark:bg-[#0a0e1a] shrink-0" />
        <div className="flex-1">
          <img src={heroBanner} alt="FAQs" className="w-full h-auto block" />
        </div>
        <div className="absolute left-[2%] top-[80%] -translate-y-1/2 bg-[#122447]/80 px-10 py-7 md:px-14 md:py-9 max-w-full">
          <h1 className="text-white font-extralight leading-none tracking-tighter text-base md:text-3xl lg:text-6xl drop-shadow-lg">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ content */}
      <div className="bg-white dark:bg-[#0a0e1a] py-16 px-8 md:px-20 lg:px-28">
        {faqCategories.map(({ category, items }) => (
          <div key={category} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 mb-16">
            <div>
              <h2 className="text-xl md:text-4xl font-semibold text-gray-900 dark:text-white">{category}</h2>
            </div>
            <div>
              {items.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
