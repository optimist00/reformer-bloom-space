import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="booking"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-cream py-16 md:py-24 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Kurse
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Kurs buchen
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wähle deinen gewünschten Termin direkt im Kalender
          </p>
          <Link to="/stundenplan">
            <Button variant="cta" size="lg" className="group text-sm md:text-base px-6 md:px-9">
              <span className="md:hidden">Zum Stundenplan</span>
              <span className="hidden md:inline">Schaue dir jetzt den Stundenplan an</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
