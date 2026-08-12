import React, { useState } from 'react';
import { Send, CheckCircle, Clock } from 'lucide-react';

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate interactive AJAX request
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-sky-brand py-20 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text Copy matching Page 4 PDF */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-maroon-brand leading-tight tracking-tight">
            Book an estimate
          </h2>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-maroon-brand">
            Ready for fresh walls?
          </h3>

          <p className="text-maroon-brand/90 font-medium text-lg sm:text-xl leading-relaxed">
            Fill out the quick form and tell us about your space: size, wallpaper type, and timeline. We’ll respond within 24 hours with an accurate estimate.
          </p>

          <div className="pt-4 flex items-center gap-3 text-maroon-brand/80 font-semibold text-sm">
            <Clock className="w-5 h-5 text-maroon-brand" />
            <span>Average response time: &lt; 24 hours</span>
          </div>
        </div>

        {/* Right Column Form Card matching Page 4 PDF */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/80 relative">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon-brand mb-8">
              Request your free quote
            </h3>

            {status.submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex items-start gap-4 animate-fadeIn">
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg">Thank you! Your quote request has been sent.</h4>
                  <p className="text-sm mt-1 text-green-700">
                    Our team at RK Interior will review your details and get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-maroon-brand font-semibold text-base mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-5 py-4 rounded-xl border border-maroon-brand/20 bg-gray-50/50 text-maroon-brand text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200"
                  />
                </div>

                {/* Email Address Input */}
                <div>
                  <label htmlFor="email" className="block text-maroon-brand font-semibold text-base mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-maroon-brand/20 bg-gray-50/50 text-maroon-brand text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-maroon-brand font-semibold text-base mb-2">
                    Leave a message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your room size, wallpaper choice, or timeline..."
                    className="w-full px-5 py-4 rounded-xl border border-maroon-brand/20 bg-gray-50/50 text-maroon-brand text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 resize-y"
                  />
                </div>

                {/* Soft Pink Pill Submit Button matching Page 4 PDF */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full bg-pink-brand hover:bg-pink-vivid active:scale-[0.99] text-maroon-brand font-display font-extrabold text-xl py-4 sm:py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status.submitting ? (
                    <div className="w-6 h-6 border-3 border-maroon-brand border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* PDF Footer Subtext */}
                <p className="text-center text-maroon-brand/70 text-xs sm:text-sm mt-4">
                  Your Canva profile name won’t be shared. Never submit passwords.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
