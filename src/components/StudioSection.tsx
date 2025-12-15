import { Check } from "lucide-react";
import studioImage from "@/assets/studio.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  "6 Premium Reformer",
  "Intime Gruppen bis 6 Personen",
  "Tageslichtdurchflutete Räume",
  "Zentral in Dresden",
];

const StudioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="studio" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-large">
              <img
                src={studioImage}
                alt="House of Pilates Dresden – Boutique Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary/70 mb-4">
              Das Studio
            </span>
            <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
              Ein Ort zum Ankommen
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Reformer Pilates in einer Atmosphäre, die zum Wohlfühlen einlädt. 
              Kleine Gruppen, persönliche Betreuung und ein Studio, das 
              Ästhetik mit Funktion verbindet.
            </p>

            <ul className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-sage" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
