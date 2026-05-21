import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
  Star,
  ArrowRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import PageEffects from '@/app/components/PageEffects';

export const metadata = {
  title: 'AMC & Support | ATROS Water Purifier Maintenance and Repair',
  description:
    'ATROS Water Purifier provides AMC maintenance, filter replacement, repair support, and service care for RO, UV, UF, alkaline and commercial water systems.',
  alternates: { canonical: '/amc-support' },
};

const supportItems = [
  'Annual maintenance contracts',
  'Filter and membrane replacement',
  'RO, UV, UF and alkaline system repair',
  'Commercial and industrial service checks',
  'Performance inspection and water-flow review',
  'Phone and WhatsApp support coordination',
];

const amcPlans = [
  {
    name: 'Basic',
    price: 'Contact for price',
    period: 'per year',
    ideal: 'Home purifiers',
    color: 'from-slate-50 to-slate-100',
    border: 'border-slate-200',
    features: [
      '2 scheduled service visits',
      'Filter inspection & replacement',
      'Water quality check',
      'Phone support',
    ],
  },
  {
    name: 'Standard',
    price: 'Best value',
    period: '',
    ideal: 'Home & small office',
    featured: true,
    color: 'from-primary to-[#0077a8]',
    border: 'border-accent',
    features: [
      '4 scheduled service visits',
      'All filter & membrane replacement',
      'TDS calibration',
      'Priority phone & WhatsApp support',
      'Annual performance report',
    ],
  },
  {
    name: 'Commercial',
    price: 'Custom pricing',
    period: '',
    ideal: 'Offices, industries',
    color: 'from-slate-50 to-slate-100',
    border: 'border-slate-200',
    features: [
      'Unlimited service visits',
      'All parts & filters covered',
      'Emergency response within 24hrs',
      'Dedicated service coordinator',
      'Monthly water quality reports',
      'On-site technician support',
    ],
  },
];

const whyAmcItems = [
  {
    icon: Zap,
    title: 'Extended purifier life',
    desc: 'Regular servicing adds years to your system and prevents costly breakdowns.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed water purity',
    desc: 'Timely filter changes ensure your water stays free from contaminants year-round.',
  },
  {
    icon: Clock,
    title: 'Zero hassle maintenance',
    desc: 'Scheduled visits mean you never have to remember when your next service is due.',
  },
  {
    icon: Star,
    title: 'Priority service response',
    desc: 'AMC customers get priority scheduling and faster resolution for any issues.',
  },
];

export default function AmcSupportPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <PageEffects />
      <main id="main-content" className="page-transition-root animated-page">
        {/* Hero */}
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="section-label mb-6 block">AMC &amp; Support</span>
                <h1 className="max-w-5xl font-display text-hero font-light italic text-white">
                  Service care
                  <span className="block font-bold not-italic text-accent">
                    after installation.
                  </span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                  A water purifier is only as dependable as its maintenance. ATROS keeps service,
                  repair, filter replacement, and AMC support clear and easy to access.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary-glow inline-flex items-center gap-2">
                    <Phone size={15} aria-hidden="true" />
                    Request AMC Plan
                  </Link>
                  <a
                    href="https://wa.me/919080232624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-white inline-flex items-center gap-2"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: '10K+', label: 'Systems Serviced' },
                  { val: '20+', label: 'Years Experience' },
                  { val: 'Mon–Sun', label: '9:30 AM – 9 PM' },
                  { val: '24hr', label: 'Response Time' },
                ].map((s) => (
                  <div key={s.label} className="glass-card p-5 text-center">
                    <p className="font-display text-3xl font-bold text-white">{s.val}</p>
                    <p className="mt-1 text-xs font-medium text-white/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why AMC */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="section-label mx-auto mb-5 block w-fit">Why AMC?</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Protect your investment,
                <br />
                <span className="italic text-primary">protect your health.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyAmcItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="gradient-border-card group bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <div className="icon-glow mb-5">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AMC Plans */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="section-label mx-auto mb-5 block w-fit">Service Plans</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Maintenance plans
                <br />
                <span className="italic text-primary">for every need.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                All AMC plans include genuine parts, trained technicians, and transparent pricing.
                Contact us for exact pricing tailored to your system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {amcPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden rounded-3xl border-2 ${plan.border} bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.featured ? 'ring-2 ring-accent ring-offset-2' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Most Popular
                    </div>
                  )}
                  <div
                    className={`bg-gradient-to-br ${plan.color} p-7 ${plan.featured ? 'text-white' : ''}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {plan.ideal}
                    </p>
                    <h3
                      className={`mt-2 font-display text-3xl font-light italic ${plan.featured ? 'text-white' : 'text-foreground'}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-2 text-lg font-bold ${plan.featured ? 'text-white/90' : 'text-primary'}`}
                    >
                      {plan.price}
                    </p>
                    {plan.period && (
                      <p
                        className={`text-xs ${plan.featured ? 'text-white/60' : 'text-muted-foreground'}`}
                      >
                        {plan.period}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <ul className="flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 flex-shrink-0 text-accent" size={15} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${plan.featured ? 'bg-accent text-white hover:bg-[#0094b8] shadow-lg shadow-accent/30' : 'border border-border text-foreground hover:border-accent hover:text-accent'}`}
                    >
                      Get Started
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What's covered */}
        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="section-label mb-5 block">What Support Covers</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Maintenance
                <br />
                <span className="italic text-primary">made predictable.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                From annual service contracts to one-off repairs, ATROS has you covered at every
                stage of your purifier&apos;s life.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  ['Preventive maintenance', 'ShieldCheck'],
                  ['Fast repair support', 'Wrench'],
                  ['Clear service timing', 'Clock'],
                ].map(([title]) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 text-sm font-semibold text-foreground"
                  >
                    <CheckCircle2 className="flex-shrink-0 text-accent" size={16} />
                    {title}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-accent" size={17} />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service timing banner */}
        <section className="bg-secondary py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="gradient-border-card bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="icon-glow flex-shrink-0">
                    <Clock size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Service Hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Available <strong className="text-foreground">Monday to Sunday</strong>, from{' '}
                      <strong className="text-foreground">9:30 AM to 9:00 PM</strong>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      For emergencies, reach us on WhatsApp at any time.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919080232624"
                    className="btn-primary-glow inline-flex items-center gap-2"
                  >
                    <Phone size={15} aria-hidden="true" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919080232624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-accent">
                Ready to protect your purifier?
              </p>
              <h2 className="font-display text-4xl font-light italic text-white">
                Need service or AMC support?
              </h2>
            </div>
            <Link href="/contact" className="btn-primary-glow inline-flex items-center gap-2">
              Request Support
              <ArrowRight size={16} />
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
