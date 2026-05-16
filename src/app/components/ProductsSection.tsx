'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const products = [
  {
    name: 'ATROS Elite RO+UV',
    type: 'Signature Home Purifier',
    image: 'https://images.unsplash.com/photo-1657778752979-90b85022f6fa',
    alt: 'Premium white water purifier with blue light accent in a modern kitchen',
    summary:
      'A compact 6-stage purifier with RO, UV, UF and mineral balancing for daily family use.',
    specs: ['6-stage purity', 'TDS control', 'Mineral balance'],
  },
  {
    name: 'ATROS Alkaline Plus',
    type: 'Health-Focused System',
    image: 'https://images.unsplash.com/photo-1609512434091-3ab4b7ba5b14',
    alt: 'Clear drinking water being poured into a glass with soft blue highlights',
    summary: 'Balanced alkaline drinking water designed for smoother taste and everyday hydration.',
    specs: ['Alkaline cartridge', 'UV safety', 'Smart service'],
  },
  {
    name: 'ATROS Commercial Flow',
    type: 'Office & Business RO',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    alt: 'Modern office pantry with clean drinking water station',
    summary: 'High-output purification for offices, schools, restaurants and healthcare spaces.',
    specs: ['High capacity', 'Low downtime', 'AMC ready'],
  },
  {
    name: 'ATROS Industrial Plant',
    type: 'Custom Water Treatment',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6',
    alt: 'Industrial filtration equipment and stainless process pipes',
    summary: 'Engineered treatment plants for factories and industrial water-quality demands.',
    specs: ['Custom capacity', 'Hard water control', 'Scalable design'],
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        y: 44,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="premium-band py-24 overflow-hidden">
      <div className="premium-noise" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label mb-5 block">01 - Product Systems</span>
            <h2 className="font-display text-section-title font-light text-white">
              Purification, engineered
              <br />
              <span className="italic text-accent">for every water source.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Explore the core ATROS systems, from refined home purifiers to commercial and industrial
            water treatment. Each system is matched to your water quality, usage and budget.
          </p>
        </div>

        <div className="product-rail">
          {products.map((product, index) => (
            <button
              key={product.name}
              type="button"
              className={`product-card group ${active === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              aria-label={`Preview ${product.name}`}
            >
              <AppImage
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 86vw, (max-width: 1200px) 38vw, 30vw"
                className="object-cover"
              />
              <span className="product-card__shade" />
              <span className="product-card__content">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                  {product.type}
                </span>
                <span className="mt-2 block font-display text-3xl font-light italic text-white">
                  {product.name}
                </span>
                <span className="mt-3 block max-w-md text-left text-sm leading-relaxed text-white/72">
                  {product.summary}
                </span>
                <span className="mt-5 flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur"
                    >
                      {spec}
                    </span>
                  ))}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
