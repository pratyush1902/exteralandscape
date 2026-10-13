'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn } from '@/components/Animations';
import {
  Sprout,
  HardHat,
  GraduationCap,
  Building2,
  MessageSquare,
  CalendarCheck,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function AboutPage() {
  const waUrl = getWhatsAppUrl(
    `Hello ${SITE_CONFIG.brandName}, I read about your team and would like to book a site visit.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-forest-deep text-white py-20 lg:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('/images/villa-lawn.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-earth-light">{SITE_CONFIG.brandName} • Est. {SITE_CONFIG.foundedYear}</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Shaping Outdoor Living.
                </h1>
                <p className="text-moss-light text-base sm:text-lg leading-relaxed mb-8">
                  Founded in Patna by brothers Saurabh Raj and Gaurav Raj — bringing agricultural science and civil engineering together under one roof for outdoor spaces across Bihar.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-earth hover:bg-earth-hover text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Book a Site Visit
                  </Link>
                  <Link
                    href="/services"
                    className="border border-white/20 hover:border-earth hover:text-earth-light text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    View Services
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
                <span className="kicker text-forest">Our Story</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  Why a good garden needs both plant science and civil work
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A garden that still looks good three years later depends on two things most people never see: the soil and roots underneath, and the grading, drainage, and foundations holding everything in place. When either side is skipped, lawns turn patchy after the first monsoon and stone pathways start to sink or crack.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  <strong>Saurabh Raj</strong> (B.Sc Agriculture) and <strong>Gaurav Raj</strong> (Civil Engineer) started <strong>{SITE_CONFIG.brandName}</strong> in Patna in {SITE_CONFIG.foundedYear} so homeowners, studios, and commercial spaces in Bihar could get both under one roof — thoughtful plant and soil planning paired with solid civil execution.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-cream border border-gray-200">
                    <b className="text-forest block text-sm mb-1">Our Mission</b>
                    <span className="text-gray-600">
                      Deliver well-planned, clearly priced gardens and outdoor spaces across Bihar.
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-cream border border-gray-200">
                    <b className="text-forest block text-sm mb-1">Our Vision</b>
                    <span className="text-gray-600">
                      Be the go-to landscape studio in Bihar for homes, terraces, farmhouses, and commercial properties.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/images/plantation-canopy.jpg"
                    alt="Lush landscaped residential garden with stone walkway and seasonal plants"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-earth-light text-xs font-bold uppercase tracking-wider mb-1">
                      Design & Execution Philosophy
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Built for Bihar’s Climate
                    </h3>
                    <p className="text-xs text-moss-light">
                      Every layout is planned around local soil conditions, summer heat, and monsoon drainage.
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
                The founders personally visit every site, plan the layout, and supervise execution from soil preparation to handover.
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
                    <span>B.Sc Agriculture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Trained in soil science, plant nutrition, and crop management. Saurabh checks the soil on every site, picks plants suited to Bihar’s heat and monsoon, and sets up the watering and care schedule.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 text-xs font-semibold text-forest">
                  Key Focus: Soil Testing, Plant & Turf Selection, Drip Scheduling, Organic Nutrition
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
                    <span>Civil Engineer (3+ Years Site Experience)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Three years of site execution experience on building and infrastructure projects in Rajasthan. Gaurav handles site grading, drainage slopes, stone sub-bases, and structural work so pathways and lawns stay level over time.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 text-xs font-semibold text-forest">
                  Key Focus: Site Grading, Compacted Sub-bases, Stone Masonry, Drainage Slopes
                </div>
              </div>
            </div>

            {/* Quality Guarantees Grid */}
            <div className="bg-forest-deep text-white rounded-3xl p-8 sm:p-14 mb-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-earth-light text-xs font-bold uppercase tracking-wider block mb-2">
                  How We Work
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  The EXTERRA Four-Pillar Quality Promise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">01. 100% Itemized BOQ</div>
                  <p className="text-moss-light leading-relaxed">
                    Every plant size, grass square footage, plumbing valve, and labor day is documented with clear line-by-line pricing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">02. Quality-Checked Nursery Stock</div>
                  <p className="text-moss-light leading-relaxed">
                    We hand-select healthy, well-rooted plants from trusted nurseries and treat the root zone before planting.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">03. Engineered Sub-bases</div>
                  <p className="text-moss-light leading-relaxed">
                    We never lay walkways directly on loose soil. Compacted aggregate sub-bases prevent sinking and cracking.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-earth-light text-lg font-bold mb-2">04. 90-Day Aftercare</div>
                  <p className="text-moss-light leading-relaxed">
                    During the first 90 days after handover, we check in on root establishment, share a seasonal watering and fertilizing schedule, and replace any plant that fails to establish under normal care.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="bg-cream border border-gray-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-3">
                Want a garden planned this way? Book a site visit.
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Saurabh and Gaurav personally visit your site in Patna or nearby districts to check soil, sunlight, and drainage before sharing an itemized BOQ.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <CalendarCheck className="w-4 h-4 text-earth-light" />
                  <span>Book Site Visit</span>
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1da851] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
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
