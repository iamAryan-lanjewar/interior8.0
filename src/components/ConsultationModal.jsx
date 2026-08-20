'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Mail, User, Layers, Calendar, ExternalLink } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interior Space Planning',
    timeSlot: 'Morning (10 AM - 1 PM)'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your Name.");
      return;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit Mobile Number.");
      return;
    }

    setSubmitting(true);
    const formattedPhone = formData.phone.trim();

    try {
      await fetch("https://formsubmit.co/ajax/instinctt20@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Customer Name": formData.name,
          "Mobile Number": formattedPhone,
          "Email Address": formData.email || "Not provided",
          "Service": formData.service,
          "Preferred Time": formData.timeSlot,
          "_subject": `New Consultation Inquiry: ${formData.name} - ${formattedPhone}`,
          "_template": "table",
          "_captcha": "false",
          "_replyto": formData.email || undefined
        })
      });

      setSubmittedData({ ...formData, phone: formattedPhone });
      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.warn("Consultation form notice:", err);
      setSubmittedData({ ...formData, phone: formattedPhone });
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl p-5 xs:p-6 sm:p-8 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-white/80">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-gray-400 hover:text-maroon-brand hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-pink-brand/40 rounded-full flex items-center justify-center mx-auto text-maroon-brand shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-pink-dark" />
            </div>
            
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-maroon-brand">
              Consultation Booked!
            </h3>

            <p className="text-xs sm:text-sm text-maroon-brand/80 max-w-sm mx-auto">
              Thank you! Your consultation request has been received. Our team will contact you shortly.
            </p>

            {submittedData && (
              <div className="bg-sky-brand/30 border border-maroon-brand/15 rounded-2xl p-4 text-left text-xs sm:text-sm space-y-1.5 text-maroon-brand">
                <div><strong>Client:</strong> {submittedData.name}</div>
                <div><strong>Mobile:</strong> <span className="font-bold text-maroon-brand">{submittedData.phone}</span></div>
                {submittedData.email && <div><strong>Email:</strong> {submittedData.email}</div>}
                <div><strong>Service:</strong> {submittedData.service}</div>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full bg-maroon-brand hover:bg-maroon-dark text-white font-bold py-3 rounded-full text-sm transition-all duration-200 cursor-pointer shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-pink-dark text-xs uppercase font-extrabold tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Free Color & Style Consultation
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-maroon-brand mb-1">
              Book Your Session
            </h3>

            <p className="text-maroon-brand/80 text-xs sm:text-sm mb-5">
              Get expert guidance on wallpaper patterns, lighting, and surface preparation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Full Name</span>
                  <span className="text-pink-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm sm:text-base focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none"
                />
              </div>

              {/* SIMPLE 10-DIGIT MOBILE NUMBER */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-maroon-brand" />
                  <span>Mobile Number (10 Digits)</span>
                  <span className="text-pink-600 font-bold">*</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  placeholder="9876543210"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm sm:text-base focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none tracking-wider"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Address (Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-maroon-brand text-sm sm:text-base focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none"
                />
              </div>

              {/* Service & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Service</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-maroon-brand text-xs sm:text-sm focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none bg-white cursor-pointer"
                  >
                    <option value="Interior Space Planning">Interior Space Planning</option>
                    <option value="Full Room Makeover">Full Room Makeover</option>
                    <option value="Finish & Styling">Finish &amp; Styling</option>
                    <option value="Color & Material Consultation">Color &amp; Material Consultation</option>
                    <option value="Custom Design Solution">Custom Design Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-maroon-brand mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-maroon-brand text-xs sm:text-sm focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none bg-white cursor-pointer"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="Anytime Convenient">Anytime Convenient</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[48px] bg-pink-brand hover:bg-pink-vivid text-maroon-brand font-display font-extrabold text-base py-3.5 sm:py-4 rounded-full shadow-lg transition-all duration-300 mt-5 cursor-pointer flex items-center justify-center disabled:opacity-75"
              >
                {submitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-maroon-brand border-t-transparent rounded-full animate-spin" />
                    <span>Booking & Submitting...</span>
                  </div>
                ) : (
                  <span>Confirm Free Consultation</span>
                )}
              </button>

              <p className="text-[11px] text-center text-maroon-brand/60 pt-1">
                🔒 Your details are secure and strictly confidential.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
