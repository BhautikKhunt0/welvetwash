import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer } from "lucide-react";

export default function Product2() {
  return (
    <div className="pt-16">
      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Product 2</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover our advanced 7-in-1 premium laundry pod technology for ultimate cleaning power
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Premium clean clothes hanging on line" 
                className="rounded-xl shadow-lg w-full"
                data-testid="img-premium-clean-clothes"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Premium laundry setup with products" 
                className="rounded-xl shadow-lg w-full"
                data-testid="img-premium-laundry-setup"
              />
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">CleanPods Pro 7-in-1 Premium</h2>
              
              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg" data-testid="stat-cleaning-efficiency-premium">
                    <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Cleaning Efficiency</div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg" data-testid="stat-antibacterial-premium">
                    <div className="text-2xl font-bold text-pink-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Anti-bacterial</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg" data-testid="stat-power-load-premium">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">20G</div>
                    <div className="text-sm text-gray-600">Power Load</div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg" data-testid="stat-active-content-premium">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">85%</div>
                    <div className="text-sm text-gray-600">Active Content</div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Dimensions</span>
                    <span className="text-gray-600" data-testid="text-dimensions-premium">7×7×2cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Weight</span>
                    <span className="text-gray-600" data-testid="text-weight-premium">20G per pod</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Packaging</span>
                    <span className="text-gray-600" data-testid="text-packaging-premium">Premium Box of 24 pods</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Shelf Life</span>
                    <span className="text-gray-600" data-testid="text-shelf-life-premium">36 months</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Temperature Range</span>
                    <span className="text-gray-600" data-testid="text-temperature-premium">5°C to 40°C</span>
                  </div>
                </div>
              </div>

              {/* Product Benefits */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Product Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced 7-in-1 Formula</h4>
                      <p className="text-gray-600">Deep cleaning, stain removal, color protection, fabric softening, anti-bacterial protection, long-lasting fragrance, and eco-friendly formula.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Premium Cleaning Power</h4>
                      <p className="text-gray-600">Superior cleaning efficiency with 99.9% stain removal and anti-bacterial protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Enhanced Fragrance</h4>
                      <p className="text-gray-600">Long-lasting premium fragrance that keeps clothes fresh for weeks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg">
                    Get Premium Quote
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-4 text-lg font-semibold rounded-lg">
                    Compare with Product 1
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Performance</h3>
              <p className="text-gray-600">Effective in cold, warm, and hot water temperatures. Optimized for energy-efficient washing.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality testing ensures consistent performance and safety standards.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Standards</h3>
              <p className="text-gray-600">Meets all international safety and environmental standards for household use.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}