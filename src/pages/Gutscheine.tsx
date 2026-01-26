import { useEffect } from "react";
import { ArrowLeft, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gutscheine = () => {
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
            Gutscheine
          </h1>
          <div className="w-[180px]" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full py-16">
        <section className="text-center px-4 max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Das perfekte Geschenk
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-earth-dark mb-4">
            Schenke Bewegung & Wohlbefinden
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Überrasche jemand Besonderen mit einem Reformer Pilates Erlebnis im House of Pilates Dresden. 
            Unsere Gutscheine sind das ideale Geschenk für alle, die Körper und Geist etwas Gutes tun möchten.
          </p>
        </section>

        {/* Placeholder for Gift Cards */}
        <section className="bg-beige/50 py-12">
          <div className="container">
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
                Gutschein-Optionen
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark">
                Wähle deinen Gutschein
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Single Session */}
              <div className="bg-cream rounded-2xl p-6 shadow-soft text-center">
                <h4 className="font-heading text-xl font-semibold text-earth-dark mb-2">
                  1 Session
                </h4>
                <p className="text-3xl font-heading font-bold text-primary mb-2">32€</p>
                <p className="text-sm text-muted-foreground">
                  Perfekt zum Ausprobieren
                </p>
              </div>

              {/* 3 Sessions */}
              <div className="bg-cream rounded-2xl p-6 shadow-soft text-center border-2 border-primary">
                <span className="inline-block text-xs font-semibold uppercase tracking-[2px] text-primary mb-2">
                  Beliebt
                </span>
                <h4 className="font-heading text-xl font-semibold text-earth-dark mb-2">
                  3 Sessions
                </h4>
                <p className="text-3xl font-heading font-bold text-primary mb-2">90€</p>
                <p className="text-sm text-muted-foreground">
                  Für den Einstieg ins Training
                </p>
              </div>

              {/* 5 Sessions */}
              <div className="bg-cream rounded-2xl p-6 shadow-soft text-center">
                <h4 className="font-heading text-xl font-semibold text-earth-dark mb-2">
                  5 Sessions
                </h4>
                <p className="text-3xl font-heading font-bold text-primary mb-2">145€</p>
                <p className="text-sm text-muted-foreground">
                  Für nachhaltige Ergebnisse
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="text-center px-4 max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-3">
              Gutschein anfragen
            </h3>
            <p className="text-muted-foreground mb-6">
              Kontaktiere uns per E-Mail, um deinen Gutschein zu bestellen. 
              Wir senden dir einen personalisierten Gutschein zu.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="mailto:info@houseofpilates-dresden.de?subject=Gutschein-Anfrage">
                Jetzt Gutschein anfragen
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gutscheine;
