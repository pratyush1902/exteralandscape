'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sprout, Sun, Droplets, 
  Scissors, ShieldAlert, Award, FileSpreadsheet, MessageSquare, Phone
} from 'lucide-react';

export default function LawnGardenPage() {
  const [selectedGrass, setSelectedGrass] = useState<'korean' | 'bermuda' | 'selection1'>('korean');

  const grassData = {
    korean: {
      name: 'Korean Carpet Grass (Zoysia)',
      tagline: 'The Gold Standard for Luxury Villa Lawns',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80',
      sun: 'Moderate (4-6 hrs sunlight)',
      water: 'Moderate (alternate days once established)',
      wear: 'Medium (soft velvet barefoot comfort)',
      mow: 'Low (slow vertical growth, mow every 3-4 weeks)',
      rate: '₹95 – ₹130 per sq. ft.',
      bestFor: 'Private villa front yards, boutique hotel courtyards, luxury farmhouses',
      pros: ['Velvet-like carpet finish', 'Slow vertical height growth', 'Excellent color retention in Patna winters'],
    },
    bermuda: {
      name: 'Bermuda Grass (Cynodon)',
      tagline: 'High-Durability & Rapid Self-Repair',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
      sun: 'High (6-8+ hrs full sun)',
      water: 'Drought Resilient (deep root system)',
      wear: 'Maximum (heavy foot traffic, dogs, sports)',
      mow: 'Moderate (requires bi-weekly trimming in monsoons)',
      rate: '₹75 – ₹105 per sq. ft.',
      bestFor: 'Children play lawns, resort event grounds, large farmhouse estates',
      pros: ['Extreme heat tolerance (up to 46°C)', 'Deep rooting withstands heavy play', 'Recovers rapidly from wear'],
    },
    selection1: {
      name: 'Selection 1 Grass',
      tagline: 'Fine Texture & Emerald Green All-Rounder',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
      sun: 'Moderate to High (5+ hrs sun)',
      water: 'Regular',
      wear: 'Moderate-High',
      mow: 'Bi-weekly during peak season',
      rate: '₹70 – ₹95 per sq. ft.',
      bestFor: 'Residential gardens, corporate frontages, terrace lawns',
      pros: ['Economical installation cost', 'Fine leaf texture', 'Readily adapts to Bihar alluvial soil'],
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
            <span className="text-gold font-semibold">Lawn & Garden Architecture</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Softscape Precision</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Lawn & Garden Architecture in Patna
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  A lush lawn is not simply grass rolled on top of dirt. We engineer a living root bed — 
                  complete with laser grading, subterranean drainage, weed barriers, and certified perennial varieties 
                  calibrated for Bihar’s 45°C summers and monsoons.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#calculator-section"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Compare Grass Varieties
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20Lawn%20and%20Garden%20development."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    WhatsApp Consultation
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Grass Comparison Widget */}
        <section className="py-20 lg:py-24 bg-cream" id="calculator-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Horticultural Guidance</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Interactive Grass Variety Selector
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Select a variety below to compare sun needs, durability, mowing frequency, and cost estimates.
              </p>
            </div>

            {/* Grass Selector Tabs */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <button
                onClick={() => setSelectedGrass('korean')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedGrass === 'korean'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🌱 Korean Carpet Grass
              </button>
              <button
                onClick={() => setSelectedGrass('bermuda')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedGrass === 'bermuda'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🌿 Bermuda Grass
              </button>
              <button
                onClick={() => setSelectedGrass('selection1')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedGrass === 'selection1'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🍃 Selection 1 Grass
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
                      href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20booking%20a%20site%20visit%20for%20${encodeURIComponent(current.name)}.`}
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
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Agronomic Engineering</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                The 4-Layer Subterranean Foundation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Why do local lawns yellow and die after 6 months? Poor soil profiling. Here is how our B.Sc Agriculture team builds your lawn from below ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Native Subgrade & Slope</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Excavation of debris, plastic contaminants, and stones. Laser grade slope (1.5%) engineered away from house plinths to prevent water accumulation.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Percolation Sand Drainage</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A 2-inch coarse river sand percolation bed that prevents root rot during Bihar’s monsoon downpours and aerates grass roots.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Bio-Compost & Red Loam</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Imported fertile red loam fortified with vermicompost, neem cake, bone meal, and beneficial mycorrhiza fungi to maintain healthy soil pH (6.5 - 7.0).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Rolling & Sod Placement</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Compacted turf sods tightly laid edge-to-edge, rolled with a water roller to expel air pockets, and root-boost watered with organic bio-stimulants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Ready for an Emerald Lawn?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Schedule Your Site Visit & Soil Inspection
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              We inspect your space in Patna, take measurements, test soil moisture and sunlight hours, 
              and recommend the optimal grass species with an itemized BOQ estimate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Book An On-Site Consultation
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20would%20like%20to%20discuss%20Lawn%20development%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Chat on WhatsApp (+91 93153 59040)
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
