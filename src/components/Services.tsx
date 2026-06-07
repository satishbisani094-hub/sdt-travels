/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES } from '../data';
import {
  Compass,
  MapPin,
  Camera,
  Plane,
  Briefcase,
  Heart,
  GraduationCap,
  Sparkles,
  Map,
  ChevronRight
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  // Mapping string to actual Lucide Icon components safely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-sky-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#f97316]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#f97316]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#f97316]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Elite Transport Services Crafted For Every Trip Need
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            From local sightseeing loops to cross-state group tour travel, we provide seamless coordination and transparent rates.
          </p>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid layout of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-900 border border-slate-850 p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:border-slate-700 transition duration-300 group"
            >
              
              <div className="space-y-4">
                {/* Visual Icon Badge */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 w-fit group-hover:scale-110 transitionduration-300">
                  {getIcon(service.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tag highlight */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="bg-[#f97316]/10 text-orange-400 text-[10px] font-bold uppercase py-1 px-2.5 rounded">
                  {service.highlight}
                </span>

                <button
                  id={`service-explore-btn-${service.id}`}
                  onClick={() => onNavigate('booking')}
                  className="text-slate-500 hover:text-white transition cursor-pointer flex items-center space-x-1"
                >
                  <span className="text-[10px] font-bold uppercase">Rent Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Contact Strip Banner to trigger quick help */}
        <div className="mt-12 bg-gradient-to-r from-sky-900/40 via-slate-900/80 to-sky-950/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-bold text-white text-lg">Looking for a customized multi-city tourist vehicle packages?</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We specilize in outstation circuits with drivers who manage highway travel permissions, toll payments, and multi-state tax calculations. Let us help you coordinate!
            </p>
          </div>
          <button
            id="services-custom-quote-btn"
            onClick={() => onNavigate('booking')}
            className="w-full sm:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white font-bold px-6 py-3.5 rounded-xl text-sm tracking-wide transition cursor-pointer shrink-0"
          >
            Request Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
