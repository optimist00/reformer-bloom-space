import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BsportWidget from "@/components/BsportWidget";

const AppPage = () => {
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
            App
          </h1>
          <div className="w-[180px]" />
        </div>
      </header>

      {/* Coming Soon Content */}
      <main className="w-full py-8">
        <div className="text-center mb-8 px-4 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-earth-dark mb-4">
            House of Pilates App - coming soon
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bald erscheint unsere eigene App für Android und iOS, sodass ihr in einem 
            übersichtlichen Menü einfacher, schneller und hübscher buchen könnt. 
            Darin könnt ihr unser gesamtes Angebot an Kursen, Pässen oder Produkten 
            wie Socken oder Taschen entdecken.
          </p>
          <p className="text-muted-foreground mt-4 font-medium">
            Bis dahin nutzt gerne diese Seite zum Buchen:
          </p>
        </div>
        
        {/* bsport Widget */}
        <BsportWidget />
      </main>
    </div>
  );
};

export default AppPage;
