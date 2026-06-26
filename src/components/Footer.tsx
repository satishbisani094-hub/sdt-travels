/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, Mail, Compass, Navigation } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Booking Wizard', id: 'booking' },
    { label: 'Fleet Showcase', id: 'fleet' },
    { label: 'Services Catalogue', id: 'services' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'HQ Address Location', id: 'contact' }
  ];

  const servicesLinks = [
    { label: 'Leisure Tourism Packages', id: 'services' },
    { label: 'Outstation Circuits', id: 'services' },
    { label: 'Local Hyderabad Day Tours', id: 'services' },
    { label: 'Airport Pickups & Drops', id: 'services' },
    { label: 'Wedding Cargo Caravan', id: 'services' },
    { label: 'Pilgrimage Special circuits', id: 'services' }
  ];

  return (
    <footer id="main-footer" className="bg-[#0b132b] text-[#8c9fc2] text-xs sm:text-sm border-t border-slate-900 overflow-hidden">
      
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Col 1 (Total: 4 cols) - Logo, description, and tagline */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo Brand */}
            <div
              className="flex items-center space-x-2.5 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-gradient-to-br from-sky-400 to-amber-500 p-2 rounded-xl text-slate-950 shadow-md">
                <Navigation className="w-5 h-5 fill-slate-950" />
              </div>
              <span className="text-xl font-bold font-sans text-white tracking-wide">
                SLT <span className="text-sky-400 font-medium">Travels</span>
              </span>
            </div>

            <p className="text-[#a4b6d4] leading-relaxed pr-2">
              Based in Hyderabad, SLT Travels is South India's premier tourist transit coordinate. We are fully committed to keeping travel convenient, clean, and entirely cost-effective.
            </p>

            {/* Tagline */}
            <div className="border-l-2 border-[#f97316] pl-3 py-1">
              <span className="text-white italic font-semibold text-xs leading-normal">
                "{CONTACT_DETAILS.tagline}"
              </span>
            </div>

          </div>

          {/* Col 2 (Total: 2 cols) - Quick Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5 text-slate-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-sky-400 cursor-pointer transition text-xs flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (Total: 3 cols) - Services */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">Our Core Services</h4>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-sky-400 cursor-pointer transition text-xs flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (Total: 3 cols) - Coordinates */}
          <div className="lg:col-span-3 space-y-4 text-left text-xs">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">SLT Contacts</h4>
            
            <ul className="space-y-3 font-semibold text-[#a4b6d4]">
              
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-400 font-medium">{CONTACT_DETAILS.address}</span>
              </li>

              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="hover:text-sky-400 text-white font-extrabold text-sm"
                >
                  {CONTACT_DETAILS.phoneFormatted}
                </a>
              </li>

              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-sky-400 text-white truncate text-xs"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>

            </ul>

            {/* Micro hours badge */}
            <div className="bg-[#1a2c4e] border border-slate-800/60 p-2.5 rounded-lg text-slate-300">
              <span className="block text-[8px] tracking-widest uppercase font-mono text-[#f97316] font-bold">Live Operation Hours</span>
              <span className="font-semibold text-white">Open 24 Hours / 7 Days</span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#050b18] border-t border-slate-900 py-6 text-center text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <p>© 2026 SLT Travels. All Rights Reserved.</p>
          <p className="text-[10px] hidden sm:block">"Making Every Journey Comfortable, Safe & Memorable."</p>
        </div>
      </div>

    </footer>
  );
}
