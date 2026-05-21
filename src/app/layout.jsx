import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'ATROS Water Purifier | RO, UV, UF & Alkaline Purification Solutions',
  description:
    'ATROS Water Purifier offers advanced RO, UV, UF, and alkaline water purification systems for homes, businesses, and industries. Professional installation, AMC support, and reliable water treatment solutions.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ATROS Water Purifier',
    description:
      'Premium RO, UV, UF, alkaline and industrial water purification systems with expert installation and AMC support.',
    url: '/',
    siteName: 'ATROS Water Purifier',
    images: [
      { url: '/assets/images/app_logo.png', width: 512, height: 512, alt: 'ATROS Water Purifier' },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
