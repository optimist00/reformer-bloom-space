import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WaveLine = () => (
  <svg 
    width="80" 
    height="16" 
    viewBox="0 0 80 16" 
    className="text-earth/30"
    fill="none"
  >
    <path 
      d="M0 8 Q10 2, 20 8 T40 8 T60 8 T80 8" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const PersonalTrainingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 bg-beige/50"
    >
      <div 
        className={`text-center px-4 max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Inline divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <WaveLine />
          <span className="font-heading text-base md:text-lg italic text-earth/60 whitespace-nowrap">
            Noch individueller?
          </span>
          <WaveLine />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
          Dein Körper hat die ungeteilte Aufmerksamkeit verdient?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Personaltrainings und exklusive Einzelsessions
        </p>
        <p className="text-earth-dark">
          Schreib uns eine Mail an:{" "}
          <a 
            href="mailto:kurse@houseofpilatesdresden.de"
            className="text-primary hover:underline"
          >
            kurse@houseofpilatesdresden.de
          </a>
        </p>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;
