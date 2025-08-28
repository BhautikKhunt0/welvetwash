"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home,
  Package,
  Info,
  MessageCircle,
  ArrowRight,
  Building
} from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: "/", label: "Home", icon: Home, hasDropdown: false },
    { path: "/products", label: "Products", icon: Package, hasDropdown: true },
    { path: "/about", label: "About", icon: Info, hasDropdown: false },
    { path: "/contact", label: "Contact", icon: MessageCircle, hasDropdown: false },
  ];

  const productDropdownItems = [
    { path: "/products", label: "Product 1", desc: "5-in-1 Revolutionary Technology" },
    { path: "/product2", label: "Product 2", desc: "7-in-1 Premium Formula" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setShowProductsDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowProductsDropdown(false);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group" 
              data-testid="link-home"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  WelvetWash
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Professional Cleaning
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter()}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-blue-100 text-blue-700 shadow-sm" 
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        showProductsDropdown ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && showProductsDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {productDropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          href={dropItem.path}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                          data-testid={`dropdown-${dropItem.label.toLowerCase().replace(' ', '-')}`}
                        >
                          <Package className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-gray-900">{dropItem.label}</div>
                            <div className="text-sm text-gray-500">{dropItem.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              
              {/* CTA Button */}
              <Link href="/contact" data-testid="button-get-quote" className="hidden sm:block">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    // Non-clickable header for Products with dropdown
                    <div
                      className="flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-all duration-200 text-gray-600 bg-gray-50 border border-gray-200"
                      data-testid={`mobile-header-${item.label.toLowerCase()}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ) : (
                    // Clickable link for other navigation items
                    <Link
                      href={item.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-all duration-200 ${
                        isActive(item.path)
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                      data-testid={`mobile-link-${item.label.toLowerCase()}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                  
                  {/* Mobile Product Submenu */}
                  {item.hasDropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {productDropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          href={dropItem.path}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 w-full p-2 rounded-lg text-left transition-all duration-200 text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                          data-testid={`mobile-dropdown-${dropItem.label.toLowerCase().replace(' ', '-')}`}
                        >
                          <Package className="w-4 h-4" />
                          <div>
                            <div className="text-sm font-medium">{dropItem.label}</div>
                            <div className="text-xs text-gray-400">{dropItem.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium shadow-sm">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Your Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}