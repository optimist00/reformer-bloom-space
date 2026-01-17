interface PassCard {
  name: string;
  tagline: string;
  price: string;
  pricePerSession?: string;
  validFor: string;
}

const passes: PassCard[] = [
  {
    name: "Einzelkurs",
    tagline: "Der Standard im House of Pilates",
    price: "30,00 €",
    validFor: "1 Monat gültig",
  },
  {
    name: "5er Karte",
    tagline: "Deine kompakte Auszeit",
    price: "140,00 €",
    pricePerSession: "28€ pro Session",
    validFor: "3 Monate gültig",
  },
  {
    name: "10er Karte",
    tagline: "Volle Freiheit ohne Vertragsbindung",
    price: "250,00 €",
    pricePerSession: "25€ pro Session",
    validFor: "6 Monate gültig",
  },
];

const PricingPassCards = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {passes.map((pass, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-earth/10"
          >
            <h3 className="font-heading text-lg font-semibold text-earth-dark mb-1">
              {pass.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {pass.tagline}
            </p>

            <div className="mb-2">
              <span className="text-2xl font-heading font-semibold text-earth-dark">
                {pass.price}
              </span>
            </div>
            
            {pass.pricePerSession && (
              <p className="text-sm text-sage font-medium mb-3">
                {pass.pricePerSession}
              </p>
            )}

            <p className="text-xs text-muted-foreground">
              {pass.validFor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPassCards;