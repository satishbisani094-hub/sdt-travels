/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Navigation } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Our Fleet', id: 'fleet' },
    { name: 'Services', id: 'services' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'Book Now', id: 'booking' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/60 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="nav-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="bg-gradient-to-br from-sky-400 to-amber-500 p-2 rounded-xl text-slate-950 shadow-md transform transition group-hover:scale-105">
              <Navigation className="w-6 h-6 fill-slate-950" />
            </div>
            <div>
              <span className="text-xl font-bold font-sans tracking-wide text-white flex items-center">
                SLT <span className="text-sky-400 ml-1.5 font-medium">Travels</span>
              </span>
              <p className="text-[9px] font-mono tracking-widest text-[#f97316] uppercase mt-0.5 leading-none">
                Tourist Transport
              </p>
            </div>
          </div>

          {/* Desktop Navigation Link Cluster */}
          <div id="desktop-links" className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`btn-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#f97316] bg-slate-800/50 border-b-2 border-sky-400 font-semibold'
                    : 'text-slate-200 hover:text-sky-400 hover:bg-slate-800/30'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Quick Contact Desk Button */}
          <div className="hidden lg:flex items-center">
            <a
              id="desktop-phone-call-nav"
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call +91 89196 58894</span>
            </a>
          </div>

          {/* Mobile Menu Control Button */}
          <div className="lg:hidden">
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-sky-400 hover:bg-slate-800/50 transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-0 top-[65px] bg-slate-950/95 backdrop-blur-lg z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-5 pb-6 space-y-2 border-b border-slate-800/60 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`btn-mobile-nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-150 cursor-pointer ${
                activeSection === link.id
                  ? 'text-white bg-sky-500/10 border-l-4 border-[#f97316]'
                  : 'text-slate-300 hover:text-sky-400 hover:bg-slate-800/40'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-800/80 mt-4 px-2">
            <a
              id="mobile-phone-call-nav"
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg w-full text-center"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Us Now: 8919658894</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
