'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does garden landscaping cost in Patna?',
      a: 'Turnkey work generally costs ₹80 to ₹180 per sq. ft. The final rate depends on grass type (Korean Carpet or Bermuda), drip irrigation, stone pathways and plant density. Use the calculator for a quick estimate; after a site visit you receive an itemized BOQ.',
    },
    {
      q: 'How do you choose plants that survive Patna’s summer heat?',
      a: 'Led by Saurabh Raj (B.Sc Agriculture), we select climate-adapted species suited to Bihar’s alluvial soil and high summer temperatures. We prepare the soil with organic compost, apply mulch to retain moisture, and recommend automatic drip lines so roots receive steady hydration.',
    },
    {
      q: 'Can you install an automatic drip irrigation system on an existing lawn?',
      a: 'Yes. We can install automated drip lines and popup sprinklers into existing gardens with minimal disturbance. Separate zones for lawn and shrubs run on an automatic timer, designed to cut water use significantly even when you are away.',
    },
    {
      q: 'What is included in the itemized BOQ?',
      a: 'After a site visit, our Bill of Quantities (BOQ) lists plant varieties and heights, grass square footage, soil preparation materials, piping, stone pavers and labour scope clearly so you can review every part of the estimate.',
    },
    {
      q: 'How do I book a site visit?',
      a: `Fill out the contact form below or message us on WhatsApp at ${SITE_CONFIG.phoneDisplay}. Saurabh or Gaurav personally visit your site in Patna or nearby areas, check sunlight and drainage, and prepare your concept and BOQ.`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="kicker">Got Questions?</span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-xs sm:text-base">
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
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-forest hover:text-earth transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-forest shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
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
