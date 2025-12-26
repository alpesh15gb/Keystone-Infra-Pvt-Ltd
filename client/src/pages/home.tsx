import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

import { ProductsSection } from "@/components/products-section";
import { FeaturesSection } from "@/components/features-section";

import { TeamSection } from "@/components/team-section";
import { LocationsSection } from "@/components/locations-section";
import { EsteemedClientsSection } from "@/components/esteemed-clients-section";
import { CertificationsSection } from "@/components/certifications-section";
import { CSRSection } from "@/components/csr-section";
import { VideoShowcaseSection } from "@/components/video-showcase-section";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

interface HomeProps {
  isEditMode: boolean;
}

import { PageBackground } from "@/components/page-background";

const bgImages = [
  "/bg/bg-1.jpg",
  "/bg/bg-2.jpg",
  "/bg/bg-3.jpg",
  "/bg/bg-4.jpg",
  "/bg/bg-5.jpg",
];

export default function Home({ isEditMode }: HomeProps) {
  return (
    <div className="min-h-screen">
      <PageBackground images={bgImages} />
      <Navigation />
      <HeroSection isEditMode={isEditMode} />
      <AboutSection isEditMode={isEditMode} />

      <TeamSection isEditMode={isEditMode} />
      <ProductsSection isEditMode={isEditMode} />
      <FeaturesSection isEditMode={isEditMode} />

      <LocationsSection isEditMode={isEditMode} />
      <EsteemedClientsSection isEditMode={isEditMode} />
      <CertificationsSection isEditMode={isEditMode} />
      <CSRSection isEditMode={isEditMode} />
      <VideoShowcaseSection isEditMode={isEditMode} />

      <ContactSection isEditMode={isEditMode} />
      <Footer isEditMode={isEditMode} />
    </div>
  );
}
