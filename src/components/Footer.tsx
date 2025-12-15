import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const hours = [
    { day: "Mo - Fr", time: "07:00 - 21:00" },
    { day: "Samstag", time: "09:00 - 14:00" },
    { day: "Sonntag", time: "Geschlossen" },
  ];

  return (
    <footer id="contact" className="bg-footer-bg text-footer-text py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">HOUSE OF PILATES</h4>
            <p className="text-sm opacity-80 mb-6">
              Exklusive Reformer Pilates Community im Herzen von Dresden.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/houseofpilatesdresden"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-white mb-5">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@houseofpilates-dresden.de"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all"
              >
                <Mail className="w-4 h-4" />
                info@houseofpilates-dresden.de
              </a>
              <a
                href="tel:+4915229256804"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all"
              >
                <Phone className="w-4 h-4" />
                0152 29256804
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all"
              >
                <MapPin className="w-4 h-4" />
                Musterstraße 123, 01099 Dresden
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg text-white mb-5">Öffnungszeiten</h4>
            <ul className="space-y-3">
              {hours.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between text-sm pb-3 border-b border-white/10"
                >
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading text-lg text-white mb-5">Bereit zu starten?</h4>
            <p className="text-sm opacity-80 mb-5">
              Sichere dir jetzt deinen Platz in unserer exklusiven Community.
            </p>
            <Button
              variant="cta"
              size="sm"
              onClick={() =>
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Jetzt buchen
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-8 text-sm opacity-70">
          <p>© 2024 House of Pilates Dresden. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Impressum
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Datenschutz
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
