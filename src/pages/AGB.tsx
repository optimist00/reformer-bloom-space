import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AGB = () => {
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
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 1 Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen 
                House of Pilates Dresden und seinen Kunden über die Teilnahme an Kursen, 
                Personal Training und sonstigen Dienstleistungen.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 2 Vertragsschluss
              </h2>
              <p>
                Der Vertrag kommt durch die Buchung eines Kurses oder einer Leistung über 
                unser Online-Buchungssystem oder durch persönliche Vereinbarung zustande. 
                Die Buchung ist verbindlich.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 3 Preise und Zahlung
              </h2>
              <p>
                Es gelten die zum Zeitpunkt der Buchung ausgewiesenen Preise. Die Zahlung 
                erfolgt im Voraus per Online-Zahlung oder vor Ort. Alle Preise verstehen 
                sich inklusive der gesetzlichen Mehrwertsteuer.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 4 Stornierung und Umbuchung
              </h2>
              <p>
                Eine kostenlose Stornierung ist bis 12 Stunden vor Kursbeginn möglich. 
                Bei späterer Absage oder Nichterscheinen wird die gebuchte Leistung 
                vollständig berechnet.
              </p>
              <p>
                Umbuchungen sind nach Verfügbarkeit möglich und sollten mindestens 
                24 Stunden vorher erfolgen.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 5 Teilnahmevoraussetzungen
              </h2>
              <p>
                Die Teilnahme erfolgt auf eigene Verantwortung. Bei gesundheitlichen 
                Einschränkungen oder Schwangerschaft ist dies vor Kursbeginn mitzuteilen. 
                Wir behalten uns vor, Teilnehmer bei Bedenken vom Kurs auszuschließen.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 6 Haftung
              </h2>
              <p>
                House of Pilates Dresden haftet nur für Schäden, die auf vorsätzlichem 
                oder grob fahrlässigem Verhalten beruhen. Die Haftung für leichte 
                Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 7 Hausordnung
              </h2>
              <p>
                Die Teilnehmer verpflichten sich, die Hausordnung des Studios zu beachten. 
                Bitte erscheinen Sie pünktlich und in angemessener Sportkleidung. 
                Das Mitbringen von Essen ist nicht gestattet.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 8 Schlussbestimmungen
              </h2>
              <p>
                Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam 
                sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="mt-4 text-sm">
                Stand: [Datum einfügen]
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;
