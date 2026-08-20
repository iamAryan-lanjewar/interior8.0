'use client';

import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fadeIn cursor-zoom-out"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative max-w-5xl w-full bg-transparent rounded-3xl overflow-hidden shadow-2xl cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={image.src}
          alt={image.title}
          className="w-full max-h-[80vh] object-contain rounded-2xl bg-black/40"
        />

        <div className="bg-white p-6 rounded-b-2xl">
          <h3 className="font-display font-extrabold text-2xl text-maroon-brand">
            {image.title}
          </h3>
          <p className="text-maroon-brand/70 text-sm mt-1">
            {image.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
