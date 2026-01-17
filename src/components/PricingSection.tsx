import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    name: "Einzelbuchung",
    description: "Perfekt zum Kennenlernen",
    price: "30",
    features: [
      "50-Minuten Training",
      "Inkl. Einführung",
      "Individuelle Beratung",
    ],
    highlighted: false,
    buttonText: "Jetzt buchen",
  },
  {
    name: "10er Karte",
    description: "25€ pro Session",
    price: "250",
    features: [
      "10 Trainingseinheiten",
      "6 Monate Gültigkeit",
      "Flexible Buchung",
    ],
    highlighted: true,
    badge: "Beliebt",
    buttonText: "Jetzt starten",
  },
  {
    name: "UNLIMITED Membership",
    description: "The Ultimate Lifestyle – Unbegrenzte Kurse",
    price: "289",
    suffix: "/Monat",
    features: [
      "Unbegrenzte Kurse",
      "Priorität bei Buchung",
      "Monatlich kündbar",
    ],
    highlighted: false,
    buttonText: "Mitglied werden",
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-gradient-to-b from-beige to-sand py-24 md:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        {/* Header */}
        <div id="pricing" className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Preise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Starte deine Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            Wähle das Paket, das am besten zu dir passt.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-5 md:p-10 rounded-xl md:rounded-2xl text-center transition-all duration-300 border-2 ${
                plan.highlighted
                  ? "border-primary md:scale-105"
                  : "border-beige"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-2.5 md:-top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 md:px-5 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-heading text-lg md:text-xl font-semibold mb-1 md:mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-6">
                {plan.description}
              </p>
              <div className="mb-3 md:mb-6">
                <span className="text-base md:text-lg text-muted-foreground">€</span>
                <span className="font-heading text-3xl md:text-5xl font-semibold">
                  {plan.price}
                </span>
                {plan.suffix && (
                  <span className="text-muted-foreground text-sm md:text-base">{plan.suffix}</span>
                )}
              </div>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 md:gap-3 text-muted-foreground text-sm md:text-base text-left border-b border-beige pb-2 md:pb-3"
                  >
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-sage flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToBooking}
                variant={plan.highlighted ? "cta" : "secondary"}
                className="w-full text-sm md:text-base py-2 md:py-3"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA für weitere Optionen */}
        <div className="text-center">
          <Link to="/preise">
            <Button variant="secondary" size="lg">
              Weitere Optionen ansehen
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
