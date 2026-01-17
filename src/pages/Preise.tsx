import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PricingPassCards from "@/components/PricingPassCards";
import PricingMembershipCards from "@/components/PricingMembershipCards";
const Preise = () => {
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
              Exklusiv für Neukunden
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Discovery Package
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Starte mit 3 Reformer-Sessions inkl. Signature Grip Socks.{" "}
              <span className="font-semibold text-earth-dark">69€</span>{" "}
              <span className="line-through text-muted-foreground/60">96,99€</span>
              {" "}· Nur <span className="font-semibold">20€ pro Session</span>.
              <br />
              <span className="text-sm">Einmalig für Neukunden.</span>
            </p>
            <a 
              href="https://backoffice.bsport.io/login/customer?membership=5314" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg">
                Jetzt Konto erstellen
              </Button>
            </a>
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
          <PricingPassCards />
        </section>

        {/* Memberships Section */}
        <section className="py-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Monatlich
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Memberships
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              <span className="font-semibold text-earth-dark">Priority Booking:</span> Buche 1 Woche vor allen anderen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Einladung zu exklusiven Community Events.
            </p>
          </div>
          <PricingMembershipCards />
        </section>
      </main>
    </div>
  );
};

export default Preise;
