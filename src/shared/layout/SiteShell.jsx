import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageEffects from '@/app/components/PageEffects';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export default function SiteShell({
  children,
  mainClassName = '',
  showPageEffects = false,
  showStructuredData = true,
}) {
  const mainClassNames = ['landing-page', mainClassName].filter(Boolean).join(' ');

  return (
    <>
      {showStructuredData ? <StructuredData /> : null}
      <Header />
      {showPageEffects ? <PageEffects /> : null}
      <main id="main-content" className={mainClassNames}>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
