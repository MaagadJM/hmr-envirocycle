import heroImg from '../assets/banners/main-section.png'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-20">
      {/* Hero image */}
      <img
        src={heroImg}
        alt="Building a Circular Economy for Assets"
        className="w-full object-cover block"
      />

      {/* Text overlay — 2-col grid */}
      <div className="absolute inset-0 flex items-center px-12 md:px-20 lg:px-28">
        <div className="w-full text-center grid grid-cols-2">
          {/* Left column — text */}
          <div className="text-white font-extralight text-4xl md:text-8xl leading-none drop-shadow-lg tracking-tighter">
            <div className="absolute left-54 top-1/2 transform -translate-y-full">
              Building a Circular
              {/* <h1>
                Economy for Assets
              </h1> */}
            </div>
            <div className="absolute left-54">
              Economy for Assets
            </div>
          </div>
          {/* Right column — empty / reserved */}
          <div ></div>
        </div>
      </div>
    </section>
  )
}
