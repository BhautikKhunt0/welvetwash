import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-14' : 'h-18'
        }`}>
          <Link href="/" className="flex items-center space-x-3 group" data-testid="link-home">
            <div className={`relative transition-all duration-500 ${
              isScrolled ? 'w-9 h-9' : 'w-12 h-12'
            } bg-gradient-to-r from-brand-blue via-brand-sky to-brand-cyan rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105`}>
              <Sparkles className="text-white transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-gray-900 transition-all duration-500 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                CleanPods Pro
              </span>
              <span className={`text-xs text-brand-blue font-medium transition-all duration-500 ${
                isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto'
              }`}>
                5-in-1 Technology
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative transition-all duration-300 font-medium group ${
                  isActive(item.path)
                    ? isScrolled ? "text-brand-blue" : "text-white"
                    : isScrolled ? "text-gray-700 hover:text-brand-blue" : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
                <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                  isActive(item.path) 
                    ? isScrolled ? "bg-brand-blue" : "bg-white" 
                    : "bg-transparent group-hover:bg-brand-blue"
                }`}></div>
              </Link>
            ))}
          </div>

          <Link href="/contact" data-testid="button-get-quote">
            <Button className={`transition-all duration-300 font-semibold rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-blue text-white hover:bg-blue-700' 
                : 'bg-white text-brand-blue hover:bg-gray-100'
            }`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-gray-200'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive(item.path)
                    ? "text-brand-blue bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-brand-blue"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-brand-blue text-white hover:bg-blue-700 transition-colors font-medium rounded-lg py-3">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
