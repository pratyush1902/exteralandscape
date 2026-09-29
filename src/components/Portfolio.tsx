import React from 'react';
import { MapPin, Instagram, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Emerald Lawn & Stone Steppers',
      tag: 'Villa Landscape',
      loc: 'Danapur, Patna',
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Modern Rooftop Pergola & Flora',
      tag: 'Terrace Retreat',
      loc: 'Bailey Road, Patna',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Alfresco Dining Landscape & Nightscape',
      tag: 'Commercial / Cafe',
      loc: 'Bihta, Bihar',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="kicker">Our Projects</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            Featured Concepts & Site Work
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Every project begins with a bespoke layout and tailored flora selection for clients across Bihar.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((p) => (
            <div
              key={p.title}
              className="relative h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-gold text-[11px] font-bold uppercase tracking-wider mb-1">
                  {p.tag}
                </span>
                <h3 className="font-serif text-lg font-bold mb-1">{p.title}</h3>
                <span className="text-xs text-sage-light flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold" /> {p.loc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Transformation Box */}
        <div className="bg-cream border-2 border-dashed border-gold/40 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mb-4 shadow-md">
            <Instagram className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-forest mb-2">
            Follow Our Live Site Transformations
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mb-6 leading-relaxed">
            Watch real-time garden progress, nursery plant selections, and before-and-after stories directly on our Instagram handle.
          </p>
          <a
            href="https://instagram.com/rajbuildinfra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald hover:bg-forest text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>Follow @rajbuildinfra on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
