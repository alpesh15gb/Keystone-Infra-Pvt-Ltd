import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo-removebg-preview_1755020619725.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavigation = (item: { href: string; isSection: boolean }) => {
    if (item.isSection) {
      // If we're not on the home page, navigate to home first
      if (location !== "/") {
        setLocation("/");
        // Wait a bit for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Navigate to the page
      setLocation(item.href);
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "home", isSection: true },
    { label: "About", href: "about", isSection: true },
    { label: "Services", href: "products", isSection: true },
    { label: "Management", href: "team", isSection: true },
    { label: "Locations", href: "locations", isSection: true },
    { label: "Careers", href: "/careers", isSection: false },
    { label: "Contact", href: "contact", isSection: true },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <div className="flex items-center">
              <a 
                href="https://in.linkedin.com/company/keystone-infra-private-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img src={logoImage} alt="Keystone Infra Pvt. Ltd." className="h-16 w-auto" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className="text-sm text-amber-800 hover:text-amber-600 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://mail.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="sm"
                className="text-sm gradient-bg-orange text-white hover:opacity-90"
              >
                Log in
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-amber-800" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item)}
                      className="text-left text-lg text-amber-800 hover:text-amber-600 transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 space-y-2">
                    <a 
                      href="https://mail.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="w-full gradient-bg-orange text-white"
                      >
                        Log in
                      </Button>
                    </a>
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
