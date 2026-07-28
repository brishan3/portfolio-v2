import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import AboutUsSection from "@/components/sections/home/about-section";
import ServicesSection from "@/components/sections/home/services";
import ContactSection from "@/components/sections/home/contact-section";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="site-backdrop min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
