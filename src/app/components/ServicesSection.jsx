'use client';

import React, { useEffect, useRef } from 'react';

const services = [
  {
    id: 'domestic',
    title: 'Domestic Water Purifiers',
    subtitle: 'For Home & Family',
    description:
      'Smart RO, UV, UF & alkaline systems for safe, mineral-rich drinking water at home. Multi-stage purification removes bacteria, chemicals, and dissolved impurities.',
    features: [
      'Multi-stage purification',
      'Retains essential minerals',
      'Low maintenance cost',
      'Stylish modern designs',
    ],
    image:
      'https://images.unsplash.com/photo-1666608153597-05b25a35f82c?w=900&auto=format&fit=crop',
    imageAlt: 'Modern kitchen with water purifier, clean bright interior',
  },
  {
    id: 'commercial',
    title: 'Commercial Systems',
    subtitle: 'For Offices & Businesses',
    description: 'High-capacity purification for offices, schools, restaurants, and hospitals.',
    features: ['High water output', 'Energy-efficient', 'Continuous supply'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e620f35f-1767854588560.png',
    imageAlt: 'Modern office with commercial water purification station',
  },
  {
    id: 'industrial',
    title: 'Industrial RO Plants',
    subtitle: 'For Factories & Industries',
    description:
      'Customized large-scale water treatment solutions for manufacturing and industrial applications.',
    features: ['Customized capacity', 'Industrial-grade', 'Scalable solutions'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15cdaf8b9-1772190825276.png',
    imageAlt: 'Industrial water treatment plant with large filtration equipment',
  },
  {
    id: 'installation',
    title: 'Professional Installation',
    subtitle: 'Expert Setup',
    description:
      'Quick, clean, and professional installation by trained technicians for all purifier types.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    noImage: true,
    accent: true,
  },
  {
    id: 'amc',
    title: 'AMC & Maintenance',
    subtitle: 'Ongoing Care',
    description:
      'Affordable annual maintenance contracts with timely filter replacement and system servicing.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    noImage: true,
  },
  {
    id: 'repair',
    title: 'Repair & Support',
    subtitle: 'Fast Technical Help',
    description:
      'Quick repair and servicing for RO systems, UV purifiers, alkaline water systems, and treatment units.',
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    noImage: true,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    let isCancelled = false;

    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        if (isCancelled) return;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const currentRef = sectionRef.current;
        if (!currentRef) return;

        ctx = gsap.context(() => {
          gsap.from(currentRef.querySelectorAll('.bento-card'), {
            scrollTrigger: {
              trigger: currentRef,
              start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
          });
        });
      } catch {
        // GSAP unavailable — elements visible via CSS defaults
      }
    };
    initGSAP();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="section-label mb-5 block">02 — Our Services</span>
            <h2 className="font-display text-section-title font-light text-foreground">
              Water Solutions for
              <br />
              <span className="italic font-light text-primary">Every Need</span>
            </h2>
          </div>
          <p
            className="text-muted-foreground text-sm leading-relaxed max-w-sm italic border-l-2 border-accent/40 pl-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            From compact home purifiers to large industrial treatment plants, ATROS delivers
            dependable solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Domestic large card — explicit height, plain img */}
          <div className="bento-card md:col-span-2 lg:col-span-2 lg:row-span-2 relative min-h-[440px] group cursor-pointer overflow-hidden rounded-[1.25rem]">            <img
              src={services[0].image}
              alt={services[0].imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9 z-10">
              <span
                className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[0].subtitle}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-light italic text-foreground mb-3">
                {services[0].title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-md"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[0].features?.map((f) => (
                  <span
                    key={f}
                    className="bg-white/90 border border-border text-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial */}
          <div className="bento-card relative min-h-[210px] group overflow-hidden cursor-pointer rounded-[1.25rem]">            <img
              src={services[1].image}
              alt={services[1].imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <span
                className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[1].subtitle}
              </span>
              <h3 className="font-display text-xl font-light italic text-foreground mb-2">
                {services[1].title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {services[1].features?.map((f) => (
                  <span
                    key={f}
                    className="bg-white/90 text-foreground text-xs px-2.5 py-1 rounded-full border border-border"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Industrial */}
          <div className="bento-card relative min-h-[210px] group overflow-hidden cursor-pointer rounded-[1.25rem]">            <img
              src={services[2].image}
              alt={services[2].imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <span
                className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[2].subtitle}
              </span>
              <h3 className="font-display text-xl font-light italic text-foreground mb-2">
                {services[2].title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {services[2].features?.map((f) => (
                  <span
                    key={f}
                    className="bg-white/90 text-foreground text-xs px-2.5 py-1 rounded-full border border-border"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Installation */}
          <div
            className="bento-card p-6 flex flex-col justify-between min-h-[180px] group cursor-pointer rounded-[1.25rem]"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.14), rgba(0,119,168,0.08))',
            }}
          >
            <div
              className="icon-glow"
              style={{
                background: 'rgba(34,211,238,0.14)',
                borderColor: 'rgba(34,211,238,0.28)',
                color: 'var(--accent)',
              }}
            >
              {services[3].icon}
            </div>
            <div>
              <span
                className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[3].subtitle}
              </span>
              <h3 className="font-display text-xl font-light italic text-foreground mb-2">
                {services[3].title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[3].description}
              </p>
            </div>
          </div>

          {/* AMC */}
          <div className="bento-card p-6 flex flex-col justify-between min-h-[180px] group cursor-pointer bg-secondary rounded-[1.25rem]">
            <div className="icon-glow">{services[4].icon}</div>
            <div>
              <span
                className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[4].subtitle}
              </span>
              <h3 className="font-display text-xl font-light italic text-foreground mb-2">
                {services[4].title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[4].description}
              </p>
            </div>
          </div>

          {/* Repair */}
          <div className="bento-card p-6 flex flex-col justify-between min-h-[180px] group cursor-pointer rounded-[1.25rem]">
            <div className="icon-glow">{services[5].icon}</div>
            <div>
              <span
                className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[5].subtitle}
              </span>
              <h3 className="font-display text-xl font-light italic text-foreground mb-2">
                {services[5].title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {services[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
