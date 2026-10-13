'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Phone,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sprout,
  Trees,
  Footprints,
  Droplet,
  Lightbulb,
  Flower2,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

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

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const serviceItems = [
    {
      title: 'Lawn & Garden Architecture',
      href: '/services/lawn-garden',
      desc: 'A lawn that stays green all year',
      icon: Sprout,
    },
    {
      title: 'Plantation & Canopy Planning',
      href: '/services/plantation',
      desc: 'Trees and plants chosen for Bihar’s climate',
      icon: Trees,
    },
    {
      title: 'Hardscape & Stone Walkways',
      href: '/services/hardscape',
      desc: 'Natural stone pathways that stay level',
      icon: Footprints,
    },
    {
      title: 'Automated Drip & Sprinklers',
      href: '/services/drip-irrigation',
      desc: 'Water your garden without lifting a hose',
      icon: Droplet,
    },
    {
      title: 'Architectural Night Lighting',
      href: '/services/outdoor-lighting',
      desc: 'Warm 2700K light for garden evenings',
      icon: Lightbulb,
    },
    {
      title: 'Vertical Gardens & Bio-Walls',
      href: '/services/vertical-gardens',
      desc: 'Modular green walls for compact spaces',
      icon: Flower2,
    },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest-deep text-sage-light text-[11px] sm:text-xs py-1.5 sm:py-2 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="hidden sm:flex items-center gap-2 text-earth font-medium truncate">
            <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
            <span className="text-white/90 truncate">{SITE_CONFIG.coverageShort}</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 text-xs">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-1.5 hover:text-earth transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-earth transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-forest-deep backdrop-blur-md shadow-2xl py-2 border-b border-white/15'
            : 'bg-forest backdrop-blur-md py-3 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group py-1">
            <div className="relative h-14 sm:h-16 md:h-20 w-32 sm:w-40 md:w-48 transition-transform group-hover:scale-105 duration-300 shrink-0">
              <Image
                src="/logo-white.png"
                alt="EXTERRA Landscape — Shaping Outdoor Living"
                fill
                sizes="(max-width: 768px) 160px, 200px"
                className="object-contain object-left max-h-full max-w-full"
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
                  pathname.startsWith('/services')
                    ? 'text-earth font-extrabold'
                    : 'text-white/85 hover:text-earth'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

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
                    {serviceItems.map((s) => {
                      const IconComp = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="p-2.5 rounded-xl hover:bg-white/10 transition-colors group flex items-start gap-2.5"
                        >
                          <IconComp className="w-4 h-4 text-earth-light shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-earth transition-colors">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-moss-light">{s.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/calculator"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/calculator'
                  ? 'text-earth font-extrabold'
                  : 'text-white/85 hover:text-earth'
              }`}
            >
              Calculator
            </Link>

            <Link
              href="/projects"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/projects'
                  ? 'text-earth font-extrabold'
                  : 'text-white/85 hover:text-earth'
              }`}
            >
              Design Concepts
            </Link>

            <Link
              href="/about"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/about'
                  ? 'text-earth font-extrabold'
                  : 'text-white/85 hover:text-earth'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`text-xs uppercase font-bold tracking-wider transition-colors py-1 ${
                pathname === '/contact'
                  ? 'text-earth font-extrabold'
                  : 'text-white/85 hover:text-earth'
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
              <Calendar className="w-3.5 h-3.5 text-white" />
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
            <div className="relative h-14 w-32 shrink-0">
              <Image
                src="/logo-white.png"
                alt="EXTERRA Landscape"
                fill
                className="object-contain object-left max-h-full max-w-full"
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

            <div className="pl-3 py-1 flex flex-col gap-2 border-l border-white/10 my-1">
              {serviceItems.map((s) => {
                const IconComp = s.icon;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setDrawerOpen(false)}
                    className="text-xs text-moss-light hover:text-earth py-1 flex items-center gap-2"
                  >
                    <IconComp className="w-3.5 h-3.5 text-earth-light shrink-0" />
                    <span>{s.title}</span>
                  </Link>
                );
              })}
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
              Design Concepts
            </Link>

            <Link
              href="/about"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              About Us (Founders Saurabh & Gaurav)
            </Link>

            <Link
              href="/contact"
              onClick={() => setDrawerOpen(false)}
              className="text-white/90 hover:text-earth text-sm font-semibold py-2 border-b border-white/5"
            >
              Book a Site Visit
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="w-full border border-white/20 text-white hover:text-earth hover:border-earth py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
