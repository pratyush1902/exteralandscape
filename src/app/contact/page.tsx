'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import BookingForm from '@/components/BookingForm';
import { FadeIn } from '@/components/Animations';
import {
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Header */}
        <div className="bg-forest-deep text-sage-light py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold font-semibold">Contact & Site Visit</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('/images/villa-lawn.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Get In Touch</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Book a Site Visit
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  Planning a villa lawn, terrace garden, drip system, or commercial courtyard in Patna or nearby districts? Share a few details below — Saurabh and Gaurav personally visit every site.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-6 text-xs text-gold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Founders Personally Visit Every Site</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{SITE_CONFIG.replyTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Free Visit Within Patna City Limits</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The Lead Booking Form */}
        <BookingForm isStandalonePage />

        {/* Regional Service Coverage & Map */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="kicker">Service Coverage</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                Where we work
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                Saurabh Raj and Gaurav Raj personally visit and supervise sites across Patna and surrounding districts in Bihar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-cream border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mb-2">
                  Patna & Suburbs
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {SITE_CONFIG.coverage.patnaAndSuburbs}
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Free Site Visits Within Patna City Limits
                </span>
              </div>

              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-cream border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mb-2">
                  Western Corridor
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {SITE_CONFIG.coverage.westernCorridor}
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Villas, Farmhouses & Highway Cafes
                </span>
              </div>

              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-cream border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mb-2">
                  Wider Bihar
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {SITE_CONFIG.coverage.widerBihar}
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Visit Fee Adjusted Against Project Quote
                </span>
              </div>
            </div>

            {/* Embedded Map & Google Business Link */}
            <div className="bg-cream rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-center">
                <span className="kicker text-forest">Base Location</span>
                <h3 className="font-serif text-2xl font-bold text-forest mb-3">
                  {SITE_CONFIG.address}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {SITE_CONFIG.siteVisitPolicy}
                </p>
                <div>
                  <a
                    href={SITE_CONFIG.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-earth-light" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 min-h-[300px] bg-gray-200">
                <iframe
                  title="EXTERRA Landscape Patna Service Area Map"
                  src="https://www.google.com/maps?q=Bailey+Road,+Danapur,+Patna,+Bihar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
