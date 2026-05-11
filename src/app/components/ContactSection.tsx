'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.from(sectionRef.current.querySelector('.contact-left'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: -50,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      gsap.from(sectionRef.current.querySelector('.contact-right'), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: 50,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    };
    initGSAP();
  }, []);

  const inputClass = "input-premium";

  return (
    <section ref={sectionRef} id="contact" className="py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F8FC 0%, #E8F4F8 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-5 mx-auto block w-fit">06 — Contact Us</span>
          <h2 className="font-display text-section-title font-light text-foreground">
            Get Clean & Healthy<br />
            <span className="italic text-primary">Water Today</span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Contact us for expert consultation, installation, maintenance, and water purification solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info */}
          <div className="contact-left lg:col-span-5 flex flex-col gap-5">
            {/* Info card */}
            <div className="gradient-border-card bg-white p-6 shadow-sm space-y-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Address',
                  content: 'No.4/268, Mel Somarpet,\nVenkatapuram, Tamil Nadu – 635002\nIndia',
                  isAddress: true,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  content: '+91 90802 32624',
                  isPhone: true,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  ),
                  label: 'Business Hours',
                  content: 'Monday – Sunday\n9:30 AM – 9:00 PM',
                  isAddress: true,
                },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="border-t border-border/60" />}
                  <div className="flex items-start gap-4">
                    <div className="icon-glow flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</p>
                      {item.isPhone ? (
                        <a href="tel:+919080232624" className="text-accent text-sm font-semibold hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>{item.content}</p>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919080232624"
                className="flex items-center justify-center gap-2 font-semibold text-sm py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0A4D68, #0077A8)', boxShadow: '0 8px 24px rgba(10,77,104,0.3)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/919080232624"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-4 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Industries */}
            <div className="gradient-border-card bg-white p-5 shadow-sm">
              <p className="font-semibold text-foreground text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Industries We Serve</p>
              <div className="flex flex-wrap gap-2">
                {['Homes', 'Apartments', 'Offices', 'Schools', 'Hospitals', 'Restaurants', 'Hotels', 'Factories', 'Industries'].map((ind) => (
                  <span key={ind} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/60 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 cursor-default" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right lg:col-span-7">
            <div className="gradient-border-card bg-white p-7 sm:p-9 shadow-xl shadow-primary/5 h-full">
              <h3 className="font-display text-2xl font-light italic text-foreground mb-2">
                Request a Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-7" style={{ fontFamily: 'Inter, sans-serif' }}>
                Fill in your details and our experts will contact you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
                    </svg>
                  </div>
                  <p className="text-green-800 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Thank you! We&apos;ll call you back within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service</option>
                    <option>Domestic Water Purifier</option>
                    <option>Commercial RO System</option>
                    <option>Industrial Water Treatment</option>
                    <option>AMC / Maintenance</option>
                    <option>Repair & Service</option>
                    <option>New Installation</option>
                    <option>Free Water Testing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your water source or any specific requirements..."
                    className={inputClass}
                    style={{ resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-glow flex items-center justify-center gap-2 py-4 text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Send Request — Get Free Consultation
                </button>

                <p className="text-center text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}