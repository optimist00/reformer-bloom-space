import { Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-beige to-sand py-24 md:py-28">
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

        {/* Scarcity Alert */}
        <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-100 to-red-200 px-8 py-5 rounded-xl mb-12 border border-red-200 max-w-2xl mx-auto">
          <AlertTriangle className="w-5 h-5 text-red-700 flex-shrink-0" />
          <p className="text-red-800">
            <strong>Achtung:</strong> Da wir nur 6 Reformer haben, sind die
            Abendkurse schnell ausgebucht.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-10 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-large border-2 ${
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
                onClick={scrollToBooking}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Booking Widget */}
        <div
          id="booking"
          className="bg-white rounded-2xl p-10 md:p-14 shadow-soft text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Kurse
          </span>
          <h3 className="font-heading text-2xl md:text-3xl mb-3">Kurs buchen</h3>
          <p className="text-muted-foreground mb-8">
            Wähle deinen gewünschten Termin direkt im Kalender
          </p>
          <div className="min-h-[400px] bg-sand/50 rounded-xl flex items-center justify-center text-muted-foreground border-2 border-dashed border-stone">
            <p className="text-lg">Buchungskalender Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
