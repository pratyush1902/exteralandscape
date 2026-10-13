'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Droplet,
  FileText,
  Compass,
  Award,
  ShieldCheck,
  Hammer,
  MessageSquare,
  Sun,
  Moon,
  Building2,
  MapPin,
  Calculator,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

const HERO_SCENES = [
  {
    id: 'villa',
    label: 'Villa Lawn',
    icon: Sun,
    title: 'Emerald Villa Lawn & Steppers',
    location: 'Danapur & Bailey Road, Patna',
    specs: 'Korean Carpet Grass • Kandla Grey Stone • River-Sand Subgrade',
    rate: 'Starting ₹85 / sq. ft.',
    image: '/images/villa-lawn.jpg',
    alt: 'Lush residential villa lawn with natural stone stepping pathway',
    badgeTop: 'Soil pH & Sunlight Checked',
    badgeBottom: '1.5% Monsoon Drainage Slope',
  },
  {
    id: 'terrace',
    label: 'Rooftop Oasis',
    icon: Building2,
    title: 'Weight-Safe Terrace & Pergola Garden',
    location: 'Kankarbagh & Boring Road, Patna',
    specs: 'Drainage Cells • Lightweight Cocopeat Mix • Selection 1 Grass',
    rate: 'Starting ₹140 / sq. ft.',
    image: '/images/rooftop-terrace.jpg',
    alt: 'Modern rooftop terrace garden with wooden pergola and modular planters',
    badgeTop: 'Zero-Leak Root Barrier Layer',
    badgeBottom: 'Slab-Safe Lightweight Media',
  },
  {
    id: 'nightscape',
    label: 'Evening Glow',
    icon: Moon,
    title: '2700K Nightscape & Automated Drip',
    location: 'Bihta & Hajipur Estates',
    specs: 'Warm Brass Uplights • Plumeria (Champa) • Timer Drip Zones',
    rate: 'Custom Lighting & Drip Packages',
    image: '/images/night-lighting.jpg',
    alt: 'Warm 2700K outdoor garden lighting along stone courtyard and trees at dusk',
    badgeTop: '60% Water Saved via Timer Drip',
    badgeBottom: 'IP65 Weatherproof Conduits',
  },
];

const ROTATING_SPACES = [
  'Villa Front Lawns',
  'Rooftop Terraces',
  'Boutique Cafe Courtyards',
  'Farmhouse Grounds',
];

