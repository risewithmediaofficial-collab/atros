import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  Droplets,
  Factory,
  Home,
  Settings,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import ProcessSection from '@/app/components/ProcessSection';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import PageEffects from '@/app/components/PageEffects';

export const metadata = {
  title: 'Water Purifier Services | RO, UV, UF, Alkaline, AMC & Repair | ATROS',
  description:
    'Explore ATROS Water Purifier services including domestic RO systems, alkaline purifiers, commercial RO plants, industrial water treatment, professional installation, AMC maintenance, and repair support.',
  alternates: {
    canonical: '/services',
  },
};

const serviceGroups = [
  {
    id: 'domestic',
    title: 'Domestic Water Purifiers',
    subtitle: 'For homes, apartments, and families',
    description:
      'Smart RO, UV, UF, and alkaline purification systems selected for your water source, daily usage, and taste preference.',
    image: 'https://images.unsplash.com/photo-1666608153597-05b25a35f82c',
    alt: 'Modern kitchen with water purifier setup',
    icon: Home,
    points: [
      'RO, UV, UF and alkaline options',
      'TDS control and mineral balance',
      'Compact modern designs',
      'Low-maintenance ownership',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial RO Systems',
    subtitle: 'For offices, schools, hotels, and hospitals',
    description:
      'Reliable high-output drinking water systems for spaces that need steady supply, practical maintenance, and consistent quality.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e620f35f-1767854588560.png',
    alt: 'Commercial water station in a bright office pantry',
    icon: Building2,
    points: [
      'High-capacity output',
      'Energy-conscious system choices',
      'Service-ready installation',
      'Suitable for repeated daily use',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial RO Plants',
    subtitle: 'For factories and process water needs',
    description:
      'Custom water treatment planning for industrial environments, hard-water conditions, and large-scale usage requirements.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15cdaf8b9-1772190825276.png',
    alt: 'Industrial water treatment equipment',
    icon: Factory,
    points: [
      'Custom plant capacity',
      'Hard-water treatment planning',
      'Industrial-grade components',
      'Scalable system design',
    ],
  },
];

const supportServices = [
  {
    id: 'installation',
    title: 'Professional Installation',
    description:
      'Clean setup, fitment, testing, and handover for home, commercial, and industrial water systems.',
    icon: Settings,
  },
  {
    id: 'maintenance',
    title: 'AMC & Maintenance',
    description:
      'Annual maintenance support with timely filter replacement, inspection, and performance care.',
    icon: ShieldCheck,
  },
  {
    id: 'repair',
    title: 'Repair & Support',
    description:
      'Troubleshooting and servicing for RO, UV, UF, alkaline purifiers, and treatment equipment.',
    icon: Wrench,
  },
];

const selectionSteps = [
  'Water source and usage check',
  'System recommendation',
  'Installation and quality testing',
  'Ongoing AMC or repair support',
];

export default function ServicesPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <PageEffects />
      <main id="main-content" className="landing-page page-transition-root animated-page">
        <section className="subpage-hero relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="section-label mb-6 block">ATROS Services</span>
              <h1 className="font-display text-hero font-extrabold text-foreground">
                Water solutions
                <span className="block text-primary">for every need.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                From compact home purifiers to commercial RO systems and industrial treatment
                plants, ATROS helps customers choose, install, and maintain dependable water
                purification systems.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2">
                  Request Premium Consultation
                </Link>
                <a href="#service-list" className="home-outline-btn inline-flex items-center gap-2">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['RO + UV + UF', 'Multi-stage purification'],
                ['Alkaline', 'Balanced taste and hydration'],
                ['AMC', 'Long-term service care'],
                ['Industrial', 'Custom treatment systems'],
              ].map(([title, text]) => (
                <div key={title} className="glass-card p-6">
                  <Droplets className="mb-6 text-accent" size={26} aria-hidden="true" />
                  <h2 className="font-display text-2xl font-extrabold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service-list" className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label mb-5 block">Core Systems</span>
                <h2 className="font-display text-section-title font-light text-foreground">
                  Choose by
                  <br />
                  <span className="italic text-primary">water demand.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Each service category is built around a different use case, from daily household
                drinking water to high-volume industrial treatment.
              </p>
            </div>

            <div className="space-y-8">
              {serviceGroups.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/8 hover:border-accent/20 lg:grid-cols-2"
                  >
                    <div className={`overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-104"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-7 sm:p-10">
                      <div className="icon-glow mb-6">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent">
                        {service.subtitle}
                      </p>
                      <h3 className="mt-3 font-display text-4xl font-light italic text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2
                              className="mt-0.5 flex-shrink-0 text-accent"
                              size={16}
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-7 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent hover:text-primary transition-colors"
                      >
                        Enquire Now
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="section-label mx-auto mb-5 block w-fit">Support Services</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Install, maintain,
                <br />
                <span className="italic text-primary">and repair.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {supportServices.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="gradient-border-card bg-white p-7"
                  >
                    <div className="icon-glow mb-7">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-light italic text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="section-label mb-5 block">How We Select</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Practical guidance
                <br />
                <span className="italic text-primary">before purchase.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A good purifier is not only about technology labels. ATROS looks at source water,
                hardness, TDS, expected daily consumption, available space, and service access
                before recommending a system.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="grid gap-4">
                {selectionSteps.map((step, index) => (
                  <li
                    key={step}
                    className="gradient-border-card flex items-center gap-5 bg-white p-5"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-base font-semibold text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ProcessSection />

        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-accent">Need help choosing?</p>
              <h2 className="font-display text-4xl font-light italic text-white">
                Tell us your water source and usage.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2">
              Get Expert Recommendation
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
