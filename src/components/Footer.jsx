import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '@/components/ui/AppLogo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'AMC & Support', href: '/amc-support' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'RO Water Purifiers', href: '/services#domestic' },
  { label: 'Alkaline Water Systems', href: '/services#domestic' },
  { label: 'Commercial RO Plants', href: '/services#commercial' },
  { label: 'Industrial Water Treatment', href: '/services#industrial' },
  { label: 'AMC Services', href: '/amc-support' },
  { label: 'Installation & Repair', href: '/amc-support' },
];

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Top glow line */}
      <div className="footer-glow-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <AppLogo size={34} />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  ATROS
                </span>
                <span
                  className="text-[9px] font-semibold tracking-[0.2em] uppercase text-accent/70"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Water Purifier
                </span>
              </div>
            </Link>
            <p
              className="text-white/45 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Advanced domestic, commercial, and industrial water purification solutions with
              reliable service support.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919080232624"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01" />
                </svg>
              </a>
              <a
                href="tel:+919080232624"
                aria-label="Call us"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-white/45 text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-white/45 text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-200" />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-accent mt-0.5 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p
                  className="text-white/45 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  No 4/268, Next to Dk Samy School,
                  <br />
                  Mel Somarpet, Venkatapuram,
                  <br />
                  Indl Estate, Krishnagiri-635002,
                  <br />
                  Tamil Nadu
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-accent flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+919080232624"
                  className="text-accent text-sm font-semibold hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  +91 90802 32624
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-accent flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <p className="text-white/45 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Mon–Sun, 9:30 AM – 9:00 PM
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#0094B8] text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Premium Consultation
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Glow divider */}
        <div className="footer-glow-line mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2026 ATROS Water Purifier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
