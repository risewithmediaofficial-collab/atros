import React from 'react';

export default function StructuredData() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ATROS Water Purifier',
    url: 'https://atroswaterpurifier.com',
    telephone: '+919080232624',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.4/268, Mel Somarpet, Venkatapuram',
      addressLocality: 'Tamil Nadu',
      postalCode: '635002',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:30',
      closes: '21:00',
    },
    description:
      'ATROS Water Purifier provides domestic, commercial, and industrial water purification solutions including RO systems, alkaline water purifiers, UV & UF purification systems, installation services, AMC maintenance, and water treatment solutions.',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ATROS Water Purifier | RO, UV, UF & Alkaline Purification Solutions',
    description:
      'Advanced RO, UV, UF, and alkaline water purification systems for homes, businesses, and industries. Professional installation, AMC support, and reliable water treatment solutions.',
    url: 'https://atroswaterpurifier.com',
    inLanguage: 'en',
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ATROS Water Purifier',
    image: 'https://atroswaterpurifier.com/assets/images/app_logo.png',
    priceRange: '₹₹',
    telephone: '+919080232624',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.4/268, Mel Somarpet, Venkatapuram',
      addressLocality: 'Tamil Nadu',
      postalCode: '635002',
      addressCountry: 'IN',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Water Purification Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domestic RO Water Purifier' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial RO Plant' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Water Treatment' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AMC Maintenance Service' } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}