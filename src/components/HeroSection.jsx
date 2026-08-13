import React from 'react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-pink-600">
      {/* Background Image matching user screenshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.jpg"
          alt="R K Interior Professional Wallpaper Installation & Removal Room"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Subtle overlay matching screenshot */}
        <div className="absolute inset-0 bg-pink-900/10 mix-blend-multiply" />
      </div>

      {/* Hero Content Container with clean non-overlapping vertical margins */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 w-full pt-10 pb-10 sm:pt-8 sm:pb-14 flex flex-col justify-center">
        
        {/* R K Interior Header sitting cleanly above ELEVATE with no overlap */}
        <div className="w-full text-left pl-1 sm:pl-2 mb-2 sm:mb-5">
          <div className="text-white font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none drop-shadow-md">
            R K Interior
          </div>
        </div>

        {/* Ultra-Bold ELEVATE with responsive stroke and zero letter overlap */}
        <h1 className="w-full text-white font-elevate text-[3.2rem] min-[380px]:text-[3.8rem] min-[440px]:text-[4.5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14.5rem] leading-[0.95] sm:leading-[0.9] uppercase select-none drop-shadow-lg text-left mb-4 sm:mb-8">
          ELEVATE
        </h1>

        {/* Subtitle & CTA Block clearly separated below ELEVATE */}
        <div className="w-full text-center flex flex-col items-center mt-1 sm:mt-4">
          {/* Subtitle: your space. */}
          <div className="text-white font-display font-black text-2xl xs:text-3xl sm:text-6xl md:text-7xl tracking-tight mb-4 sm:mb-7 text-center drop-shadow-md">
            your space.
          </div>

          {/* Description line: Centered layout */}
          <p className="text-white font-normal text-sm xs:text-base sm:text-2xl text-center max-w-xs sm:max-w-2xl mb-5 sm:mb-8 leading-snug drop-shadow-md">
            Seamless wallpaper installation and <br className="hidden sm:inline" />
            stress-free removal.
          </p>

          {/* Pill CTA Button matching screenshot */}
          <div className="flex justify-center w-full px-2 sm:px-0 mt-[3.5cm] sm:mt-0">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto sm:min-w-[420px] md:min-w-[480px] lg:min-w-[520px] min-h-[52px] sm:min-h-[64px] bg-pink-brand hover:bg-pink-light text-maroon-brand font-display font-extrabold text-base sm:text-2xl px-8 sm:px-16 py-4 sm:py-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center tracking-wide"
            >
              Book your appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
