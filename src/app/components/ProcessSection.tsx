'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Water Analysis',
    description:
      'We analyze your water source, including borewell, municipal, tanker, or hard water, and recommend the ideal purification solution.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
    color: 'from-[#0A4D68] to-[#0077A8]',
  },
  {
    number: '02',
    title: 'Product Recommendation',
    description:
      'Our experts suggest the right system based on your water quality, family size, daily usage, and budget.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    color: 'from-[#0077A8] to-[#00A0C8]',
  },
  {
    number: '03',
    title: 'Professional Installation',
    description:
      'Quick, clean installation by our trained technicians. Typically completed within the same or next business day.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    color: 'from-[#00A0C8] to-[#00B4D8]',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Regular maintenance, filter replacement, and technical support. Available Mon–Sun, 9:30 AM to 9:00 PM.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: 'from-[#00B4D8] to-[#48CAE4]',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: any;
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
          gsap.from(currentRef.querySelectorAll('.process-card'), {
            scrollTrigger: {
              trigger: currentRef,
              start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        });
      } catch {
        // GSAP unavailable — elements visible by default
      }
    };
    initGSAP();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-5 mx-auto block w-fit">04 - How It Works</span>
          <h2 className="font-display text-section-title font-light text-foreground">
            From Consultation to
            <br />
            <span className="italic text-primary">Pure Water in 4 Steps</span>
          </h2>
        </div>

        {/* Futuristic horizontal process flow */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#0A4D68] via-accent to-[#48CAE4] opacity-20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps?.map((step, i) => (
              <div key={step?.number} className="process-card group relative">
                {/* Connector dot (desktop) */}
                {i < steps?.length - 1 && (
                  <div className="hidden lg:block absolute top-[3.25rem] left-full w-5 z-20">
                    <div className="connector-line h-px bg-gradient-to-r from-accent to-transparent" />
                  </div>
                )}

                <div className="gradient-border-card bg-white p-6 h-full hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  {/* Step icon with gradient bg */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step?.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: '0 8px 24px rgba(0, 180, 216, 0.3)' }}
                  >
                    {step?.icon}
                  </div>

                  {/* Step number */}
                  <div className="font-display text-5xl font-bold text-border/40 group-hover:text-accent/20 transition-colors duration-300 leading-none mb-3 select-none">
                    {step?.number}
                  </div>

                  <h3
                    className="font-semibold text-foreground text-base mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step?.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step?.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${step?.color} rounded-full transition-all duration-500`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href="#contact" className="btn-primary-glow inline-flex items-center gap-2">
            Start Your Free Consultation
            <svg
              width="16"
              height="16"
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
    </section>
  );
}
