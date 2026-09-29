'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import CostEstimator from '@/components/CostEstimator';
import { FadeIn } from '@/components/Animations';
import { 
  FileSpreadsheet, ShieldCheck, CheckCircle2, Calculator, 
  HelpCircle, ChevronRight, MessageSquare 
} from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Header */}
        <div className="bg-forest-deep text-sage-light py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold font-semibold">Landscape Cost Calculator</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Budget Planning</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Estimate Your Landscape Investment
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-6">
                  Planning a residential villa lawn, rooftop retreat, or resort grounds in Patna? 
                  Use our interactive calculator below to configure your square footage and desired elements for an instant ballpark range.
                </p>
                <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Itemized BOQ Transparency • Zero Hidden Costs</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The Calculator Component */}
        <CostEstimator />

        {/* What Determines Landscape Cost in Bihar? */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Budget Breakdown</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                What Goes Into A Turnkey Landscape Quote?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Unlike vague contractor bids, our Bill of Quantities (BOQ) itemizes every single component so you know exactly where your money is invested.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-cream border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-forest mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald" />
                  <span>1. Soil Biology & Grading (25-30%)</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Debris removal, laser levelling slopes, imported red loam soil, vermicompost, bone meal, neem cake, and percolation sand drainage base.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase">The Foundation for perennial survival</span>
              </div>

              <div className="p-6 rounded-2xl bg-cream border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-forest mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald" />
                  <span>2. Flora & Turf Selection (30-35%)</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Perennial lawn turf (Korean Carpet or Bermuda sods), architectural specimen palms (Foxtail, Bismarckia), ornamental hedges, and flowering shrubs.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase">Certified pest-free nursery stock</span>
              </div>

              <div className="p-6 rounded-2xl bg-cream border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-forest mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald" />
                  <span>3. Hardscape & Masonry (20-25%)</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Excavation, compacted sub-base, lean concrete bedding, natural stone pavers (Kandla grey, Jodhpur sandstone), and weatherproof grouting.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase">Engineered to prevent settling</span>
              </div>

              <div className="p-6 rounded-2xl bg-cream border border-gray-200">
                <h3 className="font-serif text-xl font-bold text-forest mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald" />
                  <span>4. Drip Automation & Lighting (15-20%)</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Subsurface drip pipelines, popup rotors, digital automatic cycle timers, 12V transformers, low-voltage 2700K brass uplights, and IP67 cabling.
                </p>
                <span className="text-[11px] font-bold text-emerald uppercase">Saves 60% water & eliminates daily manual effort</span>
              </div>
            </div>

            {/* Turnkey Call to Action */}
            <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Want a Guaranteed Turnkey BOQ for Your Site?
              </h3>
              <p className="text-xs sm:text-sm text-sage-light max-w-xl mx-auto mb-8 leading-relaxed">
                Book an on-site visit in Patna, Danapur, or nearby Bihar districts. 
                We take precision laser measurements and deliver a comprehensive itemized estimate within 48 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Book On-Site Survey
                </Link>
                <a
                  href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20used%20your%20landscape%20calculator%20and%20want%20to%20schedule%20a%20site%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                >
                  WhatsApp Quote Now
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
