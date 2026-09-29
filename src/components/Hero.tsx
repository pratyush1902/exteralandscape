import React from 'react';
import { ArrowRight, Leaf, Droplet, FileText, Compass, Award, ShieldCheck, HardHat, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-forest-deep text-white overflow-hidden py-20 lg:py-28">
      {/* Background with Dark Architectural Gradient & Landscape Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter saturate-110"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(13, 34, 23, 0.97) 0%, rgba(23, 52, 38, 0.88) 50%, rgba(23, 52, 38, 0.5) 100%), url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Slogan Pill from Logo */}
          <div className="inline-flex items-center gap-2.5 bg-earth/20 border border-earth/50 text-earth-light px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-earth-light" />
            <span>SHAPING OUTDOOR LIVING</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            Outdoor Spaces,<br />
            Designed to <span className="text-earth-light italic font-normal">Belong.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-moss-light leading-relaxed mb-8 max-w-2xl font-normal">
            <strong>EXTERRA LANDSCAPE</strong> designs and develops living outdoor architecture — bespoke villa gardens, 
            terrace retreats, water-smart drip irrigation, ambient nightscapes, and durable stone hardscape. 
            Rooted in Bihar’s local soil and climate science.
          </p>

          {/* Feature Pills with Logo Color Palette */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm">
              <Leaf className="w-3.5 h-3.5 text-moss-light" /> Climate-Smart Flora
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm">
              <Droplet className="w-3.5 h-3.5 text-moss-light" /> Drip Automation
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5 text-earth-light" /> 100% Itemized BOQ
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-earth-light" /> 3D Spatial Layout
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-earth hover:bg-earth-hover text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:-translate-y-0.5 border border-earth-light/30"
            >
              <span>Book An On-Site Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919315359040?text=Hello%20EXTERRA%20LANDSCAPE%2C%20I%20am%20interested%20in%20discussing%20a%20landscape%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#25d366]" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Meta Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-moss-light">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-earth-light" />
              <span>B.Sc Agriculture Science-Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-4 h-4 text-earth-light" />
              <span>High-Rise Civil Engineering Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-moss-light" />
              <span>Transparent Itemized BOQ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
