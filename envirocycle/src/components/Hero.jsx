import heroImg from '../assets/images/banners/main-section.png'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-20 md:h-[50vh]">
      {/* Hero image */}
      <img
        src={heroImg}
        alt="Building a Circular Economy for Assets"
        className="w-full h-auto md:h-full object-cover block"
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-20 lg:px-28">
        <div className="text-white font-extralight leading-none drop-shadow-lg tracking-tighter text-xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div>Building a Circular</div>
          <div>Economy for Assets</div>
        </div>
      </div>
    </section>
  )
}
