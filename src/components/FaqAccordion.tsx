'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the approximate cost of landscaping a garden in Patna?',
      a: 'Turnkey landscape development generally ranges from ₹80 to ₹180 per sq. ft. depending on features: grass selection (Korean carpet vs. Bermuda), automatic drip irrigation, stone pathways, and plant density. You can use our cost calculator above for a quick ballpark estimate.',
    },
    {
      q: 'How do you ensure plants survive Patna’s extreme summer temperatures?',
      a: 'Led by Saurabh Raj (B.Sc Agriculture), we only specify climate-adapted varieties that thrive in Bihar’s alluvial soil and high summer heat. We enrich the soil with organic compost, apply root mulch to conserve moisture, and set up automated drip lines so plants never suffer dehydration shock.',
    },
    {
      q: 'Can you install an automatic drip irrigation system on an existing lawn?',
      a: 'Yes! We can retrofit automated drip lines and popup micro-sprinklers into existing gardens with minimal surface disruption. This saves up to 60% water, keeps foliage healthy, and runs on an automated timer even when you are traveling.',
    },
    {
      q: 'What is included in the transparent itemized BOQ?',
      a: 'Our Bill of Quantities (BOQ) specifies exact botanical names, plant heights, grass square footage, plumbing pipes, soil truckloads, fertilizer quantity, and labor days. You know exactly what is going into your ground with zero hidden costs.',
    },
    {
      q: 'How do I schedule an on-site consultation?',
      a: 'Simply fill out the form below or message us directly on WhatsApp at +91 93153 59040. We will schedule a site visit in Patna or nearby districts, inspect the soil and sun exposure, and discuss your design aspirations.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="kicker">Got Questions?</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Clear answers regarding budgets, plant choices, timelines, and maintenance.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-forest hover:text-emerald transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
