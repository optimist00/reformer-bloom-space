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
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-earth/55" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-cream/20" />

      <div className="container text-center animate-fade-in-up relative z-10">
        {/* Content wrapper with glassmorphism background */}
        <div className="bg-white/75 backdrop-blur-md px-8 py-10 md:px-14 md:py-14 rounded-3xl shadow-xl max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sand/80 px-5 py-2.5 rounded-full text-sm font-semibold text-muted-foreground mb-6 tracking-wide">
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse-dot" />
            Exklusiv in Dresden
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground">
            House of Pilates Dresden
          </h1>

          {/* Quote */}
          <p className="text-base md:text-lg text-primary italic mb-4">
            "Change happens through movement and movement heals"
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>

          {/* CTA */}
          <div className="mb-8">
            <Button
              variant="cta"
              size="lg"
              className="group"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt Kurs buchen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3 font-medium">
              Begrenzte Plätze verfügbar
            </p>
          </div>

          {/* Stats */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-sand/50 px-6 sm:px-10 py-6 rounded-2xl">
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl sm:text-3xl font-semibold">6</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Max. Teilnehmer
              </span>
            </div>
            <div className="w-12 h-px sm:w-px sm:h-8 bg-stone" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl sm:text-3xl font-semibold">100%</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Individuelle Betreuung
              </span>
            </div>
            <div className="w-12 h-px sm:w-px sm:h-8 bg-stone" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-2xl sm:text-3xl font-semibold">✓</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
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
