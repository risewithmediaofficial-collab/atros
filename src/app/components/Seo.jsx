import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_NAME, buildSeoMetadata, toAbsoluteUrl } from '@/app/seo';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function Seo({ routeMeta }) {
  const location = useLocation();
  const pathname = location.pathname || '/';

  useEffect(() => {
    const fallbackMeta = buildSeoMetadata({
      title: `${SITE_NAME} | RO, UV, UF & Alkaline Purification Solutions`,
      description:
        'ATROS Water Purifier offers advanced RO, UV, UF, and alkaline water purification systems for homes, businesses, and industries.',
      canonical: pathname,
    });

    const meta = routeMeta || fallbackMeta;
    const canonicalUrl = toAbsoluteUrl(meta.canonical || pathname);

    document.title = meta.title;
    document.documentElement.lang = 'en';

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: meta.robots || fallbackMeta.robots,
    });
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#0a6680',
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: meta.openGraph?.type || 'website',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.openGraph?.title || meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.openGraph?.description || meta.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: meta.openGraph?.url || canonicalUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: meta.openGraph?.siteName || SITE_NAME,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: meta.openGraph?.image,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: meta.twitter?.card || 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.twitter?.title || meta.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.twitter?.description || meta.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: meta.twitter?.image,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
  }, [pathname, routeMeta]);

  return null;
}
