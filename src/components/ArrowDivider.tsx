import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ArrowDivider = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-8 flex flex-col items-center gap-0 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronDown 
        className={`w-6 h-6 text-sage ${isVisible ? "animate-arrow-bounce-1" : ""}`}
      />
      <ChevronDown 
        className={`w-6 h-6 text-sage -mt-3 ${isVisible ? "animate-arrow-bounce-2" : ""}`}
      />
      <ChevronDown 
        className={`w-6 h-6 text-sage -mt-3 ${isVisible ? "animate-arrow-bounce-3" : ""}`}
      />
    </div>
  );
};

export default ArrowDivider;
