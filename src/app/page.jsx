import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeShowcase from '@/app/components/HomeShowcase';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import StructuredData from '@/app/components/StructuredData';

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
