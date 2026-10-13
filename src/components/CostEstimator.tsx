'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Home,
  Building2,
  Hotel,
  MessageSquare,
  Droplet,
  Footprints,
  Lightbulb,
  Flower2,
  FileSpreadsheet,
  Sprout,
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '@/config/site';

type PropertyType = 'villa' | 'rooftop' | 'commercial';

interface PropertyConfig {
  name: string;
  baseRate: number;
}

const propertyTypes: Record<PropertyType, PropertyConfig> = {
  villa: { name: 'Villa / Bungalow Lawn', baseRate: 50 },
  rooftop: { name: 'Rooftop / Terrace Garden', baseRate: 100 },
  commercial: { name: 'Cafe / Resort / Farmhouse', baseRate: 45 },
};

export type GrassType = 'korean' | 'bermuda' | 'selection1';

export const grassOptions: Record<
  GrassType,
  { name: string; rate: number; subtitle: string }
> = {
  korean: { name: 'Korean Carpet Grass', rate: 45, subtitle: 'Velvet soft, dense luxury turf' },
  bermuda: { name: 'Bermuda Grass', rate: 35, subtitle: 'High durability & heavy play' },
  selection1: { name: 'Selection 1 Grass', rate: 30, subtitle: 'Fine-texture emerald all-rounder' },
};

function formatRoundedRange(lower: number, upper: number): string {
  if (upper >= 100000) {
    const lLakh = (Math.round((lower / 100000) * 10) / 10).toFixed(1);
    const uLakh = (Math.round((upper / 100000) * 10) / 10).toFixed(1);
    return `₹${lLakh} – ${uLakh} lakh*`;
  }
  const lRounded = Math.round(lower / 5000) * 5000;
  const uRounded = Math.round(upper / 5000) * 5000;
  return `₹${lRounded.toLocaleString('en-IN')} – ₹${uRounded.toLocaleString('en-IN')}*`;
}

interface CostEstimatorProps {
  isStandalonePage?: boolean;
}

