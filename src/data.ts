/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Vehicle, Destination, Service, Review, GalleryItem, FAQItem } from './types';

// Company Contact Details
export const CONTACT_DETAILS = {
  companyName: "SDT Travels",
  address: "H.No: 146/C, Near Saibaba Temple Road, Vengal Rao Nagar, Sanjeeva Reddy Nagar, Hyderabad, Telangana – 500038",
  phone: "8919658894",
  phoneFormatted: "+91 89196 58894",
  whatsappPhone: "918919658894",
  email: "satishbysani83@gmail.com",
  businessHours: "Open 24/7 (Booking & Customer Support)",
  tagline: "Making Every Journey Comfortable, Safe & Memorable.",
  mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2758113264625!2d78.44143417516629!3d17.446487583451556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90ef9929ebff%3A0xa1b1d3d62325ae84!2sVengal%20Rao%20Nagar%2C%20Sanjeeva%20Reddy%20Nagar%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1717743940294!5m2!1sen!2sin"
};

// Website Statistics
export const STATISTICS = [
  { value: "15,000+", label: "Happy Customers" },
  { value: "45+", label: "Vehicles Available" },
  { value: "10+", label: "Years of Experience" },
  { value: "22,000+", label: "Trips Completed" }
];

// About Us Points
export const WHY_CHOOSE_US = [
  {
    title: "Experienced & Verified Drivers",
    description: "Our professional drivers are fully licensed, well-trained in outstation routes, and dedicated to on-time, courteous service."
  },
  {
    title: "Clean & Sanitized Fleet",
    description: "Every car, tempo traveller, and bus undergoes comprehensive deep cleaning and sanitization before every single assignment."
  },
  {
    title: "Transparent & Affordable Pricing",
    description: "No hidden charges, tolls, or surprise driver fees. We offer customizable packages that fit every budget."
  },
  {
    title: "24/7 Dispatch & Support",
    description: "Our round-the-clock backup fleet service guarantees help or a replacement vehicle in the rare event of mechanical issues."
  },
  {
    title: "Ultimate Safe & Comfortable Travel",
    description: "Equipped with speed governors, responsive braking, GPS trackers, first aid, fire extinguishers, and modern pushback seats."
  }
];

