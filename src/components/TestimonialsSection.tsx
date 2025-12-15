import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Die persönliche Betreuung ist unglaublich. Man merkt, dass Jessie wirklich auf jeden einzelnen achtet.",
    name: "Natalie B.",
    initial: "N",
  },
  {
    quote:
      "Endlich ein Studio, in dem ich mich nicht wie eine Nummer fühle. Die Atmosphäre ist einfach perfekt!",
    name: "Lisa O.",
    initial: "L",
  },
  {
    quote:
      "Nach Jahren mit Rückenschmerzen bin ich endlich schmerzfrei. Das Training bei Jessie macht einen Unterschied!",
    name: "Andreas B.",
    initial: "A",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-cream p-6 md:p-8 rounded-2xl border border-transparent hover:border-stone h-full">
    <div className="text-base mb-2">⭐⭐⭐⭐⭐</div>
    <blockquote className="text-base text-muted-foreground italic mb-4">
      "{testimonial.quote}"
    </blockquote>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 gradient-terracotta rounded-full flex items-center justify-center text-white font-semibold">
        {testimonial.initial}
      </div>
      <span className="font-medium text-sm">{testimonial.name}</span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-beige py-16 md:py-20">
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

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
