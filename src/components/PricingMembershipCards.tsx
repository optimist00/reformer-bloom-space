interface MembershipCard {
  name: string;
  sessionsInfo: string;
  price: string;
  pricePerSession?: string;
}

const memberships: MembershipCard[] = [
  {
    name: "Membership MEDIUM",
    sessionsInfo: "4 Kurse pro Monat",
    price: "109,00 €",
    pricePerSession: "27,25€ pro Session",
  },
  {
    name: "Membership LARGE",
    sessionsInfo: "8 Kurse pro Monat",
    price: "199,00 €",
    pricePerSession: "24,80€ pro Session",
  },
  {
    name: "Membership UNLIMITED",
    sessionsInfo: "Unbegrenzte Kurse",
    price: "289,00 €",
  },
];

const PricingMembershipCards = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-earth/10"
          >
            <h3 className="font-heading text-base font-semibold text-earth-dark mb-0.5">
              {membership.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {membership.sessionsInfo}
            </p>

            <div className="mb-1">
              <span className="text-2xl font-heading font-semibold text-earth-dark">
                {membership.price}
              </span>
              <span className="text-sm text-muted-foreground ml-1">/Monat</span>
            </div>
            
            {membership.pricePerSession && (
              <p className="text-sm text-sage font-medium">
                {membership.pricePerSession}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingMembershipCards;