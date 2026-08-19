import React from 'react';
import { Layers, RefreshCw, Wrench } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Space Planning",
      image: "/assets/service_installation.jpg",
      icon: Layers,
      description: "From furniture layout to lighting placement, our designers craft functional and beautiful interiors tailored to your lifestyle. Every corner is planned with purpose, flow, and aesthetic harmony."
    },
    {
      title: "Renovation & Makeover",
      image: "/assets/service_removal.jpg",
      icon: RefreshCw,
      description: "We breathe new life into dated or tired spaces through complete room makeovers. From concept to completion, every detail is handled with care—no disruption, just stunning results."
    },
    {
      title: "Finish & Styling",
      image: "/assets/service_prep.jpg",
      icon: Wrench,
      description: "We handle surface treatment, texture application, and decorative styling to complete your interior to perfection. Every finish is curated to elevate the overall design and ensure lasting quality."
    }
  ];

  return (
    <section id="services" className="bg-sky-brand py-12 md:py-32 px-4 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-24">
        {services.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center group"
            >
              {/* Image Container matching rounded rectangle PDF style */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/60 bg-white hover-lift">
                  <img
                    src={service.image}
                    alt={`${service.title} interior design service by RK Interior`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Service Text Description - Centered on Mobile */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-maroon-brand shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-maroon-brand/80">
                    Service 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-maroon-brand leading-tight text-center lg:text-left">
                  {service.title}
                </h3>

                <p className="text-maroon-brand/90 font-medium text-sm xs:text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
