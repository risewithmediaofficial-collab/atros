import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Factory, Home, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import StructuredData from '@/app/components/StructuredData';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Projects & Installations | ATROS Water Purifier',
  description:
    'See the types of home, commercial, and industrial water purifier installations handled by ATROS Water Purifier in Krishnagiri and nearby regions.',
  alternates: { canonical: '/projects' },
};

const projects = [
  {
    title: 'Home RO+UV Installations',
    category: 'Domestic',
    description:
      'Compact kitchen installations for families using borewell, municipal, or mixed water sources.',
    image: 'https://images.unsplash.com/photo-1666608153597-05b25a35f82c',
    icon: Home,
  },
  {
    title: 'Office Drinking Water Systems',
    category: 'Commercial',
    description:
      'High-usage pantry and workplace purification systems with reliable service access.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e620f35f-1767854588560.png',
    icon: Building2,
  },
  {
    title: 'Industrial Treatment Plants',
    category: 'Industrial',
    description:
      'Custom-capacity treatment solutions for factories, hard-water conditions, and process needs.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15cdaf8b9-1772190825276.png',
    icon: Factory,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content">
        <section className="premium-band relative overflow-hidden pt-36 pb-20">
          <div className="premium-noise" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-6 block">Projects / Installations</span>
            <h1 className="max-w-5xl font-display text-hero font-light italic text-white">
              Practical installations,
              <span className="block font-bold not-italic text-accent">cleanly executed.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/72">
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
                  className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                >
                  <div className="relative min-h-[300px]">
                    <AppImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041019]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-bold uppercase text-accent">{project.category}</p>
                      <h2 className="mt-2 font-display text-3xl font-light italic text-white">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="icon-glow mb-5">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
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
            <Link href="/contact" className="btn-primary-glow">
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
