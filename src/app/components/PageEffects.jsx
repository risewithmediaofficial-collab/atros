'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    let context;
    let isCancelled = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const frame = window.requestAnimationFrame(() => {
      document.documentElement.classList.add('page-ready');
    });

    if (prefersReducedMotion || pathname === '/') {
      return () => {
        isCancelled = true;
        window.cancelAnimationFrame(frame);
        document.documentElement.classList.remove('page-ready');
      };
    }

    const initGsap = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);

        if (isCancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const root = document.querySelector('#main-content');
        if (!root) return;

        context = gsap.context(() => {
          gsap.utils.toArray(root.querySelectorAll('section')).forEach((section) => {
            const cards = section.querySelectorAll(
              '.gradient-border-card, .glass-card, .faq-item, .product-card, .reason-item, .stat-item, .project-flip-card, .process-card, .contact-left > *, .contact-right, form > *, ol > li'
            );

            if (cards.length) {
              gsap.fromTo(
                cards,
                { y: 14, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.58,
                  ease: 'power3.out',
                  stagger: 0.04,
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 82%',
                    once: true,
                  },
                }
              );
            }
          });
        }, root);
      } catch {
        document.documentElement.classList.add('page-ready');
      }
    };

    initGsap();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove('page-ready');
      if (context) context.revert();
    };
  }, [pathname]);

  return null;
}
