import React from 'react';
import ContactSection from '@/app/components/ContactSection';
import SiteShell from '@/shared/layout/SiteShell';

export default function ContactPage() {
  return (
    <SiteShell showPageEffects showStructuredData mainClassName="page-transition-root animated-page">
      <section className="subpage-hero relative overflow-hidden pt-36 pb-20">
        <div className="premium-noise" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="section-label mb-6 block">Contact ATROS</span>
          <h1 className="max-w-5xl font-display text-hero font-extrabold text-foreground">
            Let&apos;s find the right
            <span className="block text-primary">water solution.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
            Share your water source, usage, and service need. ATROS will help recommend the right
            purifier, installation, AMC, or repair path.
          </p>
        </div>
      </section>
      <ContactSection />
    </SiteShell>
  );
}
