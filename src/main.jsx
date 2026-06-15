import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AppProviders from '@/app/providers/AppProviders';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProviders>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <App />
    </AppProviders>
  </React.StrictMode>
);
