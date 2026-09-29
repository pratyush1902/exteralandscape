import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-sage-light pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col (2 cols) - Seamless Transparent Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-3">
              <div className="relative h-14 sm:h-16 w-36 sm:w-44 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/logo-white.png"
                  alt="EXTERRA LANDSCAPE — Shaping Outdoor Living"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-moss-light leading-relaxed max-w-sm mb-4">
              <strong className="text-white text-sm block mb-1">Shaping Outdoor Living.</strong>
              A holistic landscape architecture and outdoor civil execution firm dedicated to creating perennial, living spaces across Bihar.
            </p>
            <p className="text-xs text-earth-light font-medium">
              Co-founded by Saurabh Raj (B.Sc Agriculture) & Gaurav Raj (Civil Engineer).
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/lawn-garden" className="hover:text-earth transition-colors">Lawn & Softscaping</Link></li>
              <li><Link href="/services/plantation" className="hover:text-earth transition-colors">Plantation & Trees</Link></li>
              <li><Link href="/services/hardscape" className="hover:text-earth transition-colors">Stone Pathways & Pavers</Link></li>
              <li><Link href="/services/drip-irrigation" className="hover:text-earth transition-colors">Smart Drip Irrigation</Link></li>
              <li><Link href="/services/outdoor-lighting" className="hover:text-earth transition-colors">Architectural Lighting</Link></li>
              <li><Link href="/services/vertical-gardens" className="hover:text-earth transition-colors">Vertical Bio-Walls</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-earth transition-colors">All Services Directory</Link></li>
              <li><Link href="/calculator" className="hover:text-earth transition-colors">Cost Estimator</Link></li>
              <li><Link href="/projects" className="hover:text-earth transition-colors">Projects & Case Studies</Link></li>
              <li><Link href="/about" className="hover:text-earth transition-colors">About Us & Founders</Link></li>
              <li><Link href="/contact" className="hover:text-earth transition-colors">Book Site Visit</Link></li>
              <li><Link href="/#faq" className="hover:text-earth transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-earth shrink-0" />
                <a href="tel:+919315359040" className="hover:text-earth transition-colors">+91 93153 59040</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                <a href="https://wa.me/919315359040" target="_blank" rel="noopener noreferrer" className="hover:text-earth transition-colors">+91 93153 59040</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#e1306c] shrink-0" />
                <a href="https://instagram.com/rajbuildinfra" target="_blank" rel="noopener noreferrer" className="hover:text-earth transition-colors">@rajbuildinfra</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                <span>Patna, Bihar, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-moss-light gap-2">
          <div>
            © {new Date().getFullYear()} EXTERRA LANDSCAPE. All rights reserved.
          </div>
          <div className="text-earth-light">
            Shaping Outdoor Living • Patna • Bihar • Nearby Regions
          </div>
        </div>
      </div>
    </footer>
  );
}
