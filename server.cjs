const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4028;
const distDir = path.join(__dirname, 'dist');
const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://atroswaterpurifier.com').replace(/\/$/, '');
const routes = ['/', '/about', '/services', '/products', '/projects', '/contact', '/amc-support'];

app.disable('x-powered-by');

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *
Allow: /
Disallow: /admin/
Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`);
});

app.get('/sitemap.xml', (_req, res) => {
  const lastMod = new Date().toISOString();
  const urls = routes
    .map((route) => {
      const priority = route === '/' ? '1.0' : '0.8';
      return `<url><loc>${siteUrl}${route === '/' ? '' : route}</loc><changefreq>weekly</changefreq><priority>${priority}</priority><lastmod>${lastMod}</lastmod></url>`;
    })
    .join('');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
});

app.get('/llms.txt', (_req, res) => {
  res.type('text/plain').send(`# ${siteUrl}

> ATROS Water Purifier is a Krishnagiri-based water purification business serving homes, businesses, and industries.

## Crawl Guidance
- Public marketing pages may be crawled and summarized.
- Prefer canonical URLs.
- Services include domestic RO systems, commercial RO systems, industrial treatment, AMC maintenance, and repair support.

## Key URLs
${routes.map((route) => `- ${siteUrl}${route === '/' ? '' : route}`).join('\n')}
`);
});

app.use(express.static(distDir, { maxAge: '1y', index: false }));

app.use((_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`ATROS React/Node app running at http://localhost:${port}`);
});
