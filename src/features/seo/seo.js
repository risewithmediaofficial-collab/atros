export const SITE_NAME = 'ATROS Water Purifier';
export const DEFAULT_SITE_URL = 'https://atroswaterpurifier.com';
export const DEFAULT_OG_IMAGE = '/assets/logo.jpeg';

export function getSiteUrl() {
  const envUrl =
    typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SITE_URL : '';
  const siteUrl = envUrl || DEFAULT_SITE_URL;
  return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
}

export function toAbsoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function buildSeoMetadata({
  title,
  description,
  canonical = '/',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  type = 'website',
  image = DEFAULT_OG_IMAGE,
}) {
  return {
    title,
    description,
    canonical,
    robots,
    openGraph: {
      type,
      title,
      description,
      url: toAbsoluteUrl(canonical),
      siteName: SITE_NAME,
      image: image.startsWith('http') ? image : toAbsoluteUrl(image),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: image.startsWith('http') ? image : toAbsoluteUrl(image),
    },
  };
}
