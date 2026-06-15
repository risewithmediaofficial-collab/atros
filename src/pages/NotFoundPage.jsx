import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.1,
    }));

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.o})`;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="home-stage relative flex min-h-screen flex-col items-center justify-center overflow-hidden !opacity-100">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 scale-150 rounded-full bg-accent/20 blur-3xl" />
          <h1
            className="relative font-display font-bold leading-none text-foreground"
            style={{ fontSize: 'clamp(6rem, 20vw, 14rem)' }}
          >
            <span style={{ color: 'rgba(34,211,238,0.15)' }}>4</span>
            <span className="text-accent">0</span>
            <span style={{ color: 'rgba(34,211,238,0.15)' }}>4</span>
          </h1>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Page Not Found
        </div>

        <h2 className="mb-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
          This water source ran dry.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-base font-medium leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back to clean water.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary-glow inline-flex items-center gap-2">
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
            onClick={() => navigate(-1)}
            className="home-outline-btn inline-flex items-center gap-2"
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
          <Link to="/contact" className="home-outline-btn inline-flex items-center gap-2">
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {[
            { label: 'Products', href: '/products' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'AMC Support', href: '/amc-support' },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
