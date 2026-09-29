'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, MessageSquare, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { title: '🌱 Lawn & Garden Architecture', href: '/services/lawn-garden', desc: 'Perennial lawns, soil grading & levelling' },
    { title: '🌿 Plantation & Canopy Planning', href: '/services/plantation', desc: 'Exotic palms, trees & climate-smart shrubs' },
    { title: '🪨 Hardscape & Stone Walkways', href: '/services/hardscape', desc: 'Sandstone pavers, stepping stones & cobbles' },
    { title: '💧 Automated Drip & Sprinklers', href: '/services/drip-irrigation', desc: 'Water-saving automated micro-irrigation' },
    { title: '💡 Architectural Night Lighting', href: '/services/outdoor-lighting', desc: 'Warm 2700K accent uplights & bollards' },
    { title: '🪴 Vertical Gardens & Bio-Walls', href: '/services/vertical-gardens', desc: 'Modular green wall bio-facades' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest-deep text-sage-light text-xs py-2 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-earth font-medium">
            <MapPin className="w-3.5 h-3.5 text-earth" />
            <span className="text-white/90">Patna, Danapur, Bihta, Hajipur & Across Bihar</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-moss-light font-semibold tracking-wider text-[11px] uppercase">Shaping Outdoor Living</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+919315359040" className="flex items-center gap-1.5 hover:text-earth transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 93153 59040</span>
            </a>
            <a
              href="https://wa.me/919315359040"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-earth transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25d366]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-forest-deep/98 backdrop-blur-md shadow-2xl py-2 border-b border-white/10'
            : 'bg-forest/95 backdrop-blur-md py-3 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Completely Transparent & Significantly Increased Size */}
          <Link href="/" className="flex items-center group py-1">
            <div className="relative h-14 sm:h-16 md:h-20 w-32 sm:w-40 md:w-48 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/logo-white.png"
                alt="EXTERRA LANDSCAPE — Shaping Outdoor Living"
                fill
                sizes="(max-width: 768px) 160px, 200px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/' ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 flex items-center gap-1 ${
                  pathname.startsWith('/services') ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-forest-deep border border-earth/40 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
                  <div className="p-2 border-b border-white/10 mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-earth uppercase tracking-widest">
                      Specialized Solutions
                    </span>
                    <Link
                      href="/services"
                      className="text-[10px] text-white/70 hover:text-earth font-medium"
                    >
                      View All →
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-earth transition-colors">
                          {s.title}
                        </div>
                        <div className="text-[11px] text-moss-light">
                          {s.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/calculator"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/calculator' ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
              }`}
            >
              Calculator
            </Link>

            <Link
              href="/projects"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/projects' ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/about"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/about' ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/contact' ? 'text-earth font-extrabold' : 'text-white/85 hover:text-earth'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-earth hover:bg-earth-hover text-white px-5 py-2.5 rounded-lg text-xs uppercase font-extrabold tracking-wider transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Book Site Visit</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-[85vw] max-w-[340px] h-full bg-forest-deep z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="relative h-14 w-32">
              <Image
                src="/logo-white.png"
                alt="EXTERRA LANDSCAPE"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-white/70 hover:text-white p-1"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <Link
              href="/"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Services Directory</span>
              <span className="text-[10px] text-earth uppercase font-bold">6 Solutions</span>
            </Link>

            <div className="pl-3 py-1 flex flex-col gap-1.5 border-l border-white/10 my-1">
              {serviceItems.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setDrawerOpen(false)}
                  className="text-xs text-moss-light hover:text-earth py-1"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              href="/calculator"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              Landscape Cost Calculator
            </Link>

            <Link
              href="/projects"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              Projects & Case Studies
            </Link>

            <Link
              href="/about"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              About Us (The Science & Engineering)
            </Link>

            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              Contact & Site Visit
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
          <a
            href="https://wa.me/919315359040"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919315359040"
            className="w-full border border-white/20 text-white hover:text-earth hover:border-earth py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call +91 93153 59040
          </a>
        </div>
      </div>
    </>
  );
}
