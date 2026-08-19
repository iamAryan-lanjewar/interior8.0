import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Clean Outline WhatsApp Icon matching the exact stroke & style of Lucide Facebook/Instagram
function WhatsAppIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.1.1-.2.3 0 .6.4.8 1.1 1.5 1.9 1.9.3.2.5.1.6 0l.5-.4c.2-.2.4-.2.7-.1l1.7.7c.4.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.8.4-2 .2-3.6-.8-1.7-1.1-2.8-2.6-3.2-3.4-.4-.8-.4-1.6 0-2z" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="relative bg-teal-darkroom text-white min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Dark Moody Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/footer_bg.jpg"
          alt="NEST Wallpapers moody room background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Teal Overlay matching PDF Page 5 */}
        <div className="absolute inset-0 bg-teal-darkroom/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Footer Content - Left aligned on Mobile & PC */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-10 w-full py-12 md:py-24 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Text Copy & Social Media Info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight">
                Let's talk about <br />
                your project
              </h2>

              <p className="text-white/90 font-medium text-sm xs:text-base md:text-xl leading-relaxed max-w-xl">
                We're happy to answer any questions about wallpaper options, timelines, or pricing. Call, email, or send a message. We respond quickly and personally.
              </p>
            </div>

            {/* Social Media Block strictly matching the same theme for Facebook, Instagram & WhatsApp */}
            <div className="space-y-3 pt-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Connect with us
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md border border-white/15 active:scale-95"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md border border-white/15 active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <a
                  href="https://wa.me/919823577149?text=Hello%20RK%20Interior,%20I%20would%20like%20to%20inquire%20about%20interior%20design%20and%20wallpaper%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md border border-white/15 active:scale-95"
                  aria-label="WhatsApp with 9823577149"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details & Mini Map */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-left">
            {/* Main Office Block */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Main office
              </h3>
              <p className="text-white/90 text-sm sm:text-lg leading-relaxed flex items-start gap-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-brand shrink-0 mt-0.5" />
                <span>Sadar, Nagpur, Maharashtra</span>
              </p>
              <p className="text-white/90 text-sm sm:text-lg flex items-center gap-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-brand shrink-0" />
                <a href="tel:9823577149" className="hover:text-pink-brand transition-colors py-1">
                  +91 9823577149
                </a>
              </p>

              {/* Enhanced Map Widget */}
              <div className="pt-2">
                <div className="relative group bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-pink-brand/30 hover:border-pink-brand shadow-lg transition-all duration-300 hover-lift max-w-md w-full">
                  <div className="flex items-center justify-between px-1 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-brand animate-ping" />
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase font-display">
                        Sadar Studio Location
                      </span>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Sadar,+Nagpur,+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-maroon-brand bg-pink-brand hover:bg-white px-3 py-1 rounded-full transition-all duration-300 shadow-sm"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Responsive Map Frame */}
                  <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden border border-white/15 shadow-inner">
                    <iframe
                      title="RK Interior Studio Sadar Nagpur Map"
                      src="https://maps.google.com/maps?q=Sadar,Nagpur,Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 contrast-[1.05] brightness-[0.95]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Email Us Block */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Email us
              </h3>
              <p className="text-white/90 text-sm sm:text-lg flex items-center gap-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-brand shrink-0" />
                <a href="mailto:instinctt20@gmail.com" className="hover:text-pink-brand transition-colors font-medium py-1">
                  instinctt20@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="pt-8 mt-8 md:pt-16 md:mt-16 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
          <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-none select-none">
            NEST <br />
            WALLPAPERS
          </div>

          <div className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} RK Interior &amp; NEST WALLPAPERS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
