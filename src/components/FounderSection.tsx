import jessieImage from "@/assets/jessie.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="bg-cream py-24 md:py-28 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Jessie Portrait */}
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img 
              src={jessieImage} 
              alt="Jessie - Gründerin und Trainerin von House of Pilates Dresden" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
              Meine Geschichte
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
              Hi, ich bin <span className="text-primary italic">Jessie.</span>
            </h2>

            {/* Quote */}
            <div className="relative bg-sand p-6 rounded-xl mb-8 border-l-4 border-primary">
              <p className="font-heading text-xl italic">
                Als erfahrene Fitness- und Kurstrainerin kannte ich die Theorie –
                doch erst Reformer Pilates hat mich überzeugt.
              </p>
            </div>

            {/* Story */}
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Jahrelang habe ich nach einem Sport gesucht, der sich nicht wie
                eine Pflicht anfühlt. Ich wollte fit bleiben, aber die Atmosphäre
                in Fitnessstudios war nie meine Welt.
              </p>
              <p>
                Als ich Reformer Pilates entdeckte, hat es ‚Klick' gemacht. Es war
                die perfekte Kombination aus <strong>Ästhetik und Kraft</strong>.
              </p>
              <p>
                Mit dem House of Pilates habe ich genau den Ort geschaffen, den
                ich immer gesucht habe:{" "}
                <strong>Exklusiv, persönlich und effektiv.</strong>
              </p>
            </div>

            {/* Signature */}
            <div>
              <span className="font-heading text-3xl italic block mb-1">Jessie</span>
              <span className="text-sm text-muted-foreground">
                Gründerin, House of Pilates Dresden
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
