'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  MapPin, CheckCircle2, Instagram, ArrowRight, Sparkles, Filter 
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'villa' | 'terrace' | 'commercial'>('all');

  const portfolio = [
    {
      id: 'villa-patna',
      title: 'Danapur Luxury Villa Garden & Steppers',
      category: 'villa',
      location: 'Danapur, Patna',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
      scope: ['Korean Carpet Grass (2,200 sq ft)', 'Kandla Grey Stone Steppers', 'Automated Hunter Drip Zone', 'Warm 2700K Frond Uplighting'],
      desc: 'Transformed an uneven, debris-strewn front yard into an emerald velvet sanctuary with hand-cut sandstone steppers and subtle evening frond lighting.',
      highlight: 'Turnkey Villa Estate',
    },
    {
      id: 'rooftop-patna',
      title: 'Bailey Road Modern Rooftop Pergola Oasis',
      category: 'terrace',
      location: 'Bailey Road, Patna',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80',
      scope: ['Selection 1 Synthetic-Hybrid Turf', 'Lightweight Modular Planters', 'Micro-Drip Recirculation', 'Teakwood Gazebo Integration'],
      desc: 'Engineered a weight-optimized rooftop retreat featuring zero-waterlogging drainage cells, lush boundary bio-screens, and indirect pergola lighting.',
      highlight: 'Terrace Garden',
    },
    {
      id: 'cafe-bihta',
      title: 'Bihta Highway Boutique Cafe Alfresco Dining',
      category: 'commercial',
      location: 'Bihta, Bihar',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      scope: ['Granite Cobblestone Courtyard', 'Architectural Plumeria Trees', 'Low-Glare Bollard Safety Lights', 'Hedge Privacy Wall'],
      desc: 'Created an evocative outdoor dining experience with tumbled stone pavers, fragrant Champa trees, and warm ambient illumination that boosts evening guest retention.',
      highlight: 'Commercial Hospitality',
    },
    {
      id: 'farmhouse-patna',
      title: 'Hajipur Riverbank Farmhouse Grounds',
      category: 'villa',
      location: 'Hajipur / Patna Outer',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=1200&q=80',
      scope: ['Bermuda Heavy-Wear Lawn (5,500 sq ft)', 'Deep-Root Drip Irrigation', 'Shade Tree Perimeter', 'Natural Stone Firepit Patio'],
      desc: 'A multi-acre weekend estate lawn designed for large family gatherings, high foot traffic, and low maintenance during summer dry spells.',
      highlight: 'Farmhouse Estate',
    },
    {
      id: 'vertical-corporate',
      title: 'Saguna More Corporate Entrance Bio-Wall',
      category: 'commercial',
      location: 'Saguna More, Patna',
      image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?auto=format&fit=crop&w=1200&q=80',
      scope: ['250 sq ft Vertical Bio-Wall', 'Automated Timer Drip', 'Philodendron & Fern Canopy', 'Galvanized Air-Gap Subframe'],
      desc: 'A prominent multi-story commercial building entrance revitalized with an air-purifying, lush green wall that leaves a lasting impression on visitors.',
      highlight: 'Bio-Wall Facade',
    },
    {
      id: 'patio-patna',
      title: 'Kankarbagh Residential Courtyard Makeover',
      category: 'terrace',
      location: 'Kankarbagh, Patna',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      scope: ['Jodhpur Sandstone Paving', 'Tropical Foliage Borders', 'Dimmable Accent Lighting', 'Concealed Drainage Channel'],
      desc: 'Converted a tight concrete courtyard into a peaceful outdoor coffee nook flanked by ornamental palms and soft evening illumination.',
      highlight: 'Courtyard Renewal',
    },
  ];

  const filtered = activeFilter === 'all'
    ? portfolio
    : portfolio.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-forest-deep text-white py-20 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Project Portfolio</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Featured Concepts & Site Deliveries
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  From sprawling farmhouse lawns and boutique restaurant courtyards to intimate villa gardens across Patna, 
                  Danapur, and Bihta. Explore our featured landscape transformations.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeFilter === 'all'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    All Projects ({portfolio.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter('villa')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeFilter === 'villa'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    🏡 Villa & Farmhouse
                  </button>
                  <button
                    onClick={() => setActiveFilter('terrace')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeFilter === 'terrace'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    🏢 Rooftop & Courtyard
                  </button>
                  <button
                    onClick={() => setActiveFilter('commercial')}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      activeFilter === 'commercial'
                        ? 'bg-gold text-forest-deep shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                    }`}
                  >
                    ☕ Commercial & Cafe
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-20 lg:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-4 left-4 bg-forest/85 text-gold border border-gold/40 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full backdrop-blur-md">
                        {item.highlight}
                      </span>
                    </div>

                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-gold" />
                          <span>{item.location}</span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-forest mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed mb-6">
                          {item.desc}
                        </p>

                        <div className="border-t border-gray-100 pt-4 mb-6">
                          <span className="text-[10px] font-bold text-forest uppercase tracking-wider block mb-2">
                            Delivered Scope:
                          </span>
                          <ul className="space-y-1.5 text-xs text-dark">
                            {item.scope.map((s) => (
                              <li key={s} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald hover:text-gold uppercase tracking-wider transition-colors"
                        >
                          <span>Inquire Similar Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20saw%20your%20project%20'${encodeURIComponent(item.title)}'%20and%20want%20to%20discuss%20something%20similar.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-gold-hover hover:underline"
                        >
                          WhatsApp Quote →
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Live Instagram Feed Callout */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mx-auto mb-6 shadow-xl">
              <Instagram className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
              Watch Daily Transformation Stories on Instagram
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We document our real-world site work, nursery plant selections, and unedited before-and-after reels daily. Follow our journey across Bihar!
            </p>
            <a
              href="https://instagram.com/rajbuildinfra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald hover:bg-forest text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5"
            >
              <span>Follow @rajbuildinfra</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
