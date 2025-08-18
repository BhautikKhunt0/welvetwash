import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer } from "lucide-react";

export default function Products() {
  return (
    <div className="pt-16">
      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the science behind our revolutionary 5-in-1 laundry pod technology
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
                alt="Fresh clean clothes hanging on line" 
                className="rounded-xl shadow-lg w-full"
                data-testid="img-clean-clothes"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Clean laundry setup with products" 
                className="rounded-xl shadow-lg w-full"
                data-testid="img-laundry-setup"
              />
            </div>

            {/* Product Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">CleanPods Pro 5-in-1</h2>
              
              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg" data-testid="stat-cleaning-efficiency">
                    <div className="text-2xl font-bold text-brand-blue mb-1">99%</div>
                    <div className="text-sm text-gray-600">Cleaning Efficiency</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg" data-testid="stat-antibacterial">
                    <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                    <div className="text-sm text-gray-600">Anti-bacterial</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg" data-testid="stat-power-load">
                    <div className="text-2xl font-bold text-purple-600 mb-1">15G</div>
                    <div className="text-sm text-gray-600">Power Load</div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg" data-testid="stat-active-content">
                    <div className="text-2xl font-bold text-cyan-600 mb-1">70%</div>
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
                    <span className="text-gray-600" data-testid="text-dimensions">6×6×1.5cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Weight</span>
                    <span className="text-gray-600" data-testid="text-weight">15G per pod</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Coverage</span>
                    <span className="text-gray-600" data-testid="text-coverage">8-12 pieces of clothing</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Compatibility</span>
                    <span className="text-gray-600" data-testid="text-compatibility">Front & Top Load</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Formulation</span>
                    <span className="text-gray-600" data-testid="text-formulation">Low Sud</span>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Main Ingredients</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3" data-testid="ingredient-surfactants">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-700">Surfactants</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="ingredient-dispersing">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-700">Dirt dispersing agents</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="ingredient-enzymes">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-700">Enzymes</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="ingredient-bactericidal">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-700">Deodorizing and bactericidal agents</span>
                  </div>
                  <div className="flex items-center space-x-3" data-testid="ingredient-fragrances">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-700">Natural plant fragrances</span>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button 
                  className="w-full bg-brand-blue text-white hover:bg-blue-700 transition-all transform hover:scale-105 py-4 rounded-full font-semibold"
                  data-testid="button-get-quote-product"
                >
                  Get Quote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Usage Instructions</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dosage Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="dosage-standard">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Standard Load</h4>
                  </div>
                  <p className="text-gray-600 ml-14">Use 1 pod (15g) for 8-12 pieces of clothing</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="dosage-heavy">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-brand-sky rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Heavy Soiling</h4>
                  </div>
                  <p className="text-gray-600 ml-14">Adjust dosage according to the level of dirtiness</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Important Notes</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl" data-testid="note-wash-mode">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Wash Mode</h4>
                      <p className="text-gray-700">Do not use ultra-fast wash mode or pre-wash for less than 18 minutes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl" data-testid="note-storage">
                  <div className="flex items-start space-x-3">
                    <Thermometer className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Storage</h4>
                      <p className="text-gray-700">Pay attention to moisture-proof and high-temperature storage when storing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Product Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Modern laundry room interior" 
              className="rounded-xl shadow-lg card-hover"
              data-testid="gallery-img-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Colorful laundry detergent pods" 
              className="rounded-xl shadow-lg card-hover"
              data-testid="gallery-img-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Neatly folded clean clothes" 
              className="rounded-xl shadow-lg card-hover"
              data-testid="gallery-img-3"
            />
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Professional laundry care setup" 
              className="rounded-xl shadow-lg card-hover"
              data-testid="gallery-img-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
