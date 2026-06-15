import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routeConfig } from '@/app/router/routeConfig';
import { useAppDispatch } from '@/app/store/hooks';
import { setActiveSection } from '@/app/store/slices/uiSlice';
import Seo from '@/features/seo/Seo.jsx';
import PageLoader from '@/shared/ui/PageLoader';

const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

function RouteEffects() {
  const dispatch = useAppDispatch();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hash) {
      dispatch(setActiveSection(''));
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    dispatch(setActiveSection(hash.slice(1)));

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [dispatch, hash, pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <>
      <RouteEffects />
      <Seo routes={routeConfig} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routeConfig.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
