import React from 'react';
import { Quote, MapPin, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'Saurabh and Gaurav visited our site in Danapur, explained why water was pooling near our boundary wall, and gave a clear itemized BOQ before starting. The Korean Carpet lawn and stepping stones look clean and stay dry even after rain.',
      name: 'Rajeshwar Prasad',
      property: 'Residential Villa Lawn',
      location: 'Danapur, Patna',
    },
    {
      quote:
        'What stood out was having both plant knowledge and civil drainage handled by the same team. They set up separate drip zones on a timer for our terrace pots and lawn, so we no longer spend an hour watering every evening.',
      name: 'Dr. Ananya Sinha',
      property: 'Terrace Garden & Drip Setup',
      location: 'Bailey Road, Patna',
    },
    {
      quote:
        'We wanted a warm outdoor seating corner with low-glare pathway lighting and hardy plants that can handle Patna summers. The founders supervised the stonework personally and shared a 90-day care schedule at handover.',
      name: 'Vikramaditya Singh',
      property: 'Courtyard & Night Lighting',
      location: 'Kankarbagh, Patna',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="kicker">Client Feedback</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
            What Property Owners Value
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Personal site supervision by the founders, clear itemized estimates, and gardens planned for Bihar’s seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-cream rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-forest/10 text-earth flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-dark leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <strong className="block text-sm font-bold text-forest">{item.name}</strong>
                  <span className="text-xs text-earth font-semibold block">{item.property}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                  <MapPin className="w-3 h-3 text-earth" />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
