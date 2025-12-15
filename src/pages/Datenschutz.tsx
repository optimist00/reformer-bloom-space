import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-heading text-xl text-foreground mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                House of Pilates Dresden<br />
                [Dein vollständiger Name]<br />
                [Straße und Hausnummer]<br />
                [PLZ Stadt]<br />
                Telefon: 0152 29256804<br />
                E-Mail: info@houseofpilates-dresden.de
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-heading text-xl text-foreground mb-2">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf 
                Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, 
                unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-2 mt-6">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                4. Buchungssystem (bsport)
              </h2>
              <p>
                Für die Kursbuchung nutzen wir den Dienst bsport. Bei der Buchung werden Ihre 
                eingegebenen Daten an bsport übermittelt. Weitere Informationen finden Sie in 
                der Datenschutzerklärung von bsport.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                5. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der 
                Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten 
                können Sie sich jederzeit an uns wenden.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
