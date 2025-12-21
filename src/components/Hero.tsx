import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden flex flex-col">
      {/* Mobile Header - Elegant with more whitespace */}
        <div className="bg-cream py-10 sm:py-12 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-earth-dark">
            House of Pilates Dresden
          </h1>
          {/* Decorative line */}
          <div className="w-16 h-0.5 bg-primary/60 mx-auto my-4" />
          <p className="text-base text-earth-dark/90 italic font-medium">
            "Change happens through movement and movement heals"
          </p>
        </div>

        {/* Mobile Image with gradient overlay */}
        <div className="w-full relative">
          <img 
            src={heroImage} 
            alt="House of Pilates Dresden Studio" 
            className="w-full h-64 sm:h-80 object-cover"
          />
          {/* Soft gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent" />
        </div>

        {/* Mobile Footer - Elegant CTA section */}
        <div className="bg-cream pt-4 pb-10 px-6 text-center">
          <p className="text-base text-earth-dark/90 mb-6 font-medium">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="group shadow-2xl"
            onClick={scrollToBooking}
          >
            Jetzt Kurs buchen
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-earth-dark/70 mt-4 font-medium">
            Begrenzte Plätze verfügbar
          </p>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div 
        className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-earth/55" />
        {/* Gradient overlay for depth - stronger from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/30 to-transparent" />

        <div className="container text-center animate-fade-in-up relative z-10 max-w-3xl mx-auto px-6">
          {/* Headline with text shadow - larger and bolder */}
          <h1 className="text-5xl lg:text-8xl font-extrabold mb-6 leading-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            House of Pilates Dresden
          </h1>

          {/* Quote with soft styling */}
          <p className="text-xl text-cream italic mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            "Change happens through movement and movement heals"
          </p>

          {/* Subheadline */}
          <p className="text-lg text-white/80 mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>

          {/* CTA */}
          <div className="mb-12">
            <Button
              variant="cta"
              size="lg"
              className="group shadow-2xl"
              onClick={scrollToBooking}
            >
              Jetzt Kurs buchen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-white/70 mt-4 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Begrenzte Plätze verfügbar
            </p>
          </div>

          {/* Stats - subtle transparent version */}
          <div className="inline-flex flex-row items-center gap-10 bg-white/10 backdrop-blur-sm border border-white/15 px-12 py-6 rounded-2xl">
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-3xl font-semibold text-white drop-shadow-md">6</span>
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
                Max. Teilnehmer
              </span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-3xl font-semibold text-white drop-shadow-md">100%</span>
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
                Individuelle Betreuung
              </span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-3xl font-semibold text-white drop-shadow-md">✓</span>
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
                Offen für alle Level
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
