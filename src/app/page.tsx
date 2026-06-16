import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="site-backdrop min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <AboutUsSection />
      <ServicesSection2 />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
