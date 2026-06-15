import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Home, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';
import PageEffects from '@/app/components/PageEffects';
import { buildSeoMetadata } from '@/app/seo';

export const metadata = buildSeoMetadata({
  title: 'Projects & Installations | ATROS Water Purifier',
  description:
    'See the types of home, commercial, and industrial water purifier installations handled by ATROS Water Purifier in Krishnagiri and nearby regions.',
  canonical: '/projects',
});

const projects = [
  {
    title: 'Home RO+UV Installations',
    category: 'Domestic',
    description:
      'Compact kitchen installations for families using borewell, municipal, or mixed water sources.',
    image: '/assets/images/dolphin.webp',
    icon: Home,
  },
  {
    title: 'Office Drinking Water Systems',
    category: 'Commercial',
    description:
      'High-usage pantry and workplace purification systems with reliable service access.',
    image: '/assets/images/Water-Purifiers_2_new.png',
    icon: Building2,
  },
  {
    title: 'Industrial Treatment Plants',
    category: 'Industrial',
    description:
      'Custom-capacity treatment solutions for factories, hard-water conditions, and process needs.',
    image: '/assets/images/asfesd.webp',
    icon: Factory,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <PageEffects />
      <main id="main-content" className="landing-page page-transition-root animated-page">
        <section className="subpage-hero relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">Projects / Installations</span>
            <h1 className="max-w-5xl font-display text-hero font-extrabold text-foreground">
              Practical installations,
              <span className="block text-primary">cleanly executed.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
              This page groups the installation categories ATROS handles, from homes and offices to
              larger treatment requirements. It gives project-based visitors a clearer path than
              hiding everything inside the homepage.
            </p>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="project-flip-card group"
                  tabIndex={0}
                  role="button"
                  onClick={(event) => event.currentTarget.focus()}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      event.currentTarget.focus();
                    }
                  }}
                >
                  <div className="project-flip-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-image"
                      loading="lazy"
                    />
                    <div className="project-card-overlay" />
                    <div className="project-card-panel">
                      <div className="project-card-icon">
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <p className="project-card-category">{project.category}</p>
                      <h2 className="project-card-title font-display">{project.title}</h2>
                      <p className="project-card-description">{project.description}</p>
                      <Link
                        to="/contact"
                        className="btn-primary-glow mt-7 inline-flex items-center gap-2 px-5 py-3 text-sm"
                      >
                        Learn more
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-secondary py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <span className="section-label mb-5 block">Service Region</span>
              <h2 className="font-display text-section-title font-light text-foreground">
                Krishnagiri based,
                <br />
                <span className="italic text-primary">service focused.</span>
              </h2>
            </div>
            <div className="gradient-border-card bg-white p-7 lg:col-span-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0 text-accent" size={24} aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  ATROS Water Purifier operates from No 4/268, Next to Dk Samy School, Mel Somarpet,
                  Venkatapuram, Indl Estate, Krishnagiri-635002, Tamil Nadu, supporting customers
                  with product selection, installation, AMC, and repair.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="premium-band py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <h2 className="font-display text-4xl font-light italic text-white">
              Planning a new installation?
            </h2>
            <Link to="/contact" className="btn-primary-glow">
              Discuss Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
