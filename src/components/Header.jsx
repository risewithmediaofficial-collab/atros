'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';

const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    items: [
      { label: 'About ATROS', href: '/about', description: 'Story, values and business details' },
      {
        label: 'Why Choose Us',
        href: '/services',
        description: 'Trust factors and service approach',
      },
      { label: 'Projects', href: '/projects', description: 'Installation categories and work' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      {
        label: 'Services Overview',
        href: '/services',
        description: 'All water purification services',
      },
      {
        label: 'Domestic Purifiers',
        href: '/services#domestic',
        description: 'RO, UV, UF and alkaline systems',
      },
      {
        label: 'Commercial Systems',
        href: '/services#commercial',
        description: 'Offices, schools and businesses',
      },
      {
        label: 'Industrial RO Plants',
        href: '/services#industrial',
        description: 'Large-scale treatment solutions',
      },
      {
        label: 'AMC & Support',
        href: '/amc-support',
        description: 'Maintenance, repair and service care',
      },
    ],
  },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);
  const scrollFrame = useRef(null);
  const { pathname } = useLocation();

  const getHeaderOffset = useCallback(() => {
    const navHeight = navRef.current?.getBoundingClientRect().height ?? 72;
    return navHeight + 12;
  }, []);

  const prefersReducedMotion = useCallback(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const scrollToTop = useCallback(() => {
    if (window.scrollY <= 2) return;

    window.history.replaceState(null, '', window.location.pathname);
    setActiveSection('');
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [prefersReducedMotion]);

  const scrollToSection = useCallback(
    (id) => {
      const target = document.getElementById(id);
      if (!target) return;

      const top = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
      );
      if (Math.abs(window.scrollY - top) <= 2) return;

      setActiveSection(id);
      window.history.replaceState(null, '', `#${id}`);
      window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    },
    [getHeaderOffset, prefersReducedMotion]
  );

  useEffect(() => {
    const updateScrollState = () => {
      scrollFrame.current = null;
      setScrolled(window.scrollY > 48);
    };

    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e, href) => {
    const [, hash] = href.split('#');
    const target = hash ? document.getElementById(hash) : null;

    if (target) {
      e.preventDefault();
      closeMenus();
      scrollToSection(hash);
      return;
    }

    closeMenus();
  };

  const handleBrandClick = (e) => {
    if (pathname !== '/') return;
    e.preventDefault();
    closeMenus();
    scrollToTop();
  };

  const isItemActive = (href) => {
    const [path, hash] = href.split('#');
    if (hash && activeSection === hash) return true;
    if (path === '/') return pathname === '/' && !activeSection && !hash;
    return pathname === path;
  };

  const isGroupActive = (group) =>
    Boolean(group.href && isItemActive(group.href)) ||
    Boolean(group.items?.some((item) => isItemActive(item.href)));

  const navTextClass = 'text-foreground';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'border-b border-border/70 bg-white py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="group flex items-center gap-2.5 rounded-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="ATROS Water Purifier, go to homepage"
          >
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-primary' : 'text-foreground'
                }`}
              >
                ATROS
              </span>
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? 'text-accent' : 'text-accent'
                }`}
              >
                Water Purifier
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((group) =>
              group.items ? (
                <div
                  key={group.label}
                  className="group/nav relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                    className={`nav-pill font-sans-premium ${isGroupActive(group) ? 'is-active' : ''} ${navTextClass}`}
                    aria-expanded={openGroup === group.label}
                    aria-haspopup="true"
                    suppressHydrationWarning
                  >
                    {group.label}
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-200 group-hover/nav:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                    <div className="nav-dropdown-panel">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`nav-dropdown-item ${
                            isItemActive(item.href)
                              ? 'bg-secondary text-primary'
                              : 'text-foreground'
                          }`}
                        >
                          <span className="block text-sm font-extrabold">{item.label}</span>
                          {item.description && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={group.label}
                  to={group.href}
                  onClick={(e) => handleLinkClick(e, group.href)}
                  aria-current={isItemActive(group.href) ? 'page' : undefined}
                  className={`nav-pill font-sans-premium ${isItemActive(group.href) ? 'is-active' : ''} ${navTextClass}`}
                >
                  {group.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919080232624"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? 'border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white'
                  : 'border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white'
              }`}
            >
              <Phone size={15} aria-hidden="true" />
              Call Now
            </a>
            <Link to="/contact" className="premium-consultation-btn">
              Premium Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`rounded-xl p-2 transition-all duration-200 lg:hidden ${
              scrolled ? 'text-foreground hover:bg-secondary' : 'text-foreground hover:bg-secondary'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            suppressHydrationWarning
          >
            {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-white/96 px-4 pb-10 pt-28 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-md flex-col gap-4">
          {navigation.map((group) =>
            group.items ? (
              <div
                key={group.label}
                className="rounded-2xl border border-border bg-secondary/50 p-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-sans-premium text-xl font-extrabold text-foreground"
                  aria-expanded={openGroup === group.label}
                  suppressHydrationWarning
                >
                  {group.label}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      openGroup === group.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openGroup === group.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-1 px-2 pb-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`block rounded-xl px-4 py-3 ${
                            isItemActive(item.href)
                              ? 'bg-accent/15 text-accent'
                              : 'text-muted-foreground hover:bg-white hover:text-foreground'
                          }`}
                        >
                          <span className="block text-sm font-bold">{item.label}</span>
                          {item.description && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={group.label}
                to={group.href}
                onClick={(e) => handleLinkClick(e, group.href)}
                className={`rounded-2xl border border-border px-5 py-4 font-sans-premium text-xl font-extrabold transition-all duration-200 ${
                  isItemActive(group.href)
                    ? 'bg-accent/15 text-accent'
                    : 'bg-secondary/50 text-foreground hover:bg-white'
                }`}
              >
                {group.label}
              </Link>
            )
          )}

          <div className="mt-4 grid grid-cols-1 gap-3">
            <a
              href="tel:+919080232624"
              onClick={closeMenus}
              className="rounded-full border border-primary/20 px-6 py-3.5 text-center text-sm font-semibold text-primary"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              onClick={closeMenus}
              className="premium-consultation-btn justify-center px-6 py-3.5 text-center"
            >
              Premium Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
