import jessieImage from "@/assets/jessie.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-cream py-16 md:py-24 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Jessie Portrait - kleiner und rund */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-large">
            <img 
              src={jessieImage} 
              alt="Jessie - Gründerin und Trainerin von House of Pilates Dresden" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
              Hi, ich bin <span className="text-primary italic">Jessie.</span>
            </h2>

            {/* Quote - kleiner */}
            <div className="relative bg-sand p-4 rounded-xl mb-6 border-l-4 border-primary">
              <p className="font-heading text-base md:text-lg italic">
                Als erfahrene Kurstrainerin kannte ich viele Trainingsmethoden – doch erst Reformer Pilates hat mich überzeugt.
              </p>
            </div>

            {/* Story - gekürzt */}
            <div className="space-y-3 text-base text-muted-foreground mb-6">
              <p>
                Ich suchte lange nach einem Sport, der sich nicht wie Pflicht anfühlt. 
                Als ich Reformer Pilates entdeckte, hat es ‚Klick' gemacht – die perfekte 
                Kombination aus <strong>Ästhetik und Kraft</strong>.
              </p>
              <p>
                Mit dem House of Pilates habe ich den Ort geschaffen, den ich immer gesucht habe.
              </p>
            </div>

            {/* Signature */}
            <div>
              <span className="font-heading text-2xl italic block mb-1">Jessie</span>
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
