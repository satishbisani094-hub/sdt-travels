/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircleCode, CheckCircle2 } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

export default function Contact() {
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cMsg, setCMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName || !cPhone || !cMsg) {
      alert("Please enter Name, Phone, and your message details.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setCName('');
      setCEmail('');
      setCPhone('');
      setCMsg('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-b border-slate-900 text-white overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Contact SDT Travels Office
          </h2>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact info grid splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-splitter-grid">
          
          {/* Column Left (4 cols): Address, Hours, Phone and Whatsapp links */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">SDT Travels Headquarters</h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Feel free to block vehicles beforehand, check fleet conditions, or request custom tourist quotes.
                </p>
              </div>

              {/* Specific detail cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Stat 1: Address */}
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-start space-x-3.5">
                  <div className="bg-sky-500/10 p-2 text-sky-400 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 uppercase font-bold text-[9px] tracking-widest">Office Location</span>
                    <p className="text-slate-100 leading-normal font-medium">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>

                {/* Stat 2: Phone */}
                <a
                  id="contact-call-link"
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-start space-x-3.5 transition hover:border-[#f97316]/40 cursor-pointer block"
                >
                  <div className="bg-[#f97316]/10 p-2 text-[#f97316] rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-[#f97316] fill-[#f97316]" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 uppercase font-bold text-[9px] tracking-widest font-mono">Mobile Cellular Support</span>
                    <p className="text-white text-base font-extrabold">{CONTACT_DETAILS.phoneFormatted}</p>
                    <span className="text-[10px] text-sky-400">Click to call instantly</span>
                  </div>
                </a>

                {/* Stat 3: Hours */}
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl flex items-start space-x-3.5">
                  <div className="bg-emerald-500/10 p-2 text-emerald-400 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-200 uppercase font-bold text-[9px] tracking-widest">Operating hours</span>
                    <p className="text-slate-100 font-semibold">{CONTACT_DETAILS.businessHours}</p>
                    <span className="text-[10px] text-emerald-400">Online dispatch remains live throughout holidays</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Whatsapp CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-sky-950/40 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <MessageCircleCode className="w-5 h-5 text-emerald-400" />
                <span>Urgent WhatsApp Help</span>
              </h4>
              <p className="text-xs text-slate-300 leading-normal">
                Skip form filing altogether! Snap your requirements and click below to chat with our travel agent coordinator directly.
              </p>
              
              <a
                id="contact-whatsapp-instant-btn"
                href={`https://api.whatsapp.com/send?phone=${CONTACT_DETAILS.whatsappPhone}&text=Hello%20SDT%20Travels!%20Interested%20in%20vehicle%20rentals%20for%20Indian%20tourism.%20Please%20help.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm py-3 rounded-lg shadow"
                referrerPolicy="no-referrer"
              >
                <span>Instant WhatsApp Query</span>
              </a>
            </div>

          </div>

          {/* Column Right (7 cols): Contact Form & Map */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Contact Form Container */}
            <div className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-4">Send Custom Travel Query</h3>

              {submitted && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold p-3 rounded-xl mb-4 text-xs text-center flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your query has been dispatched successfully! Our manager will call you back soon.</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Name"
                      value={cName}
                      onChange={(e) => setCName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={cPhone}
                      onChange={(e) => setCPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={cEmail}
                    onChange={(e) => setCEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Instruction Msg / Routing details *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your tour itinerary, vehicle preferences, and questions..."
                    value={cMsg}
                    onChange={(e) => setCMsg(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-xs sm:text-sm"
                  />
                </div>

                <button
                  id="contact-query-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 cursor-pointer transition text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{submitting ? "Dispatching Query..." : "Submit Travel Query Info"}</span>
                </button>

              </form>
            </div>

            {/* Google Map Embed Container */}
            <div className="h-60 sm:h-72 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950 shadow-2xl relative">
              <iframe
                title="SDT Travels Office SR Nagar Map Location"
                src={CONTACT_DETAILS.mapsLink}
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] brightness-[88%] contrast-[92%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                id="contact-google-map-iframe"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
