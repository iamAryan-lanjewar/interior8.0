'use client';

import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Authentic Official WhatsApp Icon matching exact theme, size, and styling of Facebook/Instagram
function WhatsAppIcon({ className = "w-5 h-5 sm:w-6 sm:h-6" }) {
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
