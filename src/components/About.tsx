/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { CONTACT_DETAILS, WHY_CHOOSE_US } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  const tabsContent = {
    mission: {
      title: "Our Mission",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      text: "To provide world-class, premium quality tourist transportation and rental vehicle coordination that is highly reliable, comfortable, affordable, and safe. We strive to create unforgettable memories for individuals, families, groups, and corporate partners across Hyderabad and India by maintaining a pristine vehicle fleet and serving with ultimate integrity."
    },
    vision: {
      title: "Our Vision",
      icon: <Eye className="w-5 h-5 text-[#f97316]" />,
      text: "To become the absolute leading and most referred tourist vehicle rental platform in South India. We envision a travel ecosystem characterized by zero-latency booking dispatch, 100% transparent pricing matrices, fully sustainable clean energy fleet alternatives in the future, and unmatched hospitality standards for all passenger demography."
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-400/10">About SDT Travels</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Making Every Journey Comfortable, Safe & Memorable
          </h2>
          <div className="w-16 h-1.5 bg-[#f97316] mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlight Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: General Intro and Mission/Vision Tabs */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Hyundai, Tata, and Force Motors Multi-Vehicle Rental Pioneers
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Based in the heart of Hyderabad at SR Nagar, <strong>SDT Travels</strong> is a highly certified travel agency specializing in tourist vehicle hire. We coordinate a top-class fleet ranging from luxurious 12-seater Tempo Travellers to monumental 40-seater tour coaches, serving all of South India.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Whether you are organizing a sacred pilgrimage to Tirupati, a corporate team-building retreat, a grand wedding cargo caravan, or a fun-filled family vacation, we provide premium air-conditioned comforts under strict security systems.
            </p>

            {/* Interactive Tab Controller */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex border-b border-slate-800 mb-4 pb-2" id="about-tab-buttons">
                <button
                  id="tab-mission-btn"
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center space-x-2 pb-3 px-4 font-bold text-sm tracking-wider cursor-pointer ${
                    activeTab === 'mission'
                      ? 'text-sky-400 border-b-2 border-sky-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Our Mission</span>
                </button>
                <button
                  id="tab-vision-btn"
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center space-x-2 pb-3 px-4 font-bold text-sm tracking-wider cursor-pointer ${
                    activeTab === 'vision'
                      ? 'text-[#f97316] border-b-2 border-[#f97316]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-4 h-4 text-[#f97316]" />
                  <span>Our Vision</span>
                </button>
              </div>

              {/* Tab Display Pane */}
              <div className="space-y-2 min-h-[140px]" id="about-tab-panel">
                <h4 className="font-bold text-white text-lg flex items-center space-x-2 animate-fade-in">
                  {tabsContent[activeTab].icon}
                  <span>{tabsContent[activeTab].title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tabsContent[activeTab].text}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Key Highlights Benefit Panel */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-sky-400 flex items-center space-x-2">
              <HeartHandshake className="w-6 h-6 text-sky-400" />
              <span>Why Travelers Choose SDT Travels</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-4" id="why-choose-us-grid">
              {WHY_CHOOSE_US.map((benefit, i) => (
                <div
                  key={i}
                  id={`benefit-card-${i}`}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700/60 transition duration-300 flex items-start gap-4"
                >
                  <div className="bg-sky-500/10 p-2.5 rounded-lg text-sky-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-stone-100 text-sm sm:text-base leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
