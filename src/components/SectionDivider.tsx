import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionDividerProps {
  text: string;
}

const WaveLine = () => (
  <svg 
    width="80" 
    height="16" 
    viewBox="0 0 80 16" 
    className="text-earth/30"
    fill="none"
  >
    <path 
      d="M0 8 Q10 2, 20 8 T40 8 T60 8 T80 8" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SectionDivider = ({ text }: SectionDividerProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`py-6 flex items-center justify-center gap-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <WaveLine />
      <span className="font-heading text-base md:text-lg italic text-earth/60 whitespace-nowrap">
        {text}
      </span>
      <WaveLine />
    </div>
  );
};

export default SectionDivider;
