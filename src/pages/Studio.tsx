import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import studioImage from "@/assets/studio.jpg";
import studioEquipment from "@/assets/studio-equipment.webp";
import studioReformerDetail from "@/assets/studio-reformer-detail.webp";
import studioTraining from "@/assets/studio-training.webp";
import studioLogoWall from "@/assets/studio-logo-wall.jpg";
import studioShop from "@/assets/studio-shop.webp";
import { MapPin, Car, Train } from "lucide-react";

const Studio = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();
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

          {/* Studio Image + About Side by Side */}
          <div
            ref={aboutRef as React.RefObject<HTMLDivElement>}
            className={`mb-16 md:mb-20 transition-all duration-700 ${
              aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
              {/* Studio Image */}
              <div className="aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={studioImage}
                  alt="House of Pilates Dresden Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Studio */}
              <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-soft flex flex-col justify-center">
                <h2 className="font-heading text-2xl md:text-3xl mb-5">
                  Willkommen im House of Pilates
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    Unser Studio in der Dresdner Neustadt ist ein Rückzugsort vom Alltag – ein Raum, 
                    in dem du dich ganz auf dich und deinen Körper konzentrieren kannst.
                  </p>
                  <p>
                    Mit maximal sechs Teilnehmer:innen pro Kurs garantieren wir eine persönliche 
                    Betreuung, die du in größeren Studios vergeblich suchst.
                  </p>
                  <p>
                    Unsere hochwertigen Reformer-Geräte bieten dir ein effektives Ganzkörpertraining, 
                    das Kraft, Flexibilität und Balance vereint.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div
            ref={galleryRef as React.RefObject<HTMLDivElement>}
            className={`mb-16 md:mb-20 transition-all duration-700 ${
              galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
                Impressionen
              </span>
              <h2 className="text-2xl md:text-3xl">Einblicke ins Studio</h2>
            </div>

            {/* Masonry-style Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Large image - spans 2 rows on desktop */}
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={studioTraining}
                  alt="Reformer Training im House of Pilates"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo wall */}
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-square">
                <img
                  src={studioLogoWall}
                  alt="House of Pilates Dresden Logo an der Wand"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Reformer detail */}
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-square">
                <img
                  src={studioReformerDetail}
                  alt="Reformer Gerät Nahaufnahme"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Equipment & lighting */}
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-square">
                <img
                  src={studioEquipment}
                  alt="Pilates Equipment und Beleuchtung"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Shop */}
              <div className="rounded-2xl overflow-hidden shadow-soft aspect-square">
                <img
                  src={studioShop}
                  alt="House of Pilates Shop mit Socken und Smoothies"
                  className="w-full h-full object-cover"
                />
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
                      01097 Dresden
                    </p>
                  </div>
                </div>
                
                {/* Embedded Google Map */}
                <div className="rounded-xl overflow-hidden h-28 mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.2!2d13.7383!3d51.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf3c8b8b8b8b%3A0x0!2sHeinrichstra%C3%9Fe%202%2C%2001097%20Dresden!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort House of Pilates Dresden"
                  />
                </div>
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
