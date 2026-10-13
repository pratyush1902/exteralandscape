'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Sprout,
  Trees,
  Footprints,
  Droplet,
  Lightbulb,
  Flower2,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './Animations';
import { getWhatsAppUrl } from '@/config/site';

export default function Services() {
  const services = [
    {
      title: 'Lawn & Garden Architecture',
      subtitle: 'A lawn that stays green all year.',
      slug: '/services/lawn-garden',
      badge: 'Softscaping',
      icon: Sprout,
      image: '/images/villa-lawn.jpg',
      alt: 'Levelled green villa lawn with Korean Carpet grass in Patna',
      desc: "We prepare the soil, level the ground so water never pools, and lay Korean Carpet, Bermuda or Selection 1 grass suited to Patna's sun. Low water, low maintenance.",
      features: [
        'Healthy soil base for deep roots',
        'Levelled so water does not pool',
        'Hardy, low-water grass varieties',
      ],
      startingRate: 'From ₹75/sq ft',
      duration: '5–10 days',
      aftercare: '90-day care guidance included',
    },
    {
      title: 'Plantation & Canopy Planning',
      subtitle: "Trees and plants chosen for Bihar's soil and climate.",
      slug: '/services/plantation',
      badge: 'Flora Design',
      icon: Trees,
      image: '/images/plantation-canopy.jpg',
      alt: 'Layered garden plantation with palms, shrubs and seasonal flowers',
      desc: 'We plan palms, shrubs, hedges and shade trees so your garden has colour and shade across the seasons.',
      features: [
        'Healthy, nursery-checked plants',
        'Layered planting from groundcover to trees',
        'Flowers planned across the seasons',
      ],
      startingRate: 'Custom per plant layout',
      duration: '3–7 days',
      aftercare: '90-day care guidance included',
    },
    {
      title: 'Hardscape & Stone Walkways',
      subtitle: 'Pathways that stay level.',
      slug: '/services/hardscape',
      badge: 'Civil Craft',
      icon: Footprints,
      image: '/images/stone-walkway.jpg',
      alt: 'Natural sandstone garden walkway laid on a compacted base',
      desc: 'Natural stone walkways and patios laid on a compacted base so they do not sink or crack.',
      features: [
        'Compacted stone-dust and lean-concrete base',
        'Joints that let water drain',
        'Slip-resistant natural stone',
      ],
      startingRate: 'From ₹120/sq ft',
      duration: '7–14 days',
      aftercare: 'Sub-base slope & drainage check',
    },
    {
      title: 'Automated Drip & Sprinklers',
      subtitle: 'Water your garden without lifting a hose.',
      slug: '/services/drip-irrigation',
      badge: 'Irrigation',
      icon: Droplet,
      image: '/images/drip-irrigation.jpg',
      alt: 'Automatic garden drip irrigation and sprinkler system',
      desc: 'Separate zones for lawn and delicate plants, run by an automatic timer, so every plant gets just the water it needs. Designed to cut water use significantly.',
      features: [
        'Pressure-compensating drippers',
        'Lawn and shrubs on separate zones',
        'Battery or mains timer',
      ],
      startingRate: 'From ₹25/sq ft',
      duration: '2–5 days',
      aftercare: 'Timer setup & seasonal tuning',
    },
    {
      title: 'Architectural Night Lighting',
      subtitle: 'Warm light for your garden evenings.',
      slug: '/services/outdoor-lighting',
      badge: 'Illumination',
      icon: Lightbulb,
      image: '/images/night-lighting.jpg',
      alt: 'Warm 2700K low-voltage LED garden pathway and tree lighting',
      desc: 'Low-voltage LED lighting that highlights trees and paths and makes steps safer after dark.',
      features: [
        'Warm 2700K colour',
        'Waterproof (IP67) fittings',
        'Cables protected underground',
      ],
      startingRate: 'From ₹25,000 per zone',
      duration: '2–4 days',
      aftercare: 'Fixture & transformer check',
    },
    {
      title: 'Vertical Gardens & Bio-Walls',
      subtitle: 'A green wall for small spaces.',
      slug: '/services/vertical-gardens',
      badge: 'Urban Green',
      icon: Flower2,
      image: '/images/vertical-garden.jpg',
      alt: 'Modular vertical garden bio-wall on a courtyard boundary wall',
      desc: 'Modular planter frames for courtyards, balconies and shop fronts, with built-in drip watering.',
      features: [
        'UV-stabilised modular frames',
        'Dense foliage plant mix',
        'Tray to collect waste water',
      ],
      startingRate: 'From ₹550/sq ft',
      duration: '3–6 days',
      aftercare: '90-day foliage & drip check',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="kicker">Our Services</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
              Complete Outdoor Landscaping
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
              From soil preparation and climate-matched plants to stone walkways, drip irrigation and warm evening lighting — planned and built by one team.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <StaggerItem key={svc.title}>
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                  {/* Image & Badge */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-forest/90 text-earth-light border border-earth/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-3.5 py-1 rounded-full backdrop-blur-md">
                      {svc.badge}
                    </span>
                    <span className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 bg-black/75 text-white text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 rounded-md backdrop-blur-md">
                      {svc.startingRate}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-earth text-xs font-bold mb-1">
                        <IconComp className="w-4 h-4 shrink-0" />
                        <span>{svc.subtitle}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-forest mb-2.5">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {svc.desc}
                      </p>

                      <ul className="space-y-2 mb-5 border-t border-gray-100 pt-4">
                        {svc.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs text-dark">
                            <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-cream rounded-xl p-3 border border-gray-200 flex items-center justify-between text-[11px] text-gray-600 mb-5">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-earth" />
                          {svc.duration}
                        </span>
                        <span className="font-semibold text-forest">{svc.aftercare}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <Link
                          href={svc.slug}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-earth uppercase tracking-wider transition-colors"
                        >
                          <span>Service Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/calculator"
                          className="text-xs font-bold text-earth hover:underline"
                        >
                          Calculate Cost →
                        </Link>
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `Hello EXTERRA Landscape, I would like a quote for ${svc.title} in Patna.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25d366]/10 hover:bg-[#25d366] text-forest hover:text-white border border-[#25d366]/30 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Get a Quote on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
