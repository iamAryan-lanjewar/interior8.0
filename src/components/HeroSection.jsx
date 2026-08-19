import React from 'react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-pink-600">
      {/* Background Image matching user screenshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.jpg"
          alt="R K Interior Professional Interior Design & Home Transformation"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Subtle overlay matching screenshot */}
        <div className="absolute inset-0 bg-pink-900/15 mix-blend-multiply" />
      </div>

      {/* Hero Content Container with clean, minimalist mobile & desktop spacing */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 w-full pt-16 xs:pt-20 sm:pt-28 pb-8 sm:pb-14 flex flex-col justify-center">
        
        {/* R K Interior Header sitting cleanly above ELEVATE */}
        <div className="w-full text-left pl-1 sm:pl-2 mb-1.5 sm:mb-5">
          <div className="text-white font-display font-extrabold text-xl xs:text-2xl sm:text-5xl md:text-6xl tracking-tight leading-none drop-shadow-md">
            R K Interior
          </div>
        </div>

        {/* Minimalist, Clean ELEVATE with crisp responsive stroke and zero letter overlap */}
        <h1 className="w-full text-white font-elevate text-[2.7rem] min-[360px]:text-[3.2rem] min-[410px]:text-[3.7rem] sm:text-[8.5rem] md:text-[11.5rem] lg:text-[14rem] leading-[0.92] uppercase select-none drop-shadow-lg text-left mb-2.5 sm:mb-8 tracking-tight">
          ELEVATE
        </h1>

        {/* Subtitle & CTA Block cleanly proportioned */}
        <div className="w-full text-center flex flex-col items-center mt-2 sm:mt-4">
          {/* Subtitle: your space. */}
          <div className="text-white font-display font-black text-2xl xs:text-3xl sm:text-6xl md:text-7xl tracking-tight mb-2.5 sm:mb-6 text-center drop-shadow-md">
            your space.
          </div>

          {/* Description line: Centered layout */}
          <p className="text-white font-medium text-xs xs:text-sm sm:text-2xl text-center max-w-xs sm:max-w-2xl mb-4 sm:mb-8 leading-snug drop-shadow-sm">
            Premium interior design services for <br className="hidden sm:inline" />
            beautiful, lasting spaces.
          </p>

          {/* Minimalist Mobile & Desktop Pill CTA Button */}
          <div className="flex justify-center w-full px-2 sm:px-0 mt-2 sm:mt-0">
            <button
              onClick={onOpenConsultation}
              className="w-full max-w-xs sm:max-w-none sm:w-auto sm:min-w-[420px] md:min-w-[480px] lg:min-w-[520px] min-h-[48px] sm:min-h-[64px] bg-pink-brand hover:bg-pink-light text-maroon-brand font-display font-extrabold text-sm xs:text-base sm:text-2xl px-6 sm:px-16 py-3.5 sm:py-5 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer flex items-center justify-center tracking-wide"
            >
              Book your appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
