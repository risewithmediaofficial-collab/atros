import { lazy } from 'react';
import { buildSeoMetadata } from '@/features/seo/seo';

export const routeConfig = [
  {
    path: '/',
    component: lazy(() => import('@/pages/HomePage')),
    meta: buildSeoMetadata({
      title: 'ATROS Water Purifier | RO, UV, UF & Alkaline Purification Solutions',
      description:
        'ATROS Water Purifier provides RO, UV, UF, alkaline, commercial, and industrial water purification systems with installation, AMC support, and repair service in Krishnagiri.',
      canonical: '/',
    }),
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/AboutPage')),
    meta: buildSeoMetadata({
      title: 'About ATROS Water Purifier | Trusted Water Purification in Krishnagiri',
      description:
        'Learn about ATROS Water Purifier, a Krishnagiri-based water purification business serving homes, businesses, and industries with RO, UV, UF, alkaline systems, installation, AMC, and repair support.',
      canonical: '/about',
    }),
  },
  {
    path: '/services',
    component: lazy(() => import('@/pages/ServicesPage')),
    meta: buildSeoMetadata({
      title: 'Water Purifier Services | RO, UV, UF, Alkaline, AMC & Repair | ATROS',
      description:
        'Explore ATROS Water Purifier services including domestic RO systems, alkaline purifiers, commercial RO plants, industrial water treatment, professional installation, AMC maintenance, and repair support.',
      canonical: '/services',
    }),
  },
  {
    path: '/products',
    component: lazy(() => import('@/pages/ProductsPage')),
    meta: buildSeoMetadata({
      title: 'Products | ATROS RO, UV, UF, Alkaline & Industrial Water Systems',
      description:
        'Explore ATROS water purifier product categories including home RO+UV systems, alkaline purifiers, commercial flow systems, and industrial RO plants.',
      canonical: '/products',
    }),
  },
  {
    path: '/projects',
    component: lazy(() => import('@/pages/ProjectsPage')),
    meta: buildSeoMetadata({
      title: 'Projects & Installations | ATROS Water Purifier',
      description:
        'See the types of home, commercial, and industrial water purifier installations handled by ATROS Water Purifier in Krishnagiri and nearby regions.',
      canonical: '/projects',
    }),
  },
  {
    path: '/contact',
    component: lazy(() => import('@/pages/ContactPage')),
    meta: buildSeoMetadata({
      title: 'Contact ATROS Water Purifier | Krishnagiri',
      description:
        'Contact ATROS Water Purifier for RO water purifier consultation, installation, AMC maintenance, repair, commercial RO systems, and industrial water treatment support.',
      canonical: '/contact',
    }),
  },
  {
    path: '/amc-support',
    component: lazy(() => import('@/pages/AmcSupportPage')),
    meta: buildSeoMetadata({
      title: 'AMC & Support | ATROS Water Purifier Maintenance and Repair',
      description:
        'ATROS Water Purifier provides AMC maintenance, filter replacement, repair support, and service care for RO, UV, UF, alkaline and commercial water systems.',
      canonical: '/amc-support',
    }),
  },
];

export const notFoundMetadata = buildSeoMetadata({
  title: 'Page Not Found | ATROS Water Purifier',
  description:
    'The page you are looking for could not be found. Browse ATROS water purifier services, products, projects, and support pages instead.',
  canonical: '/404',
  robots: 'noindex, nofollow',
});
