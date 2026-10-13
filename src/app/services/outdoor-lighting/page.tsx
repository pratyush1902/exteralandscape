'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Lightbulb, Sun, Moon, 
  ShieldCheck, Zap, Flame, MessageSquare, Eye
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function OutdoorLightingPage() {
  const [activeMood, setActiveMood] = useState<'uplight' | 'bollard' | 'stepper' | 'patio'>('uplight');

  const lightingData = {
    uplight: {
      title: 'Palm & Tree Up-Lighting',
      tag: 'Warm Vertical Depth',
      image: '/images/night-lighting.jpg',
      specs: '9W – 15W LED COB • 2700K Warm Gold • 24° Beam Angle',
      bestFor: 'Foxtail Palms, Plumeria (Champa) Trees, Villa Facades & Textured Boundary Walls',
      desc: 'Ground-recessed or spike-mounted brass spotlights angled upwards through the palm canopy, casting soft silhouettes and creating a calm evening setting.',
    },
    bollard: {
      title: 'Low-Glare Pathway Bollards',
      tag: 'Safe Evening Walkways',
      image: '/images/cafe-courtyard.jpg',
      specs: '5W – 7W Low Voltage LED • 360° Downward Throw • Anti-Glare Louver',
      bestFor: 'Stone Pathways, Lawn Margins & Driveway Edges',
      desc: 'Slim bollards that direct light downward onto the walking surface, illuminating steps and stone pavers clearly without glare in your eyes.',
    },
    stepper: {
      title: 'Recessed Riser & Step Lights',
      tag: 'Subtle Step Illumination',
      image: '/images/courtyard-garden.jpg',
      specs: '3W Mini Micro-LED • IP65/IP67 Weatherproof • Stainless Steel Bezel',
      bestFor: 'Outdoor Staircases, Terrace Risers & Retaining Wall Insets',
      desc: 'Flush-mounted into vertical stone steps or retaining curbs to light every step safely for family members and evening guests.',
    },
    patio: {
      title: 'Pergola & Courtyard Ambient Glow',
      tag: 'Warm Evening Seating',
      image: '/images/rooftop-terrace.jpg',
      specs: 'Dimmable Warm 2500K – 2700K • Concealed Aluminum Channels',
      bestFor: 'Outdoor Dining Patios, Gazebos & Terrace Seating Nooks',
      desc: 'Soft, indirect warm illumination integrated under pergola beams and seating benches for comfortable evening conversations.',
    },
  };

  const current = lightingData[activeMood];

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
            <span className="text-gold font-semibold">Outdoor Night Lighting</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/night-lighting.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Illumination Design</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Outdoor Night Lighting in Patna
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Enjoy your garden after sunset with warm, low-glare 2700K lighting along pathways, palms, and seating areas — wired with weatherproof IP65/IP67 fixtures and underground conduits.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#lighting-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                  >
                    Explore Night Lighting Moods
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in Outdoor Night Lighting.`)}
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

        {/* Interactive Lighting Mood Explorer */}
        <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="lighting-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="kicker">Lighting Visualizer</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                Select An Illumination Technique
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                Click across the lighting concepts below to inspect how each technique highlights specific outdoor elements.
              </p>
            </div>

            {/* Mood Tabs */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
              <button
                onClick={() => setActiveMood('uplight')}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  activeMood === 'uplight'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Tree & Palm Up-Lighting</span>
              </button>
              <button
                onClick={() => setActiveMood('bollard')}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
                  activeMood === 'bollard'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Pathway Bollards</span>
              </button>
              <button
                onClick={() => setActiveMood('stepper')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'stepper'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>Step & Riser Recessed</span>
              </button>
              <button
                onClick={() => setActiveMood('patio')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'patio'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Flame className="w-4 h-4" />
                <span>Pergola & Patio Warm Glow</span>
              </button>
            </div>

            {/* Active Lighting Display Card */}
            <FadeIn key={activeMood}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
                <div className="lg:col-span-5 relative h-72 lg:h-auto">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      Warm 2700K Standard
                    </span>
                    <h3 className="font-serif text-2xl font-bold">{current.title}</h3>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                      {current.tag}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-forest mb-3">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    <div className="bg-cream rounded-2xl p-4 border border-gray-200 space-y-2 text-xs mb-6">
                      <div>
                        <span className="text-gray-500 font-bold block mb-0.5">Hardware Specification:</span>
                        <span className="font-semibold text-forest">{current.specs}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-0.5">Ideal Placement:</span>
                        <span className="font-semibold text-dark">{current.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500">
                      12V Low Voltage • Child & Pet Safe
                    </span>
                    <a
                      href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in ${current.title} for my property.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald hover:bg-forest text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire This Lighting</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why 2700K Warm Gold */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="kicker">Warm Evening Atmosphere</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  Why We Use 2700K Warm Light
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Cool 6500K floodlights can wash out leaf colors and create harsh glare across seating areas. Instead, layered 2700K warm fixtures bring out natural foliage tones and keep evenings restful.
                </p>
                <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Natural Foliage Depth:</strong> 2700K warm light brings out green foliage and natural stone textures in the evening.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Fewer Flying Insects:</strong> Warmer color wavelengths attract fewer night insects than bright blue-white lamps.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>12V/24V Low-Voltage Safety:</strong> Outdoor garden circuits run on step-down transformers for safe use around children and pets.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-forest-deep text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
                  <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                    Electrical Safety Standard
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">IP65/IP67 Weatherproof Underground Cabling</h3>
                  <p className="text-xs text-sage-light leading-relaxed mb-6">
                    Patna experiences heavy monsoon rainfall. All our outdoor cables are routed inside heavy-gauge PVC conduits with weatherproof junction boxes and 90-day fixture and timer support.
                  </p>
                  <ul className="space-y-2 text-xs text-white/90 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" /> Weatherproof brass and die-cast aluminum fixtures</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" /> Automatic dusk-to-dawn timer controls</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" /> Dedicated circuit protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-12 sm:py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Illuminate Your Evenings</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Book A Night Lighting Site Visit
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-6 sm:mb-8 leading-relaxed">
              We visit your site in Patna, plan fixture placement around your trees, pathways, and seating areas, and share an itemized BOQ.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
              >
                Book Site Visit
              </Link>
              <a
                href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I would like to discuss an Outdoor Lighting project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                WhatsApp {SITE_CONFIG.phoneDisplay}
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
