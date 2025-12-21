import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const QuoteSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-gradient-to-b from-cream via-sand/30 to-cream pt-16 pb-12 md:pt-24 md:pb-16"
    >
      <div 
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <blockquote className="relative">
          {/* Decorative quote mark */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary/20 font-serif leading-none select-none">
            "
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl text-earth-dark italic font-medium leading-relaxed">
            Change happens through movement and movement heals
          </p>
          <footer className="mt-4 md:mt-6">
            <cite className="text-sm md:text-base text-earth-dark/70 not-italic font-medium tracking-wide">
              — Joseph Pilates
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
