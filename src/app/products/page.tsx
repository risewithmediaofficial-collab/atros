import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Droplets, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Products | ATROS RO, UV, UF, Alkaline & Industrial Water Systems',
  description:
    'Explore ATROS water purifier product categories including home RO+UV systems, alkaline purifiers, commercial flow systems, and industrial RO plants.',
  alternates: { canonical: '/products' },
};

const products = [
  {
    name: 'ATROS Elite RO+UV',
    type: 'Signature Home Purifier',
    image: 'https://images.unsplash.com/photo-1657778752979-90b85022f6fa',
    alt: 'Premium white water purifier with blue light accent',
    summary:
      'A compact multi-stage purifier for daily family use with RO, UV, UF, TDS control and mineral balancing.',
    specs: ['RO + UV + UF', 'TDS control', 'Mineral balance', 'Family use'],
  },
  {
    name: 'ATROS Alkaline Plus',
    type: 'Health-Focused System',
    image: 'https://images.unsplash.com/photo-1609512434091-3ab4b7ba5b14',
    alt: 'Clear drinking water being poured into a glass',
    summary:
      'Balanced alkaline drinking water designed for smoother taste and everyday hydration support.',
    specs: ['Alkaline cartridge', 'UV safety', 'Better taste', 'Smart service'],
  },
  {
    name: 'ATROS Commercial Flow',
    type: 'Office & Business RO',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    alt: 'Modern office pantry with clean drinking water station',
    summary:
      'High-output purification for offices, schools, restaurants, hospitals and business spaces.',
    specs: ['High capacity', 'Low downtime', 'AMC ready', 'Continuous supply'],
  },
  {
    name: 'ATROS Industrial Plant',
    type: 'Custom Water Treatment',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6',
    alt: 'Industrial filtration equipment and stainless process pipes',
    summary:
      'Engineered water treatment plants for factories and industrial water-quality demands.',
    specs: ['Custom capacity', 'Hard water control', 'Scalable design', 'Industrial grade'],
  },
];

export default function ProductsPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">Product Systems</span>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-hero font-light italic text-white">
                  Purification systems
                  <span className="block font-bold not-italic text-accent">for every source.</span>
                </h1>
              </div>
              <p className="text-base leading-relaxed text-white/70 lg:col-span-4">
                ATROS products are selected around water quality, daily usage, service access and
                long-term running cost, not one-size-fits-all selling.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative min-h-[300px]">
                  <AppImage src={product.image} alt={product.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041019]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase text-accent">{product.type}</p>
                    <h2 className="mt-2 font-display text-3xl font-light italic text-white">
                      {product.name}
                    </h2>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="text-accent" size={16} aria-hidden="true" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              [
                'Water source',
                'Borewell, municipal, tanker, or mixed supply changes the right filtration path.',
              ],
              [
                'Daily demand',
                'Family size or business footfall decides storage, capacity, and flow requirements.',
              ],
              [
                'Maintenance plan',
                'Filter life, AMC access, and service cost matter as much as purifier technology.',
              ],
            ].map(([title, text], index) => (
              <div key={title} className="gradient-border-card bg-white p-7">
                <div className="icon-glow mb-6">
                  {index === 0 ? (
                    <Droplets size={21} aria-hidden="true" />
                  ) : (
                    <SlidersHorizontal size={21} aria-hidden="true" />
                  )}
                </div>
                <h2 className="text-base font-bold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <h2 className="font-display text-4xl font-light italic text-white">
              Need help choosing a product?
            </h2>
            <Link href="/contact" className="btn-primary-glow">
              Get Recommendation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
