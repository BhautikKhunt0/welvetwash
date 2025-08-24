import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer, Shield, Palette, Sprout, Bug, Star, Package, Clock, Globe, Leaf, Award, TrendingUp, Heart, Zap } from "lucide-react";
import { useState } from "react";

export default function Products() {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Product package front view"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Individual laundry pods"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Colorful pod chambers"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Package back information"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Usage demonstration"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      thumb: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Clean laundry results"
    }
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  return (
    <div className="pt-16">
      {/* Product Hero */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">5-in-1 Laundry Pods</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Let's Work on Your Next Clothes & Personal Care Project - 5 in 1 Hot sale Soften Clothes Deep Clean Anti-Bacterial Color protection custom fragrance Laundry Detergent Pods for Sensitive Skin
          </p>
          <div className="inline-block bg-white/20 px-6 py-3 rounded-full backdrop-blur-md">
            <span className="text-lg font-semibold">North Island Premium Quality</span>
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
                  5 in 1 Hot sale Soften Clothes Deep Clean Anti-Bacterial Color protection custom fragrance Laundry Detergent Pods for Sensitive Skin
                </h2>
                <p className="text-xl text-teal-600 font-semibold mb-8">North Island</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Product Detail</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Friction-Activated Fragrance: Microcapsule Magic</h4>
                    <p className="text-gray-600">Our microcapsule tech lets fragrance seep into the fabric during wear or exercise, releasing a continuous, pleasant scent.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2. 70%-80% High-Concentration: Laundry's Powerhouse</h4>
                    <p className="text-gray-600">Loaded with active ingredients, it ensures clothes come out spotless, a reliable choice for clean laundry.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Banish Bacteria and Mites: Hidden Threats No More</h4>
                    <p className="text-gray-600">Our product combats unseen bacteria and mites, promising a hygienic, comfortable clothing experience.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Renowned Brand Givaudan Scents: Long-Lasting Elegance</h4>
                    <p className="text-gray-600">Featuring high-end fragrances, clothes carry a sophisticated, lingering aroma.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Pledge: Sustainable by Design</h4>
                    <p className="text-gray-600">Using natural fragrances and biodegradable film, we safeguard the planet from production.</p>
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
                    Get Quote Now
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Product's Unbeatable Advantages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exceptional Hygiene</h3>
              <p className="text-gray-600">Boasts a remarkable 99.9% removal rate of bacteria and mites, providing powerful protection against common harmful microbes.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Thorough yet Gentle Cleaning</h3>
              <p className="text-gray-600">Leveraging multiple natural bio enzymes, it delves deep into fabric fibers without compromising fabric integrity.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pure and Safe Formula</h3>
              <p className="text-gray-600">Free from fluorescent brighteners, phosphorus, and bleach agents. No unwanted chemical residues on garments.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skin-Friendly Composition</h3>
              <p className="text-gray-600">With a neutral PH value, it's mild on hands and non-irritating to sensitive skin, suitable for the whole family.</p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hassle-Free Rinse</h3>
              <p className="text-gray-600">Low-foam formula rinses out effortlessly, leaving no soapy residue, saving time and water during rinse cycle.</p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly Packaging</h3>
              <p className="text-gray-600">Imported water-soluble film dissolves rapidly with zero residue, reducing waste and aligning with sustainable practices.</p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Durable Design</h3>
              <p className="text-gray-600">Built to withstand pressure up to 600N, these laundry pods are resistant to compression, maintaining quality during storage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Specifications</h2>
            <p className="text-xl text-gray-600">Authentic Laundry Detergent Pods - Professional Grade Quality</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-gray-200">
                  <th className="px-8 py-4 text-left text-lg font-semibold text-gray-900">Specification</th>
                  <th className="px-8 py-4 text-left text-lg font-semibold text-gray-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Product Name</td>
                  <td className="px-8 py-4 text-gray-600">Authentic Laundry Detergent Pods</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Functions</td>
                  <td className="px-8 py-4 text-gray-600">Detergent + Bacteria & Mites Removal 99.9% + Softener + Long Lasting Fragrances + Blend Enzymes</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Fragrances</td>
                  <td className="px-8 py-4 text-gray-600">Customized / As shown in picture</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Color</td>
                  <td className="px-8 py-4 text-gray-600">Customized / As shown in picture</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Weight</td>
                  <td className="px-8 py-4 text-gray-600">15g*30pcs*32bag/Carton</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Film</td>
                  <td className="px-8 py-4 text-gray-600">Water-soluble Film</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Packaging</td>
                  <td className="px-8 py-4 text-gray-600">Boxes/Bags or Pouches/Cartons or customized</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Origin</td>
                  <td className="px-8 py-4 text-gray-600">Guangzhou Guangdong Province, China</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900">Certificate</td>
                  <td className="px-8 py-4 text-gray-600">ISO/MSDS/SMETA 6.1</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-4 font-semibold text-gray-900 border-b-0">Order (MOQ)</td>
                  <td className="px-8 py-4 text-gray-600 border-b-0">One Carton of spot goods/customized</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2" data-testid="text-concentration">70%-80%</div>
              <div className="text-gray-600 font-medium">High Concentration</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2" data-testid="text-bacteria-removal">99.9%</div>
              <div className="text-gray-600 font-medium">Bacteria & Mites Removal</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2" data-testid="text-weight">15G</div>
              <div className="text-gray-600 font-medium">Per Pod Weight</div>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2" data-testid="text-pressure">600N</div>
              <div className="text-gray-600 font-medium">Pressure Resistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Usage Instructions</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dosage Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm" data-testid="dosage-standard">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Standard Load</h4>
                  </div>
                  <p className="text-gray-600 ml-14">Use 1 pod (15g) for 8-12 pieces of clothing</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl shadow-sm" data-testid="dosage-heavy">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
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

      {/* Sustainable Pledge */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pledge: Sustainable by Design</h2>
            <p className="text-xl text-gray-600 mb-8">
              Using natural fragrances and biodegradable film, we safeguard the planet from production to use. 
              Our commitment to sustainability ensures a better future for generations to come.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Natural Fragrances</span>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Biodegradable Film</span>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Planet Protection</span>
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
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-img-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Colorful laundry detergent pods" 
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-img-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Neatly folded clean clothes" 
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-img-3"
            />
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Professional laundry care setup" 
              className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-img-4"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Transform your laundry routine with our revolutionary 5-in-1 formula. 
            Professional-grade cleaning power in every pod.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105"
                data-testid="button-get-quote"
              >
                <Package className="w-6 h-6 mr-3" />
                Get Your Quote Now
              </Button>
            </Link>
            <Link href="/">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-full font-bold text-lg transition-all"
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