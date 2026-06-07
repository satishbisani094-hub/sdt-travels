/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { CONTACT_DETAILS } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SEO from './SEO';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  // Handle section tracking during scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'fleet', 'services', 'destinations', 'booking', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Pre-fill booking parameters and scroll
  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    handleNavigate('booking');
  };

  const handleSelectDestination = (destName: string) => {
    setSelectedDestination(destName);
    handleNavigate('booking');
  };

  const handleClearSelections = () => {
    setSelectedVehicle('');
    setSelectedDestination('');
  };

  return (
    <div id="sdt-travels-app-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-slate-950">
      
      {/* 1. Dynamic SEO & Schema Markup Injector */}
      <SEO />

      {/* 2. Scroll-Sensitive Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 3. Hero Visual Introduction */}
      <Hero onNavigate={handleNavigate} />

      {/* 4. Statistics Ribbon Banner */}
      <Stats />

      {/* 5. Company Trust & Timeline Details */}
      <About />

      {/* 6. Filterable Vehicle Catalogue */}
      <Fleet onSelectVehicle={handleSelectVehicle} />

      {/* 7. Comprehensive Service Profiles */}
      <Services onNavigate={handleNavigate} />

      {/* 8. Top Scenic Outstation Tourism Destinations */}
      <Destinations onSelectDestination={handleSelectDestination} />

      {/* 9. Interactive Booking Coordinators Form & Local Sync */}
      <BookingForm
        selectedVehicle={selectedVehicle}
        selectedDestination={selectedDestination}
        onClearSelections={handleClearSelections}
      />

      {/* 10. Filterable Image Lightbox Gallery */}
      <Gallery onNavigate={handleNavigate} />

      {/* 11. Testimonials Star Dashboard & Feedback Submissions */}
      <Reviews />

      {/* 12. Office Location Coordinates & Custom Queries */}
      <Contact />

      {/* 13. Multi-Section Information Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 14. Persistent Call & WhatsApp floating widgets */}
      <FloatingActions />

    </div>
  );
}
