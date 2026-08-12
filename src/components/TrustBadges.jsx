import React from 'react';

export default function TrustBadges() {
  const trustCards = [
    {
      title1: "Professional",
      title2: "craftsmanship",
      description: "Every project starts with surface prep and ends with clean lines."
    },
    {
      title1: "High-quality",
      title2: "materials",
      description: "We work with top-grade adhesives and wallpapers that last."
    },
    {
      title1: "Respect for",
      title2: "your space",
      description: "We protect floors, furniture, and leave your room spotless."
    }
  ];

  return (
    <section id="trust-us" className="bg-sky-brand py-20 sm:py-28 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching PDF Page 1 */}
        <h2 className="text-center font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-maroon-brand tracking-tight mb-16 sm:mb-20">
          Why homeowners trust us
        </h2>

        {/* 3 White Rounded Cards Grid matching PDF Page 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-card hover-lift flex flex-col justify-between min-h-[300px] border border-white/60"
            >
              {/* Card Title matching PDF 2-line structure */}
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-maroon-brand leading-tight">
                {card.title1} <br />
                {card.title2}
              </h3>

              {/* Card Description matching PDF text */}
              <p className="text-maroon-brand/90 font-medium text-base sm:text-lg leading-relaxed mt-12">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
