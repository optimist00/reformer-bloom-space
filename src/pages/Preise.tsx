import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BsportPassWidget from "@/components/BsportPassWidget";
import BsportSubscriptionWidget from "@/components/BsportSubscriptionWidget";

const Preise = () => {
  const membershipBenefits = [
    "Priority Booking: Buche 1 Woche vor allen anderen",
    "10% Rabatt auf unseren Shop",
    "Einladung zu exklusiven Community Events",
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-cream border-b border-earth/10 sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-earth-dark hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Button>
          </Link>
          <h1 className="font-heading text-xl md:text-2xl font-semibold text-earth-dark">
            Preise
          </h1>
          <div className="w-[180px]" />
        </div>
      </header>

      {/* Content */}
      <main className="w-full py-8">
        {/* Willkommensangebot Section */}
        <section className="mb-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Nur für Neukunden
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Discovery Package
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reformer-Sessions plus unsere Signature Grip Socks als Willkommensgeschenk. 
              Buchbar nur bei deiner ersten Buchung.
            </p>
          </div>
        </section>

        {/* Kurspässe Section */}
        <section className="bg-beige/50 py-12 mb-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Flexibel trainieren
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Kurspässe
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wähle den Pass, der zu deinem Trainingsrhythmus passt – ob Einzelstunde oder 10er Karte.
            </p>
          </div>
          <BsportPassWidget />
        </section>

        {/* Memberships Section */}
        <section className="py-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Exklusive Vorteile
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Memberships
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trainiere unbegrenzt und genieße exklusive Vorteile als Mitglied unserer Community.
            </p>
            <ul className="inline-flex flex-col items-start gap-3 text-left">
              {membershipBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-earth-dark">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-sage" />
                  </span>
                  <span className="text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <BsportSubscriptionWidget />
        </section>
      </main>
    </div>
  );
};

export default Preise;
