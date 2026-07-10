/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Vehicle, Destination, Service, Review, GalleryItem, FAQItem } from './types';

// Company Contact Details
export const CONTACT_DETAILS = {
  companyName: "SLT - Tempo Traveller on rent Hyderabad 17,22 seater 12 seats tempo Traveller rent hyderabad",
  address: "h.no: 146/C, near Saibaba Temple Road, Vengal Rao Nagar, Sanjeeva Reddy Nagar, Hyderabad, Telangana",
  phone: "09010969511",
  phoneFormatted: "090109 69511",
  whatsappPhone: "919010969511",
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
    description: "The ideal choice for family pilgrimages, weekend getaways, and friend tours. Engineered with luxury pushback captain seats and a super efficient high-cooling air conditioning system.",
    features: [
      "Plush 2x1 seating with adjustable armrests",
      "Ducted Dual Air Conditioning vents for each passenger",
      "Surround sound Bluetooth audio & LED TV entertainment system",
      "Separate heavy baggage rear trunk & top luggage rack",
      "Abundant footroom and clear standing height ceiling"
    ],
    image: "https://www.taxiyatri.com/images/9-seater-tempo-traveller.webp",
    pricingInfo: "Best rates for Local & Outstation travel",
    specs: {
      ac: true,
      luggage: "Generous Rear Carrier",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "tt-16-seater",
    name: "16 Seater Luxury Tempo Traveller",
    category: "tempo-traveller",
    capacity: 16,
    description: "Premium option for medium-sized family groups or executive business transfers. Features wider seating layouts, custom fast USB charging ports, and modern LCD entertainment panels.",
    features: [
      "Comfortable 2x1 luxury seating arrangement",
      "High capacity climate control AC units",
      "Individual fast USB charger sockets on armrests",
      "Dedicated rear luggage bay & overhead racks",
      "High-end music system with quality Bluetooth player"
    ],
    image: "https://5.imimg.com/data5/GLADMIN/Default/2023/9/347532170/AV/EP/RN/91527/16-seater-tempo-traveller-rental-250x250.jpg",
    pricingInfo: "Premium executive ride at competitive rates",
    specs: {
      ac: true,
      luggage: "Rear trunk & Overhead rack",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "minibus-22-seater",
    name: "22 Seater Premium Mini Bus",
    category: "mini-bus",
    capacity: 22,
    description: "Perfect for corporate groups, wedding parties, and medium-scale team events. Combines outstanding highway stability with high seating capability to deliver comfort at a low price.",
    features: [
      "Comfortable wide seats with ample cushion support",
      "High capacity industrial AC blower system",
      "Dynamic sound system with microphone for announcements",
      "Overhead hand-luggage rails + spacious underbelly hold",
      "Tinted UV-absorbing glass windows with quality curtains"
    ],
    image: "https://manideepikatravels.in/wp-content/uploads/2024/04/22-seater-mini-bus-rent-in-hyderabad.jpeg",
    pricingInfo: "Custom corporate packages available",
    specs: {
      ac: true,
      luggage: "Heavy Underbelly Holds",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "minibus-28-seater",
    name: "28 Seater Deluxe Mini Bus",
    category: "mini-bus",
    capacity: 28,
    description: "Ideal for large wedding caravans, pilgrimage tours, and school excursions. Features advanced air suspension for standard bumpy road comfort, high-end sound speakers, and spacious luggage hold bays.",
    features: [
      "Deluxe pushback seats with adjustable recliner settings",
      "Powerful dual cooling AC system",
      "Bluetooth stereo system + twin folding LCD TV panels",
      "Large commercial side underbelly cargo cabinets",
      "Air suspension system ensuring smooth travel"
    ],
    image: "https://www.taxiyatri.com/images/mini-bus-28.jpeg",
    pricingInfo: "Best value for wedding groups & tours",
    specs: {
      ac: true,
      luggage: "Spacious Side Cargo Holds",
      pushback: true,
      musicSystem: true
    }
  },
  {
    id: "bus-40-seater",
    name: "40 Seater Large Tourist Bus",
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
    image: "https://smtravelhub.com/assets/img/bus/5.jpeg",
    pricingInfo: "Optimal cost-effective large group travel",
    specs: {
      ac: true,
      luggage: "Full Size Underbelly Holds",
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
    description: "Reliable round-trip and one-way travel across state boundaries. Travel seamlessly with all state permits pre-cleared by SLT Travels for zero stops.",
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

// Popular Destinations categorized by Indian State
export const DESTINATIONS: Destination[] = [
  // --- Andhra Pradesh ---
  {
    id: "tirupati-dest",
    name: "Tirupati Temple",
    state: "Andhra Pradesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
    description: "Embark on an auspicious, stress-free spiritual journey to the world-famous hill Temple of Tirumala Hills.",
    distanceFromHyd: "560 Kms",
    recommendedDuration: "2 to 3 Days"
  },
  {
    id: "srisailam-dest",
    name: "Srisailam Jyotirlinga",
    state: "Andhra Pradesh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtVUfokM_ifRkkRlimUw6n3ioqiGH8xexpQY5xIL0muhdlXPNzbLOwKo6&s=10",
    description: "Travel through beautiful thick Nallamala forest reserves to seek divine blessings at Mallikarjuna Jyotirlinga temple.",
    distanceFromHyd: "230 Kms",
    recommendedDuration: "1 to 2 Days"
  },
  {
    id: "vizag-dest",
    name: "Vizag & Araku Valley",
    state: "Andhra Pradesh",
    image: "https://www.esamskriti.com/essays/docfile/42_3765.jpg",
    description: "A combination of beautiful sandy beaches in Visakhapatnam and scenic green coffee plantations of Araku Valley.",
    distanceFromHyd: "620 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "vijayawada-dest",
    name: "Vijayawada City",
    state: "Andhra Pradesh",
    image: "https://i.ytimg.com/vi/_48cl14iawk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVsFDJFWsYav_6l8whO04_gGR3CA",
    description: "Visit the famous Kanaka Durga Temple located on Indrakeeladri Hills and take a boat ride on the Krishna River.",
    distanceFromHyd: "275 Kms",
    recommendedDuration: "1 to 2 Days"
  },

  // --- Telangana ---
  {
    id: "hyd-dest",
    name: "Hyderabad Sightseeing",
    state: "Telangana",
    image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/0f/98/f7/df/charminar.jpg",
    description: "Explore the magical blend of rich Nizami history and modern high-tech city life with Charminar, Golconda and Ramoji.",
    distanceFromHyd: "Local Hub",
    recommendedDuration: "1 to 2 Days"
  },
  {
    id: "warangal-dest",
    name: "Warangal Heritage",
    state: "Telangana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaVfF04VKOr78pwpzHplg46Hq82vYQOijEMW3PW8zRwpzGOEiXbPv9d8g&s=10",
    description: "Witness the historical architectural marvels of the Kakatiya Dynasty, Thousand Pillar Temple, and Ramappa Temple.",
    distanceFromHyd: "150 Kms",
    recommendedDuration: "1 Day"
  },
  {
    id: "nagarjunasagar-dest",
    name: "Nagarjuna Sagar Dam",
    state: "Telangana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8qc7e3iqpVH55V6vXrFXr2DZlg_55-otIhGjxHcgTSTKVs8LIBNzo2VJ&s=10",
    description: "View the massive masonry dam on Krishna River, explore Nagarjunakonda museum island, and relax at Ethipothala waterfalls.",
    distanceFromHyd: "165 Kms",
    recommendedDuration: "1 Day"
  },
  {
    id: "ananthagiri-dest",
    name: "Ananthagiri Hills",
    state: "Telangana",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ananthagiri_Hills.JPG",
    description: "Misty forests, coffee fields, and trekking trails located close to Vikarabad. The birthplace of Musi River.",
    distanceFromHyd: "80 Kms",
    recommendedDuration: "1 Day"
  },

  // --- Karnataka ---
  {
    id: "bangalore-dest",
    name: "Bengaluru City",
    state: "Karnataka",
    image: "https://i.ytimg.com/vi/xTCkjrSKE2Y/maxresdefault.jpg",
    description: "Explore the Garden City of India, featuring historical palaces, Lalbagh botanical garden, and dynamic urban food culture.",
    distanceFromHyd: "570 Kms",
    recommendedDuration: "2 to 3 Days"
  },
  {
    id: "mysore-dest",
    name: "Mysore Palace",
    state: "Karnataka",
    image: "https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=",
    description: "Behold the extraordinary architectural brilliance of the illuminated Mysore Palace and historical ruins of Srirangapatna.",
    distanceFromHyd: "710 Kms",
    recommendedDuration: "2 to 3 Days"
  },
  {
    id: "coorg-dest",
    name: "Coorg Valleys",
    state: "Karnataka",
    image: "https://t4.ftcdn.net/jpg/08/66/94/01/360_F_866940191_ud3TRZ47bmZQar43zlesyDNTDo5yNm81.jpg",
    description: "Immerse yourself in spectacular green coffee fields, beautiful waterfalls, and breathtaking mist-covered mountain valleys.",
    distanceFromHyd: "810 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "hampi-dest",
    name: "Hampi Heritage",
    state: "Karnataka",
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEe7CeKogd6eWf9nbHj9A5N5UzdJ8cLIyPeRNWFNqCGxePytk9OjHiY9Bg6d2T8YcfXzhSXC7QuXhjQfSH4VBFlLwjw4XRpDAbOdd-K8UEhgHmXu5YIX2wAWVxo8yLtp8dnJ4iMI92sJSY=s1360-w1360-h1020-rw",
    description: "Journey back in time by walking through the ruins of the Vijayanagara Empire, Virupaksha Temple, and the stone chariot.",
    distanceFromHyd: "380 Kms",
    recommendedDuration: "2 to 3 Days"
  },

  // --- Kerala ---
  {
    id: "munnar-dest",
    name: "Munnar Hills",
    state: "Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEUm3rfM6Wsqx60OuMuakAVGKi4u5SP_lk0XhfMoyDw&s",
    description: "Escape to mist-laden mountains, pristine waterfalls, wild spice gardens, and endless fields of tea plantations.",
    distanceFromHyd: "1000 Kms",
    recommendedDuration: "3 to 5 Days"
  },
  {
    id: "alleppey-dest",
    name: "Alleppey Backwaters",
    state: "Kerala",
    image: "https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.jpg?s=612x612&w=0&k=20&c=9RnNr22SKJiNKuOukgfo82TtSgvSLMIZALXNf4m_VPM=",
    description: "Enjoy peaceful cruises in a deluxe houseboat cruising along the scenic green backwaters of Alleppey or Kumarakom.",
    distanceFromHyd: "1100 Kms",
    recommendedDuration: "4 to 5 Days"
  },

  // --- Tamil Nadu ---
  {
    id: "ooty-dest",
    name: "Ooty Lake & Hills",
    state: "Tamil Nadu",
    image: "https://thumbs.dreamstime.com/b/boats-pykara-lake-india-18068391.jpg",
    description: "Escape the summer heat in spectacular tea valleys, botanical gardens, and misty Nilgiri toy train hills.",
    distanceFromHyd: "850 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "kodaikanal-dest",
    name: "Kodaikanal Lake",
    state: "Tamil Nadu",
    image: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-8442f818f8902ad.jpg",
    description: "Walk through pine forests, row boats on the star-shaped Kodai Lake, and view valleys from Coaker's Walk.",
    distanceFromHyd: "920 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "rameshwaram-dest",
    name: "Rameshwaram Island",
    state: "Tamil Nadu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhaIB2O2FrpazGY5Jh-a4KA1P9PffMYwKw4WxbUV1xX9wzl8uyYu4s3I&s=10",
    description: "Drive over the Pamban Sea Bridge, visit the sacred Ramanathaswamy Temple, and explore the ghost town of Dhanushkodi.",
    distanceFromHyd: "1050 Kms",
    recommendedDuration: "3 to 4 Days"
  },

  // --- Goa ---
  {
    id: "goa-dest",
    name: "Goa Beaches",
    state: "Goa",
    image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    description: "Visit heritage Portuguese churches, relax on sandy beaches with water sports, and enjoy Dudhsagar waterfalls.",
    distanceFromHyd: "650 Kms",
    recommendedDuration: "4 to 5 Days"
  },

  // --- Maharashtra ---
  {
    id: "mumbai-dest",
    name: "Mumbai Gateways",
    state: "Maharashtra",
    image: "https://t4.ftcdn.net/jpg/11/11/02/93/360_F_1111029364_D5syoGSOV73th08qg9jso3t1fV8Gi1bt.jpg",
    description: "Visit the Gateway of India, drive along Marine Drive, explore Elephanta Caves, and shop in India's financial capital.",
    distanceFromHyd: "710 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "lonavala-dest",
    name: "Lonavala Valleys",
    state: "Maharashtra",
    image: "https://thumbs.dreamstime.com/b/lonavala-hill-station-situated-near-pune-city-maharashtra-india-180874400.jpg",
    description: "Famous hill station in the Western Ghats featuring scenic view points, ancient Karla Caves, and Bhushi Dam.",
    distanceFromHyd: "630 Kms",
    recommendedDuration: "2 Days"
  },

  // --- Rajasthan ---
  {
    id: "jaipur-dest",
    name: "Jaipur Forts",
    state: "Rajasthan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEluCnSJO8J4GQzzTH0KgbWNhQKqFjPG2brWGJvvGgSJTlZgEzXxENw5w&s=10",
    description: "Explore the Pink City, walk through Amber Fort, take photos at Hawa Mahal and Jal Mahal palaces.",
    distanceFromHyd: "1100 Kms",
    recommendedDuration: "3 to 4 Days"
  },
  {
    id: "udaipur-dest",
    name: "Udaipur Lakes",
    state: "Rajasthan",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-lake-palace-udaipur-rajasthan-attr-hero?qlt=82&ts=1742166394501",
    description: "Experience the Venice of the East with beautiful boat rides on Lake Pichola and tours of the grand City Palace.",
    distanceFromHyd: "1200 Kms",
    recommendedDuration: "3 to 4 Days"
  },

  // --- North India ---
  {
    id: "agra-dest",
    name: "Agra Taj Mahal",
    state: "North India",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    description: "Behold the eternal monument of love, the Taj Mahal, alongside the majestic Agra Fort and Fatehpur Sikri.",
    distanceFromHyd: "1250 Kms",
    recommendedDuration: "2 Days"
  },
  {
    id: "delhi-dest",
    name: "Delhi Heritage",
    state: "North India",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/4e/cd.jpg",
    description: "Tour India's historical capital including the Red Fort, Qutub Minar, India Gate, and Qawwali at Hazrat Nizamuddin.",
    distanceFromHyd: "1400 Kms",
    recommendedDuration: "3 to 4 Days"
  }
];

// Customer Testimonials - 11 realistic reviews
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh K. Reddy",
    rating: 5,
    date: "2026-05-18",
    message: "Booked a 12 Seater Tempo Traveller for a 3-day family pilgrimage to Tirupati from Hyderabad. The vehicle was spotlessly clean, showing zero engine noises. Driver Satish was very gentle, navigated through Tirumala hills very safely, and guided us with Temple parking rules perfectly. Appreciate SLT Travels' professional support!",
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
    message: "Wonderful experience renting a luxury tourist coach from SLT Travels for a destination wedding transport. They coordinated 3 vehicles seamlessly. The buses were in top condition, interiors were premium with USB charger ports in each armrest. Excellent value for money.",
    location: "Begumpet, Hyderabad"
  },
  {
    id: "rev-5",
    name: "Komal Gowda",
    rating: 4,
    date: "2026-05-05",
    message: "Booked an outstation trip to Coorg. Since it was a long journey, we requested comfortable suspension and a high-end sound system. SLT Travels kept their word! The tempo traveller had a great music system which made our drive thoroughly enjoyable. Will book again.",
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
    message: "Rented 12-seater to Goa. It was a long journey of 15 hours but the pushback seats and high cooling kept our energy high. The driver was absolute hero, navigating all shortcuts. Thanks to SLT travels for making our vacation highly memorable.",
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
    question: "How do I book a vehicle with SLT Travels?",
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
