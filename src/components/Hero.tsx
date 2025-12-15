import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="House of Pilates Dresden Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/70 to-cream/90" />
      </div>

      <div className="container text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-semibold text-muted-foreground mb-8 tracking-wide">
          <span className="w-2 h-2 bg-sage rounded-full animate-pulse-dot" />
          Exklusiv in Dresden
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl mx-auto leading-tight">
          Dein neuer Körper wartet auf dich –
          <br />
          <span className="text-primary italic">
            Exklusive Reformer Pilates Community im Herzen von Dresden.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
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
          <p className="text-sm text-muted-foreground mt-4 font-medium">
            Begrenzte Plätze verfügbar
          </p>
        </div>

        {/* Stats */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 glass-stats px-8 sm:px-12 py-8 rounded-2xl">
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
            <span className="font-heading text-3xl sm:text-4xl font-semibold">❤️</span>
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