// Fleet Data
export const FLEET_DATA: Vehicle[] = [
  {
    id: "tt-12-seater",
    name: "12 Seater Tempo Traveller",
    category: "tempo-traveller",
    capacity: 12,
    description: "The ideal choices for family pilgrimages, weekend getaways, and friend tours. Engineered with luxury pushback captain seats and a super efficient high-cooling air conditioning system.",
    features: [
      "Plush 2x1 seating with adjustable armrests",
      "Ducted Dual Air Conditioning vents for each passenger",
      "Surround sound Bluetooth audio & LED TV entertainment system",
      "Separate heavy baggage rear trunk & top luggage rack",
      "Abundant footroom and clear standing height ceiling"
    ],
    image: "https://images.unsplash.com/photo-1549417229-267988221920?auto=format&fit=crop&q=80&w=800",
    pricingInfo: "Best rates for Local & Outstation starting from ₹18/km",
    specs: {
      ac: true,
      luggage: "Generous Rear Carrier",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "mini-bus-20-seater",
    name: "20 Seater Mini Bus",
    category: "mini-bus",
    capacity: 20,
    description: "Perfect for corporate groups, wedding parties, and medium-scale team events. Combines outstanding reliability with high seating capability to deliver extreme comfort at a low price.",
    features: [
      "Comfortable wide seats with ample cushion support",
      "High capacity industrial AC blower system",
      "Dynamic sound system with microphone for tour announcements",
      "Overhead hand-luggage rails + spacious underbelly hold",
      "Tinted UV-absorbing glass windows with quality curtains"
    ],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    pricingInfo: "Starts from ₹24/km (Custom Corporate packages available)",
    specs: {
      ac: true,
      luggage: "Heavy Passenger Bay Holds",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "bus-40-seater",
    name: "40 Seater Large Bus",
    category: "bus",
    capacity: 40,
    description: "Specifically engineered for massive group transport, including multi-family pilgrimages to Srisailam or Tirupati, corporate annual retreats, and school excursions.",
    features: [
      "Heavy duty suspension ensuring zero vibration on highways",
      "Premium layout spacing with wide central walking aisle",
      "Multi-channel musical system & twin-folding LCD monitors",
      "Excellent commercial baggage compartments matching 40 bags",
      "Enhanced standard emergency exits and fire safety certifications"
    ],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    pricingInfo: "Ideal for large groups at optimal cost per passenger",
    specs: {
      ac: true,
      luggage: "Full Size Underbelly Holds",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "coach-luxury",
    name: "Premium Luxury Tourist Coach",
    category: "luxury-coach",
    capacity: 45,
    description: "Experience absolute VIP treatment with semi-sleeper leather seats, individual passenger control panels, and state-of-the-art air suspension technology for a feather-light ride.",
    features: [
      "Super premium calf-rest adjustable semi-sleeper leather seats",
      "Fully customized individual multi-setting climate control switch",
      "Direct USB fast chargers integrated into each seat armrest",
      "Professional HD infotainment screens and high fidelity audio",
      "Elegant interior neon ambient lighting & soft floor carpeting"
    ],
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800",
    pricingInfo: "Custom quoting for luxury interstate and state travels",
    specs: {
      ac: true,
      luggage: "Gigantic Cargo Area",
      pushback: true,
      musicSystem: true
    }
  }
];

// Services
export const SERVICES: Service[] = [
  {
    id: "tourism-packages",
    title: "Leisure Tourism Packages",
    icon: "Compass",
    description: "Tailor-made customized tours from Hyderabad to anywhere in South India. Our drivers know every route, viewpoint, and dining spot to maximize your tour enjoyment.",
    highlight: "Customized Itineraries"
  },
  {
    id: "outstation-trips",
    title: "Outstation Trips",
    icon: "MapPin",
    description: "Reliable round-trip and one-way travel across state boundaries. Travel seamlessly with all state permits pre-cleared by SDT Travels for zero stops.",
    highlight: "All-India Permits Included"
  },
  {
    id: "local-sightseeing",
    title: "Local Hyderabad Sightseeing",
    icon: "Camera",
    description: "Comprehensive full and half day Hyderabad tours including Charminar, Golconda Fort, Salar Jung Museum, Hussain Sagar Lake, and Birla Mandir.",
    highlight: "8 Hrs / 80 Kms Packs"
  },
  {
    id: "airport-transfers",
    title: "Airport Pickups & Drops",
    icon: "Plane",
    description: "Zero-latency transfers to and from Rajiv Gandhi International Airport (RGIA). Enjoy pre-flight peace of mind with 100% on-time assurances.",
    highlight: "24 Hours Guaranteed On-Time"
  },
  {
    id: "corporate-travel",
    title: "Corporate Transportation",
    icon: "Briefcase",
    description: "Premium shuttle solutions for personnel daily commute, executive airport pickups, out-of-town client excursions, and annual team conferences.",
    highlight: "GST Invoices & Corporate Accounts"
  },
  {
    id: "wedding-travel",
    title: "Wedding Transportation",
    icon: "Heart",
    description: "Coordinate guest transfers flawlessly. Provide safe, stylish and coordinated vehicle fleets for family members, baraatis, and VIP marriage guests.",
    highlight: "Fleet Coordination Officers"
  },
  {
    id: "school-college-tours",
    title: "School & College Tours",
    icon: "GraduationCap",
    description: "Highly secure group tours with verified drivers under stringent safety benchmarks, emergency tracking, and friendly support staff.",
    highlight: "Strict Child Safety Standards"
  },
  {
    id: "pilgrimage-tours",
    title: "Pilgrimage Specialty Tours",
    icon: "ShieldAlert", // Standard icon representing peace / faith: we can map it to something nice like "Sparkles" or "Globe"
    description: "Frequent spiritual and devotional circuits from Hyderabad to sacred shrines like Tirupati, Srisailam, Yadadri, and Mantralayam.",
    highlight: "Elder-Friendly Slp Driver Care"
  }
];

// Popular Destinations
export const DESTINATIONS: Destination[] = [
  {
    id: "hyd-dest",
    name: "Hyderabad (Local Sightseeing)",
    image: "HYD_PLACEHOLDER", // We will link this directly to the generated image in the React files
    description: "Explore the magical blend of rich Nizami history and modern high-tech city life with customized day packages.",
    distanceFromHyd: "0 Kms (Local Hub)",
    recommendedDuration: "1 to 2 Days"
  },
  {
    id: "tirupati-dest",
    name: "Tirupati (Lord Venkateswara Shrine)",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    description: "Embark on an auspicious, stress-free spiritual journey to the world-famous hill Temple of Tirumala Hills.",
    distanceFromHyd: "560 Kms",
    recommendedDuration: "2 to 3 Days"
  },
  {
    id: "srisailam-dest",
    name: "Srisailam (Mallikarjuna Jyotirlinga)",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600",
    description: "Travel through beautiful thick Nallamala forest reserves to seek divine blessings at Srisailam Jyotirlinga temple.",
    distanceFromHyd: "230 Kms",
    recommendedDuration: "1 to 2 Days"
  },
  {
    id: "ramoji-dest",
    name: "Ramoji Film City",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80&w=600",
    description: "The ultimate family-friendly fun spot destination. World's largest integrated film studio complex with sets & thematic parks.",
    distanceFromHyd: "35 Kms",
    recommendedDuration: "1 Day Trip"
  },
  {
    id: "goa-dest",
    name: "Goa (Sun, Sand & Beaches)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    description: "Perfect Group tour outstation route. Visit heritage churches, exotic sandy beaches, and enjoy pristine coastal seafood.",
    distanceFromHyd: "650 Kms",
    recommendedDuration: "4 to 5 Days"
  },
  {
    id: "ooty-dest",
    name: "Ooty (Queen of Hill Stations)",
    image: "https://images.unsplash.com/photo-1550523285-0be1194a0f44?auto=format&fit=crop&q=80&w=600",
    description: "Escape the Hyderabad summer heat in spectacular tea valleys, botanical gardens, and misty Nilgiri hills.",
    distanceFromHyd: "850 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "coorg-dest",
    name: "Coorg (Scotland of India)",
    image: "https://images.unsplash.com/photo-1622308644420-b003a743ba4c?auto=format&fit=crop&q=80&w=600",
    description: "Immerse your family in world-class coffee fields, beautiful waterfalls, and breathtaking mist-covered view towers.",
    distanceFromHyd: "810 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "kerala-dest",
    name: "Kerala (God's Own Country)",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=600",
    description: "Enjoy peaceful cruises in a deluxe houseboat cruising along the scenic green backwaters of Alleppey or Kumarakom.",
    distanceFromHyd: "950 Kms",
    recommendedDuration: "5 to 7 Days"
  },
  {
    id: "bangalore-dest",
    name: "Bangalore (Garden City Hub)",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600",
    description: "Drive to the Silicon Valley of India for business projects, beautiful weather parks, and famous multi-cuisine food culture.",
    distanceFromHyd: "570 Kms",
    recommendedDuration: "2 to 3 Days"
  },
  {
    id: "mysore-dest",
    name: "Mysore (City of Grand Palaces)",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=600",
    description: "Behold the extraordinary architectural brilliance of the illuminated Mysore Palace and historical ruins of Tipu Sultan.",
    distanceFromHyd: "710 Kms",
    recommendedDuration: "2 to 3 Days"
  }
];

// Customer Testimonials - 11 realistic reviews
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh K. Reddy",
    rating: 5,
    date: "2026-05-18",
    message: "Booked a 12 Seater Tempo Traveller for a 3-day family pilgrimage to Tirupati from Hyderabad. The vehicle was spotlessly clean, showing zero engine noises. Driver Satish was very gentle, navigated through Tirumala hills very safely, and guided us with Temple parking rules perfectly. Appreciate SDT Travels' professional support!",
    location: "Kukatpally, Hyderabad"
  },
  {
    id: "rev-2",
    name: "Priyanka Sharma",
    rating: 5,
    date: "2026-05-29",
    message: "Extremely professional vehicle transportation provider service! Our corporate team hired a 20 Seater Mini Bus for our annual team outing. The seats were very comfortable, AC worked excellently even in Hyderabad's hot noon, and the pricing was entirely transparent with all permits included. Strongly recommended for group excursions.",
    location: "Gachibowli, Hyderabad"
  },
  {
    id: "rev-3",
    name: "Venkata Rao",
    rating: 5,
    date: "2026-04-12",
    message: "Travelled to Srisailam with grandparents. The driver was extremely cooperative and patient. He drove carefully across Nallamala forest ghat roads and stopped the vehicle on-demand at scenic rest points. Highly polite team and clean pushback seats.",
    location: "Dilshuknagar, Hyderabad"
  },
  {
    id: "rev-4",
    name: "Amit Malhotra",
    rating: 5,
    date: "2026-06-02",
    message: "Wonderful experience renting a luxury tourist coach from SDT Travels for a destination wedding transport. They coordinated 3 vehicles seamlessly. The buses were in top condition, interiors were premium with USB charger ports in each armrest. Excellent value for money.",
    location: "Begumpet, Hyderabad"
  },
  {
    id: "rev-5",
    name: "Komal Gowda",
    rating: 4,
    date: "2026-05-05",
    message: "Booked an outstation trip to Coorg. Since it was a long journey, we requested comfortable suspension and a high-end sound system. SDT Travels kept their word! The tempo traveller had a great music system which made our drive thoroughly enjoyable. Will book again.",
    location: "SR Nagar, Hyderabad"
  },
  {
    id: "rev-6",
    name: "Dr. Srinivas Prasad",
    rating: 5,
    date: "2026-03-24",
    message: "Rented their 40 Seater Bus for a college excursion trip. Our students were highly happy with the interactive layout and premium pushback seats. The vehicle had high-end safety features and a very experienced driver. Easy booking experience via WhatsApp.",
    location: "Tarnaka, Hyderabad"
  },
  {
    id: "rev-7",
    name: "Anjali Deshmukh",
    rating: 5,
    date: "2026-05-22",
    message: "Airport pick and drop was exceptionally fast and punctual. The driver was already holding a custom name card at the Rajiv Gandhi International Airport waiting section before we landed. Extremely stress-free service for business travellers.",
    location: "Himayatnagar, Hyderabad"
  },
  {
    id: "rev-8",
    name: "Balakrishna G.",
    rating: 5,
    date: "2026-05-09",
    message: "I usually hesitate booking online, but after calling Satish directly, everything was settled smoothly. Transparent quotation was sent on WhatsApp immediately. Traveled to Ramoji Film City with 15 family members. Unmatched service quality and prompt punctuality.",
    location: "Miyapur, Hyderabad"
  },
  {
    id: "rev-9",
    name: "Nikhil & Friends",
    rating: 5,
    date: "2026-06-05",
    message: "Rented 12-seater to Goa. It was a long journey of 15 hours but the pushback seats and high cooling kept our energy high. The driver was absolute hero, navigating all shortcuts. Thanks to SDT travels for making our vacation highly memorable.",
    location: "Madhapur, Hyderabad"
  },
  {
    id: "rev-10",
    name: "Sujatha Reddy",
    rating: 4,
    date: "2026-04-30",
    message: "Very reliable travel team! Booked Yadadri sightseeing tour. Neat driver, neat seats, proper timing. Price was also very competitive compared to other Travels in Hyderabad. Safe for all-women trip.",
    location: "Secunderabad"
  },
  {
    id: "rev-11",
    name: "Pranav Shah",
    rating: 5,
    date: "2026-05-15",
    message: "Excellent corporate rates and clean GST invoicing. We keep hiring their vehicles for VIP guests visiting our IT campus. Drivers speak English, Hindi, and Telugu, which is incredibly helpful.",
    location: "Hitech City, Hyderabad"
  }
];

// Gallery Images
export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1549417229-267988221920?auto=format&fit=crop&q=80&w=500",
    title: "12 Seater Tempo Traveller Executive Model",
    category: "vehicles"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=500",
    title: "20 Seater Medium Tourist Shuttle",
    category: "vehicles"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=500",
    title: "40 Seater Spacious Coach Bus Ready for Boarding",
    category: "vehicles"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=500",
    title: "Family Tour Gathering - Kerala Trip",
    category: "tours"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=500",
    title: "Premium Pushback Seats and Clean AC Duct Interiors",
    category: "interiors"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=500",
    title: "Luxury Tourist Coach - VIP Recliner Layout",
    category: "interiors"
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500",
    title: "Goa Beachfront Travel Outstation Excursion",
    category: "destinations"
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1550523285-0be1194a0f44?auto=format&fit=crop&q=80&w=500",
    title: "Ooty Tea Garden Scenic Views",
    category: "destinations"
  },
  {
    id: "gal-9",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=500",
    title: "Customer Group Sightseeing Photo - Srisailam Dam Backdrop",
    category: "tours"
  },
  {
    id: "gal-10",
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=500",
    title: "Kerala Backwaters Houseboat Trip",
    category: "destinations"
  }
];

