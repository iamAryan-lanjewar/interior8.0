import React from 'react';

export default function FreeConsultation({ onOpenConsultation }) {
  const handleGoToForm = (e) => {
    e.stopPropagation();
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="bg-pink-brand py-12 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Large Rounded Nursery Room Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/assets/consultation_nursery.jpg"
              alt="Free interior design consultation by RK Interior"
              className="w-full h-[260px] xs:h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Copy & Brand Logo - Centered on Mobile */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 md:space-y-10 text-center lg:text-left">
          <div>
            {/* "Free color consultation" styled as the website's signature pill button that navigates to the form */}
            <div className="mb-4 md:mb-8 flex justify-center lg:justify-start">
              <button
                onClick={handleGoToForm}
                className="bg-maroon-brand hover:bg-maroon-dark text-white font-display font-extrabold text-lg xs:text-xl sm:text-3xl md:text-4xl px-6 sm:px-10 py-3.5 sm:py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/20 text-center leading-tight tracking-tight"
              >
                Free color consultation
              </button>
            </div>

            {/* Paragraph Text Centered on Mobile */}
            <p className="text-maroon-brand/90 font-medium text-sm xs:text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Book a complimentary design session this month and receive a free color, layout, and material consultation. We'll help you discover a style that perfectly suits your home's character, light, and flow.
            </p>
          </div>

          {/* Bottom Brand Logo Centered on Mobile */}
          <div className="pt-6 md:pt-8 border-t border-maroon-brand/20">
            <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-maroon-brand tracking-tighter uppercase leading-none select-none text-center lg:text-left">
              R K Interior
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
