import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function EstimatesInfo({ onOpenQuote }) {
  return (
    <section id="estimates" className="bg-sky-brand py-12 md:py-32 px-4 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Side: Large Rounded Bathroom Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 group">
            <img
              src="/assets/estimates_bathroom.jpg"
              alt="Accurate free interior design estimate for home spaces by RK Interior"
              className="w-full h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-brand/20 via-transparent to-transparent opacity-60" />
            
            {/* Floating Tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3 text-maroon-brand">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-brand shrink-0" />
              <div>
                <div className="font-extrabold text-xs sm:text-sm">100% Free & Fast</div>
                <div className="text-[10px] sm:text-xs text-maroon-brand/80">No Obligation Quote</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Content - Starts from Right Side on Mobile */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8 text-right lg:text-left">
          <div>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand leading-tight tracking-tight mb-4 md:mb-6 text-right lg:text-left">
              Why estimates matter
            </h2>

            <div className="font-display font-bold text-lg sm:text-xl md:text-2xl text-maroon-brand/90 mb-4 md:mb-6 flex items-center justify-end lg:justify-start gap-2">
              <span className="order-1 lg:order-2">Precision saves you money.</span>
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-vivid shrink-0 order-2 lg:order-1" />
            </div>

            <p className="text-maroon-brand/90 font-medium text-sm xs:text-base md:text-xl leading-relaxed max-w-xl ml-auto lg:ml-0 mb-6 md:mb-8 text-right lg:text-left">
              Accurate planning saves time and budget. Our estimates are obligation-free—no pressure, just honest guidance on the best design approach for your space.
            </p>

            {/* Benefit Checklist - Right aligned on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-md ml-auto lg:ml-0">
              {['Detailed space measurements', 'Zero hidden costs', 'Fast 24-hour turnaround', 'Obligation-free advice'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-end sm:justify-start gap-2.5 text-maroon-brand font-semibold text-xs sm:text-base">
                  <span className="order-1 sm:order-2">{item}</span>
                  <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-maroon-brand font-bold text-xs shrink-0 shadow-sm order-2 sm:order-1">✓</span>
                </div>
              ))}
            </div>

            {/* CTA Button - Right aligned on mobile */}
            <div className="flex justify-end lg:justify-start">
              <button
                onClick={onOpenQuote}
                className="bg-maroon-brand hover:bg-maroon-dark text-white font-display font-extrabold text-xs xs:text-sm sm:text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-full shadow-xl hover-lift transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-pink-brand" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
