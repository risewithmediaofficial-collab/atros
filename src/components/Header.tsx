'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUp, ChevronDown, Menu, Phone, X } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';

type NavItem = {
  label: string;
  href: string;
  description?: string;
};

type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

const navigation: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Company',
    items: [
      { label: 'About ATROS', href: '/about', description: 'Story, values and business details' },
      {
        label: 'Why Choose Us',
        href: '/#why-us',
        description: 'Trust factors and differentiators',
      },
      { label: 'Testimonials', href: '/#testimonials', description: 'Customer experiences' },
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

const sectionIds = ['why-us', 'testimonials'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const scrollFrame = useRef<number | null>(null);
  const pathname = usePathname();

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
    (id: string) => {
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
      const offsetLine =
        window.scrollY + getHeaderOffset() + Math.min(window.innerHeight * 0.22, 180);
      let current = '';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= offsetLine) {
          current = id;
        }
      }

      setScrolled(window.scrollY > 48);
      setActiveSection(current);
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
  }, [getHeaderOffset, pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return;
    e.preventDefault();
    closeMenus();
    scrollToTop();
  };

  const isItemActive = (href: string) => {
    const [path, hash] = href.split('#');
    if (hash && activeSection === hash) return true;
    if (path === '/') return pathname === '/' && !activeSection && !hash;
    return pathname === path;
  };

  const isGroupActive = (group: NavGroup) =>
    Boolean(group.href && isItemActive(group.href)) ||
    Boolean(group.items?.some((item) => isItemActive(item.href)));

  const navTextClass = scrolled ? 'text-foreground' : 'text-white';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
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
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                ATROS
              </span>
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? 'text-accent' : 'text-white/60'
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
                    className={`nav-pill ${isGroupActive(group) ? 'is-active' : ''} ${navTextClass}`}
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
                    <div className="rounded-2xl border border-white/20 bg-white/90 p-2 shadow-2xl shadow-primary/12 backdrop-blur-2xl">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`block rounded-xl px-4 py-3 transition-all duration-200 hover:bg-secondary ${
                            isItemActive(item.href)
                              ? 'bg-secondary text-primary'
                              : 'text-foreground'
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
              ) : (
                <Link
                  key={group.label}
                  href={group.href!}
                  onClick={(e) => handleLinkClick(e, group.href!)}
                  aria-current={isItemActive(group.href!) ? 'page' : undefined}
                  className={`nav-pill ${isItemActive(group.href!) ? 'is-active' : ''} ${navTextClass}`}
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
                  : 'border-white/25 text-white hover:border-white/50 hover:bg-white/10'
              }`}
            >
              <Phone size={15} aria-hidden="true" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-accent to-[#0094B8] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Free Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`rounded-xl p-2 transition-all duration-200 lg:hidden ${
              scrolled ? 'text-foreground hover:bg-secondary' : 'text-white hover:bg-white/10'
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
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#041019]/96 px-4 pb-10 pt-28 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-md flex-col gap-4">
          {navigation.map((group) =>
            group.items ? (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-2"
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-display text-2xl font-light italic text-white"
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
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`block rounded-xl px-4 py-3 ${
                            isItemActive(item.href)
                              ? 'bg-accent/15 text-accent'
                              : 'text-white/72 hover:bg-white/[0.08] hover:text-white'
                          }`}
                        >
                          <span className="block text-sm font-bold">{item.label}</span>
                          {item.description && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-white/45">
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
                href={group.href!}
                onClick={(e) => handleLinkClick(e, group.href!)}
                className={`rounded-2xl border border-white/10 px-5 py-4 font-display text-2xl font-light italic transition-all duration-200 ${
                  isItemActive(group.href!)
                    ? 'bg-accent/15 text-accent'
                    : 'bg-white/[0.06] text-white hover:bg-white/10'
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
              className="rounded-full border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              onClick={closeMenus}
              className="rounded-full bg-gradient-to-r from-accent to-[#0094B8] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-accent/25"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`scroll-top-float ${
          scrolled
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-90 opacity-0'
        }`}
        aria-label="Scroll to top"
        suppressHydrationWarning
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </>
  );
}
