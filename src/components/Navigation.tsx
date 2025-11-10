import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import shikariLogo from "@/assets/shikari-logo.jpg";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Hunts", href: "#hunts" },
  { name: "Gallery", href: "#gallery" },
  { name: "Field Notes", href: "#field-notes" },
  { name: "Store", href: "#store" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-forest"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={shikariLogo}
              alt="Shikari Boyz Logo"
              className="w-14 h-14 rounded-full shadow-md"
            />
            <div className="hidden sm:block text-left">
              <h1 className="text-xl font-bold text-primary-foreground font-heading">
                SHIKARI BOYZ
              </h1>
              <p className="text-xs text-primary-foreground/80">Brothers of the Hunt</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-accent text-accent-foreground shadow-golden"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Join Button - Desktop */}
          <Button
            variant="hero"
            className="hidden lg:flex"
            onClick={() => scrollToSection("#membership")}
          >
            Join the Hunt
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-primary border-l border-primary-foreground/20"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={shikariLogo}
                    alt="Shikari Boyz Logo"
                    className="w-16 h-16 rounded-full shadow-md"
                  />
                  <div className="text-left">
                    <h2 className="text-lg font-bold text-primary-foreground font-heading">
                      SHIKARI BOYZ
                    </h2>
                    <p className="text-xs text-primary-foreground/80">
                      Brothers of the Hunt
                    </p>
                  </div>
                </button>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`px-4 py-3 text-left text-base font-medium rounded-md transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? "bg-accent text-accent-foreground shadow-golden"
                          : "text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>

                {/* Mobile Join Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-4"
                  onClick={() => scrollToSection("#membership")}
                >
                  Join the Hunt
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
