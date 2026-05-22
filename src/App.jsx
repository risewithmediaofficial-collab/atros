import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/app/page';
import AboutPage from '@/app/about/page';
import ServicesPage from '@/app/services/page';
import ProductsPage from '@/app/products/page';
import ProjectsPage from '@/app/projects/page';
import ContactPage from '@/app/contact/page';
import AmcSupportPage from '@/app/amc-support/page';
import NotFound from '@/app/not-found';

function RouteEffects() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
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
