import React from 'react';

export default function FreeConsultation({ onOpenConsultation }) {
  return (
    <section className="bg-pink-brand py-12 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Large Rounded Nursery Room Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 group">
            <img
              src="/assets/consultation_nursery.jpg"
              alt="Floral wallpaper nursery room consultation by NEST WALLPAPERS"
              className="w-full h-[260px] xs:h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Copy & NEST WALLPAPERS Logo matching PDF Page 1 */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 md:space-y-10">
          <div>
            {/* Section Title */}
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand leading-tight tracking-tight mb-4 md:mb-8">
              Free color <br />
              consultation
            </h2>

            {/* Paragraph Text */}
            <p className="text-maroon-brand/90 font-medium text-base md:text-xl leading-relaxed max-w-xl mb-6 md:mb-8">
              Book a full-room installation this month and get a free color and pattern consultation. We’ll help you find a style that fits your home’s light, layout, and personality.
            </p>

            {/* Action Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full xs:w-auto min-h-[48px] bg-maroon-brand hover:bg-maroon-dark text-white font-display font-bold text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover-lift transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Book your free consultation
            </button>
          </div>

          {/* Bottom Brand Logo matching PDF Page 1 */}
          <div className="pt-6 md:pt-8 border-t border-maroon-brand/20">
            <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-maroon-brand tracking-tighter uppercase leading-none select-none">
              NEST <br />
              WALLPAPERS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
