import React from 'react';

export default function FreeConsultation({ onOpenConsultation }) {
  const handleClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      onClick={handleClick}
      className="bg-pink-brand py-12 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden cursor-pointer group"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Large Rounded Nursery Room Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 group-hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/assets/consultation_nursery.jpg"
              alt="Free interior design consultation by RK Interior"
              className="w-full h-[260px] xs:h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Copy & Brand Logo */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 md:space-y-10">
          <div>
            {/* Section Title */}
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand leading-tight tracking-tight mb-4 md:mb-8 group-hover:text-maroon-dark transition-colors">
              Free color <br />
              consultation
            </h2>

            {/* Paragraph Text */}
            <p className="text-maroon-brand/90 font-medium text-base md:text-xl leading-relaxed max-w-xl">
              Book a complimentary design session this month and receive a free color, layout, and material consultation. We'll help you discover a style that perfectly suits your home's character, light, and flow.
            </p>
          </div>

          {/* Bottom Brand Logo */}
          <div className="pt-6 md:pt-8 border-t border-maroon-brand/20">
            <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-maroon-brand tracking-tighter uppercase leading-none select-none">
              R K Interior
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

