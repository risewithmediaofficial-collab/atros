'use client';

import React, { useEffect, useRef } from 'react';

const reasons = [
  {
    title: 'Advanced Purification Technology',
    description:
      'Modern RO, UV, UF, and alkaline technologies for maximum water safety. Removes 99.9% of dissolved impurities, bacteria, and viruses.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
  {
    title: 'Experienced Team',
    description:
      'Trained professionals providing expert consultation, installation, and after-sales support with 20+ years of industry experience.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    description:
      'Premium quality water purification at competitive, customer-friendly prices. Transparent billing with no hidden charges.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Reliable Customer Support',
    description:
      'Quick-response support team for maintenance, repair, and service assistance. Available Monday–Sunday, 9:30 AM to 9:00 PM.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Long-Lasting Performance',
    description:
      'High-quality components engineered for durability and efficient long-term operation with minimal maintenance.',
    icon: (
      <svg
        width="20"
        height="20"
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
  },
  {
    title: 'Customized Solutions',
    description:
      'Tailored purification systems based on your specific water conditions: borewell, municipal, tanker, or hard water.',
    icon: (
      <svg
        width="20"
        height="20"
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
  },
];

const bentoStats = [
  { value: '10,000+', label: 'Families Served' },
  { value: '20+', label: 'Years of Trust' },
  { value: '99.9%', label: 'Purity Rate' },
];

export default function WhyChooseSection() {
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
          gsap.from(currentRef.querySelector('.why-left'), {
            scrollTrigger: { trigger: currentRef, start: 'top 75%' },
            x: -40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          });

          gsap.from(currentRef.querySelectorAll('.reason-item'), {
            scrollTrigger: { trigger: currentRef, start: 'top 70%' },
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: 'power3.out',
          });
        });
      } catch {
        // GSAP failed — elements already visible due to CSS defaults
      }
    };
    initGSAP();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-24 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-5 mx-auto block w-fit">03 — Why Choose ATROS</span>
          <h2 className="font-display text-section-title font-light text-foreground">
            Why Families
            <br />
            <span className="italic text-primary">Trust ATROS</span>
          </h2>
          <p
            className="text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We combine advanced purification technology with customer-focused service to deliver
            safe, healthy, and high-quality drinking water solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="why-left lg:col-span-4 flex flex-col gap-5">
            {/* Image card — using plain img with explicit height to guarantee visibility */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1af56a07c-1767952600354.png"
                alt="Happy Indian family drinking clean water at home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/45 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-border bg-white/92 p-4 shadow-xl shadow-primary/10 backdrop-blur-xl">
                  <p className="text-foreground font-semibold text-sm">Trusted by 10,000+ Families</p>
                  <p
                    className="text-muted-foreground text-xs mt-0.5"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Across Tamil Nadu &amp; Beyond
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bento */}
            <div className="grid grid-cols-3 gap-3">
              {bentoStats.map((s) => (
                <div
                  key={s.label}
                  className="gradient-border-card p-4 text-center bg-white shadow-sm"
                >
                  <div className="font-display text-xl font-bold text-primary leading-none mb-1">
                    {s.value}
                  </div>
                  <div
                    className="text-muted-foreground text-[10px] font-medium leading-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.14), rgba(0,119,168,0.08))' }}
            >
              <p
                className="text-foreground text-sm mb-4 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Ready to experience pure, healthy water for your family?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#0A4D68] transition-all duration-300 shadow-lg shadow-primary/15"
              >
                Get Free Consultation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="reason-item gradient-border-card bg-white p-5 hover:shadow-xl hover:shadow-accent/8 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-glow flex-shrink-0">{r.icon}</div>
                  <div>
                    <h3
                      className="font-semibold text-foreground text-sm mb-1.5"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {r.title}
                    </h3>
                    <p
                      className="text-muted-foreground text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {r.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
