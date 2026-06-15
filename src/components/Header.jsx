'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  closeNavigationMenus,
  setActiveSection,
  setHeaderScrolled,
  setMobileMenuOpen,
  setOpenNavigationGroup,
} from '@/app/store/slices/uiSlice';
import AppLogo from '@/components/ui/AppLogo';
import { navigation } from '@/shared/config/navigation';

export default function Header() {
  const dispatch = useAppDispatch();
  const { activeSection, isHeaderScrolled, isMobileMenuOpen, openNavigationGroup } =
    useAppSelector((state) => state.ui);
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

  const closeMenus = useCallback(() => {
    dispatch(closeNavigationMenus());
  }, [dispatch]);

  const scrollToTop = useCallback(() => {
    if (window.scrollY <= 2) return;

    window.history.replaceState(null, '', window.location.pathname);
    dispatch(setActiveSection(''));
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, [dispatch, prefersReducedMotion]);

  const scrollToSection = useCallback(
    (id) => {
      const target = document.getElementById(id);
      if (!target) return;

      const top = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - getHeaderOffset()
      );
      if (Math.abs(window.scrollY - top) <= 2) return;

      dispatch(setActiveSection(id));
      window.history.replaceState(null, '', `#${id}`);
      window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    },
    [dispatch, getHeaderOffset, prefersReducedMotion]
  );

  useEffect(() => {
    const updateScrollState = () => {
      scrollFrame.current = null;
      dispatch(setHeaderScrolled(window.scrollY > 48));
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
  }, [dispatch, pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
          isHeaderScrolled ? 'glass-nav py-3' : 'border-b border-border/70 bg-white py-5'
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
                  isHeaderScrolled ? 'text-primary' : 'text-foreground'
                }`}
              >
                ATROS
              </span>
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isHeaderScrolled ? 'text-accent' : 'text-accent'
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
                  onMouseEnter={() => dispatch(setOpenNavigationGroup(group.label))}
                  onMouseLeave={() => dispatch(setOpenNavigationGroup(null))}
                >
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        setOpenNavigationGroup(
                          openNavigationGroup === group.label ? null : group.label
                        )
                      )
                    }
                    className={`nav-pill font-sans-premium ${isGroupActive(group) ? 'is-active' : ''} ${navTextClass}`}
                    aria-expanded={openNavigationGroup === group.label}
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
                isHeaderScrolled
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
            onClick={() => dispatch(setMobileMenuOpen(!isMobileMenuOpen))}
            className={`rounded-xl p-2 transition-all duration-200 lg:hidden ${
              isHeaderScrolled
                ? 'text-foreground hover:bg-secondary'
                : 'text-foreground hover:bg-secondary'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            suppressHydrationWarning
          >
            {isMobileMenuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={25} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-white/96 px-4 pb-10 pt-28 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
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
                  onClick={() =>
                    dispatch(
                      setOpenNavigationGroup(
                        openNavigationGroup === group.label ? null : group.label
                      )
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-sans-premium text-xl font-extrabold text-foreground"
                  aria-expanded={openNavigationGroup === group.label}
                  suppressHydrationWarning
                >
                  {group.label}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      openNavigationGroup === group.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openNavigationGroup === group.label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
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
