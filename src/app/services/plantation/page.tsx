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
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

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
        highlight: 'Villa Entrance Feature',
      },
      {
        name: 'Plumeria (Champa)',
        height: '8 – 16 ft',
        sun: 'Full Sun',
        water: 'Low (Drought Hardy)',
        desc: 'Sculptural branches with fragrant white and yellow blossoms. Thrives in Bihar’s warm climate.',
        highlight: 'Fragrant Evening Blooms',
      },
      {
        name: 'Bismarckia Nobilis (Silver Palm)',
        height: '12 – 30 ft',
        sun: 'Full Sun',
        water: 'Low once established',
        desc: 'Silvery-blue fan fronds creating a striking focal statement in spacious villa and farmhouse lawns.',
        highlight: 'Focal Specimen Palm',
      },
    ],
    shrubs: [
      {
        name: 'Ficus Panda (Ball Topiary)',
        height: '3 – 6 ft',
        sun: 'Full Sun / Partial Shade',
        water: 'Moderate',
        desc: 'Glossy rounded leaves pruned into crisp geometric balls or dense boundary privacy hedges.',
        highlight: 'Sculpted Topiary',
      },
      {
        name: 'Tecoma Stans (Yellow Bells)',
        height: '5 – 10 ft',
        sun: 'Full Sun',
        water: 'Low',
        desc: 'Prolific golden yellow trumpet-shaped blooms nearly 10 months a year. Attracts butterflies and sunbirds.',
        highlight: 'Year-Round Flowering',
      },
      {
        name: 'Bougainvillea (Trained Trellis / Bush)',
        height: '4 – 15 ft',
        sun: 'Full Sun',
        water: 'Very Low',
        desc: 'Vibrant magenta, pink, or white bracts. Thrives on sunny boundary walls, pergolas, and terraces.',
        highlight: 'Vibrant Color Wall',
      },
    ],
    groundcovers: [
      {
        name: 'Ophiopogon Japonicus (Mondo Grass)',
        height: '6 – 10 inches',
        sun: 'Shade / Semi-Shade',
        water: 'Moderate',
        desc: 'Deep green ribbon-like tufts that frame stone walkways and thrive under tree canopies.',
        highlight: 'Shade Border Lining',
      },
      {
        name: 'Wedelia Trilobata (Yellow Creeping Daisy)',
        height: '4 – 8 inches',
        sun: 'Full Sun',
        water: 'Low',
        desc: 'Dense groundcover that suppresses weeds and produces golden star flowers throughout the year.',
        highlight: 'Weed Suppression',
      },
      {
        name: 'Spider Lily (Hymenocallis)',
        height: '1.5 – 2.5 ft',
        sun: 'Partial to Full Sun',
        water: 'Moderate',
        desc: 'Clean strap leaves with white spidery blossoms and strong moisture resilience in monsoons.',
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
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/plantation-canopy.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Botanical Curation</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Plantation & Canopy Planning
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Shade where you need it, privacy along boundary walls, and flowering plants that bloom across seasons — chosen by a B.Sc Agriculture graduate for your soil and sunlight hours.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#palette-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                  >
                    Explore Plant Palette
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I want to consult on Plantation & Canopy Planning.`)}
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

        {/* Interactive Flora Palette Explorer */}
        <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="palette-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="kicker">Curated Plant Palette</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                Climate-Resilient Species for Bihar
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                Click across the canopy layers below to view specimen species that survive extreme summer heat, drought, and winter chill.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
              <button
                onClick={() => setActiveTier('palms')}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
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
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
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
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 ${
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
                      href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in including ${plant.name} in my landscape.`)}
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
                  Placing trees and shrubs at the right distances keeps sightlines open, ensures the lawn underneath receives enough sunlight, and prevents roots from crowding boundary walls.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  At <strong>{SITE_CONFIG.brandName}</strong>, led by Saurabh Raj (B.Sc Agriculture), every plantation layout is structured across three height layers:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Upper Overstory (15–30 ft)</h4>
                      <p className="text-xs text-gray-600">Perimeter palms and shade trees positioned to filter harsh western afternoon sun.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Middle Understory (4–8 ft)</h4>
                      <p className="text-xs text-gray-600">Flowering shrubs and sculpted hedge screens providing natural privacy along boundaries.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-forest">Lower Groundcover & Bedding (0–2 ft)</h4>
                      <p className="text-xs text-gray-600">Evergreen border ribbons framing stone pathways, retaining soil moisture, and reducing weeds.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/images/plantation-canopy.jpg"
                    alt="Layered garden planting with palms, flowering shrubs, and border groundcovers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1">
                      Botanical Care
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2">Quality-Checked Nursery Stock</h3>
                    <p className="text-xs text-sage-light">
                      Every plant is hand-selected from trusted nurseries, root-treated before planting, and covered by our 90-day replacement guarantee under normal care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="py-12 sm:py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Ready for Thoughtful Plantation?</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Get A Custom Plant Palette For Your Space
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-6 sm:mb-8 leading-relaxed">
              Book a site visit in Patna. We check sunlight hours across your plot and prepare a layered planting plan with an itemized BOQ.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
              >
                Book Site Visit
              </Link>
              <a
                href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I would like to discuss a Plantation plan for my garden.`)}
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
