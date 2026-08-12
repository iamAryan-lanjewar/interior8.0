import React from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

export default function EstimatesInfo({ onOpenQuote }) {
  return (
    <section id="estimates" className="bg-sky-brand py-20 sm:py-32 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Large Rounded Bathroom Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 group">
            <img
              src="/assets/estimates_bathroom.jpg"
              alt="Accurate estimate bathroom wallpaper installation"
              className="w-full h-[400px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-brand/20 via-transparent to-transparent opacity-60" />
            
            {/* Floating Tag */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-maroon-brand">
              <Calculator className="w-6 h-6 text-maroon-brand" />
              <div>
                <div className="font-extrabold text-sm">100% Free & Fast</div>
                <div className="text-xs text-maroon-brand/80">No Obligation Quote</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Content matching Page 3 PDF */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-maroon-brand leading-tight tracking-tight mb-6">
              Why estimates matter
            </h2>

            <div className="font-display font-bold text-xl sm:text-2xl text-maroon-brand/90 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-pink-vivid" />
              <span>Precision saves you money.</span>
            </div>

            <p className="text-maroon-brand/90 font-medium text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
              Accurate measurements mean fewer wasted rolls and a cleaner result. Our estimates are obligation-free—no pressure, just honest guidance.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-maroon-brand hover:bg-maroon-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover-lift transition-all duration-300"
            >
              <span>Get Your Free Estimate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
