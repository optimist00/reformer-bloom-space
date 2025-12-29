import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BsportWidget from "@/components/BsportWidget";

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
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Kurse
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Kurs buchen
          </h2>
          <p className="text-lg text-muted-foreground">
            Wähle deinen gewünschten Termin direkt im Kalender
          </p>
        </div>
        <BsportWidget />
      </div>
    </section>
  );
};

export default BookingSection;
