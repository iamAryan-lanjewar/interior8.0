import React from 'react';
import { Home, Image as ImageIcon, Phone, Sparkles } from 'lucide-react';

// Official WhatsApp Brand SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

        {/* Official WhatsApp Chat Button to 9823577149 */}
        <a
          href="https://wa.me/919823577149?text=Hello%20RK%20Interior,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20and%20wallpaper%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with RK Interior at 9823577149"
          className="flex flex-col items-center justify-center p-1.5 text-[#25D366] rounded-full transition-transform active:scale-90"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[10px] font-extrabold tracking-tight mt-0.5">WhatsApp</span>
        </a>

        {/* Call Dial Button */}
        <a
          href="tel:9823577149"
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
