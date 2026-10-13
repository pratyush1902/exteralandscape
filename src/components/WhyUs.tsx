import React from 'react';

export default function WhyUs() {
  const points = [
    {
      num: '01',
      title: 'Plant & Climate Thinking',
      desc: 'Every tree and shrub is chosen by soil, sunlight hours, water need and maintenance in Bihar’s climate.',
    },
    {
      num: '02',
      title: 'Civil-Grade Drainage & Base',
      desc: 'Walkways, retaining borders and slopes are built to civil standards so water drains cleanly and paths stay level.',
    },
    {
      num: '03',
      title: 'Clear Itemized BOQ',
      desc: 'Plants, soil preparation, piping, stone and labour are broken down clearly so you can make informed decisions.',
    },
    {
      num: '04',
      title: 'One Coordinated Team',
      desc: 'Plant science and civil execution come from one team, from initial site visit to final handover.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-forest text-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="kicker text-gold">Our Differentiation</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            More than greenery.
            <br />A complete engineered landscape.
          </h2>
          <p className="text-sage-light text-sm sm:text-base lg:text-lg">
            We choose plants by soil, sunlight and drainage, and build hardscape and irrigation to civil standards. The result is a garden that lasts through every season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-8 hover:bg-white/[0.08] hover:border-gold/60 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="font-serif text-2xl sm:text-4xl font-bold text-gold/80 mb-3 sm:mb-4">
                {pt.num}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{pt.title}</h3>
              <p className="text-xs sm:text-sm text-sage-light leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
