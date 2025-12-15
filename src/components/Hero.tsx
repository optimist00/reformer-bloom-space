import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 isolate">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="House of Pilates Dresden Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/90" />
      </div>

      <div className="container text-center animate-fade-in-up relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold text-foreground mb-8 tracking-wide">
          <span className="w-2 h-2 bg-sage rounded-full animate-pulse-dot" />
          Exklusiv in Dresden
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl mx-auto leading-tight text-white drop-shadow-lg">
          Dein neuer Körper wartet auf dich –
          <br />
          <span className="text-cream italic">
            Exklusive Reformer Pilates Community im Herzen von Dresden.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow">
          Nur 6 Plätze pro Kurs. Individuelle Betreuung. Sichtbare Ergebnisse.
        </p>

        {/* CTA */}
        <div className="mb-16">
          <Button
            variant="cta"
            size="lg"
            className="group"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Jetzt Schnupperstunde sichern
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-white/80 mt-4 font-medium drop-shadow">
            Begrenzte Plätze verfügbar
          </p>
        </div>

        {/* Stats */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white/90 backdrop-blur-sm px-8 sm:px-12 py-8 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">6</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Max. Teilnehmer
            </span>
          </div>
          <div className="w-16 h-px sm:w-px sm:h-10 bg-stone" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">100%</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Individuelle Betreuung
            </span>
          </div>
          <div className="w-16 h-px sm:w-px sm:h-10 bg-stone" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">❤️</span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Mit Leidenschaft
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
