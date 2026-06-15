import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage, { metadata as homeMetadata } from '@/app/page';
import AboutPage, { metadata as aboutMetadata } from '@/app/about/page';
import ServicesPage, { metadata as servicesMetadata } from '@/app/services/page';
import ProductsPage, { metadata as productsMetadata } from '@/app/products/page';
import ProjectsPage, { metadata as projectsMetadata } from '@/app/projects/page';
import ContactPage, { metadata as contactMetadata } from '@/app/contact/page';
import AmcSupportPage, { metadata as amcSupportMetadata } from '@/app/amc-support/page';
import NotFound from '@/app/not-found';
import Seo from '@/app/components/Seo';
import { buildSeoMetadata } from '@/app/seo';

const routeMetadata = {
  '/': homeMetadata,
  '/about': aboutMetadata,
  '/services': servicesMetadata,
  '/products': productsMetadata,
  '/projects': projectsMetadata,
  '/contact': contactMetadata,
  '/amc-support': amcSupportMetadata,
};

const notFoundMetadata = buildSeoMetadata({
  title: 'Page Not Found | ATROS Water Purifier',
  description:
    'The page you are looking for could not be found. Browse ATROS water purifier services, products, projects, and support pages instead.',
  canonical: '/404',
  robots: 'noindex, nofollow',
});

function RouteEffects() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

function RouteSeo() {
  const { pathname } = useLocation();
  return <Seo routeMeta={routeMetadata[pathname] || notFoundMetadata} />;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <RouteSeo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/amc-support" element={<AmcSupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
