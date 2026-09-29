'use client';

import React, { useState, useMemo } from 'react';
import { Home, Building2, Hotel, MessageSquare } from 'lucide-react';

type PropertyType = 'villa' | 'rooftop' | 'commercial';

interface PropertyConfig {
  name: string;
  rate: number;
}

const propertyTypes: Record<PropertyType, PropertyConfig> = {
  villa: { name: 'Villa / Bungalow Lawn', rate: 95 },
  rooftop: { name: 'Rooftop / Terrace Garden', rate: 140 },
  commercial: { name: 'Cafe / Resort / Farmhouse', rate: 85 },
};

export default function CostEstimator() {
  const [property, setProperty] = useState<PropertyType>('villa');
  const [area, setArea] = useState<number>(1200);
  const [dripChecked, setDripChecked] = useState<boolean>(true);
  const [hardscapeChecked, setHardscapeChecked] = useState<boolean>(true);
  const [lightingChecked, setLightingChecked] = useState<boolean>(false);
  const [greenwallChecked, setGreenwallChecked] = useState<boolean>(false);

  const calculation = useMemo(() => {
    const baseRate = propertyTypes[property].rate;
    let total = area * baseRate;
    const selectedFeatures: string[] = [];

    if (dripChecked) {
      total += area * 25;
      selectedFeatures.push('Smart Drip Irrigation');
    }
    if (hardscapeChecked) {
      total += area * 35;
      selectedFeatures.push('Stone Walkway & Pavers');
    }
    if (lightingChecked) {
      total += 25000;
      selectedFeatures.push('Architectural Night Lighting');
    }
    if (greenwallChecked) {
      total += 45000;
      selectedFeatures.push('Vertical Bio-Wall');
    }

    const lower = Math.round(total * 0.92);
    const upper = Math.round(total * 1.08);

    const waMsg =
      `Hello EXTERRA LANDSCAPE, I checked the estimate calculator on your website:%0A` +
      `• Property: ${encodeURIComponent(propertyTypes[property].name)}%0A` +
      `• Area: ${encodeURIComponent(area.toLocaleString('en-IN'))} sq. ft.%0A` +
      `• Features: ${encodeURIComponent(selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Base Flora & Soil')}%0A` +
      `• Estimated Range: ₹${lower.toLocaleString('en-IN')} – ₹${upper.toLocaleString('en-IN')}%0A%0A` +
      `I would like to discuss and book an on-site visit in Patna/nearby.`;

    return {
      lower,
      upper,
      featuresList: selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Base Greenery Only',
      waUrl: `https://wa.me/919315359040?text=${waMsg}`,
    };
  }, [property, area, dripChecked, hardscapeChecked, lightingChecked, greenwallChecked]);

  return (
    <section className="py-20 lg:py-24 bg-cream" id="estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="kicker text-forest">Estimate Your Investment</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            Landscape Cost Calculator
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Get an instant ballpark estimate tailored to your space in Patna and nearby areas. 
            Adjust your square footage and toggle custom elements.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          {/* Left: Input Controls (7 cols) */}
          <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* 1. Property Type */}
              <div className="mb-7">
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-3">
                  1. Choose Property Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setProperty('villa')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      property === 'villa'
                        ? 'border-forest bg-[#eef3f0] shadow-sm'
                        : 'border-gray-200 bg-cream hover:border-forest/40'
                    }`}
                  >
                    <Home className="w-6 h-6 text-forest" />
                    <span className="text-xs font-bold text-dark">Villa Lawn</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProperty('rooftop')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      property === 'rooftop'
                        ? 'border-forest bg-[#eef3f0] shadow-sm'
                        : 'border-gray-200 bg-cream hover:border-forest/40'
                    }`}
                  >
                    <Building2 className="w-6 h-6 text-forest" />
                    <span className="text-xs font-bold text-dark">Terrace / Rooftop</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProperty('commercial')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      property === 'commercial'
                        ? 'border-forest bg-[#eef3f0] shadow-sm'
                        : 'border-gray-200 bg-cream hover:border-forest/40'
                    }`}
                  >
                    <Hotel className="w-6 h-6 text-forest" />
                    <span className="text-xs font-bold text-dark">Resort / Estate</span>
                  </button>
                </div>
              </div>

              {/* 2. Range Slider */}
              <div className="mb-7">
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest">
                    2. Approximate Area
                  </label>
                  <span className="text-xl font-extrabold text-forest">
                    {area.toLocaleString('en-IN')} sq. ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="6000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>200 sq. ft. (Patio)</span>
                  <span>6,000+ sq. ft. (Estate)</span>
                </div>
              </div>

              {/* 3. Features Checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-3">
                  3. Desired Architectural Enhancements
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={dripChecked}
                      onChange={(e) => setDripChecked(e.target.checked)}
                      className="w-4 h-4 accent-forest rounded"
                    />
                    <span className="text-xs font-semibold text-dark">💧 Smart Drip Irrigation</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={hardscapeChecked}
                      onChange={(e) => setHardscapeChecked(e.target.checked)}
                      className="w-4 h-4 accent-forest rounded"
                    />
                    <span className="text-xs font-semibold text-dark">🪨 Stone Walkway / Pavers</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={lightingChecked}
                      onChange={(e) => setLightingChecked(e.target.checked)}
                      className="w-4 h-4 accent-forest rounded"
                    />
                    <span className="text-xs font-semibold text-dark">💡 Warm Night Accent Lighting</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={greenwallChecked}
                      onChange={(e) => setGreenwallChecked(e.target.checked)}
                      className="w-4 h-4 accent-forest rounded"
                    />
                    <span className="text-xs font-semibold text-dark">🪴 Vertical Bio-Wall Feature</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results Card (5 cols) */}
          <div className="bg-gradient-to-br from-forest to-forest-light text-white p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="border-b border-white/15 pb-4 mb-6">
                <span className="text-earth-light text-xs font-extrabold uppercase tracking-wider block mb-1">
                  Project Budget Overview
                </span>
                <p className="text-moss-light text-xs">
                  Estimated turnkey scope (Soil prep, flora, execution & setup)
                </p>
              </div>

              <div className="mb-6">
                <span className="text-xs text-moss-light block mb-1">Estimated Investment Range:</span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ₹{calculation.lower.toLocaleString('en-IN')}{' '}
                  <span className="text-lg font-normal text-white/70 font-sans">
                    – ₹{calculation.upper.toLocaleString('en-IN')}*
                  </span>
                </div>
                <p className="text-[11px] text-white/60 mt-1">
                  *Ballpark estimate based on standard regional rates. Final quote given post site inspection.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-moss-light border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Classification:</span>
                  <span className="text-white font-semibold">{propertyTypes[property].name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Area:</span>
                  <span className="text-white font-semibold">{area.toLocaleString('en-IN')} sq. ft.</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Elements:</span>
                  <span className="text-white font-semibold text-right max-w-[55%]">
                    {calculation.featuresList}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={calculation.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get This Estimate on WhatsApp</span>
              </a>
              <span className="block text-center text-[11px] text-moss-light mt-2">
                Instant reply from Saurabh & Gaurav
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
