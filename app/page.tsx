"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Palette, Sprout, Combine, Bug, ServerCog, Ruler, Weight, RotateCcw, Star, Users, Award, CheckCircle, Clock, Zap, Globe, Leaf, TrendingUp, Heart, Package, Sparkles, Droplets } from "lucide-react";
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
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl shadow-2xl">
            {/* Hero Banner Image Slideshow */}
            <img 
              src={heroImages[currentImageIndex]} 
              alt="CleanPods Pro - Revolutionary Laundry Experience" 
              className="w-full h-full object-cover transition-opacity duration-1000 rounded-3xl"
              data-testid="img-hero-banner"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  5-in-1 Revolutionary Laundry Pods
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Experience professional-grade cleaning with 99% efficiency
                </p>
                
                {/* CTA Buttons - Desktop */}
                <div className="hidden md:flex justify-center space-x-4 mb-8">
                  <Link href="/products">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                      data-testid="button-explore-products-desktop"
                    >
                      <Package className="w-5 h-5 mr-2" />
                      Explore Products
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                      data-testid="button-get-quote-desktop"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
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
        </div>
      </section>

      {/* Mobile Hero CTA Buttons - Visible on mobile only */}
      <section className="md:hidden py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <Link href="/products" className="w-full">
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                data-testid="button-explore-products-mobile"
              >
                <Package className="w-5 h-5 mr-2" />
                Explore Products
              </Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                data-testid="button-get-quote-mobile"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5-in-1 Comprehensive Efficacy Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">5-in-1 Comprehensive Efficacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each pod contains compartmentalized storage with independent functions to maximize washing and care effects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">99% Anti-bacterial</h3>
              <p className="text-gray-600">Advanced antimicrobial agents eliminate 99% of bacteria while protecting fabric integrity.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Protection</h3>
              <p className="text-gray-600">Specialized enzymes and color-lock technology keep your clothes vibrant wash after wash.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-lasting Fragrance</h3>
              <p className="text-gray-600">Natural plant fragrances provide lasting freshness with every wash cycle.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Sud Formulation</h3>
              <p className="text-gray-600">Perfect for both front and top load machines with controlled suds for optimal performance.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mite Removal</h3>
              <p className="text-gray-600">Effective against house dust mites and allergens for healthier, cleaner fabrics.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Powerful Cleaning</h3>
              <p className="text-gray-600">70% active ingredient content with concentrated cleaning power for superior results.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Trusted by Thousands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the growing community of satisfied customers who have revolutionized their laundry routine
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2" data-testid="text-customers">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2" data-testid="text-orders">50,000+</div>
              <div className="text-gray-600">Orders Delivered</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2" data-testid="text-rating">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2" data-testid="text-awards">15+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
          </div>
          
          {/* Customer Testimonials */}
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
                "CleanPods Pro has completely transformed my laundry routine! The 5-in-1 technology is incredible - my clothes come out cleaner, smell amazing, and the colors stay vibrant wash after wash."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612c12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Sarah M." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-1"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Home Owner</div>
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
                "As a laundromat owner, I needed something reliable and effective. CleanPods Pro delivers consistent results for all machine types. My customers love the long-lasting fragrance!"
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="James R." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-2"
                />
                <div>
                  <div className="font-semibold text-gray-900">James R.</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
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
                "I was skeptical about trying new laundry products, but CleanPods Pro exceeded all expectations. The convenience, effectiveness, and eco-friendly formula make it a perfect choice for my family."
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                  alt="Maria L." 
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid="img-customer-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Maria L.</div>
                  <div className="text-sm text-gray-500">Mother of 3</div>
                </div>
              </div>
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products">
              <button 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
                data-testid="button-shop-now"
              >
                <Package className="w-6 h-6 mr-3" />
                Shop Now
              </button>
            </Link>
            <Link href="/contact">
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center bg-transparent"
                data-testid="button-get-quote-cta"
              >
                <Zap className="w-6 h-6 mr-3" />
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}