import { PageWrapper } from "@/components/ui";
import { CTABanner, Footer, Navigation } from "@/components/layout";
import {
  BeautyExperienceSection,
  BridalSection,
  ContactSection,
  FAQSection,
  GallerySection,
  HeroSection,
  PackagesSection,
  PilatesSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/sections/home";
import { StructuredData } from "@/components/seo/StructuredData";

export function HomePage() {
  return (
    <PageWrapper>
      <StructuredData />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <BeautyExperienceSection />
        <PackagesSection />
        <PilatesSection />
        <BridalSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner
          heading="Ready to Feel Like Yourself Again?"
          description="Reserve your appointment at Beauty Bar Studio today."
          background="rose-gold"
        />
        <ContactSection />
      </main>
      <Footer />
    </PageWrapper>
  );
}
