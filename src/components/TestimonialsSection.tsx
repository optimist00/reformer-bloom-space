import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anna T.",
    text: "Reformer Pilates ist mein wöchentliches Highlight. Das Studio hat eine wunderbare Atmosphäre und ich fühle mich nach jeder Stunde gestärkt.",
    highlight: "Mein Wochenritual",
  },
  {
    name: "Emily E.",
    text: "Ich bin wirklich an meine Grenzen gekommen! Jessie geht auf jede Teilnehmerin individuell ein und passt die Übungen perfekt an. Eine super Betreuung!",
    highlight: "Persönlich & fordernd",
  },
  {
    name: "Jutta M.",
    text: "Nach Jahren mit Rückenschmerzen habe ich endlich eine Trainingsmethode gefunden, die wirklich hilft. Die kleine Gruppengröße macht den Unterschied.",
    highlight: "Endlich schmerzfrei",
  },
  {
    name: "Lena J.",
    text: "Die persönliche Betreuung ist einzigartig. Jessie achtet auf jede Bewegung und korrigiert sanft – so habe ich meine Haltung komplett verändert.",
    highlight: "Individuelle Betreuung",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-beige py-16 md:py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
            Das sagen unsere Mitglieder
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Echte Ergebnisse. Echte Menschen.
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-cream border border-stone/20 flex items-center justify-center text-earth hover:bg-sand transition-colors"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-cream border border-stone/20 flex items-center justify-center text-earth hover:bg-sand transition-colors"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-cream p-8 md:p-10 rounded-2xl text-center">
                    {/* Highlight Badge */}
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                      {testimonial.highlight}
                    </span>
                    
                    {/* Quote */}
                    <blockquote className="font-heading text-lg md:text-xl lg:text-2xl italic text-earth leading-relaxed mb-6">
                      „{testimonial.text}"
                    </blockquote>
                    
                    {/* Name */}
                    <p className="text-sm font-medium text-muted-foreground">
                      — {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary w-6" 
                    : "bg-stone/30 hover:bg-stone/50"
                }`}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
