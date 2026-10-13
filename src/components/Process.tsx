import React from 'react';
import { MessageSquare, Ruler, PenTool, Hammer, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Initial Discovery',
      desc: 'We discuss your lifestyle, intended garden usage (family evenings, play, aesthetics), and target budget.',
    },
    {
      num: '02',
      icon: Ruler,
      title: 'Site Assessment',
      desc: 'On-site survey evaluating sunlight hours, slope drainage, water pressure, and soil condition in Patna.',
    },
    {
      num: '03',
      icon: PenTool,
      title: 'Concept & BOQ',
      desc: 'We provide a spatial layout with an itemized Bill of Quantities so you know exactly where every rupee goes.',
    },
    {
      num: '04',
      icon: Hammer,
      title: 'Precision Execution',
      desc: 'Civil hardscape, underground drip lines, soil enrichment, and plant installation executed under personal supervision.',
    },
    {
      num: '05',
      icon: CheckCircle,
      title: 'Handover & Care Plan',
      desc: 'System testing, maintenance schedule walkthrough, and continuous aftercare support.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="kicker">How We Deliver</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
            From Consultation to Handover
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            A structured, professional process designed to respect your timeline, budget, and personal aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((st) => {
            const IconComp = st.icon;
            return (
              <div
                key={st.num}
                className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-emerald hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-gold">{st.num}</span>
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-emerald">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-forest mb-2">{st.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
