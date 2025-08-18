import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", hasDropdown: false },
    { path: "/products", label: "Products", hasDropdown: true },
    { path: "/about", label: "About", hasDropdown: false },
    { path: "/contact", label: "Contact", hasDropdown: false },
  ];

  const productDropdownItems = [
    { label: "5-in-1 Laundry Pods", desc: "Revolutionary cleaning technology", icon: Droplets },
    { label: "Bulk Orders", desc: "Volume discounts available", icon: Star },
    { label: "Free Samples", desc: "Try before you buy", icon: Shield },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className={`bg-slate-900 text-white text-sm transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>1-800-CLEANPOD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>info@cleanpodspro.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs">
              <span className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span>Free Shipping on Orders $50+</span>
              </span>
              <span className="text-green-400">✓ 24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200/30' 
          : 'bg-transparent mt-8'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-4 group" data-testid="link-home">
              <div className={`relative transition-all duration-500 ${
                isScrolled ? 'w-12 h-12' : 'w-16 h-16'
              }`}>
                {/* Animated Background Circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-80"></div>
                
                {/* Main Logo Container */}
                <div className="relative w-full h-full bg-gradient-to-r from-brand-blue via-brand-sky to-brand-cyan rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300">
                  <Droplets className={`text-white transition-all duration-300 group-hover:rotate-12 ${
                    isScrolled ? 'w-6 h-6' : 'w-8 h-8'
                  }`} />
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className={`font-black transition-all duration-500 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  CleanPods Pro
                </span>
                <span className={`text-xs bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent font-semibold transition-all duration-500 ${
                  isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto'
                }`}>
                  5-in-1 Revolutionary Technology
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setShowProductsDropdown(true)}
                  onMouseLeave={() => item.hasDropdown && setShowProductsDropdown(false)}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center space-x-1 transition-all duration-300 font-semibold py-3 px-4 rounded-full ${
                      isActive(item.path)
                        ? isScrolled 
                          ? "text-brand-blue bg-blue-50 shadow-sm" 
                          : "text-white bg-white/20 shadow-lg"
                        : isScrolled 
                          ? "text-gray-800 hover:text-brand-blue hover:bg-blue-50" 
                          : "text-white hover:text-white hover:bg-white/20 text-shadow"
                    }`}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        showProductsDropdown ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Products Dropdown */}
                  {item.hasDropdown && showProductsDropdown && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-6"
                      style={{ 
                        animation: 'fadeIn 0.3s ease-out forwards',
                        zIndex: 9999
                      }}
                    >
                      <div className="space-y-3">
                        {productDropdownItems.map((dropItem, index) => (
                          <Link
                            key={index}
                            href="/products"
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200 group"
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                              <dropItem.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                                {dropItem.label}
                              </div>
                              <div className="text-sm text-gray-600">{dropItem.desc}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link href="/contact" data-testid="button-get-quote">
                <Button className={`relative overflow-hidden transition-all duration-300 font-bold rounded-full px-8 py-3 shadow-xl hover:shadow-2xl hover:scale-105 group ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:from-blue-700 hover:to-cyan-700' 
                    : 'bg-white text-brand-blue hover:bg-gray-100'
                }`}>
                  <span className="relative z-10 flex items-center space-x-2">
                    <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Get Quote</span>
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-brand-blue hover:bg-blue-50' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}>
                    <Menu className="w-6 h-6" />
                  </div>
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                  }`}>
                    <X className="w-6 h-6" />
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-300 font-semibold border ${
                    isActive(item.path)
                      ? "text-brand-blue bg-blue-50 border-blue-200 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-brand-blue border-transparent hover:border-gray-200"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </div>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 mt-6">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:from-blue-700 hover:to-cyan-700 transition-all font-bold rounded-xl py-4 shadow-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Your Quote Now
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
