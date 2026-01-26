import { useState } from "react";
import { Plus, Mail, Phone, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Was brauche ich zum Kurs?",
    answer:
      "Du brauchst nur bequeme Sportkleidung und rutschfeste Socken (Pilates-Socken). Handtücher, Matten und alle Geräte sind im Studio vorhanden. Komm am besten 10 Minuten vor Kursbeginn.",
  },
  {
    question: "Ist Reformer Pilates auch für Anfänger geeignet?",
    answer:
      "Absolut! Wir bieten spezielle Einsteigerkurse an und passen das Training individuell an dein Level an. Unsere kleine Gruppengröße ermöglicht es uns, dich optimal zu betreuen.",
  },
  {
    question: "Kann ich eine Stunde stornieren?",
    answer:
      "Ja, kostenlose Stornierung ist bis zu 24 Stunden vor Kursbeginn möglich. Bei späteren Absagen wird die Einheit leider vom Kontingent abgezogen.",
  },
  {
    question: "Gibt es Parkplätze in der Nähe?",
    answer:
      "Ja, es gibt öffentliche Parkplätze direkt vor dem Studio. Alternativ ist das Studio auch sehr gut mit öffentlichen Verkehrsmitteln erreichbar.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-beige py-24 md:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container">
        <div className="bg-cream rounded-2xl p-8 md:p-14 shadow-soft">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-4">
              Noch Fragen?
            </span>
            <h2 className="text-3xl md:text-4xl mb-4">Häufig gestellte Fragen</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hier findest du Antworten auf die wichtigsten Fragen rund um dein
              Training.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto mb-10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone first:border-t">
                <button
                  className="w-full flex items-center justify-between gap-5 py-6 text-left font-heading text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      openIndex === index ? "bg-primary" : "bg-sand"
                    }`}
                  >
                    <Plus
                      className={`w-5 h-5 transition-all duration-200 ${
                        openIndex === index
                          ? "text-white rotate-45"
                          : "text-foreground"
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <p className="pb-6 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="sm" asChild>
              <a href="mailto:info@houseofpilates-dresden.de">
                <Mail className="w-4 h-4 mr-2" />
                E-Mail
              </a>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <a href="tel:+4935112345678">
                <Phone className="w-4 h-4 mr-2" />
                Anrufen
              </a>
            </Button>
          </div>

          {/* Gift Section */}
          <div className="mt-12 pt-10 border-t border-stone text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
              Mache jemandem eine Freude.
            </span>
            <p className="text-muted-foreground mb-5">
              Jetzt Reformer Kurs schenken:
            </p>
            <Button variant="cta" asChild>
              <Link to="/gutscheine">
                <Gift className="w-4 h-4 mr-2" />
                Gutscheine entdecken
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
