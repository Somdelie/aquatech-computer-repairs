import AboutSection from "@/components/front/home-page/AboutSection";
import ContactSection from "@/components/front/home-page/CTASection";
import HeroSection from "@/components/front/home-page/HeroSection";
import ServicesSection from "@/components/front/home-page/ServicesSection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // if(!session) {
    //     return <div>Not authenticated</div>
    // }

  console.log("User in HomePage:", session?.user);
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection/>
    </div>
  )
}
