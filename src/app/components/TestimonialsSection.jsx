'use client';

import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote:
      'Excellent water purifier and very professional installation service. The water quality has improved significantly. Our family feels healthier and the water tastes much better.',
    name: 'Rajesh Krishnamurthy',
    role: 'Homeowner, Chennai',
    location: 'Domestic RO System',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_195a56a22-1763296537088.png',
    imageAlt: 'Indian man in his 40s, professional, confident smile, light background',
    rating: 5,
  },
  {
    quote:
      'Affordable pricing and quick service support. Highly recommended for home water purification. The technician was professional and explained everything clearly.',
    name: 'Priya Subramaniam',
    role: 'Homemaker, Hosur',
    location: 'Alkaline Water Purifier',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_124ba0bf5-1763301531300.png',
    imageAlt: 'Indian woman in her 30s, warm smile, casual attire, bright background',
    rating: 5,
  },
  {
    quote:
      'Reliable maintenance service and good customer support team. Very satisfied with the product quality. The AMC package is very value for money.',
    name: 'Venkatesh Naidu',
    role: 'Business Owner, Krishnagiri',
    location: 'Commercial RO Plant',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1472905b6-1763296356546.png',
    imageAlt: 'Indian businessman in his 50s, formal shirt, confident expression',
    rating: 5,
  },
  {
    quote:
      'Best water purification solution for our office. Smooth installation and excellent performance. Zero downtime since installation, highly professional team.',
    name: 'Meenakshi Rajan',
    role: 'Office Manager, Bengaluru',
    location: 'Office RO System',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d1a6cf71-1763301532880.png',
    imageAlt: 'Indian woman professional in her 30s, business casual, bright office background',
    rating: 5,
  },
];

// Duplicate for seamless marquee
const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        gsap.from(sectionRef.current.querySelector('.testimonials-header'), {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      } catch {
        // GSAP unavailable — header visible by default
      }
    };
    initGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 overflow-hidden relative bg-white"
    >
      {/* Atmospheric blobs */}
      <div className="water-blob absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent pointer-events-none" />
      <div className="water-blob-2 absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-primary pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(7,24,34,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,24,34,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="testimonials-header text-center mb-16">
          <span
            className="section-label mb-5 mx-auto block w-fit"
            style={{ borderColor: 'rgba(0,180,216,0.4)', color: 'rgba(0,180,216,0.9)' }}
          >
            05 - Customer Stories
          </span>
          <h2 className="font-display text-section-title font-light text-foreground">
            What Our Customers
            <br />
            <span className="italic font-light" style={{ color: 'rgba(0,180,216,0.9)' }}>
              Say About ATROS
            </span>
          </h2>
          <p
            className="text-muted-foreground text-base mt-4 max-w-lg mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Trusted by thousands of families and businesses across Tamil Nadu and beyond.
          </p>
        </div>
      </div>
      {/* Marquee testimonials */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #FFFFFF, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #FFFFFF, transparent)' }}
        />

        <div className="marquee-track gap-5 px-5">
          {allTestimonials?.map((t, i) => (
            <div
              key={i}
              className="testimonial-card w-[340px] sm:w-[380px] p-6 mx-2.5 cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.rating })?.map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#00B4D8">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-muted-foreground text-sm leading-relaxed mb-5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                &ldquo;{t?.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border flex-shrink-0 bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t?.image}
                    alt={t?.imageAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p
                    className="text-foreground font-semibold text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t?.name}
                  </p>
                  <p className="text-accent/80 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {t?.role}
                  </p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-muted-foreground text-[10px] font-medium border border-border px-2 py-0.5 rounded-full"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t?.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-14 text-center">
        <p className="text-muted-foreground text-sm mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
          Join thousands of satisfied customers
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#0A4D68] transition-all duration-300 shadow-xl shadow-primary/15 hover:shadow-2xl hover:-translate-y-0.5"
        >
          Get Your Free Consultation
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
    </section>
  );
}
