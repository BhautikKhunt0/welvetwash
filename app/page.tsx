"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Palette, Sprout, Combine, Bug, ServerCog, Ruler, Weight, RotateCcw, Star, Users, Award, CheckCircle, Clock, Zap, Globe, Leaf, TrendingUp, Heart, Package } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600", 
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
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
              <div className="flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    data-testid={`hero-dot-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Mobile Hero Text - Visible on mobile only */}
      <section className="md:hidden py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            5-in-1 Revolutionary Laundry Pods
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Experience professional-grade cleaning with 99% efficiency
          </p>
          <Link href="/products">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              data-testid="button-mobile-cta"
            >
              <Package className="w-5 h-5 mr-2" />
              Explore Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CleanPods Pro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary 5-in-1 technology that transforms your laundry experience with professional results every time.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Protection</h3>
                  <p className="text-gray-600">99.9% bacteria and mites removal with powerful anti-bacterial protection technology.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Color Protection</h3>
                  <p className="text-gray-600">Advanced formula that protects and preserves fabric colors wash after wash.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
                  <p className="text-gray-600">Biodegradable formula with natural fragrances that protects both your clothes and the environment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Lasting Fragrance</h3>
                  <p className="text-gray-600">Premium Givaudan fragrances with microcapsule technology for lasting freshness.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="CleanPods Pro product showcase" 
                className="relative rounded-3xl shadow-2xl w-full"
                data-testid="img-product-showcase"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers who have made the switch to CleanPods Pro</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "These pods are incredible! My clothes come out cleaner than ever before, and the fragrance lasts for weeks. Best laundry product I've ever used."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612c12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Customer Sarah M." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-1"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Verified Customer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The 5-in-1 technology is amazing. One pod does everything - cleans, protects colors, softens, and keeps clothes fresh. So convenient!"
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Customer Mike R." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-2"
                />
                <div>
                  <div className="font-semibold text-gray-900">Mike R.</div>
                  <div className="text-sm text-gray-500">Verified Customer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Eco-friendly and effective! Love that I can take care of my family's laundry while being responsible to the environment."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Customer Lisa K." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Lisa K.</div>
                  <div className="text-sm text-gray-500">Verified Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="text-customers">10,000+</div>
              <div className="text-cyan-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="text-orders">50,000+</div>
              <div className="text-cyan-100">Orders Shipped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="text-rating">4.9/5</div>
              <div className="text-cyan-100">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" data-testid="text-countries">25+</div>
              <div className="text-cyan-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, effective, and professional results every time</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Drop in Pod</h3>
              <p className="text-gray-600">Simply place one CleanPods Pro pod directly into your washing machine drum before adding clothes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <RotateCcw className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Start Wash Cycle</h3>
              <p className="text-gray-600">Run your normal wash cycle. The pod dissolves completely and activates our 5-in-1 formula.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Enjoy Fresh Results</h3>
              <p className="text-gray-600">Remove perfectly clean, fresh-smelling clothes with lasting fragrance and vibrant colors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Caring for the Planet</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to sustainability means you can enjoy superior cleaning power while protecting the environment for future generations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Biodegradable Formula</h4>
                    <p className="text-gray-600">100% biodegradable ingredients that break down naturally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Packaging</h4>
                    <p className="text-gray-600">75% less packaging waste compared to traditional detergents</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safe for Families</h4>
                    <p className="text-gray-600">Gentle on skin and safe for children and pets</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Environmental sustainability" 
                className="rounded-3xl shadow-2xl w-full"
                data-testid="img-environmental"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Laundry?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of satisfied customers and experience the CleanPods Pro difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products">
              <Button 
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105"
                data-testid="button-shop-now"
              >
                <Package className="w-6 h-6 mr-3" />
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-full font-bold text-lg transition-all"
                data-testid="button-get-quote"
              >
                <Star className="w-6 h-6 mr-3" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}