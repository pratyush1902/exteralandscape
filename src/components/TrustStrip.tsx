import React from 'react';
import { UserCheck, SunMedium, Receipt, HeartHandshake } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Client-Centric Design',
      desc: 'Every tree, stone pathway, and seating nook is planned around your family routine.',
    },
    {
      icon: SunMedium,
      title: 'Soil & Climate Smart',
      desc: 'Plant selections calibrated for Bihar’s summer heat and monsoons for perennial survival.',
    },
    {
      icon: Receipt,
      title: 'Transparent Itemized BOQ',
      desc: 'Complete breakdown of flora, masonry, soil amendments, and labor with zero hidden costs.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Aftercare',
      desc: 'Seasonal pruning, organic fertilization schedules, and drip line maintenance support.',
    },
  ];

  return (
    <div className="bg-forest border-y border-white/10 py-6 sm:py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pillars.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 sm:gap-4 ${
                  index < pillars.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-6' : ''
                }`}
              >
                <div className="w-10 h-10 min-w-10 sm:w-12 sm:h-12 sm:min-w-12 rounded-lg bg-earth/15 border border-earth/40 flex items-center justify-center text-earth-light shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-earth-light mb-1">{item.title}</h4>
                  <p className="text-xs text-moss-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
