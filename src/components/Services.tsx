'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';

export default function Services() {
  const services = [
    {
      title: '🌱 Lawn & Garden Architecture',
      slug: '/services/lawn-garden',
      badge: 'Softscaping',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80',
      desc: 'Selection of high-grade perennial grass varieties (Korean Carpet, Bermuda, Selection 1) with complete soil profiling, grading, and subterranean weed prevention.',
      features: [
        'Layered soil nutrition & drainage base',
        'Uniform levelling & rolling',
        'Low-maintenance perennial varieties',
      ],
    },
    {
      title: '🌿 Plantation & Canopy Planning',
      slug: '/services/plantation',
      badge: 'Flora Design',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      desc: 'Curated trees, shrubs, and perennial flower beds planned with precise canopy spacing, sunlight orientation, and seasonal bloom sequences.',
      features: [
        'Exotic palms & indigenous shade trees',
        'Ornamental hedge borders & topiaries',
        'Pest-resistant rootstock selection',
      ],
    },
    {
      title: '🪨 Hardscape & Stone Walkways',
      slug: '/services/hardscape',
      badge: 'Civil Craft',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
      desc: 'Architectural stone pathways, stepping stones, polished river cobbles, boundary curbs, and outdoor patio paving that create structured geometry.',
      features: [
        'Sandstone, slate & textured pavers',
        'Water-permeable geometric walkways',
        'Weather-sealed retaining borders',
      ],
    },
    {
      title: '💧 Automated Drip & Sprinklers',
      slug: '/services/drip-irrigation',
      badge: 'Conservation',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
      desc: 'Precision micro-irrigation networks engineered to save up to 60% water while delivering targeted root nourishment automatically without daily manual effort.',
      features: [
        'Subsurface drip lines & popup rotors',
        'Battery/WiFi automated timers',
        'Zero water pooling or soil erosion',
      ],
    },
    {
      title: '💡 Architectural Night Lighting',
      slug: '/services/outdoor-lighting',
      badge: 'Illumination',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      desc: 'Subtle low-voltage warm illumination that elevates foliage textures, highlights pathways, and turns your garden into a serene evening retreat.',
      features: [
        'Up-lighting on focal trees & palms',
        'Concealed pathway bollards',
        'IP67 waterproof concealed cabling',
      ],
    },
    {
      title: '🪴 Vertical Gardens & Bio-Walls',
      slug: '/services/vertical-gardens',
      badge: 'Urban Green',
      image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=800&q=80',
      desc: 'Modular green wall installations for boundary walls, balconies, courtyards, and restaurant facades with integrated internal drip recirculation.',
      features: [
        'UV-stabilized modular planter frames',
        'Air-purifying tropical foliage mix',
        'Clean drainage collection trays',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="kicker">Comprehensive Solutions</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
              End-to-End Outdoor Services
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              From biological soil revitalization and rare horticultural specimens to heavy civil hardscape, 
              we manage the entire transformation under one coordinated team.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <StaggerItem key={svc.title}>
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                {/* Image & Badge */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-forest/85 text-gold border border-gold/30 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                    {svc.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-forest mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>

                    <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                      {svc.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-dark">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <Link
                      href={svc.slug}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald hover:text-gold uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Detail Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-gray-500 hover:text-forest"
                    >
                      Book Visit →
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
