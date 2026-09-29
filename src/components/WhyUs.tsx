import React from 'react';

export default function WhyUs() {
  const points = [
    {
      num: '01',
      title: 'Plant & Climate Science',
      desc: 'Every tree and shrub is picked based on soil pH, sun trajectory, root space, and drought resilience in Bihar’s climate.',
    },
    {
      num: '02',
      title: 'Civil Construction Roots',
      desc: 'Retaining walls, pathways, drainage gradients, and foundation protection built to structural engineering standards.',
    },
    {
      num: '03',
      title: 'Transparent Itemized BOQ',
      desc: 'Zero arbitrary quotes. Every plant quantity, cubic foot of organic manure, pipe meter, and labor day is itemized.',
    },
    {
      num: '04',
      title: 'Single Coordinated Team',
      desc: 'No finger-pointing between mason, gardener, and plumber. RAJBUILD INFRA delivers a synchronized, turnkey result.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-forest text-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="kicker text-gold">Our Differentiation</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            More Than Greenery.<br />A Complete Engineered Landscape.
          </h2>
          <p className="text-sage-light text-base sm:text-lg">
            Most local gardeners merely plant without understanding soil microbiology, sun exposure, or drainage. 
            We combine degree-level horticulture science with seasoned civil execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] hover:border-gold/60 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold/80 mb-4">
                {pt.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{pt.title}</h3>
              <p className="text-xs sm:text-sm text-sage-light leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
