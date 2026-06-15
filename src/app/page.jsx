import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeShowcase from '@/app/components/HomeShowcase';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import StructuredData from '@/app/components/StructuredData';
import { buildSeoMetadata } from '@/app/seo';

export const metadata = buildSeoMetadata({
  title: 'ATROS Water Purifier | RO, UV, UF & Alkaline Purification Solutions',
  description:
    'ATROS Water Purifier provides RO, UV, UF, alkaline, commercial, and industrial water purification systems with installation, AMC support, and repair service in Krishnagiri.',
  canonical: '/',
});

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <HomeShowcase />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
