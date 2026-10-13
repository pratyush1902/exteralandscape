'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import {
  ArrowRight,
  CheckCircle2,
  Sprout,
  Trees,
  Footprints,
  Droplet,
  Lightbulb,
  Flower2,
  ShieldCheck,
  MessageSquare,
  Clock,
  Layers,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function ServicesPage() {
  const [filter, setFilter] = useState<'all' | 'softscape' | 'hardscape' | 'tech'>('all');

  const allServices = [
    {
      id: 'lawn-garden',
      slug: '/services/lawn-garden',
      category: 'softscape',
      title: 'Lawn & Garden Architecture',
      subtitle: 'A lawn that stays green all year.',
      icon: Sprout,
      image: '/images/villa-lawn.jpg',
      alt: 'Levelled green villa lawn with Korean Carpet grass in Patna',
      badge: 'Softscaping',
      desc: "We prepare the soil, level the ground so water never pools, and lay Korean Carpet, Bermuda or Selection 1 grass suited to Patna's sun. Low water, low maintenance.",
      features: [
        'Healthy soil base for deep roots',
        'Levelled so water does not pool',
        'Hardy, low-water grass varieties',
      ],
      startingRate: 'From ₹75/sq ft',
      duration: '5–10 days',
      aftercare: '90-day care guidance included',
    },
    {
      id: 'plantation',
      slug: '/services/plantation',
      category: 'softscape',
      title: 'Plantation & Canopy Planning',
      subtitle: "Trees and plants chosen for Bihar's soil and climate.",
      icon: Trees,
      image: '/images/plantation-canopy.jpg',
      alt: 'Layered garden plantation with palms, shrubs and seasonal flowers',
      badge: 'Flora Design',
      desc: 'We plan palms, shrubs, hedges and shade trees so your garden has colour and shade across the seasons.',
      features: [
        'Healthy, nursery-checked plants',
        'Layered planting from groundcover to trees',
        'Flowers planned across the seasons',
      ],
      startingRate: 'Custom per plant layout',
      duration: '3–7 days',
      aftercare: '90-day care guidance included',
    },
    {
      id: 'hardscape',
      slug: '/services/hardscape',
      category: 'hardscape',
      title: 'Hardscape & Stone Walkways',
      subtitle: 'Pathways that stay level.',
      icon: Footprints,
      image: '/images/stone-walkway.jpg',
      alt: 'Natural sandstone garden walkway laid on a compacted base',
      badge: 'Civil Craft',
      desc: 'Natural stone walkways and patios laid on a compacted base so they do not sink or crack.',
      features: [
        'Compacted stone-dust and lean-concrete base',
        'Joints that let water drain',
        'Slip-resistant natural stone',
      ],
      startingRate: 'From ₹120/sq ft',
      duration: '7–14 days',
      aftercare: 'Sub-base slope & drainage check',
    },
    {
      id: 'drip-irrigation',
      slug: '/services/drip-irrigation',
      category: 'tech',
      title: 'Automated Drip & Sprinklers',
      subtitle: 'Water your garden without lifting a hose.',
      icon: Droplet,
      image: '/images/drip-irrigation.jpg',
      alt: 'Automatic garden drip irrigation and sprinkler system',
      badge: 'Irrigation',
      desc: 'Separate zones for lawn and delicate plants, run by an automatic timer, so every plant gets just the water it needs. Designed to cut water use significantly.',
      features: [
        'Pressure-compensating drippers',
        'Lawn and shrubs on separate zones',
        'Battery or mains timer',
      ],
      startingRate: 'From ₹25/sq ft',
      duration: '2–5 days',
      aftercare: 'Timer setup & seasonal tuning',
    },
    {
      id: 'outdoor-lighting',
      slug: '/services/outdoor-lighting',
      category: 'tech',
      title: 'Architectural Night Lighting',
      subtitle: 'Warm light for your garden evenings.',
      icon: Lightbulb,
      image: '/images/night-lighting.jpg',
      alt: 'Warm 2700K low-voltage LED garden pathway and tree lighting',
      badge: 'Illumination',
      desc: 'Low-voltage LED lighting that highlights trees and paths and makes steps safer after dark.',
      features: [
        'Warm 2700K colour',
        'Waterproof (IP67) fittings',
        'Cables protected underground',
      ],
      startingRate: 'From ₹25,000 per zone',
      duration: '2–4 days',
      aftercare: 'Fixture & transformer check',
    },
    {
      id: 'vertical-gardens',
      slug: '/services/vertical-gardens',
      category: 'softscape',
      title: 'Vertical Gardens & Bio-Walls',
      subtitle: 'A green wall for small spaces.',
      icon: Flower2,
      image: '/images/vertical-garden.jpg',
      alt: 'Modular vertical garden bio-wall on a courtyard boundary wall',
      badge: 'Urban Green',
      desc: 'Modular planter frames for courtyards, balconies and shop fronts, with built-in drip watering.',
      features: [
        'UV-stabilised modular frames',
        'Dense foliage plant mix',
        'Tray to collect waste water',
      ],
      startingRate: 'From ₹550/sq ft',
      duration: '3–6 days',
      aftercare: '90-day foliage & drip check',
    },
  ];

  const filtered =
    filter === 'all' ? allServices : allServices.filter((s) => s.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
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
                <span className="kicker text-earth-light">{SITE_CONFIG.brandUpper}</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Landscaping Services in Patna &amp; Bihar
                </h1>
                <p className="text-moss-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Lawn and garden design, plantation, stone walkways, drip irrigation, night lighting and vertical gardens across Patna and nearby Bihar — planned and built by one coordinated team.
                </p>

                {/* Filter Pills with Lucide Icons (no emojis) */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                      filter === 'all'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>All Services (6)</span>
                  </button>
                  <button
                    onClick={() => setFilter('softscape')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                      filter === 'softscape'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Sprout className="w-3.5 h-3.5" />
                    <span>Softscape &amp; Flora</span>
                  </button>
                  <button
                    onClick={() => setFilter('hardscape')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                      filter === 'hardscape'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Footprints className="w-3.5 h-3.5" />
                    <span>Hardscape &amp; Civil</span>
                  </button>
                  <button
                    onClick={() => setFilter('tech')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                      filter === 'tech'
                        ? 'bg-earth text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    <Droplet className="w-3.5 h-3.5" />
                    <span>Drip &amp; Lighting</span>
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
              {filtered.map((svc) => {
                const IconComp = svc.icon;
                return (
                  <StaggerItem key={svc.id}>
                    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                      {/* Image Header */}
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={svc.image}
                          alt={svc.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <span className="absolute top-4 left-4 bg-forest/90 text-earth-light border border-earth/40 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                          {svc.badge}
                        </span>
                        <span className="absolute bottom-4 right-4 bg-black/75 text-white text-[11px] font-semibold px-3 py-1 rounded-md backdrop-blur-md">
                          {svc.startingRate}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-7 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-bold text-earth mb-1">
                            <IconComp className="w-4 h-4 shrink-0" />
                            <span>{svc.subtitle}</span>
                          </div>
                          <h2 className="font-serif text-2xl font-bold text-forest mb-3">
                            {svc.title}
                          </h2>
                          <p className="text-xs text-gray-600 leading-relaxed mb-5">
                            {svc.desc}
                          </p>

                          <div className="border-t border-gray-100 pt-4 mb-5">
                            <span className="text-[10px] font-bold text-forest uppercase tracking-wider block mb-2">
                              What is Included:
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

                          <div className="bg-cream rounded-xl p-3 border border-gray-200 flex items-center justify-between text-[11px] text-gray-600 mb-5">
                            <span className="flex items-center gap-1 font-medium">
                              <Clock className="w-3.5 h-3.5 text-earth" />
                              Typical: {svc.duration}
                            </span>
                            <span className="font-semibold text-forest">{svc.aftercare}</span>
                          </div>
                        </div>

                        {/* 3 CTAs per card as required in Section 4 #4 */}
                        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <Link
                              href={svc.slug}
                              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                            >
                              <span>Explore Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                              href="/calculator"
                              className="text-xs font-bold text-earth hover:underline"
                            >
                              Calculate Cost →
                            </Link>
                          </div>

                          <a
                            href={getWhatsAppUrl(
                              `Hello ${SITE_CONFIG.brandName}, I would like a quote for ${svc.title} in Patna.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Get a Quote on WhatsApp</span>
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

        {/* Turnkey Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 text-earth-light text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>One Team • One Plan • One Itemized BOQ</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                    Need a combination of services for your space?
                  </h3>
                  <p className="text-xs sm:text-sm text-moss-light leading-relaxed max-w-2xl">
                    Whether you are planning a residential garden in Danapur, a rooftop retreat on Bailey Road, or a farmhouse lawn in Bihta, Saurabh and Gaurav personally visit your site and prepare a clear itemized BOQ.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                  <Link
                    href="/contact"
                    className="bg-earth hover:bg-earth-hover text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Book a Site Visit
                  </Link>
                  <a
                    href={getWhatsAppUrl()}
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
