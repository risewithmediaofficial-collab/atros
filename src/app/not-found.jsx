'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden water-gradient-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Glowing 404 */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 blur-3xl bg-accent/30 rounded-full scale-150" />
          <h1
            className="relative font-display font-bold text-white leading-none"
            style={{ fontSize: 'clamp(6rem, 20vw, 14rem)' }}
          >
            <span style={{ color: 'rgba(34,211,238,0.15)' }}>4</span>
            <span className="text-accent">0</span>
            <span style={{ color: 'rgba(34,211,238,0.15)' }}>4</span>
          </h1>
        </div>

        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Page Not Found
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-light italic text-white mb-4">
          This water source ran dry.
        </h2>
        <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md mx-auto">
          The page you&#39;re looking for doesn&#39;t exist or has been moved. Let&#39;s get you
          back to clean water.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary-glow inline-flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="btn-ghost-white inline-flex items-center gap-2"
            suppressHydrationWarning
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Go Back
          </button>
          <Link href="/contact" className="btn-ghost-white inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>

        {/* Quick nav chips */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {[
            { label: 'Products', href: '/products' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'AMC Support', href: '/amc-support' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white/50 hover:text-accent border border-white/10 hover:border-accent/40 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
