'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    let context;
    let triggers = [];

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        gsap.fromTo(
          '.page-transition-root',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );

        gsap.utils.toArray('.page-transition-root > section').forEach((section) => {
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'top 82%',
              animation: gsap.fromTo(
                section.querySelectorAll(
                  'h1, h2, .section-label, p, article, dl, .gradient-border-card, .glass-card'
                ),
                { y: 36, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.85,
                  stagger: 0.055,
                  ease: 'power3.out',
                }
              ),
            })
          );

          section.querySelectorAll('img').forEach((image) => {
            const wrap =
              image.closest('article') ||
              image.closest('.relative') ||
              image.parentElement ||
              section;

            triggers.push(
              ScrollTrigger.create({
                trigger: wrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                animation: gsap.fromTo(
                  image,
                  { yPercent: -8, scale: 1.08 },
                  { yPercent: 8, scale: 1.02, ease: 'none' }
                ),
              })
            );
          });
        });
      });
    };

    init();

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      if (context) context.revert();
    };
  }, [pathname]);

  return null;
}
