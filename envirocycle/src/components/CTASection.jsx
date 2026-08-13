export default function CTASection() {
  return (
    <section className="bg-[#0a0e1a] py-16 px-12 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-[#1e2d3d] min-h-[180px] flex items-center">
          {/* Background Earth image effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1623] via-[#0d1a2e] to-[#0a1628]" />
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="160" cy="160" r="120" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <circle cx="160" cy="160" r="80" fill="none" stroke="#1d4ed8" strokeWidth="1" opacity="0.5"/>
              <circle cx="160" cy="160" r="120" fill="url(#earthGrad)" opacity="0.3"/>
              <defs>
                <radialGradient id="earthGrad" cx="40%" cy="40%">
                  <stop offset="0%" stopColor="#1d4ed8"/>
                  <stop offset="60%" stopColor="#065f46"/>
                  <stop offset="100%" stopColor="#0a0e1a"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

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
