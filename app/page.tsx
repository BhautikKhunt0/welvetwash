"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Palette,
  Sprout,
  Combine,
  Bug,
  ServerCog,
  Ruler,
  Weight,
  RotateCcw,
  Star,
  Users,
  Award,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Leaf,
  TrendingUp,
  Heart,
  Package,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
          {/* Hero Banner Image Slideshow */}
          <img
            src={heroImages[currentImageIndex]}
            alt="CleanPods Pro - Revolutionary Laundry Experience"
            className="w-full h-full object-cover transition-opacity duration-1000"
            data-testid="img-hero-banner"
          />

          {/* Light Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {/* Text at Bottom Center - Desktop Only */}
          <div className="hidden md:block absolute bottom-12 sm:bottom-16 left-0 right-0">
            <div className="text-center text-white max-w-2xl mx-auto px-4 sm:px-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                5-in-1 Revolutionary Laundry Pods
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-200">
                Experience professional-grade cleaning with 99% efficiency
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center">
            <div className="flex space-x-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-white shadow-lg"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  data-testid={`dot-${index}`}
                  aria-label={`Switch to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text Under Banner - Mobile Only */}
      <section className="md:hidden py-6 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            5-in-1 Revolutionary Laundry Pods
          </h1>
          <p className="text-sm text-gray-600">
            Experience professional-grade cleaning with 99% efficiency
          </p>
        </div>
      </section>

      {/* Action Buttons - Outside Banner */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-10 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 border-0"
                data-testid="button-explore-products"
              >
                <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 sm:border-3 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 sm:px-10 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
                data-testid="button-get-quote-hero"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5-in-1 Comprehensive Efficacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each pod contains compartmentalized storage with independent
              functions to maximize washing and care effects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-antibacterial"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                99% Anti-bacterial
              </h3>
              <p className="text-gray-600">
                Advanced antimicrobial agents eliminate 99% of bacteria while
                protecting fabric integrity.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-color-protection"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Color Protection
              </h3>
              <p className="text-gray-600">
                Specialized enzymes and color-lock technology keep your clothes
                vibrant wash after wash.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-fragrance"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Sprout className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Long-lasting Fragrance
              </h3>
              <p className="text-gray-600">
                Natural plant fragrances provide lasting freshness with every
                wash cycle.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-low-sud"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Combine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Low Sud Formulation
              </h3>
              <p className="text-gray-600">
                Perfect for both front and top load machines with efficient,
                low-foam cleaning.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-mite-removal"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Bug className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mite Removal
              </h3>
              <p className="text-gray-600">
                Effective removal of dust mites and allergens for sensitive skin
                protection.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              className="bg-slate-50 p-8 rounded-2xl card-hover"
              data-testid="card-special-technology"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <ServerCog className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Special Technology
              </h3>
              <p className="text-gray-600">
                Advanced compartmentalized formula ensures optimal performance
                for every fabric type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for maximum performance across all washing conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dimensions
              </h3>
              <p
                className="text-2xl font-bold text-blue-600 mb-2"
                data-testid="text-dimensions"
              >
                6×6×1.5cm
              </p>
              <p className="text-gray-600">Compact design</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Weight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weight</h3>
              <p
                className="text-2xl font-bold text-purple-600 mb-2"
                data-testid="text-weight"
              >
                15G
              </p>
              <p className="text-gray-600">per pod</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity</h3>
              <p
                className="text-2xl font-bold text-green-600 mb-2"
                data-testid="text-capacity"
              >
                8-12
              </p>
              <p className="text-gray-600">pieces of clothing</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Efficiency
              </h3>
              <p
                className="text-2xl font-bold text-orange-600 mb-2"
                data-testid="text-efficiency"
              >
                99%
              </p>
              <p className="text-gray-600">cleaning power</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Awarded by leading industry organizations for innovation and
              quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Best Innovation 2024
              </h3>
              <p className="text-gray-600 text-sm">Laundry Industry Awards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Quality Certification
              </h3>
              <p className="text-gray-600 text-sm">International Standards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Environmental Excellence</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Top Performance</h3>
              <p className="text-gray-600 text-sm">Consumer Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Thousands */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the growing community of satisfied customers who have
              revolutionized their laundry routine
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Happy Customers */}
            <div className="text-center">
              <div
                className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "blue" }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                data-testid="text-happy-customers"
              >
                10,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Happy Customers
              </div>
            </div>

            {/* Orders Delivered */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                data-testid="text-orders-delivered"
              >
                50,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Orders Delivered
              </div>
            </div>

            {/* Average Rating */}
            <div className="text-center">
              <div
                className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "orange" }}
              >
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                data-testid="text-average-rating"
              >
                4.9/5
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Average Rating
              </div>
            </div>

            {/* Industry Awards */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
                data-testid="text-industry-awards"
              >
                15+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Industry Awards
              </div>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#e3f2fd" }}
              data-testid="testimonial-card-1"
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic mb-4">
                "CleanPods Pro has completely transformed my laundry routine!
                The 5-in-1 technology is incredible - my clothes come out
                cleaner, smell amazing, and colors stay vibrant wash after
                wash."
              </p>
              <div className="flex items-center">
                <div
                  className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: "skyblue" }}
                >
                  <span className="text-white text-sm font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Sarah M.
                  </div>
                  <div className="text-xs text-gray-500">Home Owner</div>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#e8f5e8" }}
              data-testid="testimonial-card-2"
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic mb-4">
                "As a laundromat owner, I needed something reliable and
                effective. CleanPods Pro delivers consistent results for my
                machines. My customers love the long-lasting fragrance!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">JR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    James R.
                  </div>
                  <div className="text-xs text-gray-500">Business Owner</div>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{ backgroundColor: "#f3e5f5" }}
              data-testid="testimonial-card-3"
            >
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic mb-4">
                "I was skeptical about trying new laundry products, but
                CleanPods Pro exceeded all expectations. The convenience,
                effectiveness, and eco-friendly formula make it a perfect choice
                for my family."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ML</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    Maria L.
                  </div>
                  <div className="text-xs text-gray-500">Mother of 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Professional Grade Design */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-15"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 border border-white/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-cyan-400/20 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-100 text-sm font-medium">Revolutionary 5-in-1 Technology</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Your Laundry?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-cyan-100/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Join thousands of satisfied customers and experience the future of laundry care with 
              <span className="font-semibold text-white"> CleanPods Pro's</span> revolutionary cleaning technology.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-white to-cyan-50 text-slate-900 hover:from-cyan-50 hover:to-white transition-all duration-300 transform hover:scale-105 px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 border-0 overflow-hidden"
                data-testid="button-get-quote-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-3 text-cyan-600" />
                  Get Your Quote Now
                </div>
              </Button>
            </Link>
            
            <Link href="/products">
              <Button
                size="lg"
                className="group relative w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 px-12 py-6 rounded-2xl font-bold text-lg shadow-lg overflow-hidden"
                data-testid="button-view-products-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Package className="w-5 h-5 mr-3" />
                  View Product Details
                </div>
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-cyan-100/80">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Clock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white">24-Hour Response</div>
                <div className="text-sm">Fast customer support</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-cyan-100/80">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Worldwide Shipping</div>
                <div className="text-sm">Global delivery available</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-cyan-100/80">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white">100% Guarantee</div>
                <div className="text-sm">Complete satisfaction</div>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-cyan-300/60">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 10,000+ customers worldwide</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
