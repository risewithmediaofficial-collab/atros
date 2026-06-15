import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Droplets, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import ContactSection from '@/app/components/ContactSection';
import SiteShell from '@/shared/layout/SiteShell';

const milestones = [
  { value: '2009', label: 'Established' },
  { value: '10K+', label: 'Customers Served' },
  { value: '20+', label: 'Years Experience' },
  { value: '99.9%', label: 'Purity Focus' },
];

const values = [
  {
    title: 'Water-first recommendations',
    description:
      'Every suggestion starts with the actual water source, usage pattern, and service expectations.',
    icon: Droplets,
  },
  {
    title: 'Reliable local support',
    description:
      'Installation, filter replacement, AMC, and repair support are handled with a practical service-first mindset.',
    icon: Wrench,
  },
  {
    title: 'Transparent business details',
    description:
      'ATROS shares its statutory and payment information clearly so customers know who they are working with.',
    icon: ShieldCheck,
  },
];

const businessDetails = [
  ['Business Name', 'Atros Water Purifier'],
  ['Legal Name', 'MADHAIYAN MOORTHI'],
  ['GSTIN', '33BOJPM1034A2ZM'],
  ['Udyam Id', 'UXXAM-TN-XX-XXXXX09'],
  ['Year of Establishment', '2009'],
  ['No of Employee', 'Less than 10'],
];

export default function AboutPage() {
  return (
    <SiteShell showPageEffects showStructuredData mainClassName="page-transition-root animated-page">
      <section className="subpage-hero relative overflow-hidden pt-36 pb-20">
        <div className="premium-noise" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="section-label mb-6 block">About ATROS</span>
            <h1 className="font-display text-hero font-extrabold text-foreground">
              Pure water,
              <span className="block text-primary">trusted locally.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              ATROS Water Purifier provides domestic, commercial, and industrial water
              purification solutions from Krishnagiri, Tamil Nadu. The work is simple: understand
              the water, recommend the right system, install it properly, and support it for the
              long run.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2">
                Premium Consultation
              </Link>
              <Link to="/services" className="home-outline-btn inline-flex items-center gap-2">
                View Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <img
                src="/assets/images/pearl copper.webp"
                alt="ATROS Pureit Copper Mineral water purification system"
                className="h-full min-h-[420px] w-full object-contain bg-gray-50 p-4"
                loading="eager"
              />
              <div className="absolute inset-x-5 bottom-5 glass-card p-5">
                <p className="text-sm font-semibold text-white">Serving Krishnagiri and beyond</p>
                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  Home purifiers, commercial RO systems, industrial plants, AMC and repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {milestones.map((item) => (
              <div key={item.label} className="gradient-border-card bg-white p-6 text-center">
                <div className="font-display text-3xl font-bold text-primary">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="section-label mb-5 block">Our Approach</span>
            <h2 className="font-display text-section-title font-light text-foreground">
              Built around
              <br />
              <span className="italic text-primary">real water needs.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Borewell, municipal, tanker, and hard water sources all behave differently. ATROS
              focuses on matching each customer with a purifier or treatment system that fits the
              water condition, family size, business usage, and maintenance expectations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="gradient-border-card bg-white p-6">
                  <div className="icon-glow mb-5">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="section-label mb-5 block">Business Details</span>
            <h2 className="font-display text-section-title font-light text-foreground">
              Clear details,
              <br />
              <span className="italic text-primary">easy contact.</span>
            </h2>
            <div className="mt-7 flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-1 text-accent" size={20} aria-hidden="true" />
              <p className="text-sm leading-relaxed">
                Atros Water Purifier, No 4/268, Next to Dk Samy School, Mel Somarpet,
                Venkatapuram, Indl Estate, Krishnagiri-635002, Tamil Nadu
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {businessDetails.map(([label, value]) => (
                <div key={label} className="gradient-border-card bg-white p-5">
                  <dt className="text-xs font-semibold text-muted-foreground">{label}</dt>
                  <dd className="mt-2 text-sm font-bold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="premium-band py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <Award size={18} aria-hidden="true" />
              Service-led water purification
            </div>
            <h2 className="font-display text-4xl font-light italic text-white">
              Ready to choose the right purifier?
            </h2>
          </div>
          <Link to="/contact" className="btn-primary-glow inline-flex items-center gap-2">
            Talk to ATROS
          </Link>
        </div>
      </section>

      <ContactSection />
    </SiteShell>
  );
}
