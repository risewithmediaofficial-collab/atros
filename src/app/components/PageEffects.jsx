'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    let context;
    let isCancelled = false;

    const frame = window.requestAnimationFrame(() => {
      document.documentElement.classList.add('page-ready');
    });

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
              '.gradient-border-card, article, .glass-card, li, form > *, .contact-left > *, .contact-right'
            );

            if (cards.length) {
              gsap.fromTo(
                cards,
                { y: 22 },
                {
                  y: 0,
                  duration: 0.68,
                  ease: 'power3.out',
                  stagger: 0.055,
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 78%',
                    once: true,
                  },
                }
              );
            }
          });

          gsap.utils.toArray(root.querySelectorAll('img')).forEach((image) => {
            gsap.fromTo(
              image,
              { scale: 1.045 },
              {
                scale: 1,
                duration: 1.15,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: image,
                  start: 'top 88%',
                  once: true,
                },
              }
            );
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
