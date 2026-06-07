/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GALLERY_IMAGES } from '../data';
import { ChevronLeft, ChevronRight, X, Calendar, Focus } from 'lucide-react';

interface GalleryProps {
  onNavigate: (sectionId: string) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'vehicles', label: 'Outdoors Fleet' },
    { key: 'interiors', label: 'Luxury Interiors' },
    { key: 'destinations', label: 'Popular Scenic Spots' },
    { key: 'tours', label: 'Customer Tours' }
  ];

  // Filter images
  const filteredImages = GALLERY_IMAGES.filter((img) => {
    return activeCategory === 'all' || img.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const cycleLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    const count = filteredImages.length;
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;

    if (nextIndex >= count) nextIndex = 0;
    if (nextIndex < 0) nextIndex = count - 1;

    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0d2137] border-b border-slate-905 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Brand Visual Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Glimpse Our Premium Fleet & Tours
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Take a visual tour of our sanitized vehicle structures, premium pushback recliner interiors, and joyous client travel groups.
          </p>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`gallery-category-${cat.key}`}
              onClick={() => {
                setActiveCategory(cat.key);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-sky-500 text-slate-950 shadow-lg'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              id={`gallery-box-${img.id}`}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square bg-slate-950 rounded-xl overflow-hidden shadow-lg border border-slate-800 cursor-zoom-in"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover object-center transform transition duration-350 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Cover overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-left">
                <span className="text-[9px] font-mono uppercase text-[#f97316] font-bold">{img.category}</span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5">{img.title}</h4>
                <div className="mt-3 flex items-center space-x-1.5 text-[10px] text-sky-400 font-extrabold uppercase">
                  <Focus className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Full Screen Lightbox Modal */}
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div className="fixed inset-0 bg-slate-950/98 z-50 flex flex-col justify-between p-4 sm:p-6 animate-fade-in text-white select-none">
            
            {/* Header controls */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <div className="text-left py-1">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">{filteredImages[lightboxIndex].category}</span>
                <h4 className="text-sm font-bold truncate max-w-xs sm:max-w-md">{filteredImages[lightboxIndex].title}</h4>
              </div>
              
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="p-2 border border-slate-800 hover:border-slate-500 rounded-full cursor-pointer bg-slate-900 transition"
              >
                <X className="w-5 h-5 text-slate-300 hover:text-white" />
              </button>
            </div>

            {/* Middle Main Picture Viewer */}
            <div className="flex-1 flex items-center justify-between gap-4 max-h-[72vh] relative">
              {/* Left Arrow */}
              <button
                id="lightbox-prev-btn"
                onClick={() => cycleLightbox('prev')}
                className="p-3 border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 rounded-full cursor-pointer text-slate-300 hover:text-white transition shrink-0"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Main Photo Wrapper */}
              <div className="max-w-3xl max-h-full aspect-auto bg-slate-950/40 rounded-xl overflow-hidden border border-slate-900 shadow-2xl flex items-center justify-center p-2 mx-auto">
                <img
                  src={filteredImages[lightboxIndex].url}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-inner"
                  referrerPolicy="no-referrer"
                  id="lightbox-active-img"
                />
              </div>

              {/* Right Arrow */}
              <button
                id="lightbox-next-btn"
                onClick={() => cycleLightbox('next')}
                className="p-3 border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 rounded-full cursor-pointer text-slate-300 hover:text-white transition shrink-0"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Footer triggers */}
            <div className="border-t border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
              <span className="text-slate-500 text-xs font-mono">
                Image {lightboxIndex + 1} of {filteredImages.length} ({filteredImages[lightboxIndex].category})
              </span>

              <button
                id="lightbox-modal-book-btn"
                onClick={() => {
                  closeLightbox();
                  onNavigate('booking');
                }}
                className="w-full sm:w-auto bg-[#f97316] hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm py-2.5 px-6 rounded-lg flex items-center justify-center space-x-2 cursor-pointer transition"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Rent This Vehicle Model Now</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
