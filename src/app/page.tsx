import ClientWrapper from "@/components/ClientWrapper";
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
  return (
    <ClientWrapper>
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
    </ClientWrapper>
  );
}