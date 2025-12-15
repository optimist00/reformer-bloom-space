import { Check } from "lucide-react";
import studioImage from "@/assets/studio.jpg";

const solutions = [
  {
    icon: "🎯",
    title: "Individuelle Korrektur",
    description: "Jede Bewegung wird von uns beobachtet und bei Bedarf korrigiert.",
  },
  {
    icon: "💪",
    title: "Effizientes Ganzkörpertraining",
    description: "Der Reformer ermöglicht über 500 verschiedene Übungen für jeden Muskel.",
  },
  {
    icon: "🏠",
    title: "Wohlfühl-Atmosphäre",
    description: "Ein exklusiver Raum, in dem du dich wohlfühlst und abschalten kannst.",
  },
  {
    icon: "📈",
    title: "Sichtbare Ergebnisse",
    description: "Schon nach wenigen Wochen wirst du Veränderungen an deinem Körper bemerken.",
  },
];

const studioFeatures = [
  "6 Premium Reformer",
  "Zentrale Lage",
  "Moderne Ausstattung",
  "Wohlfühl-Atmosphäre",
];

const SolutionSection = () => {
  return (
    <section className="gradient-section py-24 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-sage mb-4">
            Die Lösung
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5">
            Reformer Pilates: Das effizienteste Ganzkörpertraining.
          </h2>
          <p className="text-lg text-muted-foreground">
            Kombiniere Kraft, Ausdauer und Beweglichkeit: Für eine gesunde Muskelbalance, mehr Körpergefühl und einen schmerzfreien Rücken.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-br from-primary to-[#D4896F] p-12 rounded-2xl text-center mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-sm font-semibold text-white mb-5">
              <span>✨</span> Unser Versprechen
            </span>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Bei uns bist du keine Nummer: Das ist <strong>Personaltraining in der Gruppe</strong>.
            </p>
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium border border-beige"
            >
              <div className="text-4xl mb-5">{solution.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Studio Section */}
        <div
          id="studio"
          className="grid lg:grid-cols-2 gap-12 items-center bg-white p-10 md:p-14 rounded-2xl shadow-soft"
        >
          <div>
            <h3 className="text-2xl md:text-3xl mb-5">Unser Studio</h3>
            <p className="text-muted-foreground mb-6">
              Im Herzen von Dresden gelegen, bietet unser Studio eine einzigartige
              Atmosphäre. Mit 6 hochwertigen Reformern und viel Tageslicht schaffen
              wir den perfekten Raum für dein Training.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {studioFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 font-medium">
                  <Check className="w-5 h-5 text-sage" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img 
              src={studioImage} 
              alt="House of Pilates Dresden Studio mit Premium Reformern" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
