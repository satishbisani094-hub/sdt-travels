/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { CONTACT_DETAILS, FAQS } from './data';

export default function SEO() {
  useEffect(() => {
    // Set Title & Meta Description
    document.title = CONTACT_DETAILS.companyName;

    // Inject Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      `Rent 12-Seater Tempo Traveller, 20 & 40 Seater Mini Buses and luxury tourist coaches in Hyderabad. ${CONTACT_DETAILS.companyName} offers premium, comfortable, affordable tourist transport service across India. Call ${CONTACT_DETAILS.phoneFormatted}.`
    );

    // Inject Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      `${CONTACT_DETAILS.companyName}, Tempo Traveller rentals Hyderabad, tourist vehicle hire Hyderabad, Rent Mini Bus Hyderabad, 12 Seater Tempo Traveller, 40 Seater Bus Hyderabad, travel agency Hyderabad, Tirupati tour packages, Srisailam travels, Hyderabad sightseeing bus`
    );

    // 1. JSON-LD LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": CONTACT_DETAILS.companyName,
      "image": [
        "https://images.unsplash.com/photo-1549417229-267988221920?auto=format&fit=crop&q=80&w=800"
      ],
      "telePhone": CONTACT_DETAILS.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "h.no: 146/C, near Saibaba Temple Road, Vengal Rao Nagar, Sanjeeva Reddy Nagar",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500038",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.446487,
        "longitude": 78.441434
      },
      "url": window.location.href,
      "priceRange": "₹₹",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "248"
      }
    };

    // 2. JSON-LD FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing schemas in case of hot-reload or transition
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Inject Local Business Schema
    const scriptLB = document.createElement('script');
    scriptLB.type = 'application/ld+json';
    scriptLB.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptLB);

    // Inject FAQ Schema
    const scriptFAQ = document.createElement('script');
    scriptFAQ.type = 'application/ld+json';
    scriptFAQ.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFAQ);

    return () => {
      // Cleanup on unmount
      scriptLB.remove();
      scriptFAQ.remove();
    };
  }, []);

  return null;
}
