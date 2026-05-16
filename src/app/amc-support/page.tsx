import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, ShieldCheck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'AMC & Support | ATROS Water Purifier Maintenance and Repair',
  description:
    'ATROS Water Purifier provides AMC maintenance, filter replacement, repair support, and service care for RO, UV, UF, alkaline and commercial water systems.',
  alternates: { canonical: '/amc-support' },
};

const supportItems = [
  'Annual maintenance contracts',
  'Filter and membrane replacement',
  'RO, UV, UF and alkaline system repair',
  'Commercial and industrial service checks',
  'Performance inspection and water-flow review',
  'Phone and WhatsApp support coordination',
];

export default function AmcSupportPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">AMC & Support</span>
            <h1 className="max-w-5xl font-display text-hero font-light italic text-white">
              Service care
              <span className="block font-bold not-italic text-accent">after installation.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/72">
              A water purifier is only as dependable as its maintenance. ATROS keeps service,
              repair, filter replacement, and AMC support clear and easy to access.
            </p>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              [
                'Preventive maintenance',
                'Scheduled care keeps purifier performance stable and reduces surprise downtime.',
                ShieldCheck,
              ],
              [
                'Fast repair support',
                'Troubleshooting for RO, UV, UF, alkaline, commercial and treatment systems.',
                Wrench,
              ],
              [
                'Clear service timing',
                'Support available Monday to Sunday, 9:30 AM to 9:00 PM.',
                Clock,
              ],
            ].map(([title, text, Icon]) => {
              const ServiceIcon = Icon as typeof ShieldCheck;
              return (
                <article key={title as string} className="gradient-border-card bg-white p-7">
                  <div className="icon-glow mb-6">
                    <ServiceIcon size={22} aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-light italic text-foreground">
                    {title as string}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="section-label mb-5 block">What Support Covers</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Maintenance
                <br />
                <span className="italic text-primary">made predictable.</span>
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {supportItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-accent" size={17} />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <h2 className="font-display text-4xl font-light italic text-white">
              Need service or AMC support?
            </h2>
            <Link href="/contact" className="btn-primary-glow">
              Request Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
