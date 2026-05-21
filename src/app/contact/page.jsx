import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import PageEffects from '@/app/components/PageEffects';

export const metadata = {
  title: 'Contact ATROS Water Purifier | Krishnagiri',
  description:
    'Contact ATROS Water Purifier for RO water purifier consultation, installation, AMC maintenance, repair, commercial RO systems, and industrial water treatment support.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <PageEffects />
      <main id="main-content" className="page-transition-root animated-page">
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">Contact ATROS</span>
            <h1 className="max-w-5xl font-display text-hero font-light italic text-white">
              Let’s find the right
              <span className="block font-bold not-italic text-accent">water solution.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white">
              Share your water source, usage, and service need. ATROS will help recommend the right
              purifier, installation, AMC, or repair path.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
