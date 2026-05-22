const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4028;
const distDir = path.join(__dirname, 'dist');

app.disable('x-powered-by');

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *
Allow: /
Disallow: /admin/
Sitemap: /sitemap.xml
`);
});

app.get('/sitemap.xml', (_req, res) => {
  const siteUrl = process.env.SITE_URL || `http://localhost:${port}`;
  const paths = ['', '/about', '/services', '/products', '/projects', '/contact', '/amc-support'];
  const urls = paths
    .map((route) => `<url><loc>${siteUrl}${route}</loc><changefreq>weekly</changefreq></url>`)
    .join('');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
});

app.use(express.static(distDir, { maxAge: '1y', index: false }));

app.use((_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`ATROS React/Node app running at http://localhost:${port}`);
});
