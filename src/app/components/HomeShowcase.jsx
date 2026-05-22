'use client';

import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    eyebrow: 'Domestic RO Systems',
    title: ['Cleaner water', 'daily living'],
    copy: 'Compact RO, UV, UF, and alkaline purifiers designed for homes that need dependable drinking water without visual clutter.',
    image:
      'https://images.unsplash.com/photo-1666608153597-05b25a35f82c?w=1400&auto=format&fit=crop',
    alt: 'Bright kitchen with a modern water purification setup',
    stats: ['RO + UV + UF', 'Mineral balanced', 'Low maintenance'],
    cta: 'Explore home purifiers',
    href: '/products',
  },
  {
    eyebrow: 'Commercial Purification',
    title: ['Reliable water', 'for workplaces'],
    copy: 'High-capacity purification for offices, schools, hospitals, restaurants, and teams that need clean water throughout the day.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e620f35f-1767854588560.png',
    alt: 'Commercial water purification station in a modern office',
    stats: ['Continuous output', 'Energy efficient', 'Service support'],
    cta: 'View commercial systems',
    href: '/services#commercial',
  },
  {
    eyebrow: 'Industrial RO Plants',
    title: ['Industrial RO', 'at scale'],
    copy: 'Custom water treatment plants for factories and industrial facilities, planned around source water, flow rate, and uptime needs.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15cdaf8b9-1772190825276.png',
    alt: 'Industrial water treatment plant with filtration equipment',
    stats: ['Custom capacity', 'Industrial grade', 'Planned installation'],
    cta: 'Plan a project',
    href: '/services#industrial',
  },
  {
    eyebrow: 'AMC & Support',
    title: ['Service care', 'that lasts'],
    copy: 'Annual maintenance, repairs, filter replacement, and local support from technicians who understand the system after installation.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&auto=format&fit=crop',
    alt: 'Technician maintaining water treatment equipment',
    stats: ['AMC plans', 'Fast repair', 'Filter replacement'],
    cta: 'Book support',
    href: '/amc-support',
  },
];

function SplitTitle({ lines }) {
  return (
    <h2 className="home-slide__title">
      {lines.map((line) => (
        <span className="home-title-line" key={line}>
          <span className="home-title-line__inner">{line}</span>
        </span>
      ))}
    </h2>
  );
}

