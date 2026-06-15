'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Aqua Touch Water Purification System',
    price: '₹ 18.5 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'TDS Handling',
    specValue: '2000 PPM',
    image: '/assets/images/Aqua-Touch.jpg',
    alt: 'Aqua Touch water purification system with advanced filtration',
  },
  {
    name: 'Aquafresh Dolphin 10L RO Water Purifier',
    price: '₹ 8.5 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Storage Capacity',
    specValue: '10 Litres',
    image: '/assets/images/dolphin.webp',
    alt: 'Aquafresh Dolphin 10 liter RO water purifier',
  },
  {
    name: 'Aquaguard Black RO + UV + UF Water Purifier',
    price: '₹ 19.0 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Storage Capacity',
    specValue: '15 Litres',
    image: '/assets/images/BLACK.png',
    alt: 'Aquaguard black wall-mounted RO UV UF water purifier',
  },
  {
    name: 'Blue Life Water Purification System',
    price: '₹ 12.0 K',
    unit: 'Unit',
    type: 'Electrical & Storage',
    specLabel: 'Storage Capacity',
    specValue: '8 Litres',
    image: '/assets/images/blue life.jpg',
    alt: 'Blue Life water purification system',
  },
  {
    name: 'CANIX Premium Water Purifier System',
    price: '₹ 15.9 K – ₹ 17.2 K',
    unit: '',
    type: 'Electrical & Storage',
    specLabel: 'Purification Type',
    specValue: 'RO + UV',
    image: '/assets/images/canix.jpg',
    alt: 'CANIX premium water purifier system',
  },
  {
    name: 'Pureit Copper+Mineral RO+UV Water Purifier',
    price: '₹ 28.21 K – ₹ 29.7 K',
    unit: '',
    type: 'Electrical & Storage',
    specLabel: 'Storage Capacity',
    specValue: '8 Litres',
    image: '/assets/images/pearl copper.webp',
    alt: 'Pureit Copper Mineral RO UV water purifier',
  },
  {
    name: 'XPRIA Advanced Water Purification System',
    price: '₹ 14.8 K – ₹ 16.5 K',
    unit: '',
    type: 'Electrical & Storage',
    specLabel: 'Purification Method',
    specValue: 'RO + UV + MF',
    image: '/assets/images/xpria.webp',
    alt: 'XPRIA advanced water purification system',
  },
  {
    name: 'Aquaguard Advanced RO + UV + UF System',
    price: '₹ 22.5 K',
    unit: '',
    type: 'Electrical & Storage',
    specLabel: 'Storage Capacity',
    specValue: '12 Litres',
    image: '/assets/images/asfesd.webp',
    alt: 'Aquaguard advanced water purification system',
  },
];

export default function ProductsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label mb-3 block">Our Products</span>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Water Purifiers{' '}
              <span className="text-lg font-normal text-gray-400">(100+ products)</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a66c2] hover:text-[#004182] transition-colors"
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-[#0a66c2]/20"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-t-2xl bg-gray-50 flex items-center justify-center p-3">                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 rounded-full bg-[#07364b]/85 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                  {product.type.includes('Non Electrical')
                    ? 'Non-Electric'
                    : product.type.includes('Storage')
                      ? 'RO/UV'
                      : 'RO'}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 leading-tight">
                  {product.name}
                </h3>

                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  {product.unit && <span className="text-xs text-gray-400">/ {product.unit}</span>}
                </div>

                <div className="mb-4 space-y-1 text-xs">
                  <p>
                    <span className="text-gray-400">Type : </span>
                    <span className="font-medium text-gray-700">{product.type}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">{product.specLabel} : </span>
                    <span className="font-medium text-gray-700">{product.specValue}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
