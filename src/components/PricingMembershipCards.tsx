import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MembershipCard {
  name: string;
  sessionsPerWeek: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  popular?: boolean;
  bookingUrl: string;
}

const memberships: MembershipCard[] = [
  {
    name: "Starter",
    sessionsPerWeek: "1x pro Woche",
    description: "Perfekt für den Einstieg in deine Pilates-Routine.",
    price: "89 €",
    priceNote: "pro Monat",
    features: [
      "1 Session pro Woche",
      "Flexible Buchung",
      "Zugang zu allen Kursarten",
    ],
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
  {
    name: "Unlimited",
    sessionsPerWeek: "Unbegrenzt",
    description: "Trainiere so oft du willst – volle Flexibilität für deinen Alltag.",
    price: "149 €",
    priceNote: "pro Monat",
    features: [
      "Unbegrenzte Sessions",
      "Priority Booking",
      "10% Shop-Rabatt",
      "Exklusive Events",
    ],
    popular: true,
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
  {
    name: "Duo",
    sessionsPerWeek: "2x pro Woche",
    description: "Dein idealer Rhythmus für nachhaltige Fortschritte.",
    price: "119 €",
    priceNote: "pro Monat",
    features: [
      "2 Sessions pro Woche",
      "Flexible Buchung",
      "Zugang zu allen Kursarten",
    ],
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
];

const PricingMembershipCards = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl p-6 shadow-soft border transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
              membership.popular ? "border-sage/40 ring-1 ring-sage/20" : "border-earth/10"
            }`}
          >
            {membership.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-semibold px-3 py-1 rounded-full">
                Empfohlen
              </span>
            )}
            
            <div className="mb-4">
              <h3 className="font-heading text-lg font-semibold text-earth-dark">
                {membership.name}
              </h3>
              <p className="text-sm text-sage font-medium">{membership.sessionsPerWeek}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[40px]">
              {membership.description}
            </p>

            <div className="mb-6">
              <span className="text-3xl font-heading font-semibold text-earth-dark">
                {membership.price}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                {membership.priceNote}
              </span>
            </div>

            <ul className="space-y-2 mb-6">
              {membership.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm text-earth-dark">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-sage/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-sage" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={membership.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant={membership.popular ? "cta" : "outline"} 
                className="w-full"
              >
                Membership starten
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingMembershipCards;