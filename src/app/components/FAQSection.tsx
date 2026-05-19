'use client';

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: 'Which water purifier is suitable for borewell water?',
    answer:
      'RO-based systems are generally recommended for borewell water with high TDS levels. Our experts will test your water TDS and recommend the right system, typically an RO+UV or RO+Alkaline combination for borewell water sources.',
  },
  {
    question: 'How often should filters be changed?',
    answer:
      'Filter replacement depends on usage and water quality, usually every 6 to 12 months. With our AMC package, we schedule timely filter replacements so you never have to worry about maintenance.',
  },
  {
    question: 'Do you provide professional installation services?',
    answer:
      'Yes, professional installation services are available. Our trained technicians handle complete installation including pipe fitting, wall mounting, and quality testing, usually completed the same day or the next business day.',
  },
  {
    question: 'Is Annual Maintenance Contract (AMC) support available?',
    answer:
      'Yes, affordable annual maintenance contracts are provided. Our AMC plans include regular servicing, filter replacements, and priority technical support at a fixed yearly cost, saving you from unexpected repair expenses.',
  },
  {
    question: 'Do you handle commercial and industrial projects?',
    answer:
      'Yes, we provide customized solutions for commercial and industrial applications. From high-capacity office RO systems to large-scale industrial water treatment plants, our team designs and installs solutions tailored to your specific requirements.',
  },
  {
    question: 'Can you repair existing RO systems from other brands?',
    answer:
      'Yes, repair and servicing support is available for various purification system brands. Our technicians are trained to diagnose and fix issues with most RO, UV, and UF purifier models. Contact us for a service appointment.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        gsap.from(sectionRef.current.querySelectorAll('.faq-item'), {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        });
      } catch {
        // GSAP unavailable — items visible by default
      }
    };
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Header + CTA */}
          <div className="lg:col-span-4">
            <span className="section-label mb-5 block">06 - FAQ</span>
            <h2 className="font-display text-section-title font-light text-foreground mb-6">
              Questions
              <br />
              <span className="italic text-primary">Answered</span>
            </h2>
            <p
              className="text-muted-foreground text-base leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Have more questions? Our water purification experts are available Monday–Sunday, 9:30
              AM to 9:00 PM.
            </p>

            {/* Contact card */}
            <div className="gradient-border-card bg-white p-5 mb-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-glow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-semibold text-foreground text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Call Our Experts
                  </p>
                  <p
                    className="text-muted-foreground text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Mon–Sun, 9:30 AM – 9:00 PM
                  </p>
                </div>
              </div>
              <a
                href="tel:+919080232624"
                className="block w-full text-center bg-gradient-to-r from-primary to-[#0077A8] text-white font-semibold text-sm py-3 rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                +91 90802 32624
              </a>
            </div>

            <a
              href="https://wa.me/919080232624"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold text-sm py-3 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item transition-all duration-300 ${openIdx === i ? 'bg-secondary/50 rounded-xl px-5 -mx-5' : 'px-0'}`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                    aria-expanded={openIdx === i}
                    suppressHydrationWarning
                  >
                    <span
                      className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                        openIdx === i ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIdx === i
                          ? 'bg-gradient-to-br from-accent to-[#0094B8] text-white shadow-lg shadow-accent/30 rotate-45'
                          : 'border border-border text-muted-foreground group-hover:border-accent group-hover:text-accent'
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: openIdx === i ? '300px' : '0',
                      opacity: openIdx === i ? 1 : 0,
                    }}
                  >
                    <p
                      className="text-muted-foreground text-sm leading-relaxed pb-5"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
