"use client";

import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Leaf, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 bg-gradient-to-r from-brand-blue via-brand-sky to-brand-cyan rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <Sparkles className="text-white transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">CleanPods Pro</h3>
                <p className="text-sm text-blue-200">5-in-1 Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing laundry care with our innovative compartmentalized technology. 
              99% cleaning efficiency, long-lasting fragrance, and complete color protection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors duration-300 group" data-testid="social-facebook">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-sky transition-colors duration-300 group" data-testid="social-twitter">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 group" data-testid="social-instagram">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-support">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products & Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-5in1-pods">
                  5-in-1 Laundry Pods
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-bulk-orders">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-wholesale">
                  Wholesale Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-samples">
                  Free Samples
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-custom">
                  Custom Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300" data-testid="footer-link-shipping">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3" data-testid="contact-address">
                <MapPin className="w-5 h-5 text-brand-sky mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Innovation Drive<br />
                    Tech Park, TP 12345<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-phone-footer">
                <Phone className="w-5 h-5 text-brand-sky flex-shrink-0" />
                <p className="text-gray-300 text-sm">1-800-CLEANPOD</p>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-email-footer">
                <Mail className="w-5 h-5 text-brand-sky flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@cleanpodspro.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 CleanPods Pro. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-link-privacy">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-link-terms">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" data-testid="footer-link-cookies">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Leaf className="w-4 h-4 text-green-400" />
                <span>Eco-Friendly Formula</span>
              </div>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors duration-300"
                data-testid="button-scroll-to-top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}