'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Info, 
  Layers, 
  Palette, 
  Image as ImageIcon, 
  Calculator, 
  Send, 
  Phone, 
  ArrowRight, 
  X 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home', number: '01', icon: Home, description: 'Elevate your space with RK Interior' },
    { id: 'about', label: 'About Us', number: '02', icon: Info, description: 'Free consultation & NEST Wallpapers' },
    { id: 'services', label: 'Services', number: '03', icon: Layers, description: 'Space Planning, Makeover & Styling' },
    { id: 'styles', label: 'Explore Styles', number: '04', icon: Palette, description: 'Minimalist, Biophilic & Luxury' },
    { id: 'gallery', label: 'Project Gallery', number: '05', icon: ImageIcon, description: 'Real transformations & past work' },
    { id: 'estimates', label: 'Free Estimates', number: '06', icon: Calculator, description: 'Why precision saves you money' },
    { id: 'contact', label: 'Book an Estimate', number: '07', icon: Send, description: 'Request your fast 24h quote' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      {/* Standalone Floating Menu Button - PC ONLY (hidden on mobile, visible on sm/md/lg/xl) */}
      <div className="hidden sm:block fixed top-4 right-4 sm:top-6 sm:right-8 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="group relative flex items-center gap-3.5 bg-white/90 hover:bg-white text-maroon-brand backdrop-blur-md border border-white/80 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Aesthetic 3 Lines Container */}
          <div className="relative w-6 h-6 sm:h-7 flex flex-col justify-between items-center py-0.5">
            {/* Line 1 */}
            <span className={`block w-6 h-0.5 bg-maroon-brand rounded-full transition-all duration-300 ease-in-out transform origin-center ${
              isOpen ? 'rotate-45 translate-y-[10px] sm:translate-y-[11px] bg-pink-600' : 'group-hover:w-6'
            }`} />
            
            {/* Line 2 */}
            <span className={`block h-0.5 bg-maroon-brand rounded-full transition-all duration-300 ease-in-out ${
              isOpen 
                ? 'w-0 opacity-0 scale-x-0' 
                : 'w-4 group-hover:w-6 bg-pink-600'
            }`} />
            
            {/* Line 3 */}
            <span className={`block w-6 h-0.5 bg-maroon-brand rounded-full transition-all duration-300 ease-in-out transform origin-center ${
              isOpen ? '-rotate-45 -translate-y-[10px] sm:-translate-y-[11px] bg-pink-600' : 'group-hover:w-6'
            }`} />
          </div>

          {/* Navigation Label */}
          <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-maroon-brand select-none">
            {isOpen ? 'Close' : 'Menu'}
          </span>

          {/* Glowing Pulse Dot indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
          </span>
        </button>
      </div>

      {/* Backdrop Blur Overlay when Drawer is Open */}
      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-maroon-brand/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Aesthetic Navigation Drawer (Slides from Top Right) */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[88vw] max-w-sm sm:max-w-md bg-white/95 backdrop-blur-2xl z-50 shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-white/80`}
      >
        {/* Drawer Top Bar */}
        <div>
          <div className="flex items-center justify-between border-b border-maroon-brand/10 pb-5 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-maroon-brand/60 block">
                Navigation Menu
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-maroon-brand">
                R K Interior
              </h2>
            </div>

            {/* Close Button Inside Drawer */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-sky-brand/30 hover:bg-sky-brand flex items-center justify-center text-maroon-brand transition-all hover:rotate-90 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Keys List */}
          <nav aria-label="Main menu">
            <div className="text-[11px] uppercase tracking-wider font-extrabold text-maroon-brand/70 mb-3 px-2">
              Website Keys
            </div>
            
            <ul className="space-y-2">
              {navItems.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="w-full group flex items-center justify-between p-3.5 rounded-2xl hover:bg-sky-brand/40 transition-all duration-200 text-left cursor-pointer border border-transparent hover:border-sky-brand/60"
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Number Badge */}
                        <span className="w-7 h-7 rounded-xl bg-pink-brand/50 group-hover:bg-pink-brand text-maroon-brand font-display font-extrabold text-xs flex items-center justify-center transition-colors">
                          {item.number}
                        </span>

                        {/* Title & Description */}
                        <div>
                          <div className="font-display font-extrabold text-base sm:text-lg text-maroon-brand group-hover:text-pink-600 transition-colors flex items-center gap-2">
                            <span>{item.label}</span>
                          </div>
                          <p className="text-xs text-maroon-brand/70 font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon Arrow */}
                      <div className="w-8 h-8 rounded-full bg-white group-hover:bg-maroon-brand text-maroon-brand group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Drawer Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-maroon-brand/10">
          <div className="flex items-center justify-between text-xs text-maroon-brand/80 font-medium px-2">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-maroon-brand" />
              <span>Response in &lt; 24h</span>
            </span>
            <span className="text-[11px] bg-white px-2.5 py-1 rounded-full border border-maroon-brand/10 font-bold">
              R K Interior
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
