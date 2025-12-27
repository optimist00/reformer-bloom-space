import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BsportWidget from "@/components/BsportWidget";

const pricingPlans = [
  {
    name: "Einzelbuchung",
    description: "Perfekt zum Kennenlernen",
    price: "34",
    features: [
      "55 Minuten Training",
      "Inkl. Einführung",
      "Individuelle Beratung",
    ],
    highlighted: false,
    buttonText: "Jetzt buchen",
  },
  {
    name: "10er Karte",
    description: "Unser Bestseller",
    price: "290",
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
    name: "Full-Membership",
    description: "Für maximale Ergebnisse",
    price: "239",
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

        {/* Pricing Grid with Blur Overlay */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto blur-sm pointer-events-none select-none">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white p-10 rounded-2xl text-center transition-all duration-300 border-2 ${
                  plan.highlighted
                    ? "border-primary scale-105"
                    : "border-beige"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-1.5 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-lg text-muted-foreground">€</span>
                  <span className="font-heading text-5xl font-semibold">
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-muted-foreground">{plan.suffix}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-muted-foreground text-left border-b border-beige pb-3"
                    >
                      <Check className="w-5 h-5 text-sage flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "cta" : "secondary"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-primary/90 text-white px-8 py-4 rounded-xl text-xl md:text-2xl font-heading font-semibold shadow-large">
              Wird bald freigeschaltet!
            </span>
          </div>
        </div>

        {/* Booking Widget with Blur Overlay */}
        <div className="relative">
          <div
            id="booking"
            className="bg-white rounded-2xl p-10 md:p-14 shadow-soft text-center blur-sm pointer-events-none select-none"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Kurse
            </span>
            <h3 className="font-heading text-2xl md:text-3xl mb-3">Kurs buchen</h3>
            <p className="text-muted-foreground mb-6">
              Wähle deinen gewünschten Termin direkt im Kalender
            </p>
            <BsportWidget />
          </div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-primary/90 text-white px-8 py-4 rounded-xl text-xl md:text-2xl font-heading font-semibold shadow-large">
              Wird bald freigeschaltet!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
