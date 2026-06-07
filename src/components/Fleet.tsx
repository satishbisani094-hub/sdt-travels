/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FLEET_DATA } from '../data';
import { Users, Shield, Tv, Sparkles, Fan, Search, SlidersHorizontal } from 'lucide-react';

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export default function Fleet({ onSelectVehicle }: FleetProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchCapacity, setSearchCapacity] = useState<number>(0);

  const categories = [
    { key: 'all', label: 'All Vehicles' },
    { key: 'tempo-traveller', label: 'Tempo Travellers' },
    { key: 'mini-bus', label: 'Mini Buses' },
    { key: 'bus', label: 'Large Group Buses' },
    { key: 'luxury-coach', label: 'Luxury Coaches' }
  ];

  const filteredFleet = FLEET_DATA.filter((vehicle) => {
    const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
    const matchesCapacity = searchCapacity === 0 || vehicle.capacity >= searchCapacity;
    return matchesCategory && matchesCapacity;
  });

  return (
    <section id="fleet" className="py-24 bg-[#0d2137] text-white overflow-hidden border-b border-slate-905">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Our Premium Fleet</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Choose Your Comfortable Tourist Carriage
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Well-maintained Force Motors, Tata, and Volvo vehicles featuring top sanitization, pushback seats, and advanced acoustic sets.
          </p>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Filtering Utilities Section */}
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Category Tabs */}
          <div id="fleet-category-tabs" className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                id={`fleet-category-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Capacity Slider/Filter */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-end border-t md:border-0 pt-4 md:pt-0">
            <SlidersHorizontal className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="text-sm font-semibold text-slate-300">Min. Capacity:</span>
            <select
              id="fleet-capacity-select"
              value={searchCapacity}
              onChange={(e) => setSearchCapacity(Number(e.target.value))}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-sm font-semibold rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
            >
              <option value={0}>Any Seating Capacity</option>
              <option value={12}>12+ Seats</option>
              <option value={20}>20+ Seats</option>
              <option value={40}>40+ Seats</option>
            </select>
          </div>

        </div>

        {/* Dynamic Vehicles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" id="fleet-vehicles-grid">
          {filteredFleet.length > 0 ? (
            filteredFleet.map((vehicle) => (
              <div
                key={vehicle.id}
                id={`vehicle-card-${vehicle.id}`}
                className="group bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transform transition hover:scale-[1.01] hover:border-slate-700/80"
              >
                
                {/* Vehicle Image Container */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 font-extrabold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{vehicle.capacity} Seater</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Main Body Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                      {vehicle.name}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Feature Checklist Tags */}
                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    <span className="text-[#f97316] font-extrabold text-xs tracking-widest uppercase">Premium Amenities Included:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircleIcon />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Technical Badge Matrix */}
                  <div className="grid grid-cols-4 gap-2 bg-slate-950 p-3 rounded-lg text-center text-[10px] sm:text-xs">
                    <div className="space-y-1">
                      <span className="block text-slate-500 uppercase font-bold tracking-widest">A/C Cabin</span>
                      <span className="font-extrabold text-[#38bdf8] flex items-center justify-center space-x-1">
                         <Fan className="w-3.5 h-3.5 animate-spin-slow inline" />
                         <span>Always High</span>
                      </span>
                    </div>
                    <div className="space-y-1 border-l border-slate-800">
                      <span className="block text-slate-500 uppercase font-bold tracking-widest">Pushback</span>
                      <span className="font-extrabold text-white">Full Relax</span>
                    </div>
                    <div className="space-y-1 border-l border-slate-800">
                      <span className="block text-slate-500 uppercase font-bold tracking-widest">Stereo Audio</span>
                      <span className="font-extrabold text-emerald-400">Bluetooth TV</span>
                    </div>
                    <div className="space-y-1 border-l border-slate-800">
                      <span className="block text-slate-500 uppercase font-bold tracking-widest">Baggage</span>
                      <span className="font-extrabold text-amber-500">Dual Carrier</span>
                    </div>
                  </div>

                  {/* Footer Price Estimate and Triggers */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    <div className="text-center sm:text-left">
                      <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-widest">Rent Rate Estimate</span>
                      <span className="text-[#f97316] font-extrabold text-sm sm:text-base">{vehicle.pricingInfo || "Best price guarantee"}</span>
                    </div>

                    <button
                      id={`fleet-book-btn-${vehicle.id}`}
                      onClick={() => onSelectVehicle(vehicle.name)}
                      className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-slate-950 font-extrabold text-sm sm:text-base px-6 py-3 rounded-xl transition cursor-pointer transform hover:scale-[1.02]"
                    >
                      Book This Vehicle
                    </button>
                  </div>

                </div>

              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-20 bg-slate-900 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 font-bold">No vehicles match your selected specifications.</p>
              <button
                id="reset-fleet-filters-btn"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchCapacity(0);
                }}
                className="mt-4 bg-[#f97316] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded-xl text-sm"
              >
                Clear Seating Filter Controls
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
