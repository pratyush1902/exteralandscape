import React from 'react';
import Link from 'next/link';
import { MapPin, Instagram, ArrowRight, Ruler, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function Portfolio() {
  const projects = [
    {
      title: 'Villa Garden & Stone Steppers (Concept)',
      tag: 'Villa Landscape Concept',
      loc: 'Danapur, Patna',
      size: '2,200 sq ft',
      duration: '3–4 weeks',
      image: '/images/villa-lawn.jpg',
      alt: 'Residential villa front yard concept with Korean carpet grass and sandstone stepping stones',
    },
    {
      title: 'Modern Rooftop Pergola Oasis (Concept)',
      tag: 'Terrace Concept',
      loc: 'Bailey Road, Patna',
      size: '950 sq ft',
      duration: '2–3 weeks',
      image: '/images/rooftop-terrace.jpg',
      alt: 'Rooftop terrace garden concept with timber pergola, modular planters, and Selection 1 natural grass',
    },
    {
      title: 'Boutique Cafe Outdoor Dining (Concept)',
      tag: 'Commercial Concept',
      loc: 'Bihta, Bihar',
      size: '1,800 sq ft',
      duration: '3–4 weeks',
      image: '/images/cafe-courtyard.jpg',
      alt: 'Boutique cafe outdoor courtyard concept with cobblestone flooring, Plumeria trees, and warm evening lighting',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="kicker">Design Concepts</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
            Sample layouts for homes, terraces, and commercial spaces in Bihar
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Here are sample concepts showing how we plan lawns, rooftop gardens, courtyards, and commercial exteriors across Patna and nearby areas.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {projects.map((p) => (
            <Link
              href="/projects"
              key={p.title}
              className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer block"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <span className="text-gold text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                  {p.tag}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold mb-1.5 leading-snug">{p.title}</h3>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-sage-light">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold shrink-0" /> {p.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-gold shrink-0" /> {p.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold shrink-0" /> {p.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mb-10 sm:mb-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-earth transition-colors"
          >
            <span>Explore All 6 Design Concepts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Instagram Box */}
        <div className="bg-cream border-2 border-dashed border-gold/40 rounded-3xl p-5 sm:p-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mb-4 shadow-md">
            <Instagram className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-forest mb-2">
            Follow Our Nursery & Site Updates on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mb-6 leading-relaxed">
            See our nursery plant selections, design concepts, and site work updates across Patna and Bihar on our Instagram handle.
          </p>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald hover:bg-forest text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>Follow {SITE_CONFIG.instagramHandle} on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
