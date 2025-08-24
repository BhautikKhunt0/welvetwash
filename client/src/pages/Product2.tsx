import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer, Star, Award, Shield, Zap, Clock, Leaf, Crown, Sparkles, ChevronRight } from "lucide-react";

export default function Product2() {
  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-6">
                <Crown className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">PREMIUM COLLECTION</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                CleanPods Pro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  7-in-1 Premium
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the pinnacle of laundry technology with our most advanced formula. 
                Engineered for perfection, designed for luxury.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-gray-400">Cleaning Power</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">7-in-1</div>
                  <div className="text-sm text-gray-400">Formula</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">Premium</div>
                  <div className="text-sm text-gray-400">Quality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Premium laundry pods showcase" 
                className="relative rounded-3xl shadow-2xl w-full"
                data-testid="img-premium-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Premium?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail crafted for perfection. Experience the difference that premium quality makes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Feature Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultra-Concentrated Formula</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  20% more concentrated than standard pods. One pod cleans larger loads with superior results.
                </p>
                <div className="text-3xl font-bold text-yellow-500" data-testid="stat-concentration-premium">85%</div>
                <div className="text-sm text-gray-500">Active Ingredients</div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Protection</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Protects fabric fibers, prevents color fading, and maintains garment quality wash after wash.
                </p>
                <div className="text-3xl font-bold text-purple-500" data-testid="stat-protection-premium">99.9%</div>
                <div className="text-sm text-gray-500">Color Protection</div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Luxury Balance</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Premium performance without compromising environmental responsibility. Biodegradable and safe.
                </p>
                <div className="text-3xl font-bold text-green-500" data-testid="stat-eco-premium">100%</div>
                <div className="text-sm text-gray-500">Biodegradable</div>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Premium laundry pods in elegant packaging" 
                  className="relative rounded-3xl shadow-2xl w-full"
                  data-testid="img-premium-showcase"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-yellow-600 font-semibold">PREMIUM SPECIFICATIONS</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Engineered for Excellence</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="font-medium text-gray-900">Pod Weight</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900" data-testid="text-pod-weight-premium">20G</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="font-medium text-gray-900">Package Size</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900" data-testid="text-package-size-premium">24 Pods</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="font-medium text-gray-900">Shelf Life</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900" data-testid="text-shelf-life-premium">36 Months</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="font-medium text-gray-900">Temperature Range</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900" data-testid="text-temperature-range-premium">5°C - 40°C</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <Crown className="w-5 h-5 mr-2" />
                    Get Premium Quote
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                    Compare Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Award-Winning Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognized globally for innovation, quality, and environmental responsibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Innovation Award 2024</h3>
              <p className="text-gray-300">Best Laundry Technology Innovation by Global Cleaning Association</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Eco Excellence</h3>
              <p className="text-gray-300">Certified sustainable by Environmental Protection Initiative</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-300">5-Star rating from International Quality Standards Bureau</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready for Premium?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Experience the difference that award-winning quality makes. 
                Join thousands of satisfied customers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    <Crown className="w-5 h-5 mr-2" />
                    Get Premium Quote
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 py-4 px-8 rounded-xl transition-all duration-300">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}