import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface InlineSectionLabelProps {
  text: string;
}

const WaveLine = () => (
  <svg 
    width="60" 
    height="12" 
    viewBox="0 0 60 12" 
    className="text-earth/30"
    fill="none"
  >
    <path 
      d="M0 6 Q7.5 1.5, 15 6 T30 6 T45 6 T60 6" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InlineSectionLabel = ({ text }: InlineSectionLabelProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <WaveLine />
      <span className="font-heading text-sm md:text-base italic text-earth/60 whitespace-nowrap">
        {text}
      </span>
      <WaveLine />
    </div>
  );
};

export default InlineSectionLabel;
