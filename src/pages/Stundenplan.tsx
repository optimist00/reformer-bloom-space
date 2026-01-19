import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BsportWidget from "@/components/BsportWidget";

const Stundenplan = () => {
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
            Stundenplan
          </h1>
          <div className="w-[180px]" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Widget Container */}
      <main className="w-full py-4">
        <div className="text-center mb-4 px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-2">
            Wähle deinen Kurs
          </h2>
          <p className="text-muted-foreground text-sm">
            Finde den passenden Termin und buche direkt online
          </p>
          <a 
            href="https://backoffice.bsport.io/login/customer?membership=5314"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="cta" className="mt-3">
              Jetzt anmelden
            </Button>
          </a>
        </div>
        <BsportWidget />
      </main>
    </div>
  );
};

export default Stundenplan;
