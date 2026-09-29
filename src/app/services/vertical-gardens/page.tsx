'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Layers, Wind, ThermometerSnowflake, 
  Droplets, ShieldCheck, MessageSquare, Flower 
} from 'lucide-react';

export default function VerticalGardensPage() {
  const [wallWidth, setWallWidth] = useState<number>(10);
  const [wallHeight, setWallHeight] = useState<number>(8);

  const totalSqFt = wallWidth * wallHeight;
  const totalPlants = Math.round(totalSqFt * 4.2); // ~4.2 plants per sq ft
  const estCost = Math.round(totalSqFt * 650); // ~₹650 per sq ft turnkey

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
            <span className="text-gold font-semibold">Vertical Gardens & Bio-Walls</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Vertical Urban Green</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Vertical Gardens & Bio-Walls in Bihar
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  Transform blank concrete boundaries, courtyard facades, and rooftop screens into lush, air-purifying living bio-walls. 
                  Engineered with UV-stabilized modular planters, automatic micro-drip recirculation, and zero root-dampness against building walls.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#biowall-calculator"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Calculate Bio-Wall Sizing
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20a%20Vertical%20Garden%20or%20Green%20Wall."
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

        {/* Interactive Bio-Wall Sizing & Impact Calculator */}
        <section className="py-20 lg:py-24 bg-cream" id="biowall-calculator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Interactive Dimension Estimator</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Calculate Your Green Wall Scale
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Input your wall width and height to see plant capacity, thermal cooling benefits, and approximate investment.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
              {/* Controls (6 cols) */}
              <div className="p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-forest">
                        Wall Width (Feet):
                      </label>
                      <span className="text-xl font-extrabold text-emerald">{wallWidth} ft</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="30"
                      value={wallWidth}
                      onChange={(e) => setWallWidth(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-forest">
                        Wall Height (Feet):
                      </label>
                      <span className="text-xl font-extrabold text-emerald">{wallHeight} ft</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="20"
                      value={wallHeight}
                      onChange={(e) => setWallHeight(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-cream border border-gray-200 text-xs text-gray-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Includes structural hot-dip galvanized steel subframe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Concealed micro-drip manifold with automated timer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Drip catch tray prevents water dripping onto ground</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  Turnkey rate: <strong>₹600 – ₹750 per sq. ft.</strong> inclusive of framing, pots, plants & automatic drip.
                </div>
              </div>

              {/* Outputs (6 cols) */}
              <div className="bg-gradient-to-br from-forest to-forest-light text-white p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="border-b border-white/15 pb-4 mb-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
                      Bio-Wall Impact
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      {totalSqFt} sq. ft. Living Wall
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 text-gold mb-1">
                        <Flower className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold tracking-wider">Living Plants</span>
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                        ~{totalPlants} Pots
                      </div>
                      <span className="text-[11px] text-sage-light">Dense air-cleansing foliage</span>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 text-gold mb-1">
                        <ThermometerSnowflake className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold tracking-wider">Cooling Effect</span>
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                        -4°C to -6°C
                      </div>
                      <span className="text-[11px] text-sage-light">surface wall temperature</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-3 text-xs mb-6 flex justify-between items-center">
                    <span className="text-sage-light">Estimated Turnkey Investment:</span>
                    <span className="font-serif text-lg font-bold text-gold">
                      ₹{estCost.toLocaleString('en-IN')}*
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20a%20Vertical%20Garden%20measuring%20${wallWidth}ft%20x%20${wallHeight}ft%20(${totalSqFt}%20sq%20ft).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get WhatsApp Quote For This Wall</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Waterproofing Philosophy */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="kicker">Civil Assurance</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  Zero Wall Dampness Guarantee
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Many homeowners fear vertical gardens because poor installations cause water seepages into indoor walls.
                </p>
                <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Free-Standing Air Gap:</strong> Our galvanized steel frame mounts 50mm away from the building wall, creating continuous air circulation that eliminates any contact moisture.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Integrated Drip Catch Gutters:</strong> Runoff water is intercepted by a bottom catch tray and channeled directly into your storm drain.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>UV-Treated Polypropylene Pots:</strong> High-impact virgin polymers that will not crack or become brittle under Bihar’s blazing summer sun.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=1200&q=80"
                    alt="Vertical Garden Installation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1">
                      Curated Bio-Wall Species
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2">Tropical Air-Purifying Flora</h3>
                    <p className="text-xs text-sage-light">
                      Planted with Philodendron Ceylon Gold, Syngonium, Asparagus Fern, and Spider Plants for lush multi-colored foliage year-round.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Elevate Your Bare Walls</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Book A Vertical Garden Site Assessment
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              We inspect wall structural capacity, water tap points, and sunlight exposure to design a living green wall tailored for your space.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule Site Visit
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20want%20to%20discuss%20a%20Vertical%20Garden."
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
