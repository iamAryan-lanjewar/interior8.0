'use client';

import React, { useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300 cursor-zoom-out"
      aria-modal="true"
      role="dialog"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl cursor-default animate-slideUp border border-white/20 flex flex-col max-h-[92vh]"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Full Image Container */}
        <div className="relative w-full bg-neutral-950 flex items-center justify-center overflow-hidden min-h-[220px] max-h-[72vh]">
          <img
            src={image.src}
            alt={image.title || 'RK Interior Project Image'}
            className="w-full h-full max-h-[72vh] object-contain select-none"
          />
        </div>

        {/* Caption Bar */}
        {(image.title || image.subtitle) && (
          <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 border-t border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-2xl text-maroon-brand leading-tight">
                {image.title || 'RK Interior & NEST WALLPAPERS'}
              </h3>
              {image.subtitle && (
                <p className="text-maroon-brand/70 text-xs sm:text-sm font-medium mt-0.5">
                  {image.subtitle}
                </p>
              )}
            </div>
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-maroon-brand bg-pink-brand/40 hover:bg-pink-brand px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full View</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
