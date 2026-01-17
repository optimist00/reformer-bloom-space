import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PassCard {
  name: string;
  credits: string;
  validFor: string;
  description: string;
  price: string;
  pricePerSession?: string;
  popular?: boolean;
  bookingUrl: string;
}

const passes: PassCard[] = [
  {
    name: "Einzelkurs",
    credits: "1 Credit",
    validFor: "1 Monat gültig",
    description: "Dein Start im House of Pilates. Erlebe einen Kurs deiner Wahl und finde deinen Flow.",
    price: "30,00 €",
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
  {
    name: "5er Karte",
    credits: "5 Credits",
    validFor: "3 Monate gültig",
    description: "29€ pro Session – Deine kompakte Auszeit. Mit dem Essentials-Pass trainierst du flexibel.",
    price: "145,00 €",
    pricePerSession: "29€ pro Session",
    popular: true,
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
  {
    name: "10er Karte",
    credits: "10 Credits",
    validFor: "6 Monate gültig",
    description: "25€ pro Session – Volle Freiheit ohne Vertragsbindung. 10 Credits für dein Training.",
    price: "250,00 €",
    pricePerSession: "25€ pro Session",
    bookingUrl: "https://backoffice.bsport.io/login/customer?membership=5314",
  },
];

const PricingPassCards = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {passes.map((pass, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl p-6 shadow-soft border transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${
              pass.popular ? "border-sage/40 ring-1 ring-sage/20" : "border-earth/10"
            }`}
          >
            {pass.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-semibold px-3 py-1 rounded-full">
                Beliebt
              </span>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-heading text-lg font-semibold text-earth-dark">
                  {pass.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pass.credits}</p>
              </div>
              <span className="text-xs text-sage bg-sage/10 px-2 py-1 rounded-md font-medium">
                {pass.validFor}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[60px]">
              {pass.description}
            </p>

            <div className="mb-4">
              <span className="text-2xl font-heading font-semibold text-earth-dark">
                {pass.price}
              </span>
              {pass.pricePerSession && (
                <p className="text-xs text-sage font-medium mt-1">
                  {pass.pricePerSession}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={pass.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  variant={pass.popular ? "cta" : "outline"} 
                  className="w-full"
                  size="sm"
                >
                  Jetzt buchen
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPassCards;