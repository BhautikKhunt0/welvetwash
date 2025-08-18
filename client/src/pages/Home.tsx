import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Palette, Sprout, Combine, Bug, ServerCog, Ruler, Weight, RotateCcw } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen gradient-bg flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
    </div>
  );
}
