'use client';

import React, { useState } from 'react';
import { Maximize2, ArrowLeft, Eye, Calendar } from 'lucide-react';

export default function ProjectsPage({ onBackToHome, onSelectImage, onBookAppointment }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const decors = [
    {
      id: 1,
      image: '/assets/project_8_0/Modern Organic Living Room.jpg',
      title: 'Modern Organic Living Room',
      subtitle: 'Sculptural Furniture & Neutral Earth Tones',
      category: 'Living Space',
      tag: 'Living Space',
      offsetClass: 'sm:mt-0'
    },
    {
      id: 2,
      image: '/assets/project_8_0/aranprime-KbytCpI1i5I-unsplash.jpg',
      title: 'Minimalist Fluted Lounge',
      subtitle: 'Ambient Wall Sconce & Warm Lighting',
      category: 'Wall Accent',
      tag: 'Wall Accent',
      offsetClass: 'sm:mt-12 md:mt-16'
    },
    {
      id: 3,
      image: '/assets/project_8_0/jean-philippe-delberghe-90eBoEp2tS0-unsplash.jpg',
      title: 'Architectural Wall Concept',
      subtitle: 'Textured Wall Panel & Contemporary Art',
      category: 'Wall Accent',
      tag: 'Custom Prep',
      offsetClass: 'sm:mt-0'
    },
    {
      id: 4,
      image: '/assets/project_8_0/julia-GAwEGMN_EMs-unsplash.jpg',
      title: 'Blush Pastel Dining Suite',
      subtitle: 'Custom Wall Finish & Pendant Illumination',
      category: 'Dining',
      tag: 'Dining Nook',
      offsetClass: 'sm:mt-12 md:mt-16'
    },
    {
      id: 5,
      image: '/assets/project_8_0/karolina-grabowska-ulh3-dLSXjI-unsplash.jpg',
      title: 'Earthy Terracotta & Plant Studio',
      subtitle: 'Natural Fiber Wall Prep & Botanical Accents',
      category: 'Botanical',
      tag: 'Botanical',
      offsetClass: 'sm:mt-0'
    },
    {
      id: 6,
      image: '/assets/project_8_0/khloe-arledge-8Rz_RIyp5FM-unsplash.jpg',
      title: 'Serene Velvet & Wood Sanctuary',
      subtitle: 'Deep Charcoal Accent Wall & Warm Oak',
      category: 'Living Space',
      tag: 'Bedroom Suite',
      offsetClass: 'sm:mt-12 md:mt-16'
    },
    {
      id: 7,
      image: '/assets/project_8_0/lakeisha-bennett-WzP3YnV9T-U-unsplash.jpg',
      title: 'Sunlit Botanical Haven',
      subtitle: 'Peel & Stick Floral Accent Wall',
      category: 'Botanical',
      tag: 'Floral Wall',
      offsetClass: 'sm:mt-0'
    },
    {
      id: 8,
      image: '/assets/project_8_0/the-prototype-7S-Ox-heSqs-unsplash.jpg',
      title: 'Contemporary Loft Penthouse',
      subtitle: 'High-Ceiling Wall Panels & Glass Facade',
      category: 'Loft',
      tag: 'Loft Interior',
      offsetClass: 'sm:mt-12 md:mt-16'
    }
  ];

  const categories = ['All', 'Living Space', 'Wall Accent', 'Botanical', 'Dining', 'Loft'];

  const filteredDecors = activeCategory === 'All' 
    ? decors 
    : decors.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-pink-brand text-maroon-brand font-sans flex flex-col justify-between selection:bg-maroon-brand selection:text-white pb-20">
      
      {/* Top Navigation Bar: Floating Back Button on Top Right Side */}
      <header className="max-w-7xl mx-auto w-full px-4 sm:px-8 pt-4 sm:pt-10 flex items-center justify-end">
        <button
          onClick={onBackToHome}
          aria-label="Back to Home"
          className="group flex items-center gap-2 bg-white/90 hover:bg-white text-maroon-brand backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl border border-white/80 font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Title & Subtitle Section */}
      <main className="max-w-[1360px] mx-auto w-full px-4 sm:px-8 md:px-12 flex-grow">
        
        <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-8 mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          {/* Heading title in single line */}
          <div className="w-full overflow-hidden flex justify-center">
            <h1 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand uppercase leading-none text-center select-none flex items-center justify-center gap-2 xs:gap-4 sm:gap-7">
              <span>INTERIOR</span>
              <span>DECORS</span>
            </h1>
          </div>

          {/* Caption */}
          <p className="text-maroon-brand/90 font-display font-bold text-xs xs:text-sm sm:text-lg md:text-xl max-w-xl mx-auto text-center leading-snug tracking-tight px-2">
            Explore our curated interior design portfolio, showcasing innovative decor concepts and creative solutions.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 pt-3 sm:pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 xs:px-4 xs:py-2 rounded-full font-display font-bold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-maroon-brand text-white shadow-lg scale-105'
                    : 'bg-white/80 hover:bg-white text-maroon-brand shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Parallel 2-Column Grid with No Overlap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-6 sm:gap-y-16 w-full max-w-[1360px] mx-auto items-start">
          {filteredDecors.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onSelectImage) {
                  onSelectImage({ src: item.image, title: item.title, subtitle: item.subtitle });
                }
              }}
              className={`group cursor-pointer flex flex-col ${item.offsetClass} transition-transform duration-500`}
            >
              {/* Glassmorphic Card Container */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-3.5 xs:p-4 sm:p-5 border-4 border-white/90 shadow-xl sm:shadow-2xl hover-lift space-y-3 sm:space-y-4 transition-all duration-300">
                
                {/* Image Container with Custom Aspect Ratio */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-gray-100 border border-maroon-brand/10">
                  <img
                    src={item.image}
                    alt={`${item.title} - RK Interior Decors`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-display font-extrabold text-maroon-brand shadow-md">
                    {item.tag}
                  </div>

                  {/* Interactive Hover Zoom Overlay */}
                  <div className="absolute inset-0 bg-maroon-brand/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-maroon-brand flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Title & Subtitle in Website Theme Typography */}
                <div className="px-1 pt-0.5 pb-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-base xs:text-lg sm:text-xl text-maroon-brand group-hover:text-pink-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-maroon-brand/75 text-[11px] sm:text-sm font-medium mt-0.5 sm:mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-brand/40 group-hover:bg-maroon-brand group-hover:text-white text-maroon-brand flex items-center justify-center shrink-0 transition-colors shadow-sm ml-2 sm:ml-3">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button Container */}
        <div className="mt-12 sm:mt-28 text-center">
          <button
            onClick={onBookAppointment || onBackToHome}
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-maroon-brand hover:bg-maroon-dark text-white font-display font-extrabold text-xs xs:text-sm sm:text-base px-7 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer border-2 border-white/20"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Book your appointment</span>
          </button>
        </div>

      </main>

      {/* Clean Aesthetic Footer */}
      <footer className="pt-12 sm:pt-16 text-center text-[10px] sm:text-xs text-maroon-brand/80 font-extrabold tracking-wider uppercase">
        © RK Interior &amp; NEST WALLPAPERS • All Rights Reserved
      </footer>
    </div>
  );
}
