'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Hammer, HardHat, ShieldCheck, 
  Layers, Footprints, MessageSquare, Ruler
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function HardscapePage() {
  const [selectedStone, setSelectedStone] = useState<'kandla' | 'jodhpur' | 'cobbles' | 'pavers'>('kandla');

  const stonesData = {
    kandla: {
      name: 'Kandla Grey Natural Sandstone',
      subtitle: 'Cool Underfoot & Clean Minimalist Look',
      image: '/images/stone-walkway.jpg',
      finish: 'Shot-blasted / Calibrated non-slip',
      thickness: '25mm – 35mm calibrated',
      heatResist: 'High (Stays comfortable underfoot in summer)',
      loadBearing: 'Pedestrian & Outdoor Dining Walkways',
      rate: '₹140 – ₹195 per sq. ft. (Supply & Laying)',
      desc: 'Uniform grey texture with subtle natural grain. Absorbs less daytime heat than dark stone, making it comfortable for garden walkways.',
    },
    jodhpur: {
      name: 'Jodhpur Teakwood Sandstone',
      subtitle: 'Warm Golden Veins & Classic Character',
      image: '/images/courtyard-garden.jpg',
      finish: 'Honed / Sawn textured',
      thickness: '30mm calibrated',
      heatResist: 'High (Natural sandstone insulation)',
      loadBearing: 'Villa Patios, Gazebo Floors & Courtyards',
      rate: '₹165 – ₹220 per sq. ft. (Supply & Laying)',
      desc: 'Natural wood-grain patterns in warm amber and sandstone tones. Pairs cleanly with green lawn turf and warm evening lighting.',
    },
    cobbles: {
      name: 'Tumbled Basalt & Granite Cobbles',
      subtitle: 'Heavy-Duty Driveway & Courtyard Blocks',
      image: '/images/cafe-courtyard.jpg',
      finish: 'Tumbled natural hand-dressed',
      thickness: '50mm – 80mm cube blocks',
      heatResist: 'Very High',
      loadBearing: 'Driveways, Car Porches & Tree Curbs',
      rate: '₹180 – ₹240 per sq. ft. (Heavy Sub-base)',
      desc: 'Dense stone cubes set over a compacted aggregate base to handle vehicle movement without cracking or shifting.',
    },
    pavers: {
      name: 'Garden Stepping Stones',
      subtitle: 'Lawn Pavers & Gravel Paths',
      image: '/images/villa-lawn.jpg',
      finish: 'Textured flamed granite or sandstone',
      thickness: '40mm slab',
      heatResist: 'High',
      loadBearing: 'Garden Steppers across Lawn Turf',
      rate: '₹120 – ₹170 per sq. ft.',
      desc: 'Wide rectangular stepping stones set flush within turf or pebble borders for dry, mud-free walking paths in every season.',
    },
  };

  const current = stonesData[selectedStone];

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
            <span className="text-gold font-semibold">Hardscape & Stone Walkways</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/images/stone-walkway.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Civil Precision</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Hardscape & Stone Walkways
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Stone pathways, patios, and stepping stones that stay level year after year — laid over compacted sub-bases and mortar bedding by our civil engineering team so nothing sinks or cracks after the rains.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#stone-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
                  >
                    Explore Stone Finishes
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in Hardscape and Stone Walkways.`)}
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

        {/* Interactive Stone Finishes Explorer */}
        <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="stone-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="kicker">Material Palette</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest mb-3 sm:mb-4">
                Select Your Paving Style
              </h2>
              <p className="text-gray-600 text-xs sm:text-base">
                Click across the options below to inspect material specifications, surface finishes, and indicative rates.
              </p>
            </div>

            {/* Stone Tabs */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 sm:pb-0 px-1">
              <button
                type="button"
                onClick={() => setSelectedStone('kandla')}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shrink-0 ${
                  selectedStone === 'kandla'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Kandla Grey Sandstone</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedStone('jodhpur')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'jodhpur'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Hammer className="w-4 h-4" />
                <span>Jodhpur Teak Sandstone</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedStone('cobbles')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'cobbles'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Ruler className="w-4 h-4" />
                <span>Granite & Basalt Cobbles</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedStone('pavers')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'pavers'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Footprints className="w-4 h-4" />
                <span>Lawn Stepping Stones</span>
              </button>
            </div>

            {/* Active Stone Card */}
            <FadeIn key={selectedStone}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
                <div className="lg:col-span-5 relative h-72 lg:h-auto">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">Civil Grade Certified</span>
                    <h3 className="font-serif text-2xl font-bold">{current.name}</h3>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                      {current.subtitle}
                    </span>
                    <div className="text-2xl font-serif font-bold text-forest mb-4">
                      Estimated Cost: <span className="text-emerald">{current.rate}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    <div className="bg-cream rounded-2xl p-4 border border-gray-200 grid grid-cols-2 gap-4 text-xs mb-6">
                      <div>
                        <span className="text-gray-500 font-bold block mb-1">Surface Finish:</span>
                        <span className="font-semibold text-dark">{current.finish}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1">Slab Thickness:</span>
                        <span className="font-semibold text-dark">{current.thickness}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1">Summer Heat:</span>
                        <span className="font-semibold text-dark">{current.heatResist}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-1">Recommended Usage:</span>
                        <span className="font-semibold text-dark">{current.loadBearing}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500">
                      Zero settling guarantee with engineered sub-base.
                    </span>
                    <a
                      href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I am interested in ${current.name} for my walkways.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald hover:bg-forest text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire This Stone</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Civil Engineering Structural Integrity Section */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Why Civil Engineering Matters</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                The Anatomy of a Level Pathway
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                To keep walkways and patios level through heavy monsoon rains, every stone surface needs a properly compacted foundation underneath. Here is how our civil team builds every pathway:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Compacted Earth Base</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Excavated 150mm below grade and mechanically compacted using plate vibratory rammers for a firm subgrade.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Lean Concrete Bedding</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A 75mm M10 grade lean concrete or compacted aggregate sub-base creating a solid foundation.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Mortar Setting Bed</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Stone slabs individually set on cement mortar ensuring full-bed contact and stable footing.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Weatherproof Grouting</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sealed stone joints that prevent weed growth and water seepage between slabs, backed by a 90-day joint and level check.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-12 sm:py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Built to Last</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Book A Hardscape Site Visit
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-6 sm:mb-8 leading-relaxed">
              We inspect soil bearing conditions, check property drainage slopes, and bring stone samples to your site in Patna.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg text-center"
              >
                Book Site Visit
              </Link>
              <a
                href={getWhatsAppUrl(`Hello ${SITE_CONFIG.brandName}, I would like to discuss Hardscape walkways.`)}
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
