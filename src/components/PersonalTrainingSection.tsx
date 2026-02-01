import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PersonalTrainingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 bg-gradient-to-b from-cream to-sand"
    >
      <div 
        className={`text-center px-4 max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
          Dein Körper hat die ungeteilte Aufmerksamkeit verdient
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
