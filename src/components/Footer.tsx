import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, Instagram, MapPin, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-sage-light pt-14 sm:pt-20 pb-28 lg:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-3">
              <div className="relative h-14 sm:h-16 w-36 sm:w-44 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/logo-white.png"
                  alt="EXTERRA Landscape — Shaping Outdoor Living"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-moss-light leading-relaxed max-w-sm mb-3">
              <strong className="text-white text-sm block mb-1">{SITE_CONFIG.tagline}.</strong>
              Villa gardens, terraces and cafe landscapes in Patna, where plant science and civil engineering come from one team.
            </p>
            <p className="text-xs text-earth-light font-medium mb-1">
              Founded by Saurabh Raj (B.Sc Agriculture) &amp; Gaurav Raj (Civil Engineer).
            </p>
            <p className="text-[11px] text-white/60">
              Established {SITE_CONFIG.yearFounded} • Patna, Bihar
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/lawn-garden" className="hover:text-earth transition-colors">
                  Lawn &amp; Garden Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/plantation" className="hover:text-earth transition-colors">
                  Plantation &amp; Canopy Planning
                </Link>
              </li>
              <li>
                <Link href="/services/hardscape" className="hover:text-earth transition-colors">
                  Hardscape &amp; Stone Walkways
                </Link>
              </li>
              <li>
                <Link href="/services/drip-irrigation" className="hover:text-earth transition-colors">
                  Automated Drip &amp; Sprinklers
                </Link>
              </li>
              <li>
                <Link href="/services/outdoor-lighting" className="hover:text-earth transition-colors">
                  Architectural Night Lighting
                </Link>
              </li>
              <li>
                <Link href="/services/vertical-gardens" className="hover:text-earth transition-colors">
                  Vertical Gardens &amp; Bio-Walls
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-earth transition-colors">
                  All Services Directory
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-earth transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-earth transition-colors">
                  Design Concepts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-earth transition-colors">
                  About Us &amp; Founders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-earth transition-colors">
                  Book a Site Visit
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-earth transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Contact &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-earth shrink-0" />
                <a href={SITE_CONFIG.phoneHref} className="hover:text-earth transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-earth transition-colors"
                >
                  WhatsApp: {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-earth shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-earth transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-earth shrink-0" />
                <a
                  href={SITE_CONFIG.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-earth transition-colors underline underline-offset-2"
                >
                  Google Business &amp; Map
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#e1306c] shrink-0" />
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-earth transition-colors"
                >
                  Instagram Updates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-moss-light gap-2">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </div>
          <div className="text-earth-light">
            {SITE_CONFIG.tagline} • {SITE_CONFIG.coverageShort}
          </div>
        </div>
      </div>
    </footer>
  );
}
