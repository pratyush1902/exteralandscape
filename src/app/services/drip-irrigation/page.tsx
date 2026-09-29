'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Droplet, Clock, DollarSign, 
  Cpu, Wrench, ShieldCheck, MessageSquare, Gauge
} from 'lucide-react';

export default function DripIrrigationPage() {
  const [gardenArea, setGardenArea] = useState<number>(1000);

  // Math metrics based on agronomic standards
  const manualLitersPerDay = Math.round(gardenArea * 4.5); // ~4.5 L / sq ft in summer
  const dripLitersPerDay = Math.round(gardenArea * 1.8); // ~1.8 L / sq ft targeted root hydration
  const litersSavedMonthly = (manualLitersPerDay - dripLitersPerDay) * 30;
  const hoursSavedMonthly = Math.round((gardenArea / 1000) * 35); // ~35 hrs of manual pipe watering per month for 1000 sq ft

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
            <span className="text-gold font-semibold">Automated Drip & Sprinklers</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Water Conservation Tech</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Automated Drip & Popup Sprinkler Systems
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  Never worry about garden watering again. Our automated micro-irrigation systems deliver precision hydration 
                  directly to plant roots at dawn, saving up to 60% water while keeping your lawn lush even when you are traveling away from Patna.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#savings-calculator"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Calculate Water & Time Saved
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20an%20automated%20drip%20irrigation%20system."
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

        {/* Interactive Water & Labor Savings Calculator */}
        <section className="py-20 lg:py-24 bg-cream" id="savings-calculator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Efficiency Analysis</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Interactive Water & Time Savings Calculator
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Adjust the slider below to see how much water and manual labor an automated system will save on your property each month.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
              {/* Left Controls (6 cols) */}
              <div className="p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    Enter or Slide Your Garden Area:
                  </label>
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-xs text-gray-500">Target Area</span>
                    <span className="text-2xl font-serif font-extrabold text-emerald">
                      {gardenArea.toLocaleString('en-IN')} sq. ft.
                    </span>
                  </div>

                  <input
                    type="range"
                    min="300"
                    max="6000"
                    step="100"
                    value={gardenArea}
                    onChange={(e) => setGardenArea(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-8"
                  />

                  <div className="space-y-4 border-t border-gray-100 pt-6 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Zero surface water runoff or sidewalk splashing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Prevents fungal diseases caused by wet leaf surfaces at night</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      <span>Automated battery or Wi-Fi digital cycle controller</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-xs text-gray-500">
                  Turnkey installation: <strong>₹25 – ₹40 per sq. ft.</strong> including valves, pipes, filters & controller.
                </div>
              </div>

              {/* Right Output Dashboard (6 cols) */}
              <div className="bg-gradient-to-br from-forest to-forest-light text-white p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="border-b border-white/15 pb-4 mb-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
                      Monthly Efficiency Payoff
                    </span>
                    <h3 className="font-serif text-2xl font-bold">Your Garden Projection</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 text-gold mb-1">
                        <Droplet className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold tracking-wider">Water Saved</span>
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                        {litersSavedMonthly.toLocaleString('en-IN')} L
                      </div>
                      <span className="text-[11px] text-sage-light">per month saved</span>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 text-gold mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold tracking-wider">Time Saved</span>
                      </div>
                      <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                        ~{hoursSavedMonthly} hrs
                      </div>
                      <span className="text-[11px] text-sage-light">manual watering eliminated</span>
                    </div>
                  </div>

                  <p className="text-xs text-sage-light leading-relaxed mb-6">
                    Eliminates dependence on house help or gardeners to remember daily watering schedules. Your landscape receives calibrated moisture automatically at 5:30 AM every morning.
                  </p>
                </div>

                <a
                  href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20calculated%20water%20savings%20for%20a%20${gardenArea}%20sq%20ft%20garden.%20I%20want%20to%20get%20a%20quote%20for%20automated%20drip%20irrigation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Drip Quote For {gardenArea} sq. ft.</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Zone Irrigation Architecture Blueprint */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Engineered Hardware</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                The 3-Zone Specialized Flow Architecture
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Lawns, hedge borders, and palms require completely different water volumes and pressures. We divide every site into isolated automated zones:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cream rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="bg-emerald/10 text-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                    Zone 1: Turf Lawn
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-2">
                    Popup Gear-Driven Rotors
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Hidden underground sprinkler heads that pop up automatically under water pressure, spray an even curtain of fine droplets across the lawn, and retract flush with the soil for mowing.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-dark border-t border-gray-200 pt-3">
                  Radius: 15 to 30 ft • Retractable Flush Heads
                </div>
              </div>

              <div className="bg-cream rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="bg-emerald/10 text-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                    Zone 2: Shrub & Hedge Line
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-2">
                    Inline Pressure-Compensating Drip
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Heavy-duty 16mm UV-treated driplines with laser-molded emitters spaced every 30cm, buried under organic mulch. Delivers 2 to 4 liters/hour directly at the root crown with zero evaporation.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-dark border-t border-gray-200 pt-3">
                  Zero Clog Emitters • Sub-surface Concealed
                </div>
              </div>

              <div className="bg-cream rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="bg-emerald/10 text-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                    Zone 3: Specimen Palms & Trees
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest mb-2">
                    Deep Root Bubblers
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    High-volume localized flood bubblers designed to soak deep soil layers around large palm root systems, encouraging downward root exploration instead of shallow surface rooting.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-dark border-t border-gray-200 pt-3">
                  Promotes Deep Root Stability • Wind Resistance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Retrofit Existing Gardens</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Can We Automate Your Existing Garden?
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              Yes! We routinely retrofit automated micro-irrigation lines into established gardens across Patna without digging up finished lawn areas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule Irrigation Survey
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20want%20to%20retrofit%20drip%20irrigation%20in%20my%20garden."
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
