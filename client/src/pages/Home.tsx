import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Palette, Sprout, Combine, Bug, ServerCog, Ruler, Weight, RotateCcw, Star, Users, Award, CheckCircle, Clock, Zap, Globe, Leaf, TrendingUp, Heart, ChevronLeft, ChevronRight, Play, Pause, Package, ChevronDown } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      title: "Modern Laundry Solutions",
      subtitle: "Professional cleaning technology"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      title: "Premium Clean Results",
      subtitle: "99% cleaning efficiency guaranteed"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
      title: "Fresh & Long-lasting",
      subtitle: "Fragrance that lasts for weeks"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-blue-100">Industry Leading Technology</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  5-in-1{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Revolutionary
                  </span>{" "}
                  Laundry Pods
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  Experience unmatched cleaning power with our compartmentalized laundry pods. 
                  Advanced formulation delivers 99% cleaning efficiency with long-lasting fragrance.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button 
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                    data-testid="button-explore-products"
                  >
                    <Package className="w-5 h-5 mr-2" />
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                    data-testid="button-get-quote-hero"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2" data-testid="text-cleaning-efficiency">99%</div>
                  <div className="text-slate-400 font-medium">Cleaning Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2" data-testid="text-comprehensive-care">5-in-1</div>
                  <div className="text-slate-400 font-medium">Formula Technology</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2" data-testid="text-power-load">15G</div>
                  <div className="text-slate-400 font-medium">Power Load</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image Slideshow */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                
                {/* Slides */}
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-hero-slide-${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Slide Info */}
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-lg text-white/80">{slide.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/30 backdrop-blur-sm transition-all"
                    data-testid="button-prev-slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/30 backdrop-blur-sm transition-all"
                    data-testid="button-next-slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      data-testid={`indicator-slide-${index + 1}`}
                    />
                  ))}
                </div>

                {/* Auto-play Control */}
                <div className="absolute top-6 right-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/30 backdrop-blur-sm transition-all"
                    data-testid="button-autoplay-toggle"
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Performance Badge */}
                <div className="absolute top-8 left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Premium Quality</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1" data-testid="text-clothing-count">8-12</div>
                <div className="text-gray-600 text-sm font-medium">Pieces of Clothing</div>
                <div className="text-xs text-gray-500">per 15g pod</div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-xl">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm font-medium">Scroll Down</div>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">5-in-1 Comprehensive Efficacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each pod contains compartmentalized storage with independent functions to maximize washing and care effects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-antibacterial">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">99% Anti-bacterial</h3>
              <p className="text-gray-600">Advanced antimicrobial agents eliminate 99% of bacteria while protecting fabric integrity.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-color-protection">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Protection</h3>
              <p className="text-gray-600">Specialized enzymes and color-lock technology keep your clothes vibrant wash after wash.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-fragrance">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Sprout className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-lasting Fragrance</h3>
              <p className="text-gray-600">Natural plant fragrances provide lasting freshness with every wash cycle.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-low-sud">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Combine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Low Sud Formulation</h3>
              <p className="text-gray-600">Perfect for both front and top load machines with efficient, low-foam cleaning.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-mite-removal">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Bug className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mite Removal</h3>
              <p className="text-gray-600">Effective removal of dust mites and allergens for sensitive skin protection.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-special-technology">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <ServerCog className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Technology</h3>
              <p className="text-gray-600">Advanced compartmentalized formula ensures optimal performance for every fabric type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for maximum performance across all washing conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dimensions</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2" data-testid="text-dimensions">6×6×1.5cm</p>
              <p className="text-gray-600">Compact design</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Weight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weight</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2" data-testid="text-weight">15G</p>
              <p className="text-gray-600">per pod</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity</h3>
              <p className="text-2xl font-bold text-green-600 mb-2" data-testid="text-capacity">8-12</p>
              <p className="text-gray-600">pieces of clothing</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2" data-testid="text-efficiency">99%</p>
              <p className="text-gray-600">cleaning power</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their laundry experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl" data-testid="testimonial-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                "These pods have completely changed my laundry routine. The cleaning power is incredible and my clothes smell amazing for weeks!"
              </p>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Sarah Johnson</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl" data-testid="testimonial-2">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                "As a busy mom of three, these pods save me so much time. One pod does the work of multiple products!"
              </p>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">Maria Rodriguez</span>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl" data-testid="testimonial-3">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Professional quality results at home. My work clothes have never looked better. Highly recommend!"
              </p>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                <span className="font-semibold text-gray-900">David Chen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
            <p className="text-xl text-gray-600">
              Awarded by leading industry organizations for innovation and quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Best Innovation 2024</h3>
              <p className="text-gray-600 text-sm">Laundry Industry Awards</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Certification</h3>
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

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmental Responsibility</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our commitment to sustainability drives every aspect of our product development. 
                CleanPods Pro delivers powerful cleaning while minimizing environmental impact.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Biodegradable Formula</h3>
                    <p className="text-gray-600">All ingredients break down naturally without harming waterways or marine life.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduced Carbon Footprint</h3>
                    <p className="text-gray-600">Concentrated formula means less packaging and transportation emissions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe for Families</h3>
                    <p className="text-gray-600">Non-toxic, hypoallergenic formula safe for sensitive skin and children.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Beautiful natural environment" 
                className="rounded-2xl shadow-lg"
                data-testid="img-environment"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-1" data-testid="text-co2-reduction">-75%</div>
                <div className="text-gray-700 text-sm font-medium">CO₂ Reduction</div>
                <div className="text-xs text-gray-500">vs. traditional detergents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Laundry?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers and experience the future of laundry care with 
            CleanPods Pro's revolutionary 5-in-1 technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/contact">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 transition-all transform hover:scale-105 px-10 py-4 rounded-full font-bold text-lg shadow-xl">
                Get Your Quote Now
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all px-10 py-4 rounded-full font-bold text-lg"
              >
                View Product Details
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24-hour response time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Worldwide shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}