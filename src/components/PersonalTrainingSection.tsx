import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
          Exklusiv für dich
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
          Dein Körper hat die ungeteilte Aufmerksamkeit verdient
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Personaltrainings und exklusive Einzelsessions
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:kurse@houseofpilatesdresden.de"
            className="flex items-center gap-2 text-earth-dark hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">kurse@houseofpilatesdresden.de</span>
          </a>
          <a href="mailto:kurse@houseofpilatesdresden.de">
            <Button variant="cta">
              Jetzt anfragen
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;
