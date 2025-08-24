import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Thermometer, Shield, Palette, Sprout, Bug, Star, Package, Clock, Globe, Leaf, Award, TrendingUp, Heart, Zap } from "lucide-react";

export default function Products() {
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

      {/* Tackle Laundry Woes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tackle Your Toughest Laundry Woes with Us!</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Whether it's the lingering stench of sweaty workouts or the pesky marks left by spilled spaghetti, 
              our state-of-the-art formula gets your clothes looking and smelling their best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Banish Bad Odors for Good</h3>
              <p className="text-gray-600">Our innovative odor-fighting tech dives right to the root of the problem, ensuring your fabrics stay crisp, clean, and stink-free.</p>
            </div>

            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wipe Out Stubborn Stains Swiftly</h3>
              <p className="text-gray-600">A unique mix of five expertly formulated enzymes zooms into fabric fibers, zeroing in on and demolishing all kinds of tough stains.</p>
            </div>

            <div className="text-center bg-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clean Sustainably</h3>
              <p className="text-gray-600">Our super-concentrated solutions work their magic with minimal water usage, helping you cut down on waste and shrink your carbon footprint too.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Features */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Small Body, Great Soul</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced microcapsule technology combined with premium Swiss fragrances for the ultimate laundry experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="5-in-1 Laundry Pod with multi-colored chambers" 
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                data-testid="img-product-pod"
              />
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Friction-Activated Fragrance: Microcapsule Magic</h3>
                <p className="text-gray-600 text-lg">Our microcapsule technology allows the fragrance to penetrate the fabric while wearing or moving, releasing a lasting, pleasant fragrance.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">70%-80% High-Concentration: Laundry's Powerhouse</h3>
                <p className="text-gray-600 text-lg">Rich in active ingredients, it ensures that clothes are spotless and is a reliable choice for cleaning clothes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Banish Bacteria and Mites: Hidden Threats No More</h3>
                <p className="text-gray-600 text-lg">Our products fight invisible bacteria and mites, ensuring a hygienic and comfortable dressing experience.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Renowned Brand Givaudan Scents: Long-Lasting Elegance</h3>
                <p className="text-gray-600 text-lg">With high-end fragrances, clothes exude a sophisticated and long-lasting fragrance.</p>
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

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Product Name</span>
                  <span className="text-gray-600">Authentic Laundry Detergent Pods</span>
                </div>
                <div className="flex justify-between items-start border-b pb-4">
                  <span className="font-semibold text-gray-900">Functions</span>
                  <span className="text-gray-600 text-right">Detergent + Bacteria & Mites Removal 99.9% + Softener + Long Lasting Fragrances + Blend Enzymes</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Fragrances</span>
                  <span className="text-gray-600">Customized / As shown in picture</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Color</span>
                  <span className="text-gray-600">Customized / As shown in picture</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Weight</span>
                  <span className="text-gray-600">15g*30pcs*32bag/Carton</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Film</span>
                  <span className="text-gray-600">Water-soluble Film</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Packaging</span>
                  <span className="text-gray-600">Boxes/Bags or Pouches/Cartons or customized</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Origin</span>
                  <span className="text-gray-600">Guangzhou Guangdong Province, China</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Certificate</span>
                  <span className="text-gray-600">ISO/MSDS/SMETA 6.1</span>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <span className="font-semibold text-gray-900">Order (MOQ)</span>
                  <span className="text-gray-600">One Carton of spot goods/customized</span>
                </div>
              </div>
            </div>
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