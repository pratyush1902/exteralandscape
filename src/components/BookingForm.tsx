'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Instagram,
  CalendarCheck,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

interface BookingFormProps {
  isStandalonePage?: boolean;
}

export default function BookingForm({ isStandalonePage = false }: BookingFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [property, setProperty] = useState('Independent Villa / Bungalow');
  const [size, setSize] = useState('');
  const [budget, setBudget] = useState('');
  const [visitTime, setVisitTime] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !location) {
      alert('Please fill in your name, phone number, and location.');
      return;
    }

    const lines = [
      `NEW SITE VISIT REQUEST — ${SITE_CONFIG.brandName}`,
      `--------------------------------`,
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      `• Location: ${location}`,
      `• Property Type: ${property}`,
      `• Approx. Area: ${size || 'Not specified'}`,
      `• Budget Range: ${budget || 'Not specified'}`,
      `• Preferred Visit Time: ${visitTime || 'Flexible'}`,
      `• Requirement: ${requirements || 'Landscape & Outdoor Development'}`,
      `--------------------------------`,
      `I would like to schedule an initial site visit.`,
    ];

    window.open(getWhatsAppUrl(lines.join('\n')), '_blank');
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f2efe7] to-[#f8f6f0]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isStandalonePage && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="kicker text-forest">Book a Site Visit</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
              Let’s Shape Your Outdoor Space
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              Planning a villa lawn, terrace garden, drip system, or commercial courtyard in Patna or nearby districts? Share a few details below — Saurabh and Gaurav personally visit every site.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Info Card (5 cols) */}
          <div className="bg-forest text-white rounded-3xl p-5 sm:p-10 shadow-xl lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-1">{SITE_CONFIG.brandName}</h3>
              <p className="text-xs text-earth-light font-bold uppercase tracking-widest mb-6">
                {SITE_CONFIG.tagline}
              </p>

              {/* Site Visit Policy & Reply Time Box */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 mb-6 text-xs space-y-2">
                <div>
                  <span className="font-bold text-earth-light block">Site visit policy:</span>
                  <span className="text-moss-light leading-relaxed">
                    {SITE_CONFIG.siteVisitPolicy}
                  </span>
                </div>
                <div className="pt-1 border-t border-white/10 flex items-center gap-1.5 text-white font-semibold">
                  <Clock className="w-3.5 h-3.5 text-earth-light shrink-0" />
                  <span>Reply time: {SITE_CONFIG.replyTime}</span>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Studio Address
                    </span>
                    <span className="text-sm text-white block">{SITE_CONFIG.address}</span>
                    <a
                      href={SITE_CONFIG.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-earth-light hover:underline mt-0.5"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-sm text-white hover:text-earth-light transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-white hover:text-earth-light transition-colors"
                    >
                      {SITE_CONFIG.email}
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
                      href={SITE_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-earth-light transition-colors"
                    >
                      {SITE_CONFIG.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          {/* Right Lead Form (7 cols) */}
          <div className="bg-white rounded-3xl p-5 sm:p-10 shadow-xl border border-gray-200 lg:col-span-7">
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
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
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
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
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
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Property Type
                  </label>
                  <select
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Approx. Area (Sq. Ft.)
                  </label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="e.g. 1,200 sq ft"
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Budget Range (Optional)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
                  >
                    <option value="">Select range (optional)</option>
                    <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                    <option value="₹1 Lakh – ₹2.5 Lakh">₹1 Lakh – ₹2.5 Lakh</option>
                    <option value="₹2.5 Lakh – ₹5 Lakh">₹2.5 Lakh – ₹5 Lakh</option>
                    <option value="₹5 Lakh+">₹5 Lakh+</option>
                    <option value="Need Estimate After Site Visit">Need Estimate After Site Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-1">
                    Preferred Visit Time (Optional)
                  </label>
                  <select
                    value={visitTime}
                    onChange={(e) => setVisitTime(e.target.value)}
                    className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
                  >
                    <option value="">Flexible</option>
                    <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 6 PM)">Evening (4 PM – 6 PM)</option>
                    <option value="This Weekend">This Weekend</option>
                  </select>
                </div>
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
                  className="w-full px-4 py-3 bg-cream border border-gray-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-forest focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest hover:bg-forest-light text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border border-forest-light"
              >
                <CalendarCheck className="w-4 h-4 text-earth-light" />
                <span>Book a Site Visit</span>
              </button>

              <p className="text-center text-[11px] text-gray-500">
                Submitting this form opens WhatsApp with your details filled in.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