// FAQs for SEO-Structured Schema Markup
export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book a vehicle with SDT Travels?",
    answer: "You can book easily by filling out our online booking form on the website. Once submitted, a customized booking layout text will be generated, which you can send instantly to our WhatsApp at 8919658894. Alternatively, you can click the 'Call Now' floating button or dial/message 8919658894 directly for an instant quotation."
  },
  {
    id: "faq-2",
    question: "Do the pricing rates include state permits, tolls, and driver allowances?",
    answer: "Yes, we prioritize extreme transparency! Depending on your chosen tour package, our quotes can be inclusive of interstate tax permits, toll gates, parking charges, and night-shift driver allowances so you enjoy stress-free rides with zero supplementary bill surprises."
  },
  {
    id: "faq-3",
    question: "Are your tourist vehicles clean and fully sanitized before trips?",
    answer: "Absolutely! The safety and hygiene of our guests are our top concerns. Every tempo traveller, mini bus, and holiday car undergoes deep vacuuming, sanitization of seat surfaces, handholds, steering wheels, and air conditioning duct checks before leaving the garage."
  },
  {
    id: "faq-4",
    question: "What happens if a vehicle experiences a breakdown during an outstation journey?",
    answer: "We offer complete 24/7 client dispatch backup. In the extremely rare event of a mechanical delay, we either send an local repair mechanic instantly or deploy an alternative backup vehicle from our nearest coordinate terminal immediately to ensure your trip schedule isn't affected."
  },
  {
    id: "faq-5",
    question: "Can we book local Hyderabad sightseeing tours as well as multi-day corporate trips?",
    answer: "Yes, we cater to all requirements! We offer specialized 8 Hours / 80 Kms packages for local Hyderabad city visits (Charminar, Golconda, etc.), 1-day tours to Ramoji Film City, and custom point-to-point transfers, alongside long-term corporate monthly commuter contracts or multi-state tour itineraries."
  },
  {
    id: "faq-6",
    question: "What languages do your drivers speak?",
    answer: "Our drivers are highly friendly, seasoned professionals who speak fluent Telugu, Hindi, and basic English, allowing smooth guidance and clear communication with local and outbound passengers alike."
  }
];
