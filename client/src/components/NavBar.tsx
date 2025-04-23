import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, Globe, Instagram } from "lucide-react";
import { useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#extracurricular", label: "Activities" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileNavClick = () => {
    setOpenMobile(false);
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-primary font-bold text-xl flex items-center">
              <span className="text-2xl mr-2">PS</span>
              <span className="hidden md:inline">Pavan HS</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/Pavanhs1808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-hs-33137b272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/PavanHs1815"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://app.netlify.com/teams/pavanhs1808/sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-teal-500 transition-colors"
              aria-label="Netlify"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/pavanhs_?igsh=MTdpMXM0MXVsNWRycg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={openMobile} onOpenChange={setOpenMobile}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  {NavLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary py-2"
                      onClick={handleMobileNavClick}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="flex items-center space-x-4 mt-4">
                    <ThemeToggle />
                    <a
                      href="https://github.com/Pavanhs1808"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pavan-hs-33137b272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com/PavanHs1815"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://app.netlify.com/teams/pavanhs1808/sites"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-teal-500 transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/pavanhs_?igsh=MTdpMXM0MXVsNWRycg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
