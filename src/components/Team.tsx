import React from 'react';
import { Sprout, HardHat, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Saurabh Raj',
      initials: 'SR',
      role: 'Landscape & Horticulture Lead',
      degree: 'B.Sc Agriculture',
      icon: Sprout,
      desc: 'Specialises in soil, plant selection and organic care. From concept to sourcing plants from nurseries, Saurabh looks after the long-term health of your garden.',
      responsibilities: ['Soil assessment & organic dressing', 'Climate-matched plant selection', 'Nursery sourcing & aftercare schedule'],
    },
    {
      name: 'Gaurav Raj',
      initials: 'GR',
      role: 'Civil Engineering & Execution Lead',
      degree: 'Civil Engineer',
      icon: HardHat,
      desc: 'Civil Engineer with 3+ years of site experience on high-rise and government infrastructure projects. Drainage slopes, pathways and masonry quality are Gaurav’s responsibility.',
      responsibilities: ['Site grading & drainage slopes', 'Compacted walkway sub-bases', 'Masonry & on-site supervision'],
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="kicker">Founding Team</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
            Two Brothers. One Coordinated Team.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Founded in Patna by two brothers combining agricultural plant science and civil site engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {members.map((m) => {
            const IconComp = m.icon;
            return (
              <div
                key={m.name}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Header Banner with Founder Monogram & Icon */}
                <div className="h-32 sm:h-36 bg-gradient-to-r from-forest to-forest-light relative flex items-end justify-between p-4 sm:p-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-4 border-earth flex flex-col items-center justify-center text-forest shadow-md -mb-8 sm:-mb-10">
                    <span className="font-serif font-extrabold text-lg sm:text-xl leading-none text-forest">
                      {m.initials}
                    </span>
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-earth mt-1" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-earth-light bg-white/10 px-2.5 sm:px-3 py-1 rounded-full border border-white/15 text-right">
                    Co-Founder • On-Site Lead
                  </span>
                </div>

                {/* Body Content */}
                <div className="pt-12 sm:pt-14 p-5 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest mb-1">{m.name}</h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-gold-hover mb-3">
                      {m.role}
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-[#eef5f0] text-forest px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                      <GraduationCap className="w-3.5 h-3.5 text-earth" />
                      <span>{m.degree}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {m.desc}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-1.5">
                    {m.responsibilities.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-xs text-dark font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
