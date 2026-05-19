import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Droplets, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    name: 'Aqua Health Care Care 50 Lph Commercial Ro Water Purifier',
    price: '₹ 31.5 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Tds',
    specValue: '4000 Ppm',
    category: 'commercial',
    image: '/images/industrial_ro.png',
    alt: 'Commercial RO Water Purifier with large blue filter cylinders on stainless steel frame',
  },
  {
    name: 'Aquafresh Dolphin 10 Liter RO Water Purifier (White)',
    price: '₹ 8.5 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Product Capacity',
    specValue: '10 Ltr',
    category: 'domestic',
    image: '/images/white_blue_ro.png',
    alt: 'Aquafresh Dolphin white RO water purifier with blue tank',
  },
  {
    name: 'Aquaguard 15 L RO + UV + UF + TDS Water Purifier',
    price: '₹ 19.0 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Product Capacity',
    specValue: '15.00 Litres',
    category: 'domestic',
    image: '/images/sleek_black_ro.png',
    alt: 'Aquaguard sleek black wall-mounted RO UV purifier with digital display',
  },

  {
    name: 'Pureit Classic 9 Ltr Water Purifiers',
    price: '₹ 2.36 K – ₹ 2.48 K',
    unit: '',
    type: 'Non Electrical & Storage',
    specLabel: 'Product Capacity',
    specValue: '9 Ltr',
    category: 'non-electric',
    image: '/images/compact_grey_ro.png',
    alt: 'Pureit Classic white non-electric water purifier with 9 litre storage',
  },
  {
    name: 'Pureit Copper+Mineral RO+UV+MF 8 Ltr Water Purifier',
    price: '₹ 28.21 K – ₹ 29.7 K',
    unit: '',
    type: 'Electrical & Storage',
    specLabel: 'Product Capacity',
    specValue: '8 Ltr',
    category: 'domestic',
    image: '/images/copper_ro.png',
    alt: 'Pureit Copper Mineral RO UV wall-mounted purifier with copper finish',
  },
  {
    name: 'Pureit Advanced 5 Litres Water Purifier',
    price: '₹ 1.76 K – ₹ 1.83 K',
    unit: '',
    type: 'Non Electrical & Storage',
    specLabel: 'Product Capacity',
    specValue: '5 Ltr',
    category: 'non-electric',
    image: '/images/gravity_filter.png',
    alt: 'Pureit Advanced compact 5 litre non-electric water purifier',
  },
];

const selectionFactors = [
  {
    icon: Droplets,
    title: 'Water source',
    text: 'Borewell, municipal, tanker, or mixed supply changes the right filtration path.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Daily demand',
    text: 'Family size or business footfall decides storage, capacity, and flow requirements.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Maintenance plan',
    text: 'Filter life, AMC access, and service cost matter as much as purifier technology.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">Product Systems</span>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h1 className="font-display text-hero font-light italic text-white">
                  Purification systems
                  <span className="block font-bold not-italic text-accent">for every source.</span>
                </h1>
              </div>
              <p className="text-base leading-relaxed text-white lg:col-span-5">
                ATROS products are selected around water quality, daily usage, service access and
                long-term running cost — not one-size-fits-all selling.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { val: '100+', label: 'Products available' },
                { val: 'RO/UV/UF', label: 'Purification types' },
                { val: 'Electric & Non-Electric', label: 'System types' },
                { val: 'Free', label: 'Expert consultation' },
              ].map((s) => (
                <div key={s.label} className="glass-card px-4 py-4 text-center">
                  <p className="font-display text-xl font-bold text-white">{s.val}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Water Purifiers{' '}
                <span className="text-muted-foreground font-normal text-lg">(100+ products)</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                Get expert help choosing <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 flex items-center justify-center p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                      {product.category === 'commercial'
                        ? 'Commercial'
                        : product.category === 'non-electric'
                          ? 'Non-Electric'
                          : 'Home'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-foreground leading-tight">
                      {product.name}
                    </h3>

                    <div className="mb-3 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.unit && (
                        <span className="text-xs text-muted-foreground">/ {product.unit}</span>
                      )}
                    </div>

                    <div className="mb-4 space-y-1 text-xs text-muted-foreground">
                      <p>
                        <span className="text-gray-400">Type : </span>
                        <span className="font-medium text-foreground">{product.type}</span>
                      </p>
                      <p>
                        <span className="text-gray-400">{product.specLabel} : </span>
                        <span className="font-medium text-foreground">{product.specValue}</span>
                      </p>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href="/contact"
                        className="block w-full rounded-lg bg-[#0a66c2] px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#004182] hover:shadow-lg hover:shadow-blue-900/20"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* More products nudge */}
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-white p-8 text-center">
              <Droplets className="mx-auto mb-3 text-accent" size={28} />
              <h3 className="text-base font-bold text-foreground">
                Looking for a specific product?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                ATROS stocks 100+ water purifier models. Contact us for availability, pricing and
                custom requirements.
              </p>
              <Link
                href="/contact"
                className="btn-primary-glow mt-5 inline-flex items-center gap-2"
              >
                Talk to an Expert
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Selection guide */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="section-label mx-auto mb-5 block w-fit">How to Choose</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Three factors that shape
                <br />
                <span className="italic text-primary">the right selection.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {selectionFactors.map((factor, i) => {
                const Icon = factor.icon;
                return (
                  <div key={factor.title} className="gradient-border-card bg-white p-7">
                    <div className="icon-glow mb-6">
                      {i === 0 ? (
                        <Droplets size={21} aria-hidden="true" />
                      ) : (
                        <SlidersHorizontal size={21} aria-hidden="true" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-foreground">{factor.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {factor.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="section-label mb-5 block">Every Purchase Includes</span>
                <h2 className="font-display text-section-title font-light text-foreground">
                  More than just
                  <br />
                  <span className="italic text-primary">a purifier.</span>
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Every ATROS product comes backed by professional installation, service support and
                  transparent pricing — so you get full value from day one.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Professional installation',
                  'Post-installation water testing',
                  'AMC plan options available',
                  'Genuine spare parts supply',
                  'WhatsApp & phone support',
                  'Transparent pricing',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-all hover:border-accent/40 hover:bg-accent/5"
                  >
                    <CheckCircle2 className="flex-shrink-0 text-accent" size={17} />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <h2 className="font-display text-4xl font-light italic text-white">
              Need help choosing a product?
            </h2>
            <Link href="/contact" className="btn-primary-glow inline-flex items-center gap-2">
              Get Recommendation
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
