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
      {/* Gradient overlay for depth - stronger from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/30 to-transparent" />

      {/* Elegant banner across the hero */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-earth/85 backdrop-blur-sm py-16 md:py-20 z-10">
        <div className="container text-center animate-fade-in-up max-w-4xl mx-auto px-6">
          {/* Badge - subtle version */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold text-white/90 mb-6 tracking-wide">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            Exklusiv in Dresden
          </div>

          {/* Headline with text shadow - larger */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            House of Pilates Dresden
          </h1>

          {/* Quote with soft styling */}
          <p className="text-lg md:text-xl text-cream italic mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            "Change happens through movement and movement heals"
          </p>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/80 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>

          {/* CTA */}
          <div>
            <Button
              variant="cta"
              size="lg"
              className="group shadow-2xl"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt Kurs buchen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-white/70 mt-4 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Begrenzte Plätze verfügbar
            </p>
          </div>
        </div>
      </div>

      {/* Stats at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up">
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white/10 backdrop-blur-sm border border-white/15 px-8 sm:px-12 py-5 rounded-2xl">
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-2xl sm:text-3xl font-semibold text-white drop-shadow-md">6</span>
            <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
              Max. Teilnehmer
            </span>
          </div>
          <div className="w-12 h-px sm:w-px sm:h-8 bg-white/30" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-2xl sm:text-3xl font-semibold text-white drop-shadow-md">100%</span>
            <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
              Individuelle Betreuung
            </span>
          </div>
          <div className="w-12 h-px sm:w-px sm:h-8 bg-white/30" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-heading text-2xl sm:text-3xl font-semibold text-white drop-shadow-md">✓</span>
            <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
              Offen für alle Level
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
