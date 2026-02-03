import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-fullscreen.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const showVideo = !isMobile && !prefersReducedMotion;

  return (
    <section className="relative min-h-screen pt-20">
      {/* Fullscreen background - video on desktop, image on mobile/reduced motion */}
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : (
        <img 
          src={heroImage} 
          alt="Pilates Training auf dem Reformer im House of Pilates Dresden" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
      )}
      
      {/* Warm brown tint overlay */}
      <div className="absolute inset-0 bg-earth/25" />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl animate-fade-in">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-4 md:mb-6">
            House of Pilates Dresden
          </h1>

          {/* Decorative line */}
          <div className="w-16 md:w-20 h-0.5 bg-white/60 mb-4 md:mb-6" />

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 font-medium max-w-xl">
            Intime Atmosphäre. Individuelle Betreuung. Sichtbare Ergebnisse.
          </p>

          {/* CTA */}
          <div className="mb-8 md:mb-10">
            <Button
              variant="cta"
              size="lg"
              className="group shadow-2xl bg-sand hover:bg-sand/90 text-earth-dark"
              onClick={scrollToBooking}
            >
              Jetzt Kurs buchen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-white/70 mt-4 font-medium">
              Begrenzte Plätze verfügbar
            </p>
          </div>

          {/* Stats - hidden on mobile, visible on tablet+ */}
          <div className="hidden md:inline-flex flex-row items-center gap-8 lg:gap-10 bg-white/10 backdrop-blur-sm border border-white/20 px-8 lg:px-12 py-5 rounded-2xl">
            <div className="flex flex-col items-start gap-1">
              <span className="font-heading text-2xl lg:text-3xl font-semibold text-white">6</span>
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
                Max. Teilnehmer
              </span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex flex-col items-start gap-1">
              <span className="font-heading text-2xl lg:text-3xl font-semibold text-white">100%</span>
              <span className="text-xs text-white/70 font-medium uppercase tracking-wider">
                Individuelle Betreuung
              </span>
            </div>
            <div className="w-px h-8 bg-white/30" />
            <div className="flex flex-col items-start gap-1">
              <span className="font-heading text-2xl lg:text-3xl font-semibold text-white">✓</span>
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
