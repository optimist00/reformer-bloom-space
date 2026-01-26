import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import StudioSection from "@/components/StudioSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import GiftSection from "@/components/GiftSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <StudioSection />
        <PhilosophySection />
        <FounderSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
        <FAQSection />
        <GiftSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
