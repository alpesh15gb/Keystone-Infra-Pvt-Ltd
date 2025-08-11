import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const logoPath = "/images/keystone-logo-new.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "products" },
    { label: "Projects", href: "projects" },
    { label: "Team", href: "team" },
    { label: "Locations", href: "locations" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={logoPath} alt="Keystone Infra" className="h-20 w-auto" />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-stripe-purple transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-stripe-purple"
              onClick={() => scrollToSection('contact')}
            >
              Request Quote
            </Button>
            <Button 
              className="gradient-bg-orange text-white hover:opacity-90"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg text-gray-600 hover:text-stripe-purple transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => scrollToSection('contact')}
                    >
                      Request Quote
                    </Button>
                    <Button 
                      className="w-full gradient-bg-orange text-white"
                      onClick={() => scrollToSection('contact')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
