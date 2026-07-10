/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

export default function FloatingActions() {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${CONTACT_DETAILS.whatsappPhone}&text=Hello%20SLT%20Travels!%20Interested%20in%20vehicle%20rentals%2520for%20tourism.%20Please%20help.`;

  return (
    <div
      id="floating-action-buttons-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none select-none"
    >
      
      {/* 1. Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group relative"
        title="Chat on WhatsApp"
        referrerPolicy="no-referrer"
      >
        {/* Blinking radial halo */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping z-[-1]" />
        
        {/* Helper tooltip */}
        <span className="hidden group-hover:block absolute right-14 bg-slate-900 border border-slate-800 text-slate-100 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap">
          WhatsApp: {CONTACT_DETAILS.phoneFormatted}
        </span>

        <MessageCircle className="w-6 h-6 fill-white stroke-none text-white" />
      </a>

      {/* 2. Floating One-Click Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${CONTACT_DETAILS.phone}`}
        className="pointer-events-auto flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-95 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group relative"
        title="Call SLT Travels"
      >
        {/* Helper tooltip */}
        <span className="hidden group-hover:block absolute right-14 bg-slate-900 border border-slate-800 text-slate-100 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap">
          Call: {CONTACT_DETAILS.phoneFormatted}
        </span>

        <Phone className="w-6 h-6 fill-white text-white" />
      </a>

    </div>
  );
}
