'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import CostEstimator from '@/components/CostEstimator';
import { FadeIn } from '@/components/Animations';
import { ShieldCheck, ChevronRight } from 'lucide-react';

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
        <section className="bg-forest text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('/images/villa-lawn.jpg')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Landscape Cost Calculator</span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                  Estimate your landscape budget
                </h1>
                <p className="text-sage-light text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  Pick your property type, drag the area slider, and select the extras you want. You’ll get an indicative range for Patna and nearby areas.
                </p>
                <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Detailed itemized BOQ • Line-by-line cost breakdown</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* The Calculator Component & Dynamic Breakdown */}
        <CostEstimator isStandalonePage />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
