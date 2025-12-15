import { Frown, Activity, RotateCcw, ChevronDown } from "lucide-react";

const painPoints = [
  {
    icon: Frown,
    title: "Überfüllte Fitnessstudios ohne Betreuung?",
    description:
      "Du zahlst monatlich, aber niemand korrigiert deine Haltung oder zeigt dir die richtige Ausführung.",
  },
  {
    icon: Activity,
    title: "Rückenschmerzen im Alltag?",
    description:
      "Stundenlanges Sitzen führt zu Verspannungen und chronischen Schmerzen, die deinen Alltag beeinträchtigen.",
  },
  {
    icon: RotateCcw,
    title: "Du trainierst, siehst aber keinen Fortschritt?",
    description:
      "Trotz regelmäßigem Training bleiben sichtbare Ergebnisse aus – frustrierend und demotivierend.",
  },
];

const PainSection = () => {
  return (
    <section className="relative bg-beige py-24 md:py-28">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-sand to-beige" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-4">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Kennst du das?</h2>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-cream p-10 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-large border border-transparent hover:border-stone"
            >
              <div className="w-[70px] h-[70px] mx-auto mb-6 gradient-terracotta rounded-full flex items-center justify-center">
                <point.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Du bist nicht allein. Viele unserer Mitglieder kamen mit genau diesen
          Herausforderungen zu uns.
        </p>

        {/* Transition */}
        <div className="text-center pt-10 mt-10 border-t border-stone">
          <p className="font-heading text-xl italic text-muted-foreground mb-5">
            Es gibt eine Lösung, die all diese Probleme adressiert...
          </p>
          <div className="animate-bounce-arrow">
            <ChevronDown className="w-8 h-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
