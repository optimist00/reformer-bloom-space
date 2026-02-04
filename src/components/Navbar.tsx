import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/ueber-uns", label: "Über uns", isPage: true },
    { href: "/studio", label: "Das Studio", isPage: true },
    { href: "#pricing", label: "Preise" },
    { href: "#booking", label: "Kurse" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Kontakt" },
  ];

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleAnchorClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/" + href);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md py-4 shadow-soft"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="font-heading text-xl font-medium tracking-widest text-foreground"
        >
          HOUSE OF PILATES
        </button>

        <div className="flex items-center gap-4">
          <Button
            variant="cta"
            size="sm"
            className="hidden sm:inline-flex bg-sand hover:bg-sand/90 text-earth-dark"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/#booking");
              } else {
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Buchen
          </Button>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={location.pathname === "/" ? link.href : `/${link.href}`}
                    onClick={() => handleAnchorClick(link.href)}
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden flex flex-col justify-between w-7 h-5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-foreground" />
            ) : (
              <Menu className="w-7 h-7 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[70px] left-0 right-0 bottom-0 z-50 bg-cream p-6 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ backgroundColor: 'hsl(var(--cream))' }}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isPage ? (
                <Link
                  to={link.href}
                  onClick={closeMobileMenu}
                  className="text-xl font-medium text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => {
                    handleAnchorClick(link.href);
                    closeMobileMenu();
                  }}
                  className="text-xl font-medium text-foreground"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Button
              variant="cta"
              className="w-full mt-4"
              onClick={() => {
                closeMobileMenu();
                if (location.pathname !== "/") {
                  navigate("/#booking");
                } else {
                  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Buchen
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
