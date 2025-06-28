import AboutSection from "@/components/front/home-page/AboutSection";
import ContactSection from "@/components/front/home-page/CTASection";
import HeroSection from "@/components/front/home-page/HeroSection";
import ServicesSection from "@/components/front/home-page/ServicesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection/>
    </div>
  )
}
