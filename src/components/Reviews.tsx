/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, MessageSquareCode, Search, User, Sparkles, SlidersHorizontal } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [starFilter, setStarFilter] = useState<number>(0);

  // New review form states
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newLocation, setNewLocation] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  // Sync sample data and load any custom reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('slt_travels_custom_reviews');
      if (stored) {
        const parsed: Review[] = JSON.parse(stored);
        setReviewsList([...parsed, ...SAMPLE_REVIEWS]);
      } else {
        setReviewsList(SAMPLE_REVIEWS);
      }
    } catch (e) {
      setReviewsList(SAMPLE_REVIEWS);
    }
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newMessage) {
      alert("Please provide both name and feedback text.");
      return;
    }

    const newObj: Review = {
      id: "rev-user-" + Date.now(),
      name: newName,
      rating: newRating,
      date: new Date().toISOString().split('T')[0],
      message: newMessage,
      location: newLocation || "Hyderabad Visitor"
    };

    // Save custom list separately in localStorage
    try {
      const stored = localStorage.getItem('slt_travels_custom_reviews');
      const parsed: Review[] = stored ? JSON.parse(stored) : [];
      const updatedCustom = [newObj, ...parsed];
      localStorage.setItem('slt_travels_custom_reviews', JSON.stringify(updatedCustom));
      setReviewsList([newObj, ...reviewsList]);
    } catch (err) {
      setReviewsList([newObj, ...reviewsList]);
    }

    setNewName('');
    setNewLocation('');
    setNewMessage('');
    setNewRating(5);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  const filteredReviews = reviewsList.filter(rev => {
    const matchesSearch =
      rev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (rev.location && rev.location.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStars = starFilter === 0 || rev.rating === starFilter;
    return matchesSearch && matchesStars;
  });

  return (
    <section id="reviews" className="py-24 bg-slate-950 border-b border-slate-900 text-white overflow-hidden scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3.5 py-1 rounded-full border border-[#f97316]/10">Customer Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            What Our Honorable Guests Say
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Real feedback from families, corporate managers, and group tour coordinators who booked with SLT Travels Hyderabad.
          </p>
          <div className="w-16 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Big Dashboard Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Average Rating Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Average Guest Score</span>
            <span className="text-5xl font-black text-white font-sans mt-1">4.9</span>
            
            {/* Stars */}
            <div className="flex items-center space-x-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            
            <p className="text-xs text-slate-400">Based on 248 verified Hyderabad bookings</p>
          </div>

          {/* Search/Filters Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-sky-400" />
              <span>Search & Filter Testimonials</span>
            </h4>

            {/* Keyword Search */}
            <div className="relative">
              <Search className="absolute top-3 left-3 w-4 h-4 text-slate-500" />
              <input
                id="review-search-bar"
                type="text"
                placeholder="Search reviews (e.g., 'Tirupati', 'AC', 'clean')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none rounded-xl py-2 px-3 pl-10 text-xs text-slate-200"
              />
            </div>

            {/* Filter by star */}
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-400">Select Rating:</span>
              <select
                id="review-star-select"
                value={starFilter}
                onChange={(e) => setStarFilter(Number(e.target.value))}
                className="bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold rounded-lg py-1.5 px-2.5"
              >
                <option value={0}>Show All Ratings</option>
                <option value={5}>5 Star Only</option>
                <option value={4}>4 Star Only</option>
              </select>
            </div>
          </div>

          {/* Add Review Trigger Card */}
          <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-1.5">
              <h4 className="font-bold text-white text-base">Travelled with us recently?</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Share your vehicle experience to help us maintain high-quality service standards. Thank you for your support!
              </p>
            </div>
            
            <button
              id="toggle-review-form-btn"
              onClick={() => {
                setShowForm(!showForm);
                setSuccessMsg(false);
              }}
              className="mt-4 bg-sky-500 hover:bg-sky-650 text-slate-950 font-bold text-xs py-3 rounded-xl cursor-pointer"
            >
              {showForm ? "Close Review Dashboard" : "Post Direct Review Now"}
            </button>
          </div>

        </div>

        {/* Dynamic New Review Form */}
        {showForm && (
          <div className="bg-slate-900 border border-sky-500/20 p-6 sm:p-8 rounded-2xl mb-12 shadow-2xl max-w-2xl mx-auto animate-fade-in relative">
            <button
              id="close-feedback-form-btn"
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <MessageSquareCode className="w-5 h-5 text-sky-400" />
              <span>Write Your Review Details</span>
            </h4>

            {successMsg && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-3 mb-4 text-xs font-bold text-center">
                ✓ Success! Your review is saved and updated below instantly!
              </div>
            )}

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 pl-4 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Your Location</label>
                  <input
                    type="text"
                    placeholder="e.g. SR Nagar, Hyderabad"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 pl-4 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 block pb-1">Review Rating Score *</label>
                <div className="flex items-center space-x-2 bg-slate-950 px-3 py-2 border border-slate-800 w-fit rounded-lg">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      type="button"
                      key={value}
                      onClick={() => setNewRating(value)}
                      className="p-1 cursor-pointer transition transform hover:scale-110"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          newRating >= value ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-slate-400 ml-2">({newRating}/5 Stars)</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400">Describe Your Journey with SLT Travels *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about the vehicle quality, driver cooperation, and journey comforts..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                id="post-feedback-submit-btn"
                type="submit"
                className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm"
              >
                Post Guest Feedback
              </button>
            </form>
          </div>
        )}

        {/* Grid List of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-grid-list">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                id={`review-box-${rev.id}`}
                className="bg-slate-900 border border-slate-850/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:border-slate-800 transition"
              >
                <div className="space-y-3">
                  
                  {/* Testimonial Stars */}
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.message}"
                  </p>

                </div>

                {/* Footer Bio */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center space-x-3 text-left">
                  <div className="bg-slate-950 p-2 border border-slate-800 rounded-full text-slate-300 shrink-0">
                    <User className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-sm font-extrabold text-white truncate">{rev.name}</h5>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                      <span className="truncate">{rev.location || "Hyderabad Customer"}</span>
                      <span className="shrink-0 font-mono ml-4">{rev.date}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm font-bold">No customer reviews match your keyword search phrases.</p>
              <button
                id="reset-review-search-btn"
                onClick={() => {
                  setSearchQuery('');
                  setStarFilter(0);
                }}
                className="mt-4 bg-[#f97316] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
