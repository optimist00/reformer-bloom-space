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
              
              <h3 className="font-heading text-xl text-foreground mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie unsere Website besuchen oder unsere 
                Dienste in Anspruch nehmen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Verantwortliche Stelle</h3>
              <p>
                Die Datenverarbeitung auf dieser Website und im Rahmen des Studiobetriebs erfolgt durch:
              </p>
              <p>
                House of Pilates Dresden<br />
                Inhaberin: Jessica Bethe<br />
                Heinrichstraße 2<br />
                01097 Dresden<br />
                Deutschland<br />
                Telefon: 0152 292 568 04<br />
                E-Mail: info@houseofpilatesdresden.de
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <h3 className="font-heading text-xl text-foreground mb-3">Datenschutz</h3>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Hinweis zur Datenweitergabe</h3>
              <p>
                Wir verkaufen Ihre persönlichen Daten nicht an Dritte. Eine Weitergabe erfolgt nur, 
                wenn dies zur Vertragserfüllung notwendig ist (z.B. Zahlungsabwickler), wir gesetzlich 
                dazu verpflichtet sind oder Sie ausdrücklich eingewilligt haben.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine 
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Beschwerderecht</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                einer Aufsichtsbehörde zu (in Sachsen: Sächsischer Datenschutzbeauftragter).
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                3. Datenerfassung auf unserer Website
              </h2>
              
              <h3 className="font-heading text-xl text-foreground mb-3">Hosting bei Strato</h3>
              <p>
                Unsere Website wird bei der Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin gehostet. 
                Wenn Sie unsere Website besuchen, erfasst Strato automatisch sogenannte Server-Log-Dateien. 
                Dies sind in der Regel:
              </p>
              <ul className="list-disc list-inside space-y-1 my-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (in anonymisierter Form)</li>
              </ul>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser 
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben als Websitebetreiber 
                ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Sicherheit unserer 
                Website. Hierzu müssen die Server-Log-Files erfasst werden. Wir haben mit Strato einen 
                Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Wir geben diese 
                Daten nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen (z.B. Anfrage für ein Probetraining) erforderlich ist. In allen 
                übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer 
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                4. Kundendatenverwaltung, Newsletter und Werbung
              </h2>
              
              <h3 className="font-heading text-xl text-foreground mb-3">Speicherung im CRM-System</h3>
              <p>
                Zur Pflege unserer Kundenbeziehungen und zur Organisation von Anfragen und Buchungen 
                speichern wir Ihre Daten (z.B. Name, E-Mail-Adresse, Telefonnummer, Buchungshistorie) 
                in einem Customer-Relationship-Management-System (CRM).
              </p>
              <p className="mt-4">
                Dies dient der Vertragsanbahnung und -erfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie 
                unserem berechtigten Interesse an einer effizienten Kundenverwaltung und der Optimierung 
                unserer Angebote (Art. 6 Abs. 1 lit. f DSGVO). Die Nutzung eines CRM-Systems hilft uns, 
                Ihre Anfragen schneller zu beantworten und unsere Kurse besser zu organisieren.
              </p>
              
              <h3 className="font-heading text-xl text-foreground mb-3 mt-6">Newsletter und Werbegutscheine</h3>
              <p>
                Wenn Sie sich für unseren Newsletter anmelden oder uns Ihre Einwilligung zum Erhalt von 
                Werbung geben, nutzen wir Ihre E-Mail-Adresse, um Ihnen regelmäßig Informationen über 
                unser Studio, Kurspläne, spezielle Angebote und Werbegutscheine zuzusenden.
              </p>
              <p className="mt-4">
                <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt ausschließlich auf Grundlage 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="mt-4">
                <strong>Abmeldung:</strong> Sie können den Bezug des Newsletters jederzeit abbestellen. 
                Einen entsprechenden Link finden Sie in jedem Newsletter oder durch eine formlose 
                Nachricht an uns.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                5. Speicherdauer
              </h2>
              <p>
                Ihre Daten verbleiben bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn 
                Sie Ihr Recht auf Löschung geltend machen oder Ihre Einwilligung widerrufen, werden Ihre 
                Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten (z.B. steuer- oder 
                handelsrechtliche Fristen) entgegenstehen. Im Falle solcher Pflichten erfolgt die 
                Löschung nach deren Ablauf.
              </p>
            </section>
            
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                6. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft, Berichtigung, Löschung, 
                Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie auf 
                Datenübertragbarkeit bezüglich Ihrer bei uns gespeicherten Daten.
              </p>
              <p className="mt-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter 
                der oben angegebenen E-Mail-Adresse an uns wenden.
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
