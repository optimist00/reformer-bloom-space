import { Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-beige py-16 md:py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-soft text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 bg-sand rounded-full flex items-center justify-center mx-auto mb-5">
            <Gift className="w-7 h-7 text-primary" />
          </div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
            Mache jemandem eine Freude.
          </span>
          <p className="text-muted-foreground mb-6 text-lg">
            Jetzt Reformer Kurs schenken:
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/gutscheine">
              Gutscheine entdecken
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
