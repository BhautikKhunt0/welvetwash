import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer, Shield, Palette, Sprout, Bug, Star, Package, Clock, Globe, Leaf, Award, TrendingUp, Heart, Zap } from "lucide-react";
import { useState } from "react";

export default function Product2() {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium product package front view"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium laundry pods collection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium multi-chamber technology"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium package information"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium usage demonstration"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Premium clean results"
    }
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  return (
    <div className="pt-16">
      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">7-in-1 Premium Laundry Pods</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Experience Premium Care with Our Advanced 7 in 1 Formula - Deep Clean + Anti-Bacterial + Color Protection + Fabric Softening + Long-Lasting Fragrance + Stain Removal + Eco-Friendly Technology for Ultimate Laundry Experience
          </p>
          <div className="inline-block bg-white/20 px-6 py-3 rounded-full backdrop-blur-md">
            <span className="text-lg font-semibold">Premium Collection Excellence</span>
          </div>
        </div>
      </section>


      {/* Product Detail with Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Image Gallery */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-cover transition-all duration-300"
                  data-testid="img-main-product"
                />
              </div>

              {/* Product Thumbnails */}
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedImage.id === image.id 
                        ? 'ring-3 ring-cyan-500 shadow-lg transform scale-105' 
                        : 'bg-gray-50 shadow-sm hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <img 
                      src={image.thumb} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                      data-testid={`img-thumb-${image.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  7 in 1 Premium Formula Advanced Laundry Detergent Pods with Superior Anti-Bacterial Protection and Ultra-Concentrated Cleaning Power for Professional Results
                </h2>
                <p className="text-xl text-teal-600 font-semibold mb-8">Premium Collection</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Premium Product Detail</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Advanced Encapsulation Technology: Premium Scent Release</h4>
                    <p className="text-gray-600">Our enhanced microcapsule technology delivers luxury fragrance that activates during movement, providing premium scent experience throughout the day.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2. 85%-90% Ultra-High Concentration: Premium Cleaning Power</h4>
                    <p className="text-gray-600">Maximum concentration of active ingredients ensures superior cleaning performance, making it the premium choice for immaculate results.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Advanced Antimicrobial Protection: 99.9% Elimination Rate</h4>
                    <p className="text-gray-600">Our premium formula provides comprehensive protection against bacteria, viruses, and allergens for ultimate hygiene and safety.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Luxury Fragrance Collection: Premium Scent Experience</h4>
                    <p className="text-gray-600">Featuring premium international fragrance blends, delivering sophisticated and long-lasting luxury aroma experience.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Premium Sustainability: Eco-Luxury Balance</h4>
                    <p className="text-gray-600">Advanced biodegradable formula with premium natural ingredients, protecting both fabrics and environment with luxury care.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    data-testid="button-get-quote-main"
                  >
                    <Package className="w-6 h-6 mr-3" />
                    Get Premium Quote
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  data-testid="button-add-inquiry"
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Add to Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Product Advantages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Antimicrobial Protection</h3>
              <p className="text-gray-600">Premium 99.9% elimination rate of bacteria, viruses, and harmful microorganisms with enhanced protection technology.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ultra-Deep Premium Cleaning</h3>
              <p className="text-gray-600">Advanced enzyme technology with premium bio-active ingredients for superior fabric care and deep fiber cleaning.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Hypoallergenic Formula</h3>
              <p className="text-gray-600">Advanced dermatologically tested formula, completely free from harsh chemicals and safe for sensitive skin and premium fabrics.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Skin-Safe Technology</h3>
              <p className="text-gray-600">Premium pH-balanced formula with luxury moisturizing agents, gentle on hands and suitable for the most delicate fabrics.</p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quick-Rinse Technology</h3>
              <p className="text-gray-600">Advanced low-foam formula with premium rinsing technology, ensuring zero residue and crystal-clear wash results.</p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Eco-Luxury Packaging</h3>
              <p className="text-gray-600">Advanced water-soluble premium film technology with zero environmental impact, combining luxury with sustainability.</p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Durability Design</h3>
              <p className="text-gray-600">Enhanced pressure resistance up to 800N, premium construction ensures maximum durability and quality preservation during storage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Product Specifications</h2>
            <p className="text-xl text-gray-600">Premium 7-in-1 Laundry Detergent Pods - Luxury Professional Grade</p>
          </div>

          {/* Mobile Card Layout - shown on small screens */}
          <div className="sm:hidden bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="space-y-4 p-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Product Name</h3>
                <p className="text-gray-600 text-sm">Premium 7-in-1 Laundry Detergent Pods</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Functions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Advanced Detergent + 99.9% Anti-Bacterial + Premium Softener + Luxury Fragrance + Stain Removal + Color Protection + Eco-Friendly Technology</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Fragrances</h3>
                <p className="text-gray-600 text-sm">Premium Luxury Collection / Customized Options Available</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Color</h3>
                <p className="text-gray-600 text-sm">Premium Multi-Color Design / Custom Options</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Weight</h3>
                <p className="text-gray-600 text-sm">20g*24pcs*20bag/Carton</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Film</h3>
                <p className="text-gray-600 text-sm">Premium Water-soluble Film Technology</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Packaging</h3>
                <p className="text-gray-600 text-sm">Premium Luxury Boxes/Premium Pouches or Customized</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Origin</h3>
                <p className="text-gray-600 text-sm">Guangzhou Guangdong Province, China</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Certificate</h3>
                <p className="text-gray-600 text-sm">ISO/MSDS/SMETA 6.1/Premium Quality Certification</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Order (MOQ)</h3>
                <p className="text-gray-600 text-sm">Premium Sample Available/Customized Orders</p>
              </div>
            </div>
          </div>

          {/* Desktop Table Layout - shown on larger screens */}
          <div className="hidden sm:block bg-white rounded-2xl shadow-lg overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-gray-200">
                  <th className="px-6 lg:px-8 py-4 text-left text-base lg:text-lg font-semibold text-gray-900">Specification</th>
                  <th className="px-6 lg:px-8 py-4 text-left text-base lg:text-lg font-semibold text-gray-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Product Name</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Premium 7-in-1 Laundry Detergent Pods</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Functions</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base leading-relaxed">Advanced Detergent + 99.9% Anti-Bacterial + Premium Softener + Luxury Fragrance + Stain Removal + Color Protection + Eco-Friendly Technology</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Fragrances</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Premium Luxury Collection / Customized Options Available</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Color</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Premium Multi-Color Design / Custom Options</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Weight</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">20g*24pcs*20bag/Carton</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Film</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Premium Water-soluble Film Technology</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Packaging</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Premium Luxury Boxes/Premium Pouches or Customized</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Origin</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">Guangzhou Guangdong Province, China</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base whitespace-nowrap">Certificate</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base">ISO/MSDS/SMETA 6.1/Premium Quality Certification</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 lg:px-8 py-4 font-semibold text-gray-900 text-base border-b-0 whitespace-nowrap">Order (MOQ)</td>
                  <td className="px-6 lg:px-8 py-4 text-gray-600 text-base border-b-0">Premium Sample Available/Customized Orders</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Product Visual */}
          <div className="text-center mt-12 mb-16">
            <img 
              src="/laundry-pod.png" 
              alt="7-in-1 Premium Multi-colored Laundry Pod with Enhanced Chamber Technology" 
              className="mx-auto rounded-2xl shadow-xl max-w-md w-full h-auto bg-white p-8"
              data-testid="img-product-visual"
            />
            <p className="text-lg text-gray-600 mt-6 font-medium">
              Revolutionary 7-in-1 Premium Formula: Advanced Multi-Chamber Technology
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2" data-testid="text-concentration">85%-90%</div>
              <div className="text-gray-600 font-medium">Ultra-High Concentration</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2" data-testid="text-bacteria-removal">99.9%</div>
              <div className="text-gray-600 font-medium">Advanced Anti-Bacterial</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2" data-testid="text-weight">20G</div>
              <div className="text-gray-600 font-medium">Premium Pod Weight</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2" data-testid="text-pressure">800N</div>
              <div className="text-gray-600 font-medium">Enhanced Durability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Premium Usage Instructions</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Premium Dosage Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm" data-testid="dosage-standard">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Premium Standard Load</h4>
                  </div>
                  <p className="text-gray-600 ml-14">Use 1 premium pod (20g) for 10-15 pieces of clothing</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl shadow-sm" data-testid="dosage-heavy">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Premium Heavy Duty</h4>
                  </div>
                  <p className="text-gray-600 ml-14">Adjust premium dosage for heavily soiled items and larger loads</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Premium Care Instructions</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl" data-testid="note-wash-mode">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Premium Wash Cycle</h4>
                      <p className="text-gray-700">Use premium wash cycles for optimal results, minimum 20 minutes for full activation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl" data-testid="note-storage">
                  <div className="flex items-start space-x-3">
                    <Thermometer className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Premium Storage</h4>
                      <p className="text-gray-700">Store in premium conditions with moisture control and temperature management for optimal performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Premium Experience?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Elevate your laundry routine with our revolutionary 7-in-1 premium formula. 
            Professional luxury cleaning power in every premium pod.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105"
                data-testid="button-get-quote"
              >
                <Package className="w-6 h-6 mr-3" />
                Get Premium Quote Now
              </Button>
            </Link>
            <Link href="/">
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-full font-bold text-lg transition-all"
                data-testid="button-learn-more"
              >
                <Star className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}