export default function Hero() {
  const [activeScene, setActiveScene] = useState(0);
  const [spaceIdx, setSpaceIdx] = useState(0);

  useEffect(() => {
    const sceneTimer = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % HERO_SCENES.length);
    }, 5000);
    return () => clearInterval(sceneTimer);
  }, []);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setSpaceIdx((prev) => (prev + 1) % ROTATING_SPACES.length);
    }, 2800);
    return () => clearInterval(wordTimer);
  }, []);

  const currentScene = HERO_SCENES[activeScene];

  return (
    <section className="relative min-h-[85vh] flex items-center bg-forest-deep text-white overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Crossfading Ken-Burns Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${currentScene.image}')`,
          }}
        />
      </AnimatePresence>

      {/* Architectural Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 40%, rgba(23, 52, 38, 0.55) 0%, rgba(13, 34, 23, 0.94) 65%, rgba(10, 26, 18, 0.98) 100%)',
        }}
      />

      {/* Animated Ambient Botanical Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald/30 blur-3xl z-0"
      />
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-0 right-10 w-72 sm:w-[28rem] h-72 sm:h-[28rem] rounded-full bg-earth/25 blur-3xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-center">
          {/* Left Column: Animated Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Rotating Live Context Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 border border-white/15 px-3 sm:px-4 py-1.5 rounded-full text-xs mb-5 sm:mb-6 backdrop-blur-md max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse shrink-0" />
              <span className="text-white/80 font-medium text-[11px] sm:text-xs">Designing for Bihar:</span>
              <div className="relative h-4 overflow-hidden flex items-center min-w-[130px] sm:min-w-[165px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_SPACES[spaceIdx]}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="font-bold text-earth-light uppercase tracking-wider text-[10px] sm:text-[11px] whitespace-nowrap"
                  >
                    {ROTATING_SPACES[spaceIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Main Headline with Staggered Reveal & Animated Underline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 tracking-tight"
            >
              Outdoor Spaces,
              <br />
              Designed to{' '}
              <span className="relative inline-block text-earth-light italic font-normal">
                Belong.
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.55, ease: 'easeInOut' }}
                  viewBox="0 0 220 14"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full h-3 text-earth"
                >
                  <motion.path
                    d="M3 10C55 3 155 2 217 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-moss-light leading-relaxed mb-8 max-w-2xl font-normal"
            >
              Villa gardens, terraces and cafe landscapes in Patna, where plant science and civil engineering come from one team. Planned around your family routine and Bihar&apos;s summer heat and monsoon.
            </motion.p>

            {/* Interactive Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 mb-9"
            >
              {[
                { icon: Leaf, text: 'Climate-Smart Flora', color: 'text-moss-light' },
                { icon: Droplet, text: 'Drip Automation', color: 'text-moss-light' },
                { icon: FileText, text: 'Itemized BOQ', color: 'text-earth-light' },
                { icon: Compass, text: 'Spatial Concept Layout', color: 'text-earth-light' },
              ].map((pill) => {
                const IconComp = pill.icon;
                return (
                  <motion.span
                    key={pill.text}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-earth/50 px-3.5 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm transition-colors cursor-default"
                  >
                    <IconComp className={`w-3.5 h-3.5 ${pill.color}`} />
                    <span>{pill.text}</span>
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mb-8 sm:mb-10 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-earth hover:bg-earth-hover text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:-translate-y-0.5 border border-earth-light/30 text-center"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#25d366]" />
                <span>WhatsApp Consultation</span>
              </a>

              <Link
                href="/calculator"
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-earth-light hover:text-white px-3 py-2 transition-colors text-center"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Cost →</span>
              </Link>
            </motion.div>

            {/* Meta Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/15 text-xs text-moss-light"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-earth-light shrink-0" />
                <span>B.Sc Agriculture Science</span>
              </div>
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-earth-light shrink-0" />
                <span>Civil-Grade Drainage &amp; Base</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-moss-light shrink-0" />
                <span>Detailed Itemized BOQ</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Animated Landscape Showcase Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Floating Top-Right Badge (Horticulture) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex items-center gap-2.5 absolute -top-5 -right-3 z-30 bg-forest-deep/90 border border-earth/50 text-white px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-xl bg-earth/20 border border-earth/40 flex items-center justify-center text-earth-light">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-earth-light font-extrabold block">
                  Horticulture Lead
                </span>
                <span className="text-xs font-bold text-white">{currentScene.badgeTop}</span>
              </div>
            </motion.div>

            {/* Floating Bottom-Left Badge (Civil Engineering) */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="hidden md:flex items-center gap-2.5 absolute -bottom-5 -left-4 z-30 bg-forest-deep/90 border border-white/20 text-white px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald/20 border border-emerald/40 flex items-center justify-center text-moss-light">
                <Hammer className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-moss-light font-extrabold block">
                  Civil Execution
                </span>
                <span className="text-xs font-bold text-white">{currentScene.badgeBottom}</span>
              </div>
            </motion.div>

            {/* Main Glassmorphic Interactive Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-forest-deep/60 backdrop-blur-xl shadow-2xl">
              {/* Scene Switcher Pills inside Card Header */}
              <div className="flex items-center justify-between gap-1 sm:gap-1.5 p-2 sm:p-3 bg-forest-deep/80 border-b border-white/10">
                {HERO_SCENES.map((scene, index) => {
                  const TabIcon = scene.icon;
                  const isActive = index === activeScene;
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => setActiveScene(index)}
                      className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1.5 sm:px-2.5 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-earth text-white shadow-md'
                          : 'text-moss-light hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <TabIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{scene.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Animated Scene Image & Details */}
              <div className="relative h-72 sm:h-88 md:h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScene.image}
                    src={currentScene.image}
                    alt={currentScene.alt}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.65, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />

                {/* Scene Info Overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScene.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 inset-x-0 p-4 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-earth-light">
                        <MapPin className="w-3 h-3" />
                        {currentScene.location}
                      </span>
                      <span className="bg-earth/25 border border-earth/50 text-earth-light text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {currentScene.rate}
                      </span>
                    </div>
                    <h2 className="font-serif text-lg sm:text-2xl font-bold text-white mb-1 leading-snug">
                      {currentScene.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-moss-light leading-relaxed">{currentScene.specs}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Animated Auto-Play Progress Bar */}
              <div className="h-1 w-full bg-white/10 overflow-hidden">
                <motion.div
                  key={activeScene}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="h-full bg-earth"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
