/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, Phone, Calendar, ClipboardCheck, ArrowRight, CheckCircle2, History, Trash2, Mail } from 'lucide-react';
import { CONTACT_DETAILS, FLEET_DATA } from '../data';
import { Booking } from '../types';

interface BookingFormProps {
  selectedVehicle: string;
  selectedDestination: string;
  onClearSelections: () => void;
}

export default function BookingForm({ selectedVehicle, selectedDestination, onClearSelections }: BookingFormProps) {
  // Booking Form State fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Hyderabad');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [vehicleType, setVehicleType] = useState('12 Seater Tempo Traveller');
  const [numPassengers, setNumPassengers] = useState(12);
  const [specialRequirements, setSpecialRequirements] = useState('');

  // App UI State
  const [activeTab, setActiveTab] = useState<'book' | 'history'>('book');
  const [localBookings, setLocalBookings] = useState<Booking[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Sync pre-selected vehicles or destinations from props
  useEffect(() => {
    if (selectedVehicle) {
      setVehicleType(selectedVehicle);
      // Auto adjust passenger numbers matching seating averages
      if (selectedVehicle.includes('12')) {
        setNumPassengers(12);
      } else if (selectedVehicle.includes('20')) {
        setNumPassengers(20);
      } else {
        setNumPassengers(40);
      }
      setActiveTab('book');
    }
  }, [selectedVehicle]);

  useEffect(() => {
    if (selectedDestination) {
      setDestination(selectedDestination);
      setActiveTab('book');
    }
  }, [selectedDestination]);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('slt_travels_bookings');
      if (stored) {
        setLocalBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage booking reading error", e);
    }
  }, []);

  const saveBookingsList = (updated: Booking[]) => {
    setLocalBookings(updated);
    try {
      localStorage.setItem('slt_travels_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error("Local storage booking saving error", e);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !destination || !travelDate || !returnDate) {
      alert("Please fill in all the required form fields.");
      return;
    }

    const uniqueId = "SLT-" + Math.floor(100000 + Math.random() * 900000);
    const newBooking: Booking = {
      id: uniqueId,
      name,
      phone,
      pickupLocation,
      destination,
      travelDate,
      returnDate,
      vehicleType,
      numPassengers,
      specialRequirements,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updatedList = [newBooking, ...localBookings];
    saveBookingsList(updatedList);
    setLatestBooking(newBooking);
    setShowConfirmation(true);

    // Clear main inputs but retain name & phone for ease of future requests
    setDestination('');
    setSpecialRequirements('');
    onClearSelections();
  };

  const deleteBooking = (id: string) => {
    const updated = localBookings.filter(b => b.id !== id);
    saveBookingsList(updated);
  };

  // Pre-generate professional WhatsApp and Email texts custom-formatted
  const getWhatsAppURL = (booking: Booking) => {
    const text = `*New Booking Request - SLT Travels* %0A` +
      `-------------------------------------- %0A` +
      `*Booking ID:* ${booking.id} %0A` +
      `*Customer Name:* ${booking.name} %0A` +
      `*Phone Number:* ${booking.phone} %0A` +
      `*Pickup From:* ${booking.pickupLocation} %0A` +
      `*Destination:* ${booking.destination} %0A` +
      `*Travel Date:* ${booking.travelDate} %0A` +
      `*Return Date:* ${booking.returnDate} %0A` +
      `*Vehicle Category:* ${booking.vehicleType} %0A` +
      `*Passengers:* ${booking.numPassengers} Seats %0A` +
      `*Special Needs:* ${booking.specialRequirements || 'None'} %0A` +
      `-------------------------------------- %0A` +
      `Please confirm availability & quotation. Thank you!`;

    return `https://api.whatsapp.com/send?phone=${CONTACT_DETAILS.whatsappPhone}&text=${text}`;
  };

  const getEmailMailto = (booking: Booking) => {
    const subject = encodeURIComponent(`New Reservation Request (${booking.id}) - ${booking.name}`);
    const body = encodeURIComponent(
      `Dear SLT Travels Team,\n\n` +
      `We have received a new vehicle booking request through slt-travels.in:\n\n` +
      `- Booking Reference ID: ${booking.id}\n` +
      `- Customer Name: ${booking.name}\n` +
      `- Contact Phone: ${booking.phone}\n` +
      `- Pickup Location Address: ${booking.pickupLocation}\n` +
      `- Dropping / Sightseeing Destination: ${booking.destination}\n` +
      `- Scheduled Depature Date: ${booking.travelDate}\n` +
      `- Scheduled Return Date: ${booking.returnDate}\n` +
      `- Vehicle Requested: ${booking.vehicleType}\n` +
      `- Estimated Passengers: ${booking.numPassengers} Persons\n` +
      `- Customer Notes: ${booking.specialRequirements || 'No special requirements listed.'}\n\n` +
      `Submitted at: ${booking.createdAt}\n\n` +
      `Please coordinate contact details on whatsapp or cellular as fast as possible!`
    );

    return `mailto:${CONTACT_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-24 bg-slate-950 border-b border-slate-900 scroll-mt-10 overflow-hidden text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-400/10">Booking Coordinator</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Secure Your Vehicle Travel Instantly
          </h2>
          <div className="w-16 h-1.5 bg-[#f97316] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 mb-8 max-w-md mx-auto rounded-xl bg-slate-900 p-1">
          <button
            id="book-form-tab-btn"
            onClick={() => setActiveTab('book')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg text-sm font-bold cursor-pointer transition ${
              activeTab === 'book'
                ? 'bg-sky-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ClipboardCheck className="w-4 h-4" />
            <span>New Booking Request</span>
          </button>
          
          <button
            id="book-history-tab-btn"
            onClick={() => {
              setActiveTab('history');
              setShowConfirmation(false);
            }}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg text-sm font-bold cursor-pointer transition relative ${
              activeTab === 'history'
                ? 'bg-[#f97316] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <History className="w-4 h-4" />
            <span>My Reservations</span>
            {localBookings.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-slate-900">
                {localBookings.length}
              </span>
            )}
          </button>
        </div>

        {/* Reservation Confirmation Drawer Popup */}
        {showConfirmation && latestBooking && (
          <div className="mb-8 bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center animate-fade-in relative shadow-xl">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold"
            >
              ✕
            </button>
            <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-400 w-fit mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Booking Initialized Successfully!</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
              Your unique reservation reference ID is <strong className="text-emerald-400 font-mono text-base">{latestBooking.id}</strong>. 
              To finish setup and lock in prices, please dispatch these details to our manager using the buttons below:
            </p>

            {/* Twin submission actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-lg mx-auto">
              <a
                id="whatsapp-booking-dispatch-btn"
                href={getWhatsAppURL(latestBooking)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                referrerPolicy="no-referrer"
              >
                <span className="font-bold">Send to WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="email-booking-dispatch-btn"
                href={getEmailMailto(latestBooking)}
                className="flex items-center justify-center space-x-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold border border-slate-700 py-3.5 px-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Send Owner Email</span>
              </a>
            </div>
            
            <p className="text-[11px] text-slate-400 mt-4 leading-normal">
              *Local booking has been stored in your browser session history. You can access it anytime under 'My Reservations'.
            </p>
          </div>
        )}

        {/* BOOKING TAB FORM */}
        {activeTab === 'book' && (
          <form
            id="slt-booking-form-element"
            onSubmit={handleBookingSubmit}
            className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field: Customer Name */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Enter Contact Persona Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
                />
              </div>

              {/* Field: Phone Number */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10 Digit Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
                />
              </div>

              {/* Field: Pickup Location */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Pickup Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SR Nagar / Secunderabad / RGIA Airport"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
                />
              </div>

              {/* Field: Destination */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Destination Location <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tirupati / Srisailam / Goa Tours"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-950 border border-[#f97316] focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
                />
              </div>

              {/* Field: Travel Date */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Journey Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm cursor-pointer"
                />
              </div>

              {/* Field: Return Date */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Return Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  required
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm cursor-pointer"
                />
              </div>

              {/* Field: Vehicle Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Vehicle Type Preferred</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm cursor-pointer"
                >
                  <option value="12 Seater Tempo Traveller">12 Seater Tempo Traveller (Executive Space)</option>
                  <option value="20 Seater Mini Bus">20 Seater Mini Bus (Corporate/Marriage)</option>
                  <option value="40 Seater Large Bus">40 Seater Large Bus (Event/School Tours)</option>
                  <option value="Premium Luxury Tourist Coach">Premium Luxury Tourist Coach (VIP Sleepers)</option>
                </select>
              </div>

              {/* Field: Number of Passengers */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">No. of Passengers</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={numPassengers}
                  onChange={(e) => setNumPassengers(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
                />
              </div>

            </div>

            {/* Field: Special Requirements / Notes */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400">Special Notes / Route Tour Details</label>
              <textarea
                rows={3}
                placeholder="List elder passenger needs, luggage specifics, or particular sightseeing spots you want the driver to cover..."
                value={specialRequirements}
                onChange={(e) => setSpecialRequirements(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-3 px-4 text-slate-200 text-sm"
              />
            </div>

            <button
              id="submit-booking-form-btn"
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-extrabold text-base py-4 rounded-xl shadow-lg border border-sky-400/10 cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Submit Booking & Generate WhatsApp Link
            </button>
          </form>
        )}

        {/* RESERVATIONS HISTORY LIST PAGE */}
        {activeTab === 'history' && (
          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
            <h3 className="text-xl font-bold border-b border-slate-800 pb-3 flex items-center space-x-2">
              <ClipboardCheck className="w-5 h-5 text-sky-400" />
              <span>Your Bookings List</span>
            </h3>

            {localBookings.length > 0 ? (
              <div className="space-y-4" id="booking-history-list">
                {localBookings.map((b) => (
                  <div
                    key={b.id}
                    id={`history-row-${b.id}`}
                    className="bg-slate-950 p-5 rounded-xl border border-slate-850 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-sky-400 font-mono">{b.id}</span>
                        <span className="text-[10px] bg-sky-500/10 text-sky-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{b.status}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
                        <div>
                          <span className="text-slate-500 block text-[10px]">Route:</span>
                          <span className="font-semibold">{b.pickupLocation} → {b.destination}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Dates:</span>
                          <span className="font-semibold">{b.travelDate} to {b.returnDate}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Vehicle:</span>
                          <span className="font-semibold text-amber-500">{b.vehicleType}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block text-[10px]">Passengers:</span>
                          <span className="font-semibold">{b.numPassengers} Seats</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto border-t md:border-0 pt-3 md:pt-0">
                      <a
                        id={`whatsapp-histor-link-${b.id}`}
                        href={getWhatsAppURL(b)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 md:flex-none text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-center cursor-pointer"
                        referrerPolicy="no-referrer"
                      >
                        WhatsApp Owner
                      </a>
                      <a
                        id={`email-history-link-${b.id}`}
                        href={getEmailMailto(b)}
                        className="text-xs bg-slate-800 hover:bg-slate-705 text-slate-100 font-bold py-2 px-3 rounded-lg text-center"
                      >
                        Email Draft
                      </a>
                      <button
                        id={`delete-history-btn-${b.id}`}
                        onClick={() => deleteBooking(b.id)}
                        className="text-slate-500 hover:text-red-400 p-2 rounded cursor-pointer"
                        title="Delete record from your view"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10" id="empty-history-notice">
                <p className="text-slate-400 text-sm font-semibold">No bookings registered in current browser session yet.</p>
                <button
                  id="switch-to-new-booking-btn"
                  onClick={() => setActiveTab('book')}
                  className="mt-4 bg-[#f97316] hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl"
                >
                  Create Your First Booking Option
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
