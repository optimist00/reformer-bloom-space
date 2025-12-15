import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 bg-cream">
        <div className="container max-w-3xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                House of Pilates Dresden<br />
                [Dein vollständiger Name]<br />
                [Straße und Hausnummer]<br />
                [PLZ Stadt]
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Kontakt
              </h2>
              <p>
                Telefon: 0152 29256804<br />
                E-Mail: info@houseofpilates-dresden.de
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [Deine USt-ID, falls vorhanden]
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                [Dein vollständiger Name]<br />
                [Straße und Hausnummer]<br />
                [PLZ Stadt]
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
