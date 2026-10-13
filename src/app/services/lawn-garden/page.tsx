'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sprout, Sun, Droplets, 
  Scissors, ShieldAlert, Award, FileSpreadsheet, MessageSquare, Phone, Leaf
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function LawnGardenPage() {
  const [selectedGrass, setSelectedGrass] = useState<'korean' | 'bermuda' | 'selection1'>('korean');

  const grassData = {
    korean: {
      name: 'Korean Carpet Grass (Zoysia)',
      tagline: 'Soft, Dense Turf for Villa Lawns',
      image: '/images/villa-lawn.jpg',
      sun: 'Moderate (4-6 hrs sunlight)',
      water: 'Moderate (alternate days once established)',
      wear: 'Medium (soft velvet barefoot comfort)',
      mow: 'Low (slow vertical growth, mow every 3-4 weeks)',
      rate: '₹95 – ₹130 per sq. ft.',
      bestFor: 'Private villa front yards, boutique hotel courtyards, residential gardens',
      pros: ['Velvet-like carpet finish', 'Slow vertical height growth', 'Excellent color retention in Patna winters'],
    },
    bermuda: {
      name: 'Bermuda Grass (Cynodon)',
      tagline: 'High-Durability & Rapid Self-Repair',
      image: '/images/farmhouse-grounds.jpg',
      sun: 'High (6-8+ hrs full sun)',
      water: 'Drought Resilient (deep root system)',
      wear: 'Maximum (heavy foot traffic, pets, sports)',
      mow: 'Moderate (requires bi-weekly trimming in monsoons)',
      rate: '₹75 – ₹105 per sq. ft.',
      bestFor: 'Children play lawns, resort event grounds, large farmhouse estates',
      pros: ['High heat tolerance (up to 45°C)', 'Deep rooting withstands heavy play', 'Recovers rapidly from wear'],
    },
    selection1: {
      name: 'Selection 1 Grass',
      tagline: 'Fine Texture & Emerald Green All-Rounder',
      image: '/images/rooftop-terrace.jpg',
      sun: 'Moderate to High (5+ hrs sun)',
      water: 'Regular',
      wear: 'Moderate-High',
      mow: 'Bi-weekly during peak season',
      rate: '₹70 – ₹95 per sq. ft.',
      bestFor: 'Residential gardens, corporate frontages, terrace lawns',
      pros: ['Balanced installation cost', 'Fine leaf texture', 'Readily adapts to Bihar alluvial soil'],
    },
  };

  const current = grassData[selectedGrass];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Header */}
        <div className="bg-forest-deep text-sage-light py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link href="/services" className="hover:text-gold">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold font-semibold">Lawn & Garden Development</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('/images/villa-lawn.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Softscape Precision</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Lawn & Garden Development in Patna
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  A lush, level lawn that stays green through Patna’s 45°C summers and heavy monsoon rains — built on graded soil, river-sand drainage, and natural turf varieties suited to your space.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#calculator-section"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                  >
                    Compare Grass Varieties
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in Lawn and Garden Development.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center"
                  >
                    Get a Quote on WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Grass Comparison Widget */}
        <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="calculator-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="kicker">Horticultural Guidance</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                Interactive Grass Variety Selector
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                Select a variety below to compare sun needs, durability, mowing frequency, and cost estimates.
              </p>
            </div>

            {/* Grass Selector Tabs */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
              <button
                type="button"
                onClick={() => setSelectedGrass('korean')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shrink-0 ${
                  selectedGrass === 'korean'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Sprout className="w-4 h-4" />
                <span>Korean Carpet Grass</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedGrass('bermuda')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shrink-0 ${
                  selectedGrass === 'bermuda'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>Bermuda Grass</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedGrass('selection1')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shrink-0 ${
                  selectedGrass === 'selection1'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Sprout className="w-4 h-4" />
                <span>Selection 1 Grass</span>
              </button>
            </div>

            {/* Active Grass Card Details */}
            <FadeIn key={selectedGrass}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
                <div className="lg:col-span-5 relative h-72 lg:h-auto">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">Horticulture Verified</span>
                    <h3 className="font-serif text-2xl font-bold">{current.name}</h3>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                      {current.tagline}
                    </span>
                    <div className="text-2xl font-serif font-bold text-forest mb-4">
                      Estimated Cost: <span className="text-emerald">{current.rate}</span>
                    </div>

                    {/* Metric Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 bg-cream p-4 rounded-2xl border border-gray-200 text-xs">
                      <div>
                        <span className="text-gray-500 font-bold block mb-1 flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-gold" /> Sun Need:
                        </span>
                        <span className="font-semibold text-dark">{current.sun}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1 flex items-center gap-1">
                          <Droplets className="w-3.5 h-3.5 text-emerald" /> Water Need:
                        </span>
                        <span className="font-semibold text-dark">{current.water}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1 flex items-center gap-1">
                          <Sprout className="w-3.5 h-3.5 text-forest" /> Foot Wear:
                        </span>
                        <span className="font-semibold text-dark">{current.wear}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1 flex items-center gap-1">
                          <Scissors className="w-3.5 h-3.5 text-dark" /> Mowing:
                        </span>
                        <span className="font-semibold text-dark">{current.mow}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-2">
                        Why Choose This Species:
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {current.pros.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500">
                      Best For: <strong className="text-forest">{current.bestFor}</strong>
                    </span>
                    <a
                      href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in booking a site visit for ${current.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald hover:bg-forest text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book for this grass</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4-Layer Soil Preparation Blueprint */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="kicker">Soil & Root Preparation</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                The 4-Layer Lawn Foundation
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                A lawn stays healthy year after year when the root zone and drainage are prepared before laying a single roll of grass. Here is how we build your lawn from the ground up:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Native Subgrade & Slope</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Removal of construction rubble, plastic, and stones, followed by a gentle slope graded away from building walls to prevent monsoon water pooling.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Percolation Sand Drainage</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A 2-inch coarse river-sand percolation bed that drains excess rainwater during Bihar’s monsoon downpours and keeps roots aerated.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Enriched Garden Soil</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fresh fertile garden soil mixed with vermicompost, neem cake, and bone meal to support deep, uniform root establishment.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Rolling & Sod Placement</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fresh turf sods laid edge-to-edge, pressed with a garden roller to remove air pockets, and watered in on a 90-day root establishment schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="py-12 sm:py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Ready for a Lush Lawn?</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Book Your Site Visit & Soil Check
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-6 sm:mb-8 leading-relaxed">
              Saurabh and Gaurav visit your site in Patna, measure the plot, check sunlight and soil drainage, and share an itemized BOQ within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
              >
                Book Site Visit
              </Link>
              <a
                href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I would like to discuss Lawn development for my property.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                Chat on WhatsApp ({SITE_CONFIG.phoneDisplay})
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
