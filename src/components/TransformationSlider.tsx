'use client';

import React, { useState } from 'react';
import { ArrowRight, Compass, Sprout, ArrowLeftRight } from 'lucide-react';

export default function TransformationSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-forest-deep text-white relative overflow-hidden" id="transformation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <span className="kicker text-earth-light">Visual Transformation</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              From Raw Ground to Shaped Outdoor Living
            </h2>
            <p className="text-moss-light text-xs sm:text-sm sm:leading-relaxed mb-6 sm:mb-8">
              A neglected plot or bare courtyard has incredible architectural potential. We don’t just clear weeds — 
              we engineer grade transitions, enrich the microbial root zone, install hidden conduit lines, 
              and shape the living space around how you relax and entertain.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-earth/20 text-earth-light mt-0.5 shrink-0">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Civil Subgrade &amp; Drainage Corrected</h4>
                  <p className="text-[11px] sm:text-xs text-moss-light">Preventing water accumulation near building foundations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-earth/20 text-earth-light mt-0.5 shrink-0">
                  <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Scientifically Selected Perennials</h4>
                  <p className="text-[11px] sm:text-xs text-moss-light">Vigorous growth matched to daylight angles and irrigation lines.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-earth hover:bg-earth-hover text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <span>Schedule A Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Interactive Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 select-none">
              {/* After Image (Background) */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/villa-lawn.jpg')`,
                }}
              />

              {/* Before Image (Foreground Clipped) */}
              <div
                className="absolute inset-0 bg-cover bg-center border-r-4 border-earth z-10"
                style={{
                  width: `${sliderPos}%`,
                  backgroundImage: `url('/images/before-raw-plot.jpg')`,
                }}
              />

              {/* Badges */}
              <span className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/75 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full z-20 backdrop-blur-sm">
                Before (Raw Site)
              </span>
              <span className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-forest/90 text-earth-light border border-earth/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full z-20 backdrop-blur-sm">
                After (EXTERRA Delivery)
              </span>

              {/* Drag Handle Indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-earth text-white flex items-center justify-center shadow-2xl z-30 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Native Range Input over the entire container for seamless dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 touch-none"
                aria-label="Drag to compare before and after photos"
              />
            </div>

            <p className="text-center text-xs text-moss-light mt-3 flex items-center justify-center gap-1.5">
              <span>Drag slider left or right to inspect the transformation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
