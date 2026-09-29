'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import BookingForm from '@/components/BookingForm';
import { FadeIn } from '@/components/Animations';
import { 
  MapPin, Phone, MessageSquare, Instagram, Clock, 
  ShieldCheck, ChevronRight, CheckCircle2 
} from 'lucide-react';

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
        <section className="bg-forest text-white py-16 lg:py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Get In Touch</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Schedule Your Initial Site Inspection
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-6">
                  Whether you are planning a new villa lawn, retrofitting an automatic drip irrigation system, 
                  or transforming a commercial courtyard in Patna or nearby Bihar districts, we are ready to discuss your space.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xs text-gold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Direct Access to Founding Team</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>On-Site Soil & Sunlight Analysis</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Itemized BOQ Estimate</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The Lead Booking Form */}
        <BookingForm />

        {/* Regional Service Coverage & Office Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Regional Presence</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Service Coverage Across Bihar
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Our landscape architects, agronomists, and civil execution supervisors are active across major districts:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-cream border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  Greater Patna & Suburbs
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Daily on-site operations across Bailey Road, Danapur, Saguna More, Kankarbagh, Boring Road, Patliputra, and Rajendra Nagar.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Same-Day / Next-Day Consultations
                </span>
              </div>

              <div className="p-8 rounded-3xl bg-cream border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  Western Growth Corridor
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Turnkey villa and farmhouse projects in Bihta, Maner, Naubatpur, and the emerging educational and commercial hubs.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Farmhouses & Resort Estates
                </span>
              </div>

              <div className="p-8 rounded-3xl bg-cream border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest mb-2">
                  Northern & Regional Bihar
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Hajipur, Muzaffarpur, Gaya, and adjoining districts for large residential estates, hotel outdoor venues, and commercial landscapes.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase tracking-wider block">
                  Scheduled Regional Visits
                </span>
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
