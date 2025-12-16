import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                href="https://maps.google.com/?q=Musterstraße+123,+01099+Dresden"
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

        {/* Google Maps */}
        <div className="py-12 border-b border-white/10">
          <div className="rounded-xl overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.5!2d13.74!3d51.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAzJzM2LjAiTiAxM8KwNDQnMjQuMCJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="House of Pilates Dresden Standort"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-8 text-sm opacity-70">
          <p>© 2024 House of Pilates Dresden. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:opacity-100 transition-opacity">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:opacity-100 transition-opacity">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:opacity-100 transition-opacity">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
