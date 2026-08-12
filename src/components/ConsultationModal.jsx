import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Full Room Installation'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl relative border border-white/80">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-maroon-brand hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-pink-brand/30 rounded-full flex items-center justify-center mx-auto text-maroon-brand">
              <CheckCircle2 className="w-10 h-10 text-pink-dark" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-maroon-brand">
              Consultation Booked!
            </h3>
            <p className="text-maroon-brand/80 text-sm">
              We’ve received your request and will get in touch shortly to schedule your free session.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-pink-dark text-xs uppercase font-extrabold tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Free Consultation
            </div>

            <h3 className="font-display font-extrabold text-3xl text-maroon-brand mb-2">
              Book Your Session
            </h3>

            <p className="text-maroon-brand/80 text-sm mb-6">
              Get expert guidance on colors, patterns, and surface preparation for your home.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none bg-white"
                >
                  <option value="Full Room Installation">Full Room Installation</option>
                  <option value="Wallpaper Removal">Wallpaper Removal</option>
                  <option value="Wall Prep & Repair">Wall Prep & Repair</option>
                  <option value="Color & Style Selection">Color & Style Selection</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-pink-gradient text-white font-bold text-base py-4 rounded-full shadow-lg transition-all duration-300 mt-6 cursor-pointer"
              >
                Confirm Consultation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
