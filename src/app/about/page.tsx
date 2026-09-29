'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  Sprout, HardHat, GraduationCap, Building2, CheckCircle2, 
  ShieldCheck, Award, MapPin, ArrowRight, Compass, Sparkles 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-forest-deep text-white py-20 lg:py-28 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-earth-light">EXTERRA LANDSCAPE</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  “Shaping Outdoor Living.”
                </h1>
                <p className="text-moss-light text-base sm:text-lg leading-relaxed mb-8">
                  Founded in Patna to bridge a critical gap in Eastern India’s landscape market: 
                  uniting degree-level agricultural botany with veteran civil infrastructure engineering.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-earth hover:bg-earth-hover text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Schedule Initial Meeting
                  </Link>
                  <Link
                    href="/services"
                    className="border border-white/20 hover:border-earth hover:text-earth-light text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founding Story & Synergy */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6">
                <span className="kicker text-forest">The Genesis</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  Why Landscape Needs Both Science and Civil Engineering
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  In Bihar, landscaping has traditionally been delegated to unorganized local maalis who lack understanding of soil nutrient profiles, drainage gradients, or micro-irrigation physics. The result? Lawns that dry out within six months, cracked stone pathways, and flooded courtyards during monsoons.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  <strong>EXTERRA LANDSCAPE</strong> (founded by brothers <strong>Saurabh Raj</strong> and <strong>Gaurav Raj</strong>) was formed to eliminate this amateur approach. By combining scientific agricultural horticulture with civil structural rigor, we create perennial, self-sustaining outdoor landscapes that increase in beauty and value year after year.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-cream border border-gray-200">
                    <b className="text-forest block text-sm mb-1">Our Mission</b>
                    <span className="text-gray-600">Make transparent, science-backed architectural landscape design accessible across Eastern India.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-cream border border-gray-200">
                    <b className="text-forest block text-sm mb-1">Our Vision</b>
                    <span className="text-gray-600">Become the most trusted regional studio for luxury outdoor living, estate grounds, and sustainable civil landscaping.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=1200&q=80"
                    alt="EXTERRA Landscape Estate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-earth-light text-xs font-bold uppercase tracking-wider mb-1">
                      Patna, Bihar Headquarters
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Shaping Outdoor Living
                    </h3>
                    <p className="text-xs text-moss-light">
                      Every project is calibrated to survive regional climate extremes and harmonize with local architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders Deep Dive */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker text-forest">Leadership</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Meet The Founders
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Two complementary skillsets delivering turnkey landscape architecture under one unified brand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
              {/* Saurabh Raj */}
              <div className="bg-cream rounded-3xl border border-gray-200 overflow-hidden shadow-md p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center mb-6 shadow-md">
                    <Sprout className="w-8 h-8 text-earth-light" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest mb-1">Saurabh Raj</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-earth mb-4">
                    Co-Founder & Horticulture Lead
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-forest mb-6">
                    <GraduationCap className="w-3.5 h-3.5 text-earth" />
                    <span>B.Sc Agriculture Graduate</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Specialized in soil microbiology, plant taxonomy, organic nutrition cycles, and micro-climate flora selection. Saurabh inspects every site’s soil chemistry, directs nursery plant procurement, and curates bespoke botanical palettes that thrive naturally in Bihar.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 text-xs font-semibold text-forest">
                  Key Focus: Botany, Turf Selection, Irrigation Timing, Organic Soil Dressing
                </div>
              </div>

              {/* Gaurav Raj */}
              <div className="bg-cream rounded-3xl border border-gray-200 overflow-hidden shadow-md p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center mb-6 shadow-md">
                    <HardHat className="w-8 h-8 text-earth-light" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest mb-1">Gaurav Raj</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-earth mb-4">
                    Co-Founder & Civil Execution Lead
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-forest mb-6">
                    <Building2 className="w-3.5 h-3.5 text-earth" />
                    <span>Civil Engineer (3+ Years Experience)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Over 3 years of hands-on civil execution experience in high-rise building projects and government infrastructure in Rajasthan. Gaurav guarantees that hardscape foundations, retaining curbs, drainage gradients, and underground conduits are engineered to structural standards.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 text-xs font-semibold text-forest">
                  Key Focus: Site Levelling, Lean Concrete Sub-bases, Masonry, Plumbing Gradients
                </div>
              </div>
            </div>

            {/* Quality Guarantees Grid */}
            <div className="bg-forest-deep text-white rounded-3xl p-8 sm:p-14">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-earth-light text-xs font-bold uppercase tracking-wider block mb-2">
                  Our Uncompromising Standard
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  The EXTERRA Four-Pillar Quality Promise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">01. 100% Itemized BOQ</div>
                  <p className="text-moss-light leading-relaxed">Every plant size, grass square footage, plumbing valve, and labor day is documented with full price transparency.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">02. Certified Nursery Stock</div>
                  <p className="text-moss-light leading-relaxed">No unhealthy or root-bound rejects. All specimens are pre-treated with organic bio-fungicides.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">03. Engineered Sub-bases</div>
                  <p className="text-moss-light leading-relaxed">We never lay walkways directly on loose mud. Mechanically compacted sub-bases prevent sinking and cracking.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">04. 90-Day Aftercare Protocol</div>
                  <p className="text-moss-light leading-relaxed">We provide root-establishment monitoring, pruning schedules, and fertilizer guidelines long after handover.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
