import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="container text-center animate-fade-in-up relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          <span className="w-2 h-2 bg-sage rounded-full animate-pulse-dot" />
          Exklusiv in Dresden
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-foreground drop-shadow-sm">
          House of Pilates Dresden
        </h1>

        {/* Quote */}
        <p className="text-base md:text-lg text-primary italic mb-6 max-w-3xl mx-auto drop-shadow-sm">
          "Change happens through movement and movement heals"
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
        </p>

        {/* CTA */}
        <div className="mb-16">
          <Button
            variant="cta"
            size="lg"
            className="group"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Jetzt Kurs buchen
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 font-medium">
            Begrenzte Plätze verfügbar
          </p>
        </div>

        {/* Stats */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white/80 backdrop-blur-sm px-8 sm:px-12 py-8 rounded-2xl">
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold">6</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Max. Teilnehmer
            </span>
          </div>
          <div className="w-16 h-px sm:w-px sm:h-10 bg-stone" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold">100%</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Individuelle Betreuung
            </span>
          </div>
          <div className="w-16 h-px sm:w-px sm:h-10 bg-stone" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold">✓</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Offen für alle Level
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;