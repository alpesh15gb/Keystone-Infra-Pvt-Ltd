import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { ProductsSection } from "@/components/products-section";
import { FeaturesSection } from "@/components/features-section";

import { TeamSection } from "@/components/team-section";
import { LocationsSection } from "@/components/locations-section";
import { EsteemedClientsSection } from "@/components/esteemed-clients-section";
import { CertificationsSection } from "@/components/certifications-section";
import { CSRSection } from "@/components/csr-section";
import { ProjectShowcaseSection } from "@/components/project-showcase-section";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectShowcaseSection />
      <MissionVisionSection />
      <ProductsSection />
      <FeaturesSection />

      <TeamSection />
      <LocationsSection />
      <EsteemedClientsSection />
      <CertificationsSection />
      <CSRSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
