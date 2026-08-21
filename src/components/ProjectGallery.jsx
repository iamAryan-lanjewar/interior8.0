'use client';

import Link from 'next/link';
import { Maximize2 } from 'lucide-react';

export default function ProjectGallery({ onSelectImage, onOpenProjects }) {
  const galleryImages = [
    {
      src: "/assets/gallery_1.jpg",
      title: "Cozy Living Room Metamorphosis",
      subtitle: "Textured Wall Finish & Warm Illumination"
    },
    {
      src: "/assets/gallery_2.jpg",
      title: "Minimalist Brick Accent Wall",
      subtitle: "Clean Line prep & Seamless Edges"
    },
    {
      src: "/assets/gallery_3.jpg",
      title: "Eclectic Gallery Wall Concept",
      subtitle: "Custom Pattern & Precision Trim"
    }
  ];

  return (
    <section id="gallery" className="bg-pink-brand py-12 md:py-28 px-4 sm:px-8 md:px-10 border-t border-maroon-brand/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Copy matching Page 3 PDF */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 space-y-2 sm:space-y-4">
          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand tracking-tight">
            Project gallery
          </h2>
          <p className="text-maroon-brand/90 font-medium text-base md:text-xl leading-relaxed">
            Take a look at our past projects transformed with creativity and care. Every job is finished to perfection, ready for proud homeowners.
          </p>
        </div>

        {/* 3 Gallery Grid Images matching original PDF layout with titles below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage(item)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container matching original design */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/60 h-[260px] xs:h-[320px] sm:h-[380px] md:h-[400px] bg-white hover-lift">
                <img
                  src={item.src}
                  alt={`${item.title} - ${item.subtitle} by RK Interior`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-brand/90 via-maroon-brand/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-8 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-pink-brand text-maroon-brand">
                      View Project
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-white/80 text-xs mt-0.5 sm:mt-1">{item.subtitle}</p>
                </div>
              </div>

              {/* Project Title directly below image in exact brand font style */}
              <div className="mt-3.5 px-1 text-center sm:text-left">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-maroon-brand leading-snug group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-maroon-brand/80 text-xs sm:text-sm font-medium mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Button on the Bottom Right */}
        <div className="flex justify-end mt-8 sm:mt-12">
          <Link
            href="/projects"
            prefetch={false}
            className="bg-maroon-brand hover:bg-maroon-dark text-white font-display font-extrabold text-sm sm:text-base px-7 py-3 sm:px-8 sm:py-3.5 rounded-full shadow-xl hover-lift transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Projects</span>
            <span className="text-pink-brand font-bold text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
