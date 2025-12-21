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

      {/* ===== DESKTOP/TABLET LAYOUT ===== */}
      <div className="hidden md:flex min-h-screen bg-cream">
        {/* Left side - Text content (2/3) */}
        <div className="w-2/3 flex flex-col justify-center px-12 lg:px-20 py-16">
          <div className="max-w-2xl animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-earth-dark mb-6">
              House of Pilates Dresden
            </h1>

            {/* Decorative line */}
            <div className="w-20 h-0.5 bg-primary/60 mb-6" />

            {/* Quote */}
            <p className="text-lg lg:text-xl text-earth-dark/80 italic mb-4">
              "Change happens through movement and movement heals"
            </p>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-earth-dark/70 mb-10">
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
              <p className="text-sm text-earth-dark/60 mt-4 font-medium">
                Begrenzte Plätze verfügbar
              </p>
            </div>

            {/* Stats */}
            <div className="inline-flex flex-row items-center gap-8 lg:gap-10 bg-sand/50 border border-earth/10 px-8 lg:px-12 py-5 rounded-2xl">
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl lg:text-3xl font-semibold text-earth-dark">6</span>
                <span className="text-xs text-earth-dark/60 font-medium uppercase tracking-wider">
                  Max. Teilnehmer
                </span>
              </div>
              <div className="w-px h-8 bg-earth/20" />
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl lg:text-3xl font-semibold text-earth-dark">100%</span>
                <span className="text-xs text-earth-dark/60 font-medium uppercase tracking-wider">
                  Individuelle Betreuung
                </span>
              </div>
              <div className="w-px h-8 bg-earth/20" />
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl lg:text-3xl font-semibold text-earth-dark">✓</span>
                <span className="text-xs text-earth-dark/60 font-medium uppercase tracking-wider">
                  Offen für alle Level
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image (1/3) */}
        <div className="w-1/3 relative">
          <img 
            src={heroImage} 
            alt="House of Pilates Dresden Studio" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Soft gradient overlay on left edge */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
