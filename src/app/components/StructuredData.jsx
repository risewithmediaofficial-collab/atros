import React from 'react';
import { SITE_NAME, toAbsoluteUrl } from '@/app/seo';

export default function StructuredData() {
  const siteUrl = toAbsoluteUrl('/');
  const logoUrl = toAbsoluteUrl('/assets/images/app_logo.png');

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: 'MADHAIYAN MOORTHI',
    url: siteUrl,
    logo: logoUrl,
    telephone: '+919080232624',
    taxID: '33BOJPM1034A2ZM',
    foundingDate: '2009',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 4/268, Next to Dk Samy School, Mel Somarpet, Venkatapuram, Indl Estate',
      addressLocality: 'Krishnagiri',
      addressRegion: 'Tamil Nadu',
      postalCode: '635002',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:30',
      closes: '21:00',
    },
    description:
      'ATROS Water Purifier provides domestic, commercial, and industrial water purification solutions including RO systems, alkaline water purifiers, UV and UF purification systems, installation services, AMC maintenance, and water treatment solutions.',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE_NAME} | RO, UV, UF & Alkaline Purification Solutions`,
    description:
      'Advanced RO, UV, UF, and alkaline water purification systems for homes, businesses, and industries. Professional installation, AMC support, and reliable water treatment solutions.',
    url: siteUrl,
    inLanguage: 'en-IN',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    legalName: 'MADHAIYAN MOORTHI',
    image: logoUrl,
    priceRange: 'Rs. Rs.',
    telephone: '+919080232624',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No 4/268, Next to Dk Samy School, Mel Somarpet, Venkatapuram, Indl Estate',
      addressLocality: 'Krishnagiri',
      addressRegion: 'Tamil Nadu',
      postalCode: '635002',
      addressCountry: 'IN',
    },
    taxID: '33BOJPM1034A2ZM',
    foundingDate: '2009',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Water Purification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Domestic RO Water Purifier' },
        },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial RO Plant' } },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Industrial Water Treatment' },
        },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AMC Maintenance Service' } },
      ],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: 'en-IN',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
