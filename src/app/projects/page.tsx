'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import {
  MapPin,
  CheckCircle2,
  Instagram,
  ArrowRight,
  Home,
  Building2,
  UtensilsCrossed,
  Ruler,
  Clock,
  Compass,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'villa' | 'terrace' | 'commercial'>('all');

  const portfolio = [
    {
      id: 'villa-patna',
      title: 'Villa Garden & Stone Steppers — Danapur, Patna (Concept)',
      category: 'villa',
      location: 'Danapur, Patna',
      size: '2,200 sq ft',
      duration: '3–4 weeks',
      setting: 'Residential Villa Front Yard',
      image: '/images/villa-lawn.jpg',
      alt: 'Villa front-yard concept with 2,200 sq ft Korean carpet grass and hand-cut Kandla grey sandstone steppers',
      scope: [
        'Korean Carpet Grass (2,200 sq ft)',
        'Kandla Grey Stone Steppers',
        'Automated Drip Irrigation Zone',
        'Warm 2700K Palm Uplighting',
      ],
      desc: 'A front-yard concept for a residential villa: 2,200 sq ft of Korean carpet grass, hand-cut Kandla grey sandstone steppers, an automated drip zone, and warm 2700K palm uplighting.',
      highlight: 'Villa Concept',
    },
    {
      id: 'rooftop-patna',
      title: 'Modern Rooftop Pergola Oasis — Bailey Road, Patna (Concept)',
      category: 'terrace',
      location: 'Bailey Road, Patna',
      size: '950 sq ft',
      duration: '2–3 weeks',
      setting: 'Residential Rooftop Terrace',
      image: '/images/rooftop-terrace.jpg',
      alt: 'Weight-conscious rooftop terrace garden concept with Selection 1 natural grass, modular planters, and timber pergola',
      scope: [
        'Selection 1 Natural Grass',
        'Lightweight Modular Planters & Drainage Cells',
        'Micro-Drip Line Network',
        'Timber Pergola with Warm Indirect Lighting',
      ],
      desc: 'A weight-conscious terrace concept with drainage cells under the beds, Selection 1 natural grass, lightweight modular planters, micro-drip lines, and a timber pergola with warm indirect lighting.',
      highlight: 'Terrace Concept',
    },
    {
      id: 'cafe-bihta',
      title: 'Boutique Cafe Outdoor Dining — Bihta, Bihar (Concept)',
      category: 'commercial',
      location: 'Bihta, Bihar',
      size: '1,800 sq ft',
      duration: '3–4 weeks',
      setting: 'Boutique Highway Cafe Courtyard',
      image: '/images/cafe-courtyard.jpg',
      alt: 'Outdoor cafe dining courtyard concept with granite cobblestones, Plumeria Champa trees, and warm bollard lights',
      scope: [
        'Granite Cobblestone Flooring',
        'Plumeria (Champa) Trees',
        'Low-Glare Bollard Walkway Lights',
        'Green Hedge Wall for Street Privacy',
      ],
      desc: 'An outdoor dining concept with granite cobblestone flooring, Plumeria (Champa) trees, low-glare bollard lights along the walkway, and a green hedge wall for street privacy — creates a warm evening setting for guests.',
      highlight: 'Hospitality Concept',
    },
    {
      id: 'farmhouse-patna',
      title: 'Riverbank Farmhouse Grounds — Hajipur / Patna Outer (Concept)',
      category: 'villa',
      location: 'Hajipur / Patna Outer',
      size: '5,500 sq ft',
      duration: '4–6 weeks',
      setting: 'Weekend Farmhouse Lawn',
      image: '/images/farmhouse-grounds.jpg',
      alt: '5,500 sq ft weekend farmhouse lawn concept with heavy-wear Bermuda grass, boundary shade trees, and stone firepit patio',
      scope: [
        'Bermuda Heavy-Wear Lawn (5,500 sq ft)',
        'Deep-Root Drip Irrigation Lines',
        'Boundary shade trees',
        'Natural Stone Firepit Patio',
      ],
      desc: 'A 5,500 sq ft weekend-home lawn concept built around heavy-wear Bermuda grass, deep-root drip lines, shade trees along the boundary, and a natural stone firepit patio.',
      highlight: 'Farmhouse Concept',
    },
    {
      id: 'vertical-corporate',
      title: 'Corporate Entrance Vertical Garden — Saguna More, Patna (Concept)',
      category: 'commercial',
      location: 'Saguna More, Patna',
      size: '250 sq ft wall',
      duration: '10–14 days',
      setting: 'Commercial Building Facade',
      image: '/images/vertical-garden.jpg',
      alt: '250 sq ft corporate entrance vertical bio-wall concept with galvanized air-gap frame and Philodendron and fern planting',
      scope: [
        '250 sq ft Vertical Bio-Wall',
        'Galvanized Air-Gap Subframe',
        'Philodendron & Fern Planting',
        'Timer-Controlled Drip Line',
      ],
      desc: 'A 250 sq ft entrance bio-wall concept with a galvanized air-gap frame, Philodendron and fern planting, and a timer-controlled drip line.',
      highlight: 'Bio-Wall Concept',
    },
    {
      id: 'patio-patna',
      title: 'Residential Courtyard Garden — Kankarbagh, Patna (Concept)',
      category: 'terrace',
      location: 'Kankarbagh, Patna',
      size: '600 sq ft',
      duration: '2 weeks',
      setting: 'Compact Residential Courtyard',
      image: '/images/courtyard-garden.jpg',
      alt: 'Compact residential courtyard concept with Jodhpur sandstone paving, tropical border planting, and warm evening lights',
      scope: [
        'Jodhpur Sandstone Paving',
        'Tropical Border Planting',
        'Dimmable Warm Accent Lights',
        'Concealed Drainage Channel',
      ],
      desc: 'A compact courtyard concept with Jodhpur sandstone paving, tropical border planting, dimmable warm lights, and a concealed drainage channel.',
      highlight: 'Courtyard Concept',
    },
  ];

  const filtered =
    activeFilter === 'all'
      ? portfolio
      : portfolio.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-forest-deep text-white py-20 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/villa-lawn.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Design Concepts</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Sample layouts for homes, terraces, and commercial spaces in Bihar
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Here are six sample concepts showing how we plan lawns, rooftop gardens, courtyards, and commercial exteriors across Patna and nearby areas. Have a similar space in mind? Send it to us on WhatsApp and we’ll plan a version around your plot.
                </p>

                {/* Filter Pills with Lucide Icons */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
                  <button
                    type="button"
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                      activeFilter === 'all'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    All Concepts ({portfolio.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFilter('villa')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                      activeFilter === 'villa'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Villa &amp; Farmhouse</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFilter('terrace')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                      activeFilter === 'terrace'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Rooftop &amp; Courtyard</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFilter('commercial')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                      activeFilter === 'commercial'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Commercial &amp; Cafe</span>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-20 lg:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => {
                const waUrl = getWhatsAppUrl(
                  `Hello ${SITE_CONFIG.brandName}, I liked the "${item.title}" concept on your website and would like to plan something similar for my space.`
                );
                return (
                  <StaggerItem key={item.id}>
                    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-4 left-4 bg-forest/90 text-gold border border-gold/40 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                          {item.highlight}
                        </span>
                      </div>

                      <div className="p-7 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-gold" />
                              {item.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Ruler className="w-3.5 h-3.5 text-emerald" />
                              {item.size}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-emerald" />
                              {item.duration}
                            </span>
                          </div>

                          <div className="text-[11px] font-semibold text-earth flex items-center gap-1 mb-2">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Setting: {item.setting}</span>
                          </div>

                          <h2 className="font-serif text-xl font-bold text-forest mb-3">
                            {item.title}
                          </h2>

                          <p className="text-xs text-gray-600 leading-relaxed mb-6">
                            {item.desc}
                          </p>

                          <div className="border-t border-gray-100 pt-4 mb-6">
                            <span className="text-[10px] font-bold text-forest uppercase tracking-wider block mb-2">
                              Concept Scope:
                            </span>
                            <ul className="space-y-1.5 text-xs text-dark">
                              {item.scope.map((s) => (
                                <li key={s} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                                  <span>{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald hover:text-gold uppercase tracking-wider transition-colors"
                          >
                            <span>Plan Similar Space</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-gold-hover hover:underline"
                          >
                            WhatsApp About This →
                          </a>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Instagram Callout */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
              <Instagram className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
              Follow Our Landscape Journey on Instagram
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We share our nursery plant selections, design concepts, and site work updates across Patna and Bihar. Follow us on Instagram to see what we’re building next.
            </p>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald hover:bg-forest text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5"
            >
              <span>Follow {SITE_CONFIG.instagramHandle}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
