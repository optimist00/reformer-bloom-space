import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <FounderSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