export default function HomeShowcase() {
  const stageRef = useRef(null);
  const activeSlideRef = useRef(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let context;
    let triggers = [];
    let keyHandler;
    let scrollToPlugin;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }, scrollToModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrollToPlugin'),
      ]);

      scrollToPlugin = scrollToModule.ScrollToPlugin;
      gsap.registerPlugin(ScrollTrigger, scrollToPlugin);

      context = gsap.context(() => {
        gsap.set(stageRef.current, { autoAlpha: 1 });

        const intro = stageRef.current.querySelector('.home-intro');
        const slideNodes = gsap.utils.toArray('.home-slide');

        const introTl = gsap.timeline({ delay: 0.12 });
        introTl
          .from('.home-intro__title', {
            y: 26,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          })
          .from(
            '.home-intro__txt',
            {
              y: 18,
              opacity: 0,
              duration: 0.6,
              ease: 'power3.out',
            },
            0.12
          )
          .from(
            '.home-intro__media',
            {
              y: 28,
              opacity: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
            },
            0.1
          );

        triggers.push(
          ScrollTrigger.create({
            trigger: intro,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            animation: gsap
              .timeline()
              .to('.home-intro__media--large img', { y: 90, scale: 1.08, ease: 'none' }, 0)
              .to('.home-intro__media--small img', { y: -70, scale: 1.12, ease: 'none' }, 0),
          })
        );

        slideNodes.forEach((slide, index) => {
          const imageFrame = slide.querySelector('.home-slide__image');
          const imageWrap = slide.querySelector('.home-slide__image-wrap');
          const image = slide.querySelector('.home-slide__image-wrap img');
          const content = slide.querySelector('.home-slide__content');

          triggers.push(
            ScrollTrigger.create({
              trigger: slide,
              start: '35% 65%',
              onEnter: () => {
                activeSlideRef.current = index;
                setActiveSlide(index);
              },
              onEnterBack: () => {
                activeSlideRef.current = index;
                setActiveSlide(index);
              },
              animation: gsap
                .timeline()
                .fromTo(
                  slide.querySelectorAll('.home-title-line__inner'),
                  {
                    y: 48,
                    scale: 0.82,
                    filter: 'blur(8px)',
                    transformOrigin: 'left center',
                  },
                  {
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    duration: 0.85,
                    stagger: 0.09,
                    ease: 'back.out(1.65)',
                  }
                )
                .from(
                  slide.querySelectorAll('.home-slide__copy, .home-slide__stat, .home-slide__cta'),
                  {
                    y: 18,
                    duration: 0.55,
                    stagger: 0.08,
                    ease: 'power3.out',
                  },
                  0.2
                )
                .from(
                  slide.querySelector('.home-slide__index'),
                  {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 1,
                    ease: 'power3.out',
                  },
                  0.25
                ),
            })
          );

          triggers.push(
            ScrollTrigger.create({
              trigger: slide,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              animation: gsap.fromTo(imageFrame, { y: '-7vh' }, { y: '7vh', ease: 'none' }),
            })
          );

          triggers.push(
            ScrollTrigger.create({
              trigger: slide,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              animation: gsap
                .timeline()
                .fromTo(imageWrap, { y: '-16vh' }, { y: '16vh', ease: 'none' }, 0)
                .fromTo(image, { scale: 1.16 }, { scale: 1.04, ease: 'none' }, 0)
                .fromTo(content, { y: '4vh' }, { y: '-4vh', ease: 'none' }, 0),
            })
          );

          triggers.push(
            ScrollTrigger.create({
              trigger: slide,
              start: 'top 82%',
              animation: gsap.fromTo(
                imageFrame,
                { clipPath: 'inset(12% 10% 12% 10% round 1.4rem)' },
                {
                  clipPath: 'inset(0% 0% 0% 0% round 1.4rem)',
                  duration: 1.15,
                  ease: 'power4.out',
                }
              ),
            })
          );
        });

        gsap.utils.toArray('.home-scroll-link').forEach((link) => {
          const line = link.querySelector('.home-scroll-link__line');

          link.addEventListener('mouseenter', () => {
            gsap.to(line, { y: 24, duration: 0.45, ease: 'power4.out' });
          });

          link.addEventListener('mouseleave', () => {
            gsap.to(line, { y: 0, duration: 0.55, ease: 'power4.out' });
          });
        });

        gsap.utils.toArray('.home-slide-link').forEach((link) => {
          const line = link.querySelector('.home-slide-link__line');

          link.addEventListener('mouseenter', () => {
            gsap.to(line, {
              x: 18,
              scaleX: 0.35,
              transformOrigin: 'right center',
              duration: 0.6,
              ease: 'power4.out',
            });
          });

          link.addEventListener('mouseleave', () => {
            gsap.to(line, {
              x: 0,
              scaleX: 1,
              transformOrigin: 'right center',
              duration: 0.7,
              ease: 'power4.out',
            });
          });
        });
      }, stageRef);

      keyHandler = (event) => {
        if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
        event.preventDefault();

        const target =
          event.key === 'ArrowDown'
            ? Math.min(activeSlideRef.current + 1, slides.length - 1)
            : Math.max(activeSlideRef.current - 1, 0);

        const id =
          event.key === 'ArrowUp' && activeSlideRef.current === 0
            ? '#home-intro'
            : `#home-slide-${target}`;
        gsap.to(window, { duration: 1.35, scrollTo: id, ease: 'power3.inOut' });
      };

      document.addEventListener('keydown', keyHandler);
    };

    init();

    return () => {
      if (keyHandler) document.removeEventListener('keydown', keyHandler);
      triggers.forEach((trigger) => trigger.kill());
      if (context) context.revert();
    };
  }, []);

  const scrollTo = (target) => {
    import('gsap').then(({ gsap }) => {
      gsap.to(window, { duration: 1.35, scrollTo: target, ease: 'power3.inOut' });
    });
  };

  return (
    <section ref={stageRef} className="home-stage">
      <section id="home-intro" className="home-intro">
        <div className="home-intro__copy">
          <p className="section-label mb-6">Advanced Water Purification</p>
          <h1 className="home-intro__title">
            {['Pure Water Systems', 'For Every Need'].map((line) => (
              <span className="home-intro-line" key={line}>
                <span className="home-intro-line__inner">{line}</span>
              </span>
            ))}
          </h1>
          <p className="home-intro__txt">
            RO, UV, UF, alkaline, commercial, and industrial water systems for homes and businesses
            that need clean water without compromise.
          </p>
          <div className="home-intro__actions">
            <a href="/contact" className="btn-primary-glow">
              Premium Consultation
            </a>
            <button
              type="button"
              className="home-outline-btn"
              onClick={() => scrollTo('#home-slide-0')}
              suppressHydrationWarning
            >
              View Solutions
            </button>
          </div>
        </div>

        <div className="home-intro__gallery" aria-hidden="true">
          <div className="home-intro__media home-intro__media--large">
            <img
              src="https://images.unsplash.com/photo-1657778752979-90b85022f6fa?w=1000&auto=format&fit=crop"
              alt=""
            />
          </div>
          <div className="home-intro__media home-intro__media--small">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop"
              alt=""
            />
          </div>
        </div>
      </section>

      {slides.map((slide, index) => (
        <section
          id={`home-slide-${index}`}
          className={`home-slide ${index % 2 === 0 ? 'home-slide--blue' : 'home-slide--white'}`}
          key={slide.eyebrow}
        >
          <div className="home-slide__media">
            <div className="home-slide__image">
              <div className="home-slide__image-wrap">
                <img src={slide.image} alt={slide.alt} />
              </div>
            </div>
          </div>

          <div className="home-slide__content">
            <div className="home-slide__index">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{slide.eyebrow}</span>
            </div>
            <SplitTitle lines={slide.title} />
            <p className="home-slide__copy">{slide.copy}</p>
            <div className="home-slide__stats">
              {slide.stats.map((stat) => (
                <span className="home-slide__stat" key={stat}>
                  {stat}
                </span>
              ))}
            </div>
            <a href={slide.href} className="home-slide-link home-slide__cta">
              <span>{slide.cta}</span>
              <i className="home-slide-link__line" />
            </a>
          </div>
        </section>
      ))}

      <section className="home-final">
        <p className="section-label mx-auto mb-5">Start With ATROS</p>
        <h2>
          Get clean water planned, installed, and supported by a team that understands your source
          water.
        </h2>
        <a href="/contact" className="btn-primary-glow">
          Request Premium Consultation
        </a>
      </section>
    </section>
  );
}
