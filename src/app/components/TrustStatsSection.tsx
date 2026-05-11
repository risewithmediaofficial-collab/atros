'use client';

import React, { useEffect, useRef } from 'react';

const stats = [
  {
    value: '10,000+',
    label: 'Happy Customers',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        <circle cx="9" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    value: '20+',
    label: 'Years Experience',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    value: 'Affordable',
    label: 'AMC & Maintenance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    value: '6-Stage',
    label: 'Advanced Purification',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Professional Install',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];

export default function TrustStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      if (!sectionRef?.current) return;

      gsap?.from(sectionRef?.current?.querySelectorAll('.stat-item'), {
        scrollTrigger: {
          trigger: sectionRef?.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    };
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #061E2E 0%, #0A3D55 50%, #0A4D68 100%)' }}>
      {/* Glow line top */}
      <div className="footer-glow-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x divide-white/10">
          {stats?.map((s) => (
            <div key={s?.label} className="stat-item group flex flex-col items-center text-center px-4 py-5 rounded-2xl lg:rounded-none transition-all duration-300 hover:bg-white/5">
              <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center text-accent mb-3 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                {s?.icon}
              </div>
              <div className="font-display text-2xl font-bold text-white mb-1 counter-value">{s?.value}</div>
              <div className="text-white/50 text-xs font-medium leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>{s?.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow line bottom */}
      <div className="footer-glow-line" />
    </section>
  );
}