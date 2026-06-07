/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STATISTICS } from '../data';
import { Award, ShieldAlert, Smile, Route } from 'lucide-react';

export default function Stats() {
  const icons = [
    <Smile className="w-8 h-8 text-sky-400" />,
    <Route className="w-8 h-8 text-[#f97316]" />,
    <Award className="w-8 h-8 text-amber-500" />,
    <Route className="w-8 h-8 text-sky-400" />
  ];

  return (
    <section id="statistics-banner" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 border border-slate-800/80 rounded-2xl shadow-2xl p-6 sm:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-800">
          {STATISTICS.map((stat, i) => (
            <div
              key={i}
              id={`stat-card-${i}`}
              className="flex flex-col items-center justify-center text-center pt-6 md:pt-0 first:pt-0"
            >
              <div className="bg-slate-950 p-3 rounded-xl mb-3 shadow-inner">
                {icons[i] || <Smile className="w-8 h-8 text-sky-400" />}
              </div>
              <span className="text-2xl sm:text-4xl font-extrabold font-sans text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold font-sans tracking-wide text-slate-400 uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
