'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { ArrowRight, CheckCircle2, Sparkles, Filter, Leaf, Droplet, Sun, Hammer, Layers, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const [filter, setFilter] = useState<'all' | 'softscape' | 'hardscape' | 'tech'>('all');

  const allServices = [
    {
      id: 'lawn-garden',
      slug: '/services/lawn-garden',
      category: 'softscape',
      title: 'Lawn & Garden Architecture',
      subtitle: 'Living Carpet & Soil Re-engineering',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80',
      badge: 'Softscaping',
      desc: 'Complete site grading, subterranean weed barriers, and perennial grass installation using Korean Carpet, Bermuda, and Selection 1 tailored to Patna’s sun patterns.',
      features: ['Deep root-zone biological soil prep', 'Laser grade levelling to eliminate water pooling', 'Low-water perennial varieties'],
      stats: '40,000+ sq ft laid',
    },
    {
      id: 'plantation',
      slug: '/services/plantation',
      category: 'softscape',
      title: 'Plantation & Canopy Planning',
      subtitle: 'Multi-Tiered Horticultural Flora',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      badge: 'Flora Design',
      desc: 'Scientific botanical curation of architectural palms, flowering shrubs, hedge screens, and indigenous shade trees calibrated for Bihar’s alluvial soil and seasonal extremes.',
      features: ['Certified disease-free nursery stock', 'Multi-tiered canopy architecture (groundcover to tree canopy)', 'Seasonal bloom sequencing for year-round color'],
      stats: '150+ Plant Species',
    },
    {
      id: 'hardscape',
      slug: '/services/hardscape',
      category: 'hardscape',
      title: 'Hardscape & Stone Walkways',
      subtitle: 'Architectural Stone & Civil Geometry',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
      badge: 'Civil Craft',
      desc: 'Natural sandstone walkways, textured pavers, stepping stones, polished river cobbles, and weather-sealed boundary curbs backed by civil engineering foundation standards.',
      features: ['Compacted stone dust and lean concrete sub-base', 'Permeable jointing preventing water stagnation', 'Slip-resistant natural stone finishes'],
      stats: '10-Year Sub-base Integrity',
    },
    {
      id: 'drip-irrigation',
      slug: '/services/drip-irrigation',
      category: 'tech',
      title: 'Automated Drip & Sprinklers',
      subtitle: 'Precision Water Conservation',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
      badge: 'Conservation',
      desc: 'Micro-irrigation engineered to deliver targeted root hydration while saving 60% water. Multi-zone automation with automated digital timers and popup rotary nozzles.',
      features: ['Pressure-compensating inline drippers', 'Independent zoning for lawn vs delicate shrubs', 'Smart battery/AC digital timer automation'],
      stats: 'Up to 60% Water Saved',
    },
    {
      id: 'outdoor-lighting',
      slug: '/services/outdoor-lighting',
      category: 'tech',
      title: 'Architectural Night Lighting',
      subtitle: 'Warm 2700K Evening Illumination',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      badge: 'Illumination',
      desc: 'Sophisticated low-voltage LED landscape lighting. Dramatic tree uplighting, pathway safety bollards, step lights, and ambient water illumination with IP67 waterproofing.',
      features: ['2700K warm architectural color temperature', 'IP67/IP68 submersible waterproof housings', 'Underground armored conduit safety lines'],
      stats: '100% LED Low-Voltage Safe',
    },
    {
      id: 'vertical-gardens',
      slug: '/services/vertical-gardens',
      category: 'softscape',
      title: 'Vertical Gardens & Bio-Walls',
      subtitle: 'Living Urban Architecture',
      image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=800&q=80',
      badge: 'Urban Green',
      desc: 'Modular vertical planter systems for compact courtyard walls, restaurant facades, terrace boundaries, and residential accents with integrated drip hydration.',
      features: ['UV-stabilized modular geotextile / polymer frames', 'High-density air-purifying foliage selection', 'Concealed wastewater collection tray'],
      stats: '45+ Plants per sq. meter',
    },
  ];

  const filtered = filter === 'all' 
    ? allServices 
    : allServices.filter(s => s.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-forest-deep text-white py-20 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-earth-light">EXTERRA LANDSCAPE</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Shaping Outdoor Living Across Bihar
                </h1>
                <p className="text-moss-light text-base sm:text-lg leading-relaxed mb-8">
                  From deep biological soil rejuvenation and climate-adapted perennial grass to precision hardscape 
                  and automated micro-irrigation. Explore each specialized solution below.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      filter === 'all'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    All Services (6)
                  </button>
                  <button
                    onClick={() => setFilter('softscape')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      filter === 'softscape'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    🌱 Softscape & Flora
                  </button>
                  <button
                    onClick={() => setFilter('hardscape')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      filter === 'hardscape'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    🪨 Hardscape & Civil
                  </button>
                  <button
                    onClick={() => setFilter('tech')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      filter === 'tech'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    💧 Drip & Lighting Tech
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid with Cards */}
        <section className="py-20 lg:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((svc) => (
                <StaggerItem key={svc.id}>
                  <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                    {/* Image Header */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <span className="absolute top-4 left-4 bg-forest/90 text-earth-light border border-earth/40 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                        {svc.badge}
                      </span>
                      <span className="absolute bottom-4 right-4 bg-black/75 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md">
                        {svc.stats}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-earth uppercase tracking-wider block mb-1">
                          {svc.subtitle}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-forest mb-3">
                          {svc.title}
                        </h2>
                        <p className="text-xs text-gray-600 leading-relaxed mb-6">
                          {svc.desc}
                        </p>

                        <div className="border-t border-gray-100 pt-4 mb-6">
                          <span className="text-[10px] font-bold text-forest uppercase tracking-wider block mb-2">
                            Key Specifications:
                          </span>
                          <ul className="space-y-2">
                            {svc.features.map((feat) => (
                              <li key={feat} className="flex items-start gap-2 text-xs text-dark">
                                <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Link to Detail Page */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href={svc.slug}
                          className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>Explore Detail Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/calculator"
                          className="text-xs font-bold text-earth hover:underline"
                        >
                          Calculate Cost →
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Turnkey Guarantee Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 text-earth-light text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>The EXTERRA Turnkey Standard</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                    Need a custom combination of services for your property?
                  </h3>
                  <p className="text-xs sm:text-sm text-moss-light leading-relaxed max-w-2xl">
                    Whether you are developing a 10,000 sq ft farmhouse in Bihta or a luxury rooftop retreat on Bailey Road, 
                    we provide end-to-end design, soil analysis, itemized BOQ, and physical execution.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <Link
                    href="/contact"
                    className="bg-earth hover:bg-earth-hover text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Request Turnkey Proposal
                  </Link>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20EXTERRA%20LANDSCAPE%2C%20I%20want%20to%20discuss%20a%20turnkey%20landscape%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-earth hover:text-earth-light text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all"
                  >
                    WhatsApp Consultation
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
