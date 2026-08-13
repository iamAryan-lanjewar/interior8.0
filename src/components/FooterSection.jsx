import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative bg-teal-darkroom text-white min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Dark Moody Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/footer_bg.jpg"
          alt="NEST Wallpapers moody room background"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Teal Overlay matching PDF Page 5 */}
        <div className="absolute inset-0 bg-teal-darkroom/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-10 w-full py-12 md:py-28 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column Text Copy */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight">
              Let’s talk about <br />
              your project
            </h2>

            <p className="text-white/90 font-medium text-base md:text-xl leading-relaxed max-w-xl">
              We’re happy to answer any questions about wallpaper options, timelines, or pricing. Call, email, or send a message. We respond quickly and personally.
            </p>
          </div>

          {/* Right Column Contact Details matching PDF Page 5 */}
          <div className="lg:col-span-5 space-y-6 md:space-y-10">
            {/* Main Office Block */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Main office
              </h3>
              <p className="text-white/90 text-sm sm:text-lg leading-relaxed flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-brand shrink-0 mt-0.5" />
                <span>123 Anywhere St. Any City, State, Any Country</span>
              </p>
              <p className="text-white/90 text-sm sm:text-lg flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-brand shrink-0" />
                <a href="tel:1234567890" className="hover:text-pink-brand transition-colors py-1">
                  (123) 456 7890
                </a>
              </p>
            </div>

            {/* Social Media Block */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Social media
              </h3>
              <div className="flex items-center gap-4 pt-1">
                {/* Facebook Icon Button */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                {/* Instagram Icon Button */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                {/* WhatsApp Icon Button */}
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-brand hover:text-maroon-brand text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Email Us Block */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Email us
              </h3>
              <p className="text-white/90 text-sm sm:text-lg flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-brand shrink-0" />
                <a href="mailto:hello@reallygreatsite.com" className="hover:text-pink-brand transition-colors font-medium py-1">
                  hello@reallygreatsite.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Logo & Copyright matching Page 5 PDF */}
        <div className="pt-8 mt-8 md:pt-16 md:mt-16 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
          <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tighter uppercase leading-none select-none">
            NEST <br />
            WALLPAPERS
          </div>

          <div className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} RK Interior & NEST WALLPAPERS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
