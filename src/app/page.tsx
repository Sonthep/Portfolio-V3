'use client';

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
export const runtime = 'nodejs';

export default function Portfolio() {
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