import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import jessieImage from "@/assets/jessie-reformer.webp";
import leonoreImage from "@/assets/leonore-reformer.webp";
import elisaImage from "@/assets/elisa-reformer.webp";
import lauraImage from "@/assets/laura-reformer.webp";

interface TrainerProps {
  name: string;
  title: string;
  description: string;
  image: string;
  isPlaceholder?: boolean;
}

const TrainerCard = ({ name, title, description, image, isPlaceholder }: TrainerProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-cream rounded-2xl overflow-hidden shadow-soft">
        {/* Image */}
        <div className="aspect-[3/4] relative overflow-hidden">
          {isPlaceholder ? (
            <div className="w-full h-full bg-gradient-to-br from-sand to-beige flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-stone/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-earth/40">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">Foto folgt</span>
              </div>
            </div>
          ) : (
            <img
              src={image}
              alt={`${name} - ${title}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-heading text-xl md:text-2xl mb-1">{name}</h3>
          <span className="text-sm font-medium text-primary uppercase tracking-wider block mb-4">
            {title}
          </span>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const trainers: TrainerProps[] = [
  {
    name: "Jessie",
    title: "Founder & Head Coach",
    description:
      "Das Herz hinter dem House of Pilates Dresden. Jessie bringt Menschen zum Schwitzen und Strahlen und hat bereits hunderte Teilnehmer:innen auf ihrem Trainingsweg begleitet. Ob schweißtreibende Power Einheiten zu lauter Musik oder sanfte Flows für mehr Balance, bei ihr steht immer der einzelne Mensch im Mittelpunkt. Mit ihrer Erfahrung aus Krafttraining, Yoga und Pilates schafft sie ein ganzheitliches Trainingserlebnis.",
    image: jessieImage,
    isPlaceholder: false,
  },
  {
    name: "Leonore",
    title: "Strength, Science & Soul",
    description:
      "Mit 22 Jahren und einem Studium in Fitnessökonomie bringt Leonore geballte Expertise ins Team. Seit 3,5 Jahren motiviert sie Teilnehmerinnen mit ihrer herzlichen Art. Sie liebt den Mix aus Kraft und Kontrolle am Reformer – und sorgt vor allem dafür, dass ihr euch in jeder Class rundum wohlfühlt!",
    image: leonoreImage,
    isPlaceholder: false,
  },
  {
    name: "Elisa",
    title: "Mindful Movement & Balance",
    description:
      "Für Elisa ist der Reformer mehr als nur ein Trainingsgerät. In ihren Classes verbindet sie bewusste Bewegung mit Kraft, Kontrolle und Flow. Der Fokus liegt auf einem klaren, effektiven Training, das gleichzeitig Raum schafft, den Kopf frei zu bekommen und bei sich anzukommen. Achtsamkeit und körperliches Wohlbefinden gehen bei ihr Hand in Hand.",
    image: elisaImage,
    isPlaceholder: false,
  },
  {
    name: "Laura",
    title: "Angehende Ärztin & Gym Enthusiastin",
    description:
      "Sport ist fester Bestandteil von Lauras Alltag und das Gym ihr zweites Zuhause. Im House of Pilates übernimmt sie die Legs und Booty Kurse und bringt dort ihre Leidenschaft für kraftvolles, fokussiertes Training ein. Ihre Stunden sind intensiv, klar und auf echte Muskelarbeit ausgelegt.",
    image: lauraImage,
    isPlaceholder: false,
  },
];

const UeberUns = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

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
              Das Team
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Lerne uns kennen
            </h1>
            <p className="text-lg text-muted-foreground">
              Unsere Trainerinnen bringen ihre eigene Expertise und Persönlichkeit in jede Session ein – vereint durch die Leidenschaft für Bewegung und individuelle Betreuung.
            </p>
          </div>

          {/* Trainers Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.name} {...trainer} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UeberUns;
