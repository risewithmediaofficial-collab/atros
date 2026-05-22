# ATROS React + Node App

ATROS Water Purifier is now a React single-page app built with Vite and served by a Node/Express server.

## Scripts

- `npm run dev` - start the Vite React dev server on port 4028
- `npm run build` - build the React app into `dist/`
- `npm start` - serve the production build with Express on port 4028
- `npm run preview` - preview the Vite production build

## Structure

- `index.html` - browser entry document
- `src/main.jsx` - React mount point
- `src/App.jsx` - React Router route definitions
- `src/app/**/page.jsx` - page components
- `src/components` - shared UI components
- `server.cjs` - Node/Express production server

## Production

Build first:

```bash
npm run build
```

Then run the Node server:

```bash
npm start
```

The server serves static assets from `dist/`, provides `/robots.txt` and `/sitemap.xml`, and falls back to `index.html` for React Router pages.
