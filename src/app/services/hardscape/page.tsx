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

export default function HardscapePage() {
  const [selectedStone, setSelectedStone] = useState<'kandla' | 'jodhpur' | 'cobbles' | 'pavers'>('kandla');

  const stonesData = {
    kandla: {
      name: 'Kandla Grey Natural Sandstone',
      subtitle: 'Cool Underfoot & Timeless Minimalist Elegance',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
      finish: 'Shot-blasted / Calibrated non-slip',
      thickness: '25mm – 35mm calibrated',
      heatResist: 'High (Stays cool during 44°C Patna summers)',
      loadBearing: 'Pedestrian & Outdoor Dining Walkways',
      rate: '₹140 – ₹195 per sq. ft. (Supply & Laying)',
      desc: 'Uniform grey texture with subtle quartzite sparkles. Does not absorb excessive thermal radiation, making it comfortable for barefoot morning strolls.',
    },
    jodhpur: {
      name: 'Jodhpur Teakwood Sandstone',
      subtitle: 'Warm Golden Veins & Heritage Royal Character',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
      finish: 'Honed / Sawn textured',
      thickness: '30mm calibrated',
      heatResist: 'High (Natural sandstone insulation)',
      loadBearing: 'Villa Patios, Gazebo Floors & Courtyards',
      rate: '₹165 – ₹220 per sq. ft. (Supply & Laying)',
      desc: 'Distinctive natural wood-grain patterns in warm amber and gold. Pairs breathtakingly with emerald lawn turf and evening warm lighting.',
    },
    cobbles: {
      name: 'Tumbled Basalt & Granite Cobbles',
      subtitle: 'Heavy-Duty European Driveway & Border Blocks',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      finish: 'Tumbled natural hand-dressed',
      thickness: '50mm – 80mm cube blocks',
      heatResist: 'Extreme',
      loadBearing: 'SUV Driveways, Car Porches & Tree Curbs',
      rate: '₹180 – ₹240 per sq. ft. (Heavy Foundation)',
      desc: 'Indestructible stone cubes that lock together over compacted aggregate. Can withstand heavy vehicular movement without cracking or shifting.',
    },
    pavers: {
      name: 'Architectural Stepping Stones',
      subtitle: 'Floating Lawn Pavers & Modern Gravel Paths',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80',
      finish: 'Textured flamed granite or sandstone',
      thickness: '40mm heavy slab',
      heatResist: 'High',
      loadBearing: 'Garden Steppers across Lawn Turf',
      rate: '₹120 – ₹170 per sq. ft.',
      desc: 'Oversized rectangular stepping stones embedded seamlessly within turf with clean gravel perimeter margins.',
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
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Civil Precision</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Hardscape & Stone Walkways
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  Civil infrastructure meets botanical serenity. Led by Gaurav Raj (Civil Engineer with high-rise construction experience), 
                  we construct stone pathways, stepping stones, patio slabs, and retaining borders engineered never to settle, sink, or crack.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#stone-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Explore Stone Finishes
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20Hardscape%20and%20Stone%20Walkways."
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

        {/* Interactive Stone Finishes Explorer */}
        <section className="py-20 lg:py-24 bg-cream" id="stone-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Architectural Material Palette</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Select Your Paving Style
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Click across the options below to inspect material specifications, surface finishes, and estimated turnkey rates.
              </p>
            </div>

            {/* Stone Tabs */}
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              <button
                onClick={() => setSelectedStone('kandla')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'kandla'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🪨 Kandla Grey Sandstone
              </button>
              <button
                onClick={() => setSelectedStone('jodhpur')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'jodhpur'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🏛️ Jodhpur Teak Sandstone
              </button>
              <button
                onClick={() => setSelectedStone('cobbles')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'cobbles'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                🧱 Granite & Basalt Cobbles
              </button>
              <button
                onClick={() => setSelectedStone('pavers')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  selectedStone === 'pavers'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                👣 Lawn Stepping Stones
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
                      href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20${encodeURIComponent(current.name)}%20for%20my%20walkways.`}
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
                The Anatomy of a Non-Sinking Pathway
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Ordinary contractors lay pavers directly on loose mud. Within one rainy season, pavers sink, joints crack, and rainwater pools. Here is how our civil team executes every pathway:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Compacted Earth Base</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Excavated 150mm below grade and mechanically compacted using plate vibratory rammers to achieve 95% standard proctor density.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Lean Concrete Bedding</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A 75mm M10 grade lean concrete or compacted wet-mix macadam layer creating an unyielding structural foundation.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Mortar Setting Bed</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Stone slabs individually buttered with polymer-modified cement mortar ensuring 100% full-bed contact with zero hollow sound.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-cream">
                <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="font-bold text-base text-forest mb-2">Epoxy / Polymer Grouting</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Weatherproof jointing that prevents weed emergence, ant burrowing, and water ingress through stone seams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Build Built to Last</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Schedule A Hardscape Site Survey
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              We inspect soil bearing capacity, check property gradients, and provide material samples directly to your doorstep in Patna.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Request Hardscape Survey
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20would%20like%20to%20discuss%20Hardscape%20walkways."
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
