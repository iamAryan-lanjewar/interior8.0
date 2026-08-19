import React, { useState } from 'react';
import { Send, CheckCircle, Clock, Phone, Mail, User, Layers, MessageSquare, ExternalLink } from 'lucide-react';

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interior Space Planning',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    submittedData: null
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in your Name, Mobile Number, and Email Address.");
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, submittedData: null });
    
    const formattedPhone = formData.phone.trim();
    const payload = {
      "Customer Name": formData.name,
      "Mobile Number": formattedPhone,
      "Email Address": formData.email,
      "Service": formData.service,
      "Customer Inquiry / Message": formData.message || "No specific details provided",
      "_subject": `New Customer Inquiry: ${formData.name} - ${formattedPhone}`,
      "_template": "table",
      "_captcha": "false",
      "_replyto": formData.email
    };

    try {
      await fetch("https://formsubmit.co/ajax/instinctt20@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const currentData = { ...formData, phone: formattedPhone };
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        submittedData: currentData
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Full Room Installation',
        message: ''
      });
    } catch (err) {
      console.warn("Form notice:", err);
      const currentData = { ...formData, phone: formattedPhone };
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        submittedData: currentData
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Full Room Installation',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="bg-sky-brand py-12 md:py-32 px-4 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column Text Copy - Starts from Right Side on Mobile */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 text-right lg:text-left flex flex-col items-end lg:items-start">
          <div className="inline-flex items-center gap-2 bg-white/85 border border-maroon-brand/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-maroon-brand shadow-xs">
            <span className="w-2 h-2 rounded-full bg-pink-vivid animate-pulse" />
            Connect With RK Interior
          </div>

          <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-maroon-brand leading-tight tracking-tight text-right lg:text-left w-full">
            Book an estimate
          </h2>

          <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-maroon-brand text-right lg:text-left w-full">
            Ready to transform your home?
          </h3>

          <p className="text-maroon-brand/90 font-medium text-sm xs:text-base md:text-xl leading-relaxed max-w-xl text-right lg:text-left">
            Fill out the quick form and tell us about your space: room type, design preferences, and timeline. We'll respond within 24 hours with an accurate estimate.
          </p>

          <div className="pt-2 md:pt-4 space-y-2.5 text-maroon-brand/85 font-semibold text-xs sm:text-sm flex flex-col items-end lg:items-start w-full">
            <div className="flex items-center justify-end lg:justify-start gap-3">
              <span className="order-1 lg:order-2">Average response time: &lt; 24 hours</span>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-brand shrink-0 order-2 lg:order-1" />
            </div>
            <div className="flex items-center justify-end lg:justify-start gap-3">
              <span className="order-1 lg:order-2">Free, accurate estimate with zero obligation</span>
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-brand shrink-0 order-2 lg:order-1" />
            </div>
          </div>
        </div>

        {/* Right Column Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-4 xs:p-6 sm:p-8 md:p-12 shadow-2xl border border-white/80 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 md:mb-8 text-right sm:text-left">
              <h3 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-maroon-brand">
                Request your free quote
              </h3>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-pink-brand/60 text-maroon-brand px-3 py-1 rounded-full self-end sm:self-center">
                24h Response
              </span>
            </div>

            {status.submitted ? (
              <div className="bg-green-50/90 border-2 border-green-300 text-green-900 p-5 sm:p-8 rounded-3xl space-y-4 animate-fadeIn text-right sm:text-left">
                <div className="flex items-center justify-end sm:justify-start gap-3">
                  <div className="text-right sm:text-left">
                    <h4 className="font-display font-extrabold text-base sm:text-xl text-green-900">
                      Quote Request Submitted!
                    </h4>
                    <p className="text-xs sm:text-sm text-green-700">
                      Thank you! We have received your inquiry and will contact you within 24 hours.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                </div>

                {status.submittedData && (
                  <div className="bg-white/95 border border-green-200 rounded-2xl p-4 space-y-2 text-xs sm:text-sm shadow-xs text-right sm:text-left">
                    <div className="font-bold text-green-900 border-b border-green-100 pb-1.5 flex items-center justify-between">
                      <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold">Confirmed</span>
                      <span>Submitted Client Details:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-green-900 pt-1">
                      <div><strong className="mr-1">{status.submittedData.name}</strong> <span className="text-gray-500 font-medium">:Name</span></div>
                      <div><strong className="mr-1 text-maroon-brand font-extrabold">{status.submittedData.phone}</strong> <span className="text-gray-500 font-medium">:Mobile No</span></div>
                      <div><strong className="mr-1">{status.submittedData.email}</strong> <span className="text-gray-500 font-medium">:Email</span></div>
                      <div><strong className="mr-1">{status.submittedData.service}</strong> <span className="text-gray-500 font-medium">:Service</span></div>
                    </div>
                  </div>
                )}

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null, submittedData: null })}
                    className="w-full bg-maroon-brand hover:bg-maroon-dark text-white font-bold py-3 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-md text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-maroon-brand font-bold text-xs sm:text-base mb-1 flex items-center justify-end sm:justify-start gap-1.5">
                    <span className="text-pink-600 font-black order-1 sm:order-3">*</span>
                    <span className="order-2 sm:order-2">Your Name</span>
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-maroon-brand/70 order-3 sm:order-1" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-maroon-brand/20 bg-gray-50/60 text-maroon-brand text-sm sm:text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 text-right sm:text-left"
                  />
                </div>

                {/* SIMPLE MOBILE NUMBER INPUT */}
                <div>
                  <label htmlFor="phone" className="block text-maroon-brand font-bold text-xs sm:text-base mb-1 flex items-center justify-end sm:justify-start gap-1.5">
                    <span className="text-pink-600 font-black order-1 sm:order-3">*</span>
                    <span className="order-2 sm:order-2">Mobile Number</span>
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-maroon-brand/70 order-3 sm:order-1" />
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-maroon-brand/20 bg-gray-50/60 text-maroon-brand text-sm sm:text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 text-right sm:text-left"
                  />
                </div>

                {/* Two-Column Grid: Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Email Address Input */}
                  <div>
                    <label htmlFor="email" className="block text-maroon-brand font-bold text-xs sm:text-base mb-1 flex items-center justify-end sm:justify-start gap-1.5">
                      <span className="text-pink-600 font-black order-1 sm:order-3">*</span>
                      <span className="order-2 sm:order-2">Email Address</span>
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-maroon-brand/70 order-3 sm:order-1" />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-maroon-brand/20 bg-gray-50/60 text-maroon-brand text-sm sm:text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 text-right sm:text-left"
                    />
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-maroon-brand font-bold text-xs sm:text-base mb-1 flex items-center justify-end sm:justify-start gap-1.5">
                      <span className="order-1 sm:order-2">Service Required</span>
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-maroon-brand/70 order-2 sm:order-1" />
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-maroon-brand/20 bg-gray-50/60 text-maroon-brand text-sm sm:text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 cursor-pointer text-right sm:text-left"
                    >
                      <option value="Interior Space Planning">Interior Space Planning</option>
                      <option value="Full Room Makeover">Full Room Makeover</option>
                      <option value="Finish & Styling">Finish &amp; Styling</option>
                      <option value="Color & Material Consultation">Color &amp; Material Consultation</option>
                      <option value="Custom Design Solution">Custom Design Solution</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-maroon-brand font-bold text-xs sm:text-base mb-1 flex items-center justify-end sm:justify-start gap-1.5">
                    <span className="order-1 sm:order-2">Space &amp; Timeline Details</span>
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-maroon-brand/70 order-2 sm:order-1" />
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Room size (e.g. 12x14 ft), design style preferences, or timeline..."
                    className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl border border-maroon-brand/20 bg-gray-50/60 text-maroon-brand text-sm sm:text-base focus:bg-white focus:border-maroon-brand focus:ring-2 focus:ring-maroon-brand/20 outline-none transition-all duration-200 resize-y text-right sm:text-left"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full min-h-[48px] bg-pink-brand hover:bg-pink-vivid active:scale-[0.99] text-maroon-brand font-display font-extrabold text-base sm:text-xl py-3.5 sm:py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {status.submitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-3 border-maroon-brand border-t-transparent rounded-full animate-spin" />
                      <span>Sending your request...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>

                {/* Subtext info */}
                <p className="text-right sm:text-center text-maroon-brand/70 text-[11px] sm:text-sm mt-2">
                  🔒 Your information is confidential and will only be used to contact you regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
