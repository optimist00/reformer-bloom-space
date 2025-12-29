import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const AGB = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 bg-cream">
        <div className="container max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg font-medium text-foreground">House of Pilates Dresden</p>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 1 Geltungsbereich und Anbieter
              </h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen House of Pilates Dresden, Inhaberin Jessica Bethe, Heinrichstraße 2, 01097 Dresden (nachfolgend „Studio") und ihren Kunden (nachfolgend „Teilnehmer") über die Nutzung der Studioräumlichkeiten sowie die Teilnahme an Pilates-Kursen.
              </p>
              <p>
                (2) Die Buchung und Verwaltung der Kurse, Karten und Mitgliedschaften erfolgt über die externe Plattform BSPORT SAS. Es gelten ergänzend die Nutzungsbedingungen von BSPORT SAS.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 2 Vertragsschluss und Buchung über BSPORT SAS
              </h2>
              <p>
                (1) Die Darstellung der Kurse und Tarife auf der Website und in der BSPORT SAS-App stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Buchung dar.
              </p>
              <p>
                (2) Durch das Anklicken des Buttons „Jetzt buchen" (oder vergleichbar) und den Abschluss des Bestellprozesses bei BSPORT SAS gibt der Teilnehmer ein verbindliches Angebot ab. Der Vertrag kommt mit der Bestätigung durch das System zustande.
              </p>
              <p>
                (3) Die Teilnahme an den Kursen ist persönlich und grundsätzlich nicht übertragbar, es sei denn, dies ist im spezifischen Tarif (z.B. Duet-Sessions) anders geregelt.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 3 Karten, Abonnements und Gültigkeit
              </h2>
              <p>
                (1) Einzelkarten: Berechtigen zur einmaligen Teilnahme an einem Kurs und verfallen mit dem gebuchten Termin.
              </p>
              <p>
                (2) 10er-Karten:
              </p>
              <p className="pl-4">
                a) 10er-Karten berechtigen zur Buchung von 10 Kurseinheiten.
              </p>
              <p className="pl-4">
                b) Die Gültigkeit der 10er-Karte ist auf 6 Monate ab Kaufdatum beschränkt. Nicht genutzte Einheiten verfallen nach Ablauf dieser Frist ersatzlos. Eine Barauszahlung von Restguthaben ist ausgeschlossen.
              </p>
              <p>
                (3) Monats-Abonnements (Mitgliedschaften):
              </p>
              <p className="pl-4">
                a) Vertragsgegenstand & Gebühren: Das Abonnement berechtigt den Teilnehmer zur Nutzung des vereinbarten Kontingents an Kurseinheiten pro Monat. Der monatliche Beitrag entspricht dem im Buchungssystem ausgewiesenen Preis inkl. der jeweils geltenden gesetzlichen Mehrwertsteuer.
              </p>
              <p className="pl-4">
                b) Mindestlaufzeit: Jedes Abonnement hat eine Mindestvertragslaufzeit von drei (3) Monaten. Während dieser Zeit ist eine ordentliche Kündigung ausgeschlossen.
              </p>
              <p className="pl-4">
                c) Verlängerung und Kündigung: Nach Ablauf der Mindestlaufzeit verlängert sich das Abonnement automatisch auf unbestimmte Zeit und kann dann jederzeit mit einer Frist von einem Monat zum Ende des jeweiligen Abrechnungszeitraums gekündigt werden.
              </p>
              <p className="pl-4">
                d) Form der Kündigung: Die Kündigung muss in Textform (z. B. per E-Mail an info@houseofpilatesdresden.de) oder – sofern technisch verfügbar – über die Self-Service-Funktion im Kundenportal von BSPORT SAS erfolgen.
              </p>
              <p className="pl-4">
                e) Übertragbarkeit: Das im Abonnement enthaltene Kontingent ist personengebunden und kann nicht auf den Folgemonat übertragen werden, sofern nicht ausdrücklich anders im Tarif beschrieben. Nicht genutzte Einheiten verfallen am Ende des jeweiligen Abrechnungsmonats.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 4 Zahlungsbedingungen
              </h2>
              <p>
                (1) Die Gebühren für Karten und Abonnements sind im Voraus fällig.
              </p>
              <p>
                (2) Die Zahlungsabwicklung erfolgt über BSPORT SAS und die dort angebotenen Zahlungsmethoden (z.B. Kreditkarte, PayPal, SEPA-Lastschrift).
              </p>
              <p>
                (3) Gerät der Teilnehmer mit Zahlungen in Verzug (z.B. Rücklastschrift), trägt er die dadurch entstehenden Mehrkosten. Das Studio ist berechtigt, den Zugang zum Buchungssystem bis zum Ausgleich der offenen Forderungen zu sperren.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">§ 5 Stornierung und „No-Show" (12-Stunden-Regel)</h2>
              <p>(1) Eine kostenfreie Stornierung gebuchter Termine ist bis 12 Stunden vor Kursbeginn über das BSPORT SAS-System möglich. In diesem Fall wird das Guthaben (z.B. der Punkt auf der 10er-Karte) wieder gutgeschrieben.</p>
              <p>(2) Bei einer Stornierung weniger als 12 Stunden vor Beginn oder bei Nichterscheinen („No-Show") wird die Einheit voll berechnet bzw. von der Karte abgezogen. Bei Einzelkarten verfällt der gezahlte Betrag.</p>
              <p>
                (3) Dem Teilnehmer bleibt der Nachweis gestattet, dass dem Studio kein oder ein wesentlich geringerer Schaden entstanden ist (z.B. wenn der Platz noch kurzfristig anderweitig vergeben werden konnte).
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 6 Pünktlichkeit und Einlass-Stopp
              </h2>
              <p>
                (1) Um Verletzungen zu vermeiden, ist das gemeinsame Warm-up (Aufwärmen) zu Beginn der Stunde obligatorisch.
              </p>
              <p>
                (2) Verspätungen: Kommt ein Teilnehmer mehr als 5 Minuten zu spät, besteht aus Sicherheitsgründen kein Anspruch mehr auf Einlass oder Teilnahme.
              </p>
              <p>
                (3) In diesem Fall gilt die Stunde als „verspätet storniert" bzw. wahrgenommen. Eine Erstattung oder Gutschrift der Einheit erfolgt nicht, da der Platz für den Teilnehmer freigehalten wurde.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 7 Kleidung (Grip Socks) und Hygiene
              </h2>
              <p>
                (1) Aus Sicherheitsgründen (Rutschgefahr auf dem Reformer) und Hygienegründen ist das Training ausschließlich mit Stoppersocken (Grip Socks) gestattet. Das Training barfuß oder in normalen Socken ist untersagt.
              </p>
              <p>
                (2) Teilnehmer können eigene Grip Socks mitbringen oder diese kostenpflichtig im Studio erwerben.
              </p>
              <p>
                (3) Ohne geeignete Socken kann die Teilnahme verweigert werden; die Stunde wird in diesem Fall dennoch berechnet.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 8 Gesundheit und Meldepflicht
              </h2>
              <p>
                (1) Der Teilnehmer versichert, sportgesund zu sein.
              </p>
              <p>
                (2) Meldepflicht: Bestehende Diagnosen, körperliche Einschränkungen, Verletzungen oder eine Schwangerschaft müssen der Trainerin vor Beginn der ersten Stunde (und bei Veränderungen erneut) unaufgefordert mitgeteilt werden.
              </p>
              <p>
                (3) Die Trainerin ist keine Ärztin. Die Teilnahme erfolgt auf eigene Gefahr. Bei Übelkeit oder Schmerzen ist das Training sofort abzubrechen.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 9 Haftung und Haftungsausschluss
              </h2>
              <p>
                (1) Sachschäden: Für mitgebrachte Kleidung, Wertgegenstände und Geld wird keine Haftung übernommen. Für sonstige Sachschäden haftet das Studio nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist bei Sachschäden ausgeschlossen.
              </p>
              <p>
                (2) Personenschäden: Das Studio haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung des Studios beruhen.
              </p>
              <p>
                (3) Eigenverantwortung: Verletzt sich der Teilnehmer, weil er den Anweisungen der Trainerin zuwidergehandelt hat, die Geräte unsachgemäß genutzt hat oder weil er dem Studio vorliegende gesundheitliche Risiken (siehe § 8) verschwiegen hat, so haftet das Studio nicht bzw. trifft den Teilnehmer ein erhebliches Mitverschulden.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 10 Datenschutz
              </h2>
              <p>
                Es gilt die separate Datenschutzerklärung. Da die Buchung über BSPORT SAS erfolgt, gelten zudem die Datenschutzbestimmungen der BSPORT SAS. Der Teilnehmer stimmt zu, dass seine Stammdaten zur Vertragsabwicklung in BSPORT SAS gespeichert werden.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                § 11 Schlussbestimmungen
              </h2>
              <p>
                (1) Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p>
                (2) Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Dresden.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default AGB;