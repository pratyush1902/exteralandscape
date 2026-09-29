'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Instagram, CalendarCheck } from 'lucide-react';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [property, setProperty] = useState('Independent Villa / Bungalow');
  const [size, setSize] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !location) {
      alert('Please fill in your name, phone number, and location.');
      return;
    }

    const waMsg =
      `*🌿 NEW SITE VISIT REQUEST — EXTERRA LANDSCAPE*%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `📍 *Location:* ${encodeURIComponent(location)}%0A` +
      `🏡 *Property Type:* ${encodeURIComponent(property)}%0A` +
      `📐 *Approx. Area:* ${encodeURIComponent(size || 'Not specified')}%0A` +
      `📝 *Requirement:* ${encodeURIComponent(requirements || 'Landscape & Outdoor Development')}%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `_I would like to schedule an initial site visit._`;

    window.open(`https://wa.me/919315359040?text=${waMsg}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#f2efe7] to-[#f8f6f0]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="kicker text-forest">Book Initial Site Visit</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            Let’s Shape Your Outdoor Space
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Tell us about your space. Saurabh Raj & Gaurav Raj will get in touch to discuss ideas, 
            measurements, and initial concept recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Info Card (5 cols) */}
          <div className="bg-forest text-white rounded-3xl p-6 sm:p-10 shadow-xl lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-1">EXTERRA LANDSCAPE</h3>
              <p className="text-xs text-earth-light font-bold uppercase tracking-widest mb-8">
                Shaping Outdoor Living
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Headquarters & Coverage
                    </span>
                    <span className="text-sm text-white">Patna, Bihar & Surrounding Regions</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Phone / Call Support
                    </span>
                    <a href="tel:+919315359040" className="text-sm text-white hover:text-earth-light transition-colors">
                      +91 93153 59040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#25d366]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Direct WhatsApp Chat
                    </span>
                    <a
                      href="https://wa.me/919315359040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-earth-light transition-colors"
                    >
                      +91 93153 59040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <Instagram className="w-5 h-5 text-[#e1306c]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Official Instagram
                    </span>
                    <a
                      href="https://instagram.com/rajbuildinfra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-earth-light transition-colors"
                    >
                      @rajbuildinfra
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919315359040?text=Hello%20EXTERRA%20LANDSCAPE%2C%20I%20would%20like%20to%20book%20an%20initial%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Consultation</span>
            </a>
          </div>

          {/* Right Lead Form (7 cols) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-200 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Saurabh Sharma"
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Location / Area in Bihar *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Danapur, Patna"
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Property Type
                  </label>
                  <select
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                  >
                    <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                    <option value="Rooftop / Terrace Garden">Rooftop / Terrace Garden</option>
                    <option value="Farmhouse / Estate">Farmhouse / Estate</option>
                    <option value="Cafe / Restaurant / Resort">Cafe / Restaurant / Resort</option>
                    <option value="Corporate / Commercial Site">Corporate / Commercial Site</option>
                    <option value="Other Project">Other Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                  Approximate Area (Sq. Ft.)
                </label>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="e.g. 800 sq ft / 2,500 sq ft / Not sure"
                  className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                  Specific Requirements / Vision
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us what you want: Lawn development, plantation, stone pathway, drip irrigation, vertical garden, outdoor night lighting..."
                  className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-forest focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest hover:bg-forest-light text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5 border border-forest-light"
              >
                <CalendarCheck className="w-4 h-4 text-earth-light" />
                <span>Request Initial Site Visit</span>
              </button>

              <p className="text-center text-[11px] text-gray-500">
                Submitting immediately connects your requirement to our team via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
