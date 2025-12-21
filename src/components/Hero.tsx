import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Mobile: Full background image with overlay */}
      <div 
        className="lg:hidden absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-earth/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-transparent" />
      </div>

      {/* Desktop: Split layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Text content (2/3) */}
        <div className="w-2/3 bg-cream flex items-center">
          <div className="px-12 xl:px-20 py-16 max-w-3xl ml-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sand border border-stone/20 px-5 py-2.5 rounded-full text-sm font-semibold text-earth mb-8 tracking-wide">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
              Exklusiv in Dresden
            </div>

            {/* Headline */}
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight text-earth">
              House of Pilates Dresden
            </h1>

            {/* Quote */}
            <p className="text-lg xl:text-xl text-primary italic mb-4">
              "Change happens through movement and movement heals"
            </p>

            {/* Subheadline */}
            <p className="text-base xl:text-lg text-stone mb-10">
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
              <p className="text-sm text-stone mt-4 font-medium">
                Begrenzte Plätze verfügbar
              </p>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-10 bg-sand/50 border border-stone/10 px-12 py-6 rounded-2xl">
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl xl:text-3xl font-semibold text-earth">6</span>
                <span className="text-xs text-stone font-medium uppercase tracking-wider">
                  Max. Teilnehmer
                </span>
              </div>
              <div className="w-px h-8 bg-stone/30" />
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl xl:text-3xl font-semibold text-earth">100%</span>
                <span className="text-xs text-stone font-medium uppercase tracking-wider">
                  Individuelle Betreuung
                </span>
              </div>
              <div className="w-px h-8 bg-stone/30" />
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-2xl xl:text-3xl font-semibold text-earth">✓</span>
                <span className="text-xs text-stone font-medium uppercase tracking-wider">
                  Offen für alle Level
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image (1/3) */}
        <div 
          className="w-1/3"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Mobile: Text content as overlay */}
      <div className="lg:hidden relative z-10 min-h-screen flex items-center">
        <div className="container text-center animate-fade-in-up px-6 py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold text-white/90 mb-8 tracking-wide">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            Exklusiv in Dresden
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            House of Pilates Dresden
          </h1>

          {/* Quote */}
          <p className="text-lg text-cream italic mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            "Change happens through movement and movement heals"
          </p>

          {/* Subheadline */}
          <p className="text-base text-white/80 mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
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
            <p className="text-sm text-white/70 mt-4 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Begrenzte Plätze verfügbar
            </p>
          </div>

          {/* Stats */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-white/10 backdrop-blur-sm border border-white/15 px-8 sm:px-12 py-6 rounded-2xl">
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
      </div>
    </section>
  );
};

export default Hero;
