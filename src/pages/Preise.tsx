import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PricingPassCards from "@/components/PricingPassCards";
import PricingMembershipCards from "@/components/PricingMembershipCards";
import SectionDivider from "@/components/SectionDivider";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";

const Preise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        {/* Discovery Package Section - Abgesetzt */}
        <section className="px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-terracotta/10 border border-terracotta/30 rounded-2xl p-8 text-center">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta text-white border-0">
                AKTION
              </Badge>
              <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4 mt-2">
                Exklusiv für Neukunden
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
                Discovery Package
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Starte mit 3 Reformer-Sessions inkl. Signature Grip Socks.{" "}
                <span className="font-semibold text-earth-dark">69€</span>{" "}
                <span className="line-through text-muted-foreground/60">96,99€</span>
                <br />
                Nur <span className="font-semibold">21€ pro Session</span>.
                <br />
                <span className="text-sm">Einmalig für Neukunden.</span>
              </p>
              <a 
                href="https://backoffice.bsport.io/login?membership=5314" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="cta" size="lg">
                  Jetzt Konto erstellen
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Divider: Öfter hier? */}
        <SectionDivider text="Öfter hier?" />

        {/* Kurspässe Section */}
        <section className="bg-beige/50 py-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Kurspässe
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wähle den Pass, der zu deinem Trainingsrhythmus passt – ob Einzelstunde oder 10er Karte.
            </p>
          </div>
          <PricingPassCards />
        </section>

        {/* Divider: Du willst noch mehr Vorteile? */}
        <SectionDivider text="Du willst noch mehr Vorteile?" />

        {/* Memberships Section */}
        <section className="py-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              4-Wöchentlich
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Memberships
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 max-w-4xl mx-auto">
              <div className="bg-cream border border-sage/20 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-earth-dark text-sm mb-1">Priority Booking</h4>
                <p className="text-xs text-muted-foreground">Buche 1 Woche vor allen anderen</p>
              </div>
              <div className="bg-cream border border-sage/20 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-earth-dark text-sm mb-1">Community Events</h4>
                <p className="text-xs text-muted-foreground">Einladung zu exklusiven Events</p>
              </div>
              <div className="bg-cream border border-sage/20 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-earth-dark text-sm mb-1">Flexible Stornierung</h4>
                <p className="text-xs text-muted-foreground">Bis <span className="line-through">12h</span> 6h vor Kursbeginn</p>
              </div>
              <div className="bg-cream border border-sage/20 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-earth-dark text-sm mb-1">Wartelisten-Priorität</h4>
                <p className="text-xs text-muted-foreground">Automatisch vorne bei Wartelisten</p>
              </div>
            </div>
          </div>
          <PricingMembershipCards />
          <p className="text-xs text-muted-foreground/70 text-center mt-6">
            Keine versteckten Kosten · Jederzeit kündbar.
          </p>
        </section>

        {/* Divider: Noch individueller? */}
        <SectionDivider text="Noch individueller?" />

        {/* Personal Training Section */}
        <PersonalTrainingSection />

        {/* CTA Section */}
        <section className="py-16 bg-beige/30">
          <div className="text-center px-4 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-3">
              Bereit für deine Transformation?
            </h2>
            <p className="text-muted-foreground mb-6">
              Sichere dir jetzt deinen Platz – unsere Kurse sind schnell ausgebucht.
            </p>
            <a 
              href="https://backoffice.bsport.io/m/House%20of%20Pilates%20Dresden/5314/calendar/?isPreview=true&variant=time&groupSessionByPeriod=false" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg">
                Jetzt Kurs buchen
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Preise;
