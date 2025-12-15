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
      "Nach Jahren mit Rückenschmerzen bin ich endlich schmerzfrei. Das Training bei Jessie hat mein Leben verändert!",
    name: "Sarah M.",
    initial: "S",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-beige py-24 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-4">
            Das sagen unsere Mitglieder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Echte Ergebnisse. Echte Menschen.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream p-9 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-medium border border-transparent hover:border-stone"
            >
              <div className="text-lg mb-3">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-lg text-muted-foreground italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-terracotta rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.initial}
                </div>
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
