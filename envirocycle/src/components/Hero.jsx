import heroImg from '../assets/banners/landing-page-banner.png'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-16">
      {/* Hero image */}
      <img
        src={heroImg}
        alt="Building a Circular Economy for Assets"
        className="w-full object-cover block"
      />

      {/* Text overlay — 2-col grid */}
      <div className="absolute inset-0 flex items-center px-12 md:px-20 lg:px-28">
        <div className="w-full grid grid-cols-2 gap-8">
          {/* Left column — text */}
          <div className="flex items-center justify-center">
            <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight drop-shadow-lg text-center">
              Building a Circular<br />Economy for Assets
            </h1>
          </div>
          {/* Right column — empty / reserved */}
          <div />
        </div>
      </div>
    </section>
  )
}
