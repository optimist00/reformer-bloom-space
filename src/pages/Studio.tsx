import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studioImage from "@/assets/studio.jpg";
import { MapPin, Car, Train } from "lucide-react";

const Studio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: locationRef, isVisible: locationVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-beige">
      <Navbar />

      <main className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container">
          {/* Header */}
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
              Unser Raum
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Das Studio
            </h1>
            <p className="text-lg text-muted-foreground">
              Ein Ort, an dem Bewegung zur Selbstfürsorge wird.
            </p>
          </div>

          {/* Studio Image */}
          <div
            ref={aboutRef as React.RefObject<HTMLDivElement>}
            className={`mb-12 md:mb-16 transition-all duration-700 ${
              aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-large">
              <img
                src={studioImage}
                alt="House of Pilates Dresden Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Studio */}
          <div className="max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-soft">
              <h2 className="font-heading text-2xl md:text-3xl mb-6 text-center">
                Willkommen im House of Pilates
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unser Studio in der Dresdner Neustadt ist ein Rückzugsort vom Alltag – ein Raum, 
                  in dem du dich ganz auf dich und deinen Körper konzentrieren kannst. Die warme, 
                  einladende Atmosphäre und das durchdachte Design schaffen die perfekte Umgebung 
                  für dein Training.
                </p>
                <p>
                  Mit maximal sechs Teilnehmer:innen pro Kurs garantieren wir eine persönliche 
                  Betreuung, die du in größeren Studios vergeblich suchst. Jede Bewegung wird 
                  begleitet, jede Korrektur individuell angepasst.
                </p>
                <p>
                  Unsere hochwertigen Reformer-Geräte bieten dir ein effektives Ganzkörpertraining, 
                  das Kraft, Flexibilität und Balance vereint. Ob Anfänger:in oder Fortgeschrittene – 
                  bei uns findest du den passenden Kurs für dein Level.
                </p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div
            ref={locationRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              locationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
                Anfahrt
              </span>
              <h2 className="text-2xl md:text-3xl">So findest du uns</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Map Placeholder / Address Card */}
              <div className="bg-cream rounded-2xl p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      Heinrichstraße 2<br />
                      01097 Dresden<br />
                      (Neustadt)
                    </p>
                  </div>
                </div>
                
                {/* Google Maps Link */}
                <a
                  href="https://maps.google.com/?q=Heinrichstraße+2,+01097+Dresden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  In Google Maps öffnen
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Transport Options */}
              <div className="space-y-6">
                {/* By Car */}
                <div className="bg-cream rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-2">Mit dem Auto</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Öffentliche Parkplätze gibt es direkt vor dem Studio sowie 
                        entlang der Heinrichstraße und Hauptstraße.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Public Transport */}
                <div className="bg-cream rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Train className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-2">Mit den Öffis</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Am besten erreichbar über die Haltestellen <strong>Albertplatz</strong> und{" "}
                        <strong>Neustädter Markt</strong>. Von dort sind es nur wenige Gehminuten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Studio;
