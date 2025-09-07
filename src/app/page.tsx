'use client';

import { useEffect, useState } from 'react';
import {
  HeroSection,
  OverviewSection,
  TechStackSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  ContactSection,
  Footer
} from "@/components/portfolio";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}