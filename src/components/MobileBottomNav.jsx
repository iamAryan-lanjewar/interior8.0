import React from 'react';
import { Home, Image as ImageIcon, MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function MobileBottomNav({ 
  onOpenConsultation, 
  onOpenProjects, 
  onGoHome,
  currentPage 
}) {
  return (
    <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 animate-slideUp">
      <nav 
        aria-label="Mobile quick actions" 
        className="bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_10px_35px_rgba(112,33,43,0.22)] rounded-full px-3 py-2 flex items-center justify-around text-maroon-brand max-w-md mx-auto"
      >
        {/* Home Button */}
        <button
          onClick={onGoHome}
          aria-label="Home"
          className={`flex flex-col items-center justify-center p-1.5 rounded-full transition-transform active:scale-90 cursor-pointer ${
            currentPage === 'home' ? 'text-pink-600 font-extrabold' : 'text-maroon-brand/80'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Home</span>
        </button>

        {/* Projects / Decors Button */}
        <button
          onClick={onOpenProjects}
          aria-label="View Projects & Decors"
          className={`flex flex-col items-center justify-center p-1.5 rounded-full transition-transform active:scale-90 cursor-pointer ${
            currentPage === 'projects' ? 'text-pink-600 font-extrabold' : 'text-maroon-brand/80'
          }`}
        >
          <ImageIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Decors</span>
        </button>

        {/* Floating Accent Action: Book Consultation */}
        <button
          onClick={onOpenConsultation}
          aria-label="Book Free Consultation"
          className="flex items-center gap-1.5 bg-maroon-brand hover:bg-maroon-dark text-white font-display font-extrabold text-xs px-3.5 py-2 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer -my-0.5 border border-white/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-brand animate-pulse" />
          <span>Book Free</span>
        </button>

        {/* WhatsApp Chat Button */}
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center p-1.5 text-[#25D366] rounded-full transition-transform active:scale-90"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Chat</span>
        </a>

        {/* Call Dial Button */}
        <a
          href="tel:1234567890"
          aria-label="Call Studio"
          className="flex flex-col items-center justify-center p-1.5 text-maroon-brand/80 rounded-full transition-transform active:scale-90"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Call</span>
        </a>
      </nav>
    </div>
  );
}
