import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import TrustStatsSection from '@/app/components/TrustStatsSection';
import ServicesSection from '@/app/components/ServicesSection';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import ProcessSection from '@/app/components/ProcessSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import ContactSection from '@/app/components/ContactSection';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import StructuredData from '@/app/components/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <TrustStatsSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}