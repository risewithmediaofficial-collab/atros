'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    let isCancelled = false;
    let unsubMouse: (() => void) | undefined;

    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap');
        if (isCancelled) return;
        const gsap = gsapModule.gsap;

        ctx = gsap.context(() => {
          const tl = gsap.timeline({ delay: 0.3 });

          if (headlineRef.current) {
            const lines = headlineRef.current.querySelectorAll('.reveal-line');
            tl.from(lines, {
              y: 110,
              opacity: 0,
              duration: 1.3,
              stagger: 0.18,
              ease: 'power4.out',
            });
          }

          if (subRef.current) {
            tl.from(
              subRef.current,
              { y: 30, opacity: 0, duration: 1, ease: 'power3.out' },
              '-=0.9'
            );
          }

          if (ctaRef.current) {
            tl.from(
              ctaRef.current.children,
              { y: 24, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
              '-=0.7'
            );
          }

          if (statsRef.current) {
            tl.from(
              statsRef.current.children,
              { y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
              '-=0.5'
            );
          }

          if (imageRef.current) {
            tl.from(
              imageRef.current,
              { x: 70, opacity: 0, duration: 1.4, ease: 'power3.out' },
              '-=1.6'
            );
          }
        });
      } catch (e) {
        // Fallback if GSAP fails
      }

      // Cursor parallax
      const handleMouseMove = (e: MouseEvent) => {
        const mx = e.clientX / window.innerWidth - 0.5;
        const my = e.clientY / window.innerHeight - 0.5;
        if (blob1Ref.current) {
          blob1Ref.current.style.transform = `translate(${mx * 50}px, ${my * 35}px)`;
        }
        if (blob2Ref.current) {
          blob2Ref.current.style.transform = `translate(${mx * -35}px, ${my * -28}px)`;
        }
      };

      if (!isCancelled) {
        window.addEventListener('mousemove', handleMouseMove);
        unsubMouse = () => window.removeEventListener('mousemove', handleMouseMove);
      }
    };

    initAnimations();

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
      if (unsubMouse) unsubMouse();
    };
  }, []);

  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '20+', label: 'Years Experience' },
    { value: '99.9%', label: 'Pure Water' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden water-gradient-bg">
      {/* Atmospheric blobs */}
      <div
        ref={blob1Ref}
        className="water-blob absolute top-[-15%] right-[5%] w-[600px] h-[600px] bg-white"
        style={{ transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)' }}
      />
      <div
        ref={blob2Ref}
        className="water-blob-2 absolute bottom-[0%] left-[0%] w-[500px] h-[500px] bg-accent"
        style={{ transition: 'transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)' }}
      />

      {/* Floating particles */}
      {(
        [
          { size: 6, top: '20%', left: '15%', delay: '0s', dur: '5s' },
          { size: 4, top: '60%', left: '8%', delay: '1.5s', dur: '7s' },
          { size: 8, top: '35%', right: '20%', delay: '0.8s', dur: '6s' },
          { size: 5, top: '75%', right: '35%', delay: '2s', dur: '8s' },
          { size: 3, top: '15%', left: '45%', delay: '1s', dur: '5.5s' },
        ] satisfies Array<{
          size: number;
          top: string;
          left?: string;
          right?: string;
          delay: string;
          dur: string;
        }>
      ).map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            right: p.right,
            animation: `particleFloat ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Label badge */}
            <div className="overflow-hidden mb-7">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase backdrop-blur-sm reveal-line">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Advanced Water Purification
              </div>
            </div>

            {/* Headline */}
            <div ref={headlineRef} className="mb-7">
              <div className="overflow-hidden">
                <h1 className="font-display text-hero font-light italic text-white leading-none reveal-line">
                  Pure Water.
                </h1>
              </div>
              <div className="overflow-hidden">
                <span className="font-display text-hero font-bold not-italic text-white leading-none reveal-line block">
                  Healthier
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className="font-display text-hero font-light italic leading-none reveal-line block"
                  style={{ color: 'rgba(0,180,216,0.9)' }}
                >
                  Life.
                </span>
              </div>
            </div>

            <p
              ref={subRef}
              className="text-white/75 text-base sm:text-lg font-light leading-relaxed max-w-lg mb-9"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Advanced RO, UV, UF & Alkaline Water Purification Solutions for Homes, Businesses &
              Industries across India.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-3 mb-12">
              <a href="#contact" className="btn-primary-glow inline-flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                Get Free Consultation
              </a>
              <a
                href="tel:+919080232624"
                className="btn-ghost-white inline-flex items-center gap-2"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
              <a href="#services" className="btn-ghost-white inline-flex items-center gap-2">
                Our Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M7 7h10v10M7 17L17 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-4 gap-2 sm:gap-3">
              {stats.map((s) => (
                <div key={s.label} className="stat-card px-2 py-3 text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-white leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-white/55 text-[10px] sm:text-xs font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-accent/25 blur-3xl scale-110" />
              {/* Inner glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-xl" />

              <div
                className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl animate-float"
                style={{
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <AppImage
                  src="https://images.unsplash.com/photo-1657778752979-90b85022f6fa"
                  alt="Modern water purifier unit with clean white design, blue accent lighting, bright studio background"
                  width={480}
                  height={560}
                  priority
                  className="w-full h-auto object-cover"
                />

                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">99.9% Pure Water</p>
                      <p className="text-white/65 text-xs">Advanced RO + Alkaline Technology</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#00B4D8">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-2.5 shadow-2xl border border-border/50">
                <p className="text-primary font-bold text-sm leading-none mb-0.5">TDS Control</p>
                <p className="text-muted-foreground text-[10px] font-medium">Mineral Balanced</p>
              </div>

              {/* Side badge */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 glass-card px-3 py-2 hidden lg:block">
                <p className="text-white/90 font-semibold text-xs">6-Stage</p>
                <p className="text-accent text-[10px]">Purification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          className="text-white/35 text-[10px] tracking-[0.3em] uppercase font-medium"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-white/15 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
