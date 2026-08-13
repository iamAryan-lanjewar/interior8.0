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
              alt="Accurate free wallpaper estimate for bathroom and home interiors by RK Interior"
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

        {/* Right Side: Copy & Content matching Page 3 PDF */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand leading-tight tracking-tight mb-4 md:mb-6">
              Why estimates matter
            </h2>

            <div className="font-display font-bold text-lg sm:text-xl md:text-2xl text-maroon-brand/90 mb-4 md:mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-vivid shrink-0" />
              <span>Precision saves you money.</span>
            </div>

            <p className="text-maroon-brand/90 font-medium text-base md:text-xl leading-relaxed max-w-xl mb-6 md:mb-8">
              Accurate measurements mean fewer wasted rolls and a cleaner result. Our estimates are obligation-free—no pressure, just honest guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
