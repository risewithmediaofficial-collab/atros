'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why ATROS', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                ATROS
              </span>
              <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-accent' : 'text-white/60'
              }`}>Water Purifier</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  scrolled ? 'text-foreground hover:text-accent' : 'text-white/85 hover:text-white'
                }`}
              >
                {link?.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919080232624"
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary' :'border-white/30 text-white hover:bg-white/10 hover:border-white/50'
              }`}
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-[#0094B8] text-white hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-accent/20"
            >
              Free Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
              scrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2.5 bg-foreground' : scrolled ? 'bg-foreground' : 'bg-white'
              }`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : scrolled ? 'bg-foreground' : 'bg-white'
              }`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2.5 bg-foreground' : scrolled ? 'bg-foreground' : 'bg-white'
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(6,30,46,0.97) 0%, rgba(10,77,104,0.97) 100%)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <nav className="flex flex-col items-center gap-6 relative z-10">
          {navLinks?.map((link, i) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleLinkClick}
              className="font-display text-4xl font-light italic text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link?.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-6 w-full items-center">
            <a
              href="tel:+919080232624"
              onClick={handleLinkClick}
              className="px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-all min-w-[200px] text-center backdrop-blur-sm"
            >
              📞 Call Now
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-[#0094B8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/30 transition-all min-w-[200px] text-center"
            >
              Free Consultation
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}