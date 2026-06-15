import React from 'react';
import HomeShowcase from '@/app/components/HomeShowcase';
import SiteShell from '@/shared/layout/SiteShell';

export default function HomePage() {
  return (
    <SiteShell showStructuredData>
      <HomeShowcase />
    </SiteShell>
  );
}
