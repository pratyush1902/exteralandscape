import React from 'react';
import { Sprout, HardHat, GraduationCap, Building2 } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Saurabh Raj',
      role: 'Landscape & Horticulture Lead',
      degree: 'B.Sc Agriculture',
      icon: Sprout,
      desc: 'Specialized in soil microbiology, plant taxonomy, organic fertilization, and micro-climate adaptation. Saurabh oversees concept development, plant procurement from certified nurseries, and long-term vitality planning for residential and commercial estates across Bihar.',
    },
    {
      name: 'Gaurav Raj',
      role: 'Civil Engineering & Execution Lead',
      degree: 'Civil Engineer',
      icon: HardHat,
      desc: 'Over 3 years of hands-on civil execution experience in high-rise building projects and government infrastructure in Rajasthan. Gaurav ensures structural stability, precise drainage slopes, masonry durability, and coordinated on-site craftsmanship.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-cream" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="kicker">Founding Expertise</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            Two Complementary Disciplines
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            RAJBUILD INFRA is powered by the rare synergy of agricultural science and civil engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((m) => {
            const IconComp = m.icon;
            return (
              <div
                key={m.name}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Header Banner with Avatar Badge */}
                <div className="h-36 bg-gradient-to-r from-forest to-emerald relative flex items-end p-6">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-gold flex items-center justify-center text-forest shadow-md -mb-8">
                    <IconComp className="w-8 h-8 text-emerald" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="pt-12 p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-forest mb-1">{m.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-hover mb-3">
                    {m.role}
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-[#eef5f0] text-emerald px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{m.degree}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
