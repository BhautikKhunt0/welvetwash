import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Palette, Sprout, Combine, Bug, ServerCog, Ruler, Weight, RotateCcw, Star, Users, Award, CheckCircle, Clock, Zap, Globe, Leaf, TrendingUp, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg flex items-center relative">
        {/* Background overlay for better navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                5-in-1{" "}
                <span className="text-cyan-300">Revolutionary</span>{" "}
                Laundry Pods
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience powerful cleaning with our compartmentalized laundry pods. 99% cleaning efficiency,
                long-lasting fragrance, and complete color protection in one innovative solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/products">
                  <Button 
                    className="bg-white text-brand-blue hover:bg-gray-100 transition-all transform hover:scale-105 px-8 py-4 rounded-full font-semibold"
                    data-testid="button-explore-products"
                  >
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-all px-8 py-4 rounded-full font-semibold"
                    data-testid="button-get-quote-hero"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold" data-testid="text-cleaning-efficiency">99%</div>
                  <div className="text-blue-200">Cleaning Efficiency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" data-testid="text-comprehensive-care">5-in-1</div>
                  <div className="text-blue-200">Comprehensive Care</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" data-testid="text-power-load">15G</div>
                  <div className="text-blue-200">Power Load</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern laundry room setup" 
                className="rounded-2xl shadow-2xl"
                data-testid="img-hero-laundry-room"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-brand-blue mb-1" data-testid="text-clothing-count">8-12</div>
                <div className="text-gray-600 text-sm">Pieces of Clothing</div>
                <div className="text-xs text-gray-500">per 15g pod</div>
              </div>
            </div>
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
              <p className="text-gray-600">Effective against house dust mites and staphylococcus aureus for healthier fabrics.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl card-hover" data-testid="card-powerful-cleaning">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <ServerCog className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Powerful Cleaning</h3>
              <p className="text-gray-600">70% active ingredient content with advanced surfactants and enzymes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Premium laundry pods packaging" 
                className="rounded-2xl shadow-lg w-full"
                data-testid="img-product-showcase"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Compact. Powerful. Effective.</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Ruler className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compact Size</h4>
                    <p className="text-gray-600">6×6×1.5cm dimensions for easy storage and handling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <Weight className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">15G Power Load</h4>
                    <p className="text-gray-600">Perfect dosage for 8-12 pieces of clothing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Universal Compatibility</h4>
                    <p className="text-gray-600">Works with both front and top load washing machines</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button 
                    className="bg-brand-blue text-white hover:bg-blue-700 transition-all transform hover:scale-105 px-8 py-4 rounded-full font-semibold"
                    data-testid="button-request-sample"
                  >
                    Request Sample
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the growing community of satisfied customers who have revolutionized their laundry routine
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group" data-testid="stat-customers">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center group" data-testid="stat-orders">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Orders Delivered</div>
            </div>
            <div className="text-center group" data-testid="stat-rating">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center group" data-testid="stat-awards">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl card-hover" data-testid="review-sarah">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "CleanPods Pro has completely transformed my laundry routine! The 5-in-1 technology is incredible - 
                my clothes come out cleaner, smell amazing, and the colors stay vibrant wash after wash."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b765?w=60&h=60&fit=crop&crop=face" 
                  alt="Customer Sarah M." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">Home Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl card-hover" data-testid="review-james">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a laundromat owner, I needed something reliable and effective. CleanPods Pro delivers 
                consistent results for all machine types. My customers love the long-lasting fragrance!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Customer James R." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">James R.</div>
                  <div className="text-sm text-gray-600">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl card-hover" data-testid="review-maria">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I was skeptical about trying new laundry products, but CleanPods Pro exceeded all expectations. 
                The convenience, effectiveness, and eco-friendly formula make it a perfect choice for my family."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                  alt="Customer Maria L." 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Maria L.</div>
                  <div className="text-sm text-gray-600">Mother of 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How CleanPods Pro Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the revolutionary 5-in-1 compartmentalized technology in three simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-drop">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-4xl font-bold text-white">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Drop & Go</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Simply drop one CleanPods Pro pod into your washing machine drum. 
                The water-soluble film dissolves completely, releasing all active ingredients.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-brand-blue font-medium">✓ No measuring required</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center" data-testid="step-activate">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-4xl font-bold text-white">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smart Activation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each compartment activates at the optimal time during the wash cycle, 
                ensuring maximum cleaning efficiency and fabric care.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-brand-blue font-medium">✓ Timed-release technology</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center" data-testid="step-results">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-4xl font-bold text-white">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfect Results</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enjoy incredibly clean, fresh-smelling clothes with vibrant colors and 
                long-lasting fragrance that lasts for days.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-brand-blue font-medium">✓ 99% cleaning efficiency</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-brand-blue text-white hover:bg-blue-700 transition-all transform hover:scale-105 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
                Learn More About Our Technology
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">Eco-Friendly by Design</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                CleanPods Pro is committed to environmental responsibility. Our concentrated formula 
                reduces packaging waste by 75% compared to traditional liquid detergents, while our 
                natural plant-based ingredients are biodegradable and gentle on ecosystems.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="eco-feature-1">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">75% Less Packaging Waste</h4>
                    <p className="text-gray-600">Concentrated formula reduces plastic and cardboard usage significantly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="eco-feature-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Biodegradable Formula</h4>
                    <p className="text-gray-600">Natural plant-based ingredients break down safely in the environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="eco-feature-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Carbon Footprint Reduction</h4>
                    <p className="text-gray-600">Smaller packaging means more efficient shipping and reduced emissions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Green environment with clean water" 
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
