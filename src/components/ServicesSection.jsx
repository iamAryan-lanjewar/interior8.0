import React from 'react';
import { Layers, RefreshCw, Wrench } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Installation",
      image: "/assets/service_installation.jpg",
      icon: Layers,
      description: "From traditional paste-the-wall to modern peel-and-stick, our installers handle every type with the right tools and techniques. Each panel is aligned with laser precision, corners trimmed perfectly, and seams rolled flat."
    },
    {
      title: "Removal",
      image: "/assets/service_removal.jpg",
      icon: RefreshCw,
      description: "We gently loosen and remove old wallpaper using steam and sanding solutions. No gouging, no damage—just smooth walls ready for paint or new paper."
    },
    {
      title: "Prep & Repair",
      image: "/assets/service_prep.jpg",
      icon: Wrench,
      description: "We repair cracks, skim coat uneven surfaces, and apply primer for perfect adhesion. Proper prep ensures your wallpaper looks professional and lasts even longer."
    }
  ];

  return (
    <section id="services" className="bg-sky-brand py-20 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {services.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
            >
              {/* Image Container matching rounded rectangle PDF style */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/60 bg-white hover-lift">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Service Text Description matching PDF */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-maroon-brand shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-maroon-brand/80">
                    Service 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-4xl sm:text-5xl text-maroon-brand leading-tight">
                  {service.title}
                </h3>

                <p className="text-maroon-brand/90 font-medium text-lg sm:text-xl leading-relaxed max-w-2xl">
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
