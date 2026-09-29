'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Lightbulb, Sun, Moon, 
  ShieldCheck, Zap, Sparkles, MessageSquare, Eye
} from 'lucide-react';

export default function OutdoorLightingPage() {
  const [activeMood, setActiveMood] = useState<'uplight' | 'bollard' | 'stepper' | 'patio'>('uplight');

  const lightingData = {
    uplight: {
      title: 'Architectural Palm & Tree Up-Lighting',
      tag: 'Dramatic Vertical Depth',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      specs: '9W – 15W LED COB • 2700K Warm Gold • 24° Beam Angle',
      bestFor: 'Foxtail Palms, Plumeria Trees, Villa Facades & Textured Boundary Walls',
      desc: 'Ground-recessed or spike-mounted brass brass spotlights angled upwards through the palm canopy, casting dramatic silhouettes and transforming your garden into a private resort at night.',
    },
    bollard: {
      title: 'Concealed Pathway Bollards',
      tag: 'Glared-Free Safety Lighting',
      image: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80',
      specs: '5W – 7W Low Voltage LED • 360° Downward Throw • Anti-Glare Louver',
      bestFor: 'Stone Pathways, Lawn Margins & Driveway Edges',
      desc: 'Architectural slim bollards that project light exclusively downward onto the walking surface. Illuminates steps and stone pavers clearly without any annoying glare in your eyes.',
    },
    stepper: {
      title: 'Recessed Riser & Stepping Lights',
      tag: 'Subtle Floating Stone Effect',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
      specs: '3W Mini Micro-LED • IP67 Waterproof • Stainless Steel Bezel',
      bestFor: 'Outdoor Staircases, Terrace Risers & Retaining Wall Insets',
      desc: 'Flush-mounted into vertical stone steps or retaining curbs. Creates the illusion of floating stone slabs and provides unmistakable nighttime safety for elderly family members and guests.',
    },
    patio: {
      title: 'Pergola & Courtyard Ambient Glow',
      tag: 'Evening Alfresco Hospitality',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80',
      specs: 'Dimmable Warm 2500K – 2700K • Concealed Aluminum Channels',
      bestFor: 'Outdoor Dining Patios, Gazebos & Terrace Seating Nooks',
      desc: 'Soft, indirect golden illumination integrated under wooden pergola beams and seating benches. Replaces harsh floodlights with warm ambient moonlight-level illumination.',
    },
  };

  const current = lightingData[activeMood];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Header */}
        <div className="bg-forest-deep text-sage-light py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
            <Link href="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link href="/services" className="hover:text-gold">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-gold font-semibold">Architectural Night Lighting</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="kicker text-gold">Illumination Design</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Architectural Night Lighting in Patna
                </h1>
                <p className="text-sage-light text-base sm:text-lg leading-relaxed mb-8">
                  Most people enjoy their gardens after sunset. We design subtle, warm 2700K illumination systems that 
                  highlight leaf textures, frame stone pathways, and create a calm evening ambiance without harsh glare.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#lighting-explorer"
                    className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    Explore Night Lighting Moods
                  </a>
                  <a
                    href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20Outdoor%20Night%20Lighting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    WhatsApp Consultation
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Lighting Mood Explorer */}
        <section className="py-20 lg:py-24 bg-cream" id="lighting-explorer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="kicker">Lighting Visualizer</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                Select An Illumination Technique
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Click across the lighting concepts below to inspect how each technique highlights specific outdoor elements.
              </p>
            </div>

            {/* Mood Tabs */}
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              <button
                onClick={() => setActiveMood('uplight')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'uplight'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Tree & Palm Up-Lighting</span>
              </button>
              <button
                onClick={() => setActiveMood('bollard')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'bollard'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>Pathway Bollards</span>
              </button>
              <button
                onClick={() => setActiveMood('stepper')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'stepper'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>Step & Riser Recessed</span>
              </button>
              <button
                onClick={() => setActiveMood('patio')}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeMood === 'patio'
                    ? 'bg-emerald text-white shadow-lg scale-105'
                    : 'bg-white text-forest border border-gray-200 hover:border-emerald'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Pergola & Patio Warm Glow</span>
              </button>
            </div>

            {/* Active Lighting Display Card */}
            <FadeIn key={activeMood}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
                <div className="lg:col-span-5 relative h-72 lg:h-auto">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      Warm 2700K Standard
                    </span>
                    <h3 className="font-serif text-2xl font-bold">{current.title}</h3>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                      {current.tag}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-forest mb-3">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {current.desc}
                    </p>

                    <div className="bg-cream rounded-2xl p-4 border border-gray-200 space-y-2 text-xs mb-6">
                      <div>
                        <span className="text-gray-500 font-bold block mb-0.5">Hardware Specification:</span>
                        <span className="font-semibold text-forest">{current.specs}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-bold block mb-0.5">Ideal Placement:</span>
                        <span className="font-semibold text-dark">{current.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500">
                      12V Low Voltage • Child & Pet Safe
                    </span>
                    <a
                      href={`https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20am%20interested%20in%20${encodeURIComponent(current.title)}%20for%20my%20property.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald hover:bg-forest text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire This Lighting</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why 2700K Warm Gold vs 6500K Blue-White */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="kicker">The Optics of Luxury</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-6">
                  Why We Strictly Use 2700K Warm Light
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Many untrained contractors install harsh 6500K white floodlights in residential lawns. This produces a sterile, hospital-parking-lot feel that washes out foliage and attracts swarms of nocturnal insects.
                </p>
                <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Natural Foliage Depth:</strong> 2700K warm gold accentuates chlorophyll and bark pigmentation, making greenery look rich and vibrant.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>Insect Deterrent:</strong> Warmer color wavelengths attract significantly fewer flying insects compared to high-blue spectrum lights.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span><strong>12V Shock-Proof Safety:</strong> Every outdoor fixture runs on a 12V/24V step-down transformer. 100% safe even if children or pets play near cables.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-forest-deep text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
                  <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                    Electrical Safety Standard
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">IP67 Waterproof Subterranean Cabling</h3>
                  <p className="text-xs text-sage-light leading-relaxed mb-6">
                    Patna faces heavy monsoon rainfall and high groundwater tables. All our electrical circuits are housed inside heavy-gauge PVC armored conduits, sealed with resin waterproof gel-junction boxes.
                  </p>
                  <ul className="space-y-2 text-xs text-white/90 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">✦ Heavy-duty die-cast solid brass fixtures</li>
                    <li className="flex items-center gap-2">✦ Automatic dusk-to-dawn astronomical timer sensors</li>
                    <li className="flex items-center gap-2">✦ Surge-protected outdoor circuit panels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-16 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="kicker text-gold">Illuminate Your Evenings</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Book A Night Lighting Demonstration
            </h2>
            <p className="text-xs sm:text-sm text-sage-light mb-8 leading-relaxed">
              We can perform an on-site evening lighting test on your property with demo fixtures, showing you exactly how your villa and trees will glow.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule Site Lighting Demo
              </Link>
              <a
                href="https://wa.me/919315359040?text=Hello%20RAJBUILD%20INFRA%2C%20I%20would%20like%20to%20discuss%20an%20Outdoor%20Lighting%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                WhatsApp +91 93153 59040
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
