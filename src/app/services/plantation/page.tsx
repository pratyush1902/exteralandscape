'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Trees, Sun, Droplets, 
  Sparkles, ShieldCheck, Flower2, Leaf, MessageSquare 
} from 'lucide-react';

export default function PlantationPage() {
  const [activeTier, setActiveTier] = useState<'palms' | 'shrubs' | 'groundcovers'>('palms');

  const plantsData = {
    palms: [
      {
        name: 'Foxtail Palm (Wodyetia bifurcata)',
        height: '10 – 25 ft',
        sun: 'Full Sun',
        water: 'Low - Moderate',
        desc: 'Plumose fronds resembling a fox tail. Highly symmetrical, clean trunk, resistant to high winds and heat.',
        highlight: 'Luxury Entrance Feature',
      },
      {
        name: 'Plumeria Alba (White Champa)',
        height: '8 – 16 ft',
        sun: 'Full Sun',
        water: 'Low (Drought Hardy)',
        desc: 'Sculptural branches with intensely fragrant white flowers with yellow centers. Thrives in dry heat.',
        highlight: 'Fragrant Evening Blooms',
      },
      {
        name: 'Bismarckia Nobilis (Silver Palm)',
        height: '12 – 30 ft',
        sun: 'Full Sun',
        water: 'Low once established',
        desc: 'Massive steel-blue fan fronds creating an unforgettable architectural focal statement in large villa lawns.',
        highlight: 'Exotic Focal Specimen',
      },
    ],
    shrubs: [
      {
        name: 'Ficus Panda (Ball Topiary)',
        height: '3 – 6 ft',
        sun: 'Full Sun / Partial Shade',
        water: 'Moderate',
        desc: 'Glossy rounded leaves pruned into crisp geometric balls or dense boundary privacy hedges.',
        highlight: 'Architectural Topiary',
      },
      {
        name: 'Tecoma Stans (Yellow Bells)',
        height: '5 – 10 ft',
        sun: 'Full Sun',
        water: 'Low',
        desc: 'Prolific golden yellow trumpet-shaped blooms nearly 10 months a year. Attracts butterflies and sunbirds.',
        highlight: 'Perennial Flowering',
      },
      {
        name: 'Bougainvillea (Trained Trellis / Bush)',
        height: '4 – 15 ft',
        sun: 'Full Sun',
        water: 'Very Low',
        desc: 'Spectacular magenta, pink, or white bracts. Thrives on sun-baked boundary walls and terraces.',
        highlight: 'Vibrant Color Wall',
      },
    ],
    groundcovers: [
      {
        name: 'Ophiopogon Japonicus (Mondo Grass)',
        height: '6 – 10 inches',
        sun: 'Shade / Semi-Shade',
        water: 'Moderate',
        desc: 'Deep emerald ribbon-like tufts that frame stone walkways and thrive under dense tree canopies.',
        highlight: 'Shade Border Lining',
      },
      {
        name: 'Wedelia Trilobata (Yellow Creeping Daisy)',
        height: '4 – 8 inches',
        sun: 'Full Sun',
        water: 'Low',
        desc: 'Rapid ground cover that suffocates weeds and produces cheerful golden star flowers continuously.',
        highlight: 'Weed Suppression',
      },
      {
        name: 'Spider Lily (Hymenocallis)',
        height: '1.5 – 2.5 ft',
        sun: 'Partial to Full Sun',
        water: 'Moderate',
        desc: 'Architectural straps with pure white spidery blossoms. Exceptional moisture resilience in monsoons.',
        highlight: 'Border Accent',
      },
    ],
  };

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
            <span className="text-gold font-semibold">Plantation & Canopy Planning</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Botanical Curation</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Plantation & Canopy Planning
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  Plants selected by horticulture scientists, not random nursery guesswork. 
                  We structure your garden with multi-tiered canopies — framing architectural angles, 
                  shielding harsh western sun, and delivering year-round flowering sequences.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#palette-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Explore Flora Palette
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20want%20to%20consult%20on%20Plantation%20selection."
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

        {/* Interactive Flora Palette Explorer */}
        <section className="py-20 lg:py-24 bg-cream" id="palette-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Curated Plant Palette</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Climate-Resilient Species for Bihar
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Click across the canopy layers below to view specimen species that survive extreme summer heat, drought, and winter chill.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              <button
                onClick={() => setActiveTier('palms')}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTier === 'palms'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Trees className="w-4 h-4" />
                <span>Palms & Specimen Trees</span>
              </button>
              <button
                onClick={() => setActiveTier('shrubs')}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTier === 'shrubs'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Flower2 className="w-4 h-4" />
                <span>Ornamental Shrubs & Topiaries</span>
              </button>
              <button
                onClick={() => setActiveTier('groundcovers')}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTier === 'groundcovers'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Leaf className="w-4 h-4" />
                <span>Groundcovers & Borders</span>
              </button>
            </div>

            {/* Plant Cards Grid */}
            <FadeIn key={activeTier}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plantsData[activeTier].map((plant) => (
                  <div
                    key={plant.name}
                    className="bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      <span className="bg-gold/15 text-gold-hover border border-gold/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
                        {plant.highlight}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-forest mb-2">
                        {plant.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-6">
                        {plant.desc}
                      </p>

                      <div className="bg-cream rounded-xl p-3 border border-gray-200 space-y-1.5 text-xs mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-500 font-bold">Mature Height:</span>
                          <span className="text-forest font-semibold">{plant.height}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 font-bold">Sunlight:</span>
                          <span className="text-forest font-semibold">{plant.sun}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 font-bold">Water Need:</span>
                          <span className="text-forest font-semibold">{plant.water}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20including%20${encodeURIComponent(plant.name)}%20in%20my%20landscape.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-xs font-bold text-emerald hover:text-gold uppercase tracking-wider pt-3 border-t border-gray-100 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire this plant</span>
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3-Tier Canopy Architecture Philosophy */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="kicker">Visual Harmony</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  The Science of Layered Canopy Design
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Amateur gardeners often plant tall trees randomly in the center of a lawn, blocking sightlines and starving the grass of sunlight.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  At <strong>RAJBUILD INFRA</strong>, led by Saurabh Raj (B.Sc Agriculture), every plantation layout follows structural landscape hierarchy:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Upper Overstory (15-30 ft)</h4>
                      <p className="text-xs text-gray-600">Perimeter palms and shade canopies positioned to shield harsh western afternoon sun.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Middle Understory (4-8 ft)</h4>
                      <p className="text-xs text-gray-600">Flowering shrubs and sculpted hedge screens providing privacy from boundary walls.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Lower Groundcover & Bedding (0-2 ft)</h4>
                      <p className="text-xs text-gray-600">Dense evergreen ribbons framing stone pathways, locking in soil moisture and suppressing weeds.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
                    alt="Canopy Planning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1">
                      Botanical Integrity
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2">100% Certified Nursery Stock</h3>
                    <p className="text-xs text-sage-light">
                      Every plant is hand-selected from vetted regional nurseries, pre-treated with organic fungicides, and delivered with healthy rootballs intact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Ready for Thoughtful Plantation?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Get A Custom Plant Palette For Your Space
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              Book a site consultation. We will analyze sunlight exposure across your property and prepare a visual plantation plan with an itemized BOQ.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule Site Inspection
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20would%20like%20to%20discuss%20a%20Plantation%20plan%20for%20my%20garden."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                WhatsApp +91 93153 59040
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
