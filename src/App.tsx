/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import About from './components/About';
import SEO from './SEO';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryVehicle = searchParams.get('vehicle') || '';
  const queryDestination = searchParams.get('destination') || '';

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Compute active section based on the current route
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.substring(1); // e.g. '/fleet' -> 'fleet'
  };
  const activeSection = getActiveSection();

  // Navigation redirect handler
  const handleNavigate = (pageId: string) => {
    if (pageId === 'home') {
      navigate('/');
    } else {
      navigate('/' + pageId);
    }
  };

  // Prefill booking parameter and route to booking page
  const handleSelectVehicle = (vehicleName: string) => {
    navigate(`/booking?vehicle=${encodeURIComponent(vehicleName)}`);
  };

  const handleSelectDestination = (destName: string) => {
    navigate(`/booking?destination=${encodeURIComponent(destName)}`);
  };

  const handleClearSelections = () => {
    setSearchParams({});
  };

  return (
    <div id="slt-travels-app-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-slate-950">
      
      {/* 1. Dynamic SEO & Schema Markup Injector */}
      <SEO />

      {/* 2. Routed Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Pages Content with padding to clear the fixed header navbar */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              {/* 3. Hero Visual Introduction */}
              <Hero onNavigate={handleNavigate} />

              {/* 4. Statistics Ribbon Banner */}
              <Stats />

              {/* 5. About Us details */}
              <About />
            </>
          } />

          <Route path="/fleet" element={
            <div className="pt-24">
              <Fleet onSelectVehicle={handleSelectVehicle} />
            </div>
          } />

          <Route path="/services" element={
            <div className="pt-24">
              <Services onNavigate={handleNavigate} />
            </div>
          } />

          <Route path="/destinations" element={
            <div className="pt-24">
              <Destinations onSelectDestination={handleSelectDestination} />
            </div>
          } />

          <Route path="/booking" element={
            <div className="pt-24">
              <BookingForm
                selectedVehicle={queryVehicle}
                selectedDestination={queryDestination}
                onClearSelections={handleClearSelections}
              />
            </div>
          } />

          <Route path="/gallery" element={
            <div className="pt-24">
              <Gallery onNavigate={handleNavigate} />
            </div>
          } />

          <Route path="/contact" element={
            <div className="pt-24">
              <Contact />
            </div>
          } />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 13. Multi-Section Information Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 14. Persistent Call & WhatsApp floating widgets */}
      <FloatingActions />

    </div>
  );
}
