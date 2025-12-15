import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-beige transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary/70 mb-4">
            Philosophie
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight">
            Bewegung als Selbstfürsorge
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Pilates ist mehr als Training – es ist Zeit für dich. 
            Jede Stunde ist eine Einladung, deinen Körper bewusst wahrzunehmen, 
            Kraft aufzubauen und mit einem guten Gefühl in den Tag zu gehen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
