import React from 'react';
import { Eye, Maximize2 } from 'lucide-react';

export default function ProjectGallery({ onSelectImage }) {
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
    <section id="gallery" className="bg-pink-brand py-20 sm:py-28 px-6 sm:px-10 border-t border-maroon-brand/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Copy matching Page 3 PDF */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-maroon-brand tracking-tight">
            Project gallery
          </h2>
          <p className="text-maroon-brand/90 font-medium text-lg sm:text-xl leading-relaxed">
            Take a look at our past projects transformed with creativity and care. Every job is finished to perfection, ready for proud homeowners.
          </p>
        </div>

        {/* 3 Gallery Grid Images side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage(item)}
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/60 group cursor-pointer h-[350px] sm:h-[420px] bg-white hover-lift"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-brand/80 via-maroon-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-pink-brand text-maroon-brand">
                    View Project
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl">{item.title}</h3>
                <p className="text-white/80 text-xs mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
