/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { DESTINATIONS } from '../data';
import { MapPin, Route, Calendar, ChevronRight } from 'lucide-react';

interface DestinationsProps {
  onSelectDestination: (destName: string) => void;
}

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  // Extract unique states in the order they appear in DESTINATIONS data
  const states = ['All', ...Array.from(new Set(DESTINATIONS.map((dest) => dest.state)))];
  
  // State for active category
  const [activeState, setActiveState] = useState('All');

  // Filter based on active state
  const filteredDestinations = activeState === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((dest) => dest.state === activeState);

  return (
    <section id="destinations" className="py-24 bg-[#0d2137] border-b border-slate-905 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Holiday Destinations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Popular Tourist Escapes State Wise
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Choose a state to explore top-rated destinations. Plan your next journey with our experienced local drivers who handle all highway permits, navigation, and pit stops perfectly.
          </p>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* State Selector Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto pb-4 pt-2 gap-3 no-scrollbar scroll-smooth justify-start px-4 sm:px-6">
            {states.map((state) => {
              const isActive = activeState === state;
              return (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f97316] to-[#e0620d] text-white border-transparent shadow-lg shadow-[#f97316]/20'
                      : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {state}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Custom Grid Slider */}
        <div 
          key={activeState}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" 
          id="destinations-grid"
        >
          {filteredDestinations.map((dest) => {
            const displayImage = dest.image;

            return (
              <div
                key={dest.id}
                id={`destination-card-${dest.id}`}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transform transition duration-300 hover:scale-[1.01] hover:border-slate-700 hover:shadow-sky-500/5"
              >
                {/* Image Section */}
                <div className="relative h-56 xl:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={displayImage}
                    alt={dest.name}
                    className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                  />
                  {/* Title overlay */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-bold font-sans text-sky-400 uppercase tracking-widest">{dest.name.split(' (')[0]}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  {/* Travel Stats Quick Badge */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 font-sans border-t border-slate-800/80 pt-4">
                    <div className="flex items-center space-x-1.5">
                      <Route className="w-4 h-4 text-[#f97316]" />
                      <span className="font-semibold text-slate-400">Distance:</span>
                      <span className="text-white font-extrabold">{dest.distanceFromHyd}</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span className="font-semibold text-slate-400">Plan:</span>
                      <span className="text-white font-extrabold">{dest.recommendedDuration}</span>
                    </div>
                  </div>

                  {/* Navigation Button */}
                  <button
                    id={`dest-book-btn-${dest.id}`}
                    onClick={() => onSelectDestination(dest.name.split(' (')[0])}
                    className="w-full bg-slate-950 hover:bg-slate-850 text-sky-400 font-bold border border-sky-400/20 hover:border-sky-400/40 py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition cursor-pointer text-xs sm:text-sm"
                  >
                    <span>Rent Vehicle For {dest.name.split(' (')[0]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
