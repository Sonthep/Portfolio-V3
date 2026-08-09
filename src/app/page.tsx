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