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
        {/* Mobile Header - Neutral Background */}
        <div className="bg-cream py-10 px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight text-earth">
            House of Pilates Dresden
          </h1>
          <p className="text-base text-earth/80 italic">
            "Change happens through movement and movement heals"
          </p>
        </div>

        {/* Mobile Image */}
        <div className="w-full">
          <img 
            src={heroImage} 
            alt="House of Pilates Dresden Studio" 
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        {/* Mobile Footer - Neutral Background with CTA */}
        <div className="bg-cream py-8 px-6 text-center">
          <p className="text-base text-earth/80 mb-6">
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
          {/* Badge - subtle version */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold text-white/90 mb-8 tracking-wide">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            Exklusiv in Dresden
          </div>

          {/* Headline with text shadow */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
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