export default function CostEstimator({ isStandalonePage = false }: CostEstimatorProps) {
  const [property, setProperty] = useState<PropertyType>('villa');
  const [area, setArea] = useState<number>(1200);
  const [lawnChecked, setLawnChecked] = useState<boolean>(true);
  const [grassType, setGrassType] = useState<GrassType>('korean');
  const [dripChecked, setDripChecked] = useState<boolean>(true);
  const [hardscapeChecked, setHardscapeChecked] = useState<boolean>(true);
  const [lightingChecked, setLightingChecked] = useState<boolean>(false);
  const [greenwallChecked, setGreenwallChecked] = useState<boolean>(false);

  const calculation = useMemo(() => {
    const baseRate = propertyTypes[property].baseRate;
    let total = area * baseRate;
    const selectedFeatures: string[] = [];

    if (lawnChecked) {
      total += area * grassOptions[grassType].rate;
      selectedFeatures.push(`Natural Lawn Turf (${grassOptions[grassType].name})`);
    }
    if (dripChecked) {
      total += area * 25;
      selectedFeatures.push('Drip Irrigation');
    }
    if (hardscapeChecked) {
      total += area * 35;
      selectedFeatures.push('Stone Walkway & Pavers');
    }
    if (lightingChecked) {
      total += 25000;
      selectedFeatures.push('Warm Night Accent Lighting');
    }
    if (greenwallChecked) {
      total += 45000;
      selectedFeatures.push('Vertical Garden Wall');
    }

    const lower = Math.round(total * 0.92);
    const upper = Math.round(total * 1.08);
    const displayRange = formatRoundedRange(lower, upper);
    const cleanRange = displayRange.replace('*', '');

    const waText = [
      `Hello ${SITE_CONFIG.brandName}, I checked the landscape cost calculator on your website:`,
      `• Property: ${propertyTypes[property].name}`,
      `• Area: ${area.toLocaleString('en-IN')} sq. ft.`,
      `• Lawn Option: ${lawnChecked ? grassOptions[grassType].name : 'No Lawn (Plants / Hardscape Only)'}`,
      `• Extras: ${selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Base Site Preparation Only'}`,
      `• Indicative Range: ${cleanRange}`,
      '',
      'I would like to discuss my site and book a visit.',
    ].join('\n');

    return {
      lower,
      upper,
      displayRange,
      featuresList: selectedFeatures.length > 0 ? selectedFeatures.join(', ') : 'Base Site Preparation Only',
      waUrl: getWhatsAppUrl(waText),
    };
  }, [property, area, lawnChecked, grassType, dripChecked, hardscapeChecked, lightingChecked, greenwallChecked]);

  const breakdownItems = useMemo(() => {
    const isRooftop = property === 'rooftop';

    const soilItem = isRooftop
      ? {
          title: '1. Waterproofing Protection, Drainage & Lightweight Media (25–30%)',
          desc: 'Root-barrier membrane check, interlocking drainage cells, geotextile filter fabric, and a lightweight cocopeat, vermicompost, and perlite growing mix that keeps slab load low.',
          note: 'Engineered for terrace weight limits & zero waterlogging',
        }
      : {
          title: '1. Soil Preparation & Grading (25–30%)',
          desc: 'Debris removal, slope levelling away from building walls, fresh garden soil, vermicompost, neem cake, and a river-sand drainage layer.',
          note: 'Foundation for healthy roots & monsoon drainage',
        };

    const plantsItem = lawnChecked
      ? {
          title: `2. ${grassOptions[grassType].name} Turf & Curated Plants (30–35% — Included)`,
          desc: `Natural turf rolls of ${grassOptions[grassType].name} laid over compacted drainage sand, paired with layered palms, flowering shrubs, and perimeter hedges suited to Bihar's climate.`,
          note: `Selected variety: ${grassOptions[grassType].name} (${grassOptions[grassType].subtitle})`,
        }
      : {
          title: '2. Curated Plantation & Shrubs Only (Lawn Turf Excluded)',
          desc: 'Natural turf grass excluded from estimate. Focuses on specimen palms, ornamental shrubs, flower beds, and organic soil dressing.',
          note: 'Toggle "Natural Lawn Grass Turf" above to add lawn turf to your estimate',
        };

    const hardscapeItem = hardscapeChecked
      ? {
          title: '3. Stone Pathways, Pavers & Edging (20–25% — Included)',
          desc: isRooftop
            ? 'Lightweight sandstone steppers, pedestal paver tiles, pebble drain channels, and planter seating borders.'
            : 'Excavation, compacted aggregate base, mortar bedding, natural stone pavers (Kandla grey or Jodhpur sandstone), and brick/stone lawn edging.',
          note: 'Selected in your estimate above',
        }
      : {
          title: '3. Stone Pathways & Edging (Optional — Currently Excluded)',
          desc: 'You have unchecked stone walkways. Only basic lawn perimeter edging is included; toggle "Stone Walkway / Pavers" above to add pathways or patios.',
          note: 'Toggle above to include hardscape in your estimate',
        };

    const activeSystems: string[] = [];
    if (dripChecked) activeSystems.push('automated drip lines & timer');
    if (lightingChecked) activeSystems.push('warm 2700K IP65 outdoor lighting');
    if (greenwallChecked) activeSystems.push('vertical garden bio-wall frame & emitters');

    const systemsItem =
      activeSystems.length > 0
        ? {
            title: '4. Irrigation, Lighting & Vertical Features (15–20% — Included)',
            desc: `Configured with ${activeSystems.join(', ')}—including root-zone emitters, weatherproof cabling, and timer automation as selected.`,
            note: 'Selected in your estimate above',
          }
        : {
            title: '4. Drip Automation & Outdoor Lighting (Optional — Currently Excluded)',
            desc: 'Manual hose watering assumed. Check Drip Irrigation, Night Lighting, or Vertical Bio-Wall above to include automated watering or evening illumination.',
            note: 'Toggle above to include in your estimate',
          };

    return [soilItem, plantsItem, hardscapeItem, systemsItem];
  }, [property, dripChecked, hardscapeChecked, lightingChecked, greenwallChecked]);

  return (
    <>
      <section className="py-14 sm:py-20 lg:py-24 bg-cream" id="estimator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Head - hidden when rendered under the dedicated Calculator page hero to avoid duplicate headings */}
          {!isStandalonePage && (
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="kicker text-forest">Landscape Cost Calculator</span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
                Estimate your landscape budget
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Pick your property type, drag the area slider, and select the extras you want. You’ll get an indicative range for Patna and nearby areas.
              </p>
            </div>
          )}

          {/* Calculator Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
            {/* Left: Input Controls (7 cols) */}
            <div className="p-5 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 1. Property Type */}
                <div className="mb-6 sm:mb-7">
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2.5 sm:mb-3">
                    1. Choose Property Type
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setProperty('villa')}
                      className={`flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-4 rounded-xl border-2 transition-all ${
                        property === 'villa'
                          ? 'border-forest bg-[#eef3f0] shadow-sm'
                          : 'border-gray-200 bg-cream hover:border-forest/40'
                      }`}
                    >
                      <Home className="w-5 h-5 sm:w-6 sm:h-6 text-forest shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-dark text-center leading-tight">Villa Lawn</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setProperty('rooftop')}
                      className={`flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-4 rounded-xl border-2 transition-all ${
                        property === 'rooftop'
                          ? 'border-forest bg-[#eef3f0] shadow-sm'
                          : 'border-gray-200 bg-cream hover:border-forest/40'
                      }`}
                    >
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-forest shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-dark text-center leading-tight">Terrace Garden</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setProperty('commercial')}
                      className={`flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-4 rounded-xl border-2 transition-all ${
                        property === 'commercial'
                          ? 'border-forest bg-[#eef3f0] shadow-sm'
                          : 'border-gray-200 bg-cream hover:border-forest/40'
                      }`}
                    >
                      <Hotel className="w-5 h-5 sm:w-6 sm:h-6 text-forest shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-dark text-center leading-tight">Resort / Estate</span>
                    </button>
                  </div>
                </div>

                {/* 2. Range Slider */}
                <div className="mb-7">
                  <div className="flex justify-between items-baseline mb-2">
                    <label htmlFor="area-slider" className="text-xs font-bold uppercase tracking-wider text-forest">
                      2. Approximate Area
                    </label>
                    <span className="text-xl font-extrabold text-forest">
                      {area.toLocaleString('en-IN')} sq. ft.
                    </span>
                  </div>
                  <input
                    id="area-slider"
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
                    3. Select Optional Extras
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Natural Lawn Option Card (Featured Full Width on Mobile & Tablet/Desktop) */}
                    <div
                      className={`p-3.5 rounded-xl border transition-all sm:col-span-2 ${
                        lawnChecked
                          ? 'border-forest/50 bg-[#f4f8f5] shadow-sm'
                          : 'border-gray-200 bg-white hover:border-forest/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={lawnChecked}
                            onChange={(e) => setLawnChecked(e.target.checked)}
                            className="w-4 h-4 accent-forest rounded cursor-pointer"
                          />
                          <Sprout className="w-4 h-4 text-emerald shrink-0" />
                          <span className="text-xs font-bold text-dark">
                            Natural Lawn Grass Turf
                          </span>
                        </label>
                        {lawnChecked && (
                          <span className="text-[10px] font-bold text-emerald uppercase tracking-wider bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full">
                            {grassOptions[grassType].name}
                          </span>
                        )}
                      </div>

                      {/* Interactive Grass Variety Selector Tabs */}
                      {lawnChecked && (
                        <div className="mt-3 pt-3 border-t border-forest/10">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold text-gray-500">
                              Grass Variety:
                            </span>
                            <span className="text-[10px] text-earth font-medium">
                              {grassOptions[grassType].subtitle}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                            {(['korean', 'bermuda', 'selection1'] as const).map((g) => (
                              <button
                                key={g}
                                type="button"
                                onClick={() => setGrassType(g)}
                                className={`px-2 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all text-center ${
                                  grassType === g
                                    ? 'bg-forest text-white shadow-sm ring-2 ring-forest/20'
                                    : 'bg-white text-forest border border-gray-200 hover:border-forest/40'
                                }`}
                              >
                                {g === 'korean'
                                  ? 'Korean Carpet'
                                  : g === 'bermuda'
                                  ? 'Bermuda'
                                  : 'Selection 1'}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={dripChecked}
                        onChange={(e) => setDripChecked(e.target.checked)}
                        className="w-4 h-4 accent-forest rounded"
                      />
                      <Droplet className="w-4 h-4 text-emerald shrink-0" />
                      <span className="text-xs font-semibold text-dark">Smart Drip Irrigation</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={hardscapeChecked}
                        onChange={(e) => setHardscapeChecked(e.target.checked)}
                        className="w-4 h-4 accent-forest rounded"
                      />
                      <Footprints className="w-4 h-4 text-emerald shrink-0" />
                      <span className="text-xs font-semibold text-dark">Stone Walkway / Pavers</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={lightingChecked}
                        onChange={(e) => setLightingChecked(e.target.checked)}
                        className="w-4 h-4 accent-forest rounded"
                      />
                      <Lightbulb className="w-4 h-4 text-emerald shrink-0" />
                      <span className="text-xs font-semibold text-dark">Warm Night Accent Lighting</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:border-forest cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={greenwallChecked}
                        onChange={(e) => setGreenwallChecked(e.target.checked)}
                        className="w-4 h-4 accent-forest rounded"
                      />
                      <Flower2 className="w-4 h-4 text-emerald shrink-0" />
                      <span className="text-xs font-semibold text-dark">Vertical Bio-Wall Feature</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results Card (5 cols) */}
            <div className="bg-gradient-to-br from-forest to-forest-light text-white p-5 sm:p-10 lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="border-b border-white/15 pb-4 mb-5 sm:mb-6">
                  <span className="text-earth-light text-xs font-extrabold uppercase tracking-wider block mb-1">
                    Project Budget Overview
                  </span>
                  <p className="text-moss-light text-xs">
                    Indicative scope (Soil prep, plants, execution &amp; setup)
                  </p>
                </div>

                <div className="mb-5 sm:mb-6">
                  <span className="text-xs text-moss-light block mb-1">Indicative Investment Range:</span>
                  <div className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {calculation.displayRange}
                  </div>
                  <p className="text-[11px] text-white/70 mt-2 leading-relaxed">
                    *Indicative range based on standard Patna rates. Your detailed BOQ follows the site visit.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 text-xs text-moss-light border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span>Property Type:</span>
                    <span className="text-white font-semibold">{propertyTypes[property].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Area:</span>
                    <span className="text-white font-semibold">{area.toLocaleString('en-IN')} sq. ft.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lawn Option:</span>
                    <span className="text-white font-semibold">
                      {lawnChecked ? grassOptions[grassType].name : 'Excluded'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Extras:</span>
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
                  className="w-full bg-[#25d366] hover:bg-[#1da851] text-white py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Send This Estimate on WhatsApp</span>
                </a>
                <span className="block text-center text-[11px] text-moss-light mt-2">
                  Direct reply from Saurabh &amp; Gaurav
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic 4-Part Breakdown on Standalone Calculator Page */}
      {isStandalonePage && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="kicker">Detailed Itemized BOQ</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
                What goes into a landscape quote
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Every quote is broken down line by line so you can see where your budget goes (currently tailored for{' '}
                <strong className="text-forest">{propertyTypes[property].name}</strong>):
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {breakdownItems.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-cream border border-gray-200">
                  <h3 className="font-serif text-xl font-bold text-forest mb-3 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-emerald shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="text-[11px] font-bold text-emerald uppercase">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Want an exact quote for your site?
              </h3>
              <p className="text-xs sm:text-sm text-sage-light max-w-xl mx-auto mb-8 leading-relaxed">
                Book a site visit in Patna, Danapur, or nearby districts. We take measurements on site and share an itemized estimate within 48 hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-hover text-forest-deep px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Book Site Visit
                </Link>
                <a
                  href={calculation.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-gold hover:text-gold text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Send This Estimate on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
