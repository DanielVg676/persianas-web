import { AboutSection } from "@/components/landing/sections/AboutSection";
import { AutomationSection } from "@/components/landing/sections/AutomationSection";
import { BlindsShowcase } from "@/components/landing/sections/BlindsShowcase";
import { ContactSection } from "@/components/landing/sections/ContactSection";
import { FAQSection } from "@/components/landing/sections/FAQSection";
import { FloorsAndFinishes } from "@/components/landing/sections/FloorsAndFinishes";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { LocationSection } from "@/components/landing/sections/LocationSection";
import { MobileContactBar } from "@/components/landing/sections/MobileContactBar";
import { NeedsSelector } from "@/components/landing/sections/NeedsSelector";
import { ProcessSteps } from "@/components/landing/sections/ProcessSteps";
import { ProjectGallery } from "@/components/landing/sections/ProjectGallery";
import { ServicesSection } from "@/components/landing/sections/ServicesSection";
import { TestimonialsSection } from "@/components/landing/sections/TestimonialsSection";
import { TrustBar } from "@/components/landing/sections/TrustBar";
import { WhatsAppButton } from "@/components/landing/sections/WhatsAppButton";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteHeader } from "@/components/shared/SiteHeader";

export function LandingPage() {
  // Mantiene el orden editorial de la landing en un solo punto.
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <BlindsShowcase />
        <NeedsSelector />
        <FloorsAndFinishes />
        <AutomationSection />
        <ProcessSteps />
        <ProjectGallery />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <LocationSection />
      </main>
      <WhatsAppButton />
      <MobileContactBar />
      <SiteFooter />
    </>
  );
}
