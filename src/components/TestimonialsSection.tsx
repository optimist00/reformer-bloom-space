import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-beige py-16 md:py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
            Das sagen unsere Mitglieder
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Echte Ergebnisse. Echte Menschen.
          </h2>
        </div>

        {/* Placeholder Message */}
        <div className="bg-cream p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground">
            Wir führen gerade eine kostenfreie Testphase durch. Hier werden bald Erfahrungsberichte stehen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
