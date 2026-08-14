import inquiryImg from '../assets/images/inquiry/inquiry-section.png'

export default function CTASection() {
  return (
    <section className="bg-[#0a0e1a] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-gray-400 min-h-[180px] flex items-center">
          {/* Background image */}
          <img src={inquiryImg} alt="" className="absolute inset-0 w-full h-full object-cover" />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-10 py-10 gap-6">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready To Make an Impact?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Get in touch to explore how we can support your objectives. We&apos;re available to discuss tailored solutions and next steps that fit your needs.
              </p>
            </div>
            <button className="flex-shrink-0 bg-[#6abf4b] hover:bg-[#5aaf3b] text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm tracking-wide uppercase">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
