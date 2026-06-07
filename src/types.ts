/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Vehicle {
  id: string;
  name: string;
  category: 'tempo-traveller' | 'mini-bus' | 'bus' | 'luxury-coach';
  capacity: number;
  features: string[];
  image: string;
  description: string;
  pricingInfo?: string;
  specs: {
    ac: boolean;
    luggage: string;
    pushback: boolean;
    musicSystem: boolean;
  };
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  distanceFromHyd: string;
  recommendedDuration: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlight: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  message: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'vehicles' | 'interiors' | 'destinations' | 'tours';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  returnDate: string;
  vehicleType: string;
  numPassengers: number;
  specialRequirements?: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}
