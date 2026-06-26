/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, CalendarDays, ShieldCheck, Map, Users } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';
import heroImage from '../assets/images/slt_travels_hero.png';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SLT Travels Tourist Vehicle on Scenic Highway"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow filter brightness-[0.45]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Seamless Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/10" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Texts and CTA Column */}
        <div className="max-w-2xl flex-1 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full text-sky-400 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping mr-1" />
            Reliable Tourist Transportation Hub
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sans leading-tight text-white tracking-tight">
            Your Trusted <span className="text-sky-400">Travel Partner</span> <br className="hidden sm:inline" />
            Across India
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-sans font-medium max-w-xl leading-relaxed">
            Comfortable, Safe & Affordable Vehicle Rentals for Every Journey. Rent high-end Tempo Travellers, mini buses, and luxury coaches in Hyderabad with premium drivers.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button
              id="hero-book-now-cta"
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-sky-500/10 border border-sky-400/10 cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <CalendarDays className="w-5 h-5 text-white" />
              <span>Book Vehicle Now</span>
            </button>

            <a
              id="hero-call-now-cta"
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-slate-400 cursor-pointer transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Call: {CONTACT_DETAILS.phone}</span>
            </a>
          </div>

          {/* Core Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 text-left border-t border-slate-800/60 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Sanitized Fleet</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-300">Expert Drivers</span>
            </div>
            <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
              <Map className="w-5 h-5 text-[#f97316] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-300">All India Permit</span>
            </div>
          </div>
        </div>

        {/* Promo Quick Card Column */}
        <div className="w-full max-w-sm flex-1 bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md text-left space-y-5">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Instant Tour Quote</h3>
            <p className="text-xs text-sky-400">Request within 2 minutes via WhatsApp</p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Where do you want to go?</label>
              <select
                id="hero-quick-destination-select"
                onClick={() => onNavigate('booking')}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:border-sky-400 cursor-pointer"
              >
                <option value="">Select Destination...</option>
                <option value="tirupati">Tirupati Special Darshan</option>
                <option value="srisailam">Srisailam Jyotirlinga Trip</option>
                <option value="ramoji">Ramoji Film City Day Tour</option>
                <option value="goa">Goa Friends Package</option>
                <option value="ooty">Ooty / Coorg Summer Special</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Select Vehicle Category</label>
              <select
                id="hero-quick-vehicle-select"
                onClick={() => onNavigate('booking')}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:border-sky-400 cursor-pointer"
              >
                <option value="">Vehicle Preferred...</option>
                <option value="tempo">12 Seater Tempo Traveller</option>
                <option value="minibus">20 Seater Mini Bus</option>
                <option value="large">40 Seater Bus</option>
                <option value="coach">Luxury Tourist Coach</option>
              </select>
            </div>

            <button
              id="hero-quick-quote-submit"
              onClick={() => onNavigate('booking')}
              className="w-full mt-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <span>Launch Booking Wizard</span>
              <span className="font-mono text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
