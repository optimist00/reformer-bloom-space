import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BsportPassWidget from "@/components/BsportPassWidget";
import BsportSubscriptionWidget from "@/components/BsportSubscriptionWidget";

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
        {/* Einzel- & Mehrfachkarten Section */}
        <section className="mb-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Flexible Optionen
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Einzel- & Mehrfachkarten
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Einzelkurs, 5er Karte und 10er Karte – perfekt zum Kennenlernen oder für flexibles Training.
            </p>
          </div>
          <BsportPassWidget />
        </section>

        {/* Abopläne Section */}
        <section className="bg-beige/50 py-12">
          <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Memberships
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
              Abopläne
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unbegrenzt trainieren mit unseren Memberships – für alle, die regelmäßig dabei sein möchten.
            </p>
          </div>
          <BsportSubscriptionWidget />
        </section>
      </main>
    </div>
  );
};

export default Preise;
