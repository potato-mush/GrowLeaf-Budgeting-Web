import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FAQSection } from "../components/home/FAQSection";
import { TipsSection } from "../components/home/TipsSection";
import { SupportSection } from "../components/home/SupportSection";
import { CTASection } from "../components/home/CTASection";

export function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="tips">
        <TipsSection />
      </section>
      <section id="support">
        <SupportSection />
      </section>
      <CTASection />
    </main>
  );
}