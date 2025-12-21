import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row">
      {/* Left Side - Text Content */}
      <div className="flex-1 flex items-center justify-center bg-cream px-6 py-16 lg:py-0 lg:px-12 xl:px-20">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sand border border-stone/20 px-4 py-2 rounded-full text-sm font-semibold text-earth mb-8 tracking-wide">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            Exklusiv in Dresden
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-earth">
            House of Pilates Dresden
          </h1>

          {/* Quote */}
          <p className="text-lg md:text-xl text-foreground/70 italic mb-4">
            "Change happens through movement and movement heals"
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground mb-10">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>

          {/* CTA */}
          <div className="mb-12">
            <Button
              variant="cta"
              size="lg"
              className="group shadow-2xl"
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-8 border-t border-stone/20">
            <div className="flex flex-col gap-1">
              <span className="font-heading text-2xl font-semibold text-earth">6</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Max. Teilnehmer
              </span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-stone/30" />
            <div className="flex flex-col gap-1">
              <span className="font-heading text-2xl font-semibold text-earth">100%</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Individuelle Betreuung
              </span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-stone/30" />
            <div className="flex flex-col gap-1">
              <span className="font-heading text-2xl font-semibold text-earth">✓</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Offen für alle Level
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div 
        className="flex-1 min-h-[50vh] lg:min-h-screen relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-earth/10" />
      </div>
    </section>
  );
};

export default Hero;
