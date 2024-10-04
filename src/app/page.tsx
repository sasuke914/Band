import AboutSection from "@/components/home/aboutSection";
import GallerySection from "@/components/home/callerySection";
import ContactSection from "@/components/home/contackSection";
import HeroSection from "@/components/home/heroSection";
import PortfolioSection from "@/components/home/portfolioSection";
import RehearsalSection from "@/components/home/rehearsalSection";
import VisualizationSection from "@/components/home/visualizationSection";

export default function Home() {
  return (
    <div style={{ paddingTop: 'clamp(130px, 15vw, 195px)', paddingRight: 'clamp(10px, 3vw, 78px)', paddingLeft: 'clamp(10px, 3vw, 78px)' }}>
      <HeroSection />
      <GallerySection title="Лучшие кейсы из портфолио" />
      <AboutSection />
      <RehearsalSection />
      <PortfolioSection />
      <ContactSection title='У вас есть вопросы?' />
      <VisualizationSection />
    </div>
  );
}
