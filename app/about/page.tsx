import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Droplets, Sparkles, Shield, Target, TrendingUp, Clock, Star, Package, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Welvet Wash</h1>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto mb-8">
            At Welvet Wash, we believe that cleaning should be smarter, safer, and more effective—whether it's your clothes, home, or everyday surroundings.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded by Velocity Enterprise, Ahmedabad, we started with 5-in-1 laundry pods that made washing effortless with 8X cleaning power. Encouraged by the love of our customers, we are now expanding into a complete range of cleaning solutions—from laundry care to household cleaning products—designed for modern Indian homes.
                </p>
                <p>
                  Welvet Wash is more than just a product—it's a promise of a cleaner, fresher, and healthier home.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Welvet Wash team and facilities" 
                className="rounded-3xl shadow-2xl w-full"
                data-testid="img-company-story"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To become India's most trusted one-stop cleaning brand, delivering innovation, convenience, and quality at every wash, every wipe, every clean.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Complete cleaning solutions for modern homes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Laundry Care</h3>
              <p className="text-gray-600">
                Advanced pods, detergents, and fabric solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Home Cleaning</h3>
              <p className="text-gray-600">
                Floor cleaners, kitchen cleaners, bathroom solutions, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hygiene & Freshness</h3>
              <p className="text-gray-600">
                Products that protect your family and leave lasting fragrance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">What makes Welvet Wash different</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Science-backed formulas</h3>
              <p className="text-gray-600">For deep cleaning and fabric care.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy-to-use formats</h3>
              <p className="text-gray-600">Pods, liquids, sprays—suited for modern lifestyles.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe & reliable</h3>
              <p className="text-gray-600">With clear usage and storage guidelines.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-first support</h3>
              <p className="text-gray-600">With timely supply and responsive service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Welvet Wash</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Discover the difference that smarter, safer, and more effective cleaning can make in your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products">
              <Button 
                size="lg"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105"
                data-testid="button-shop-now"
              >
                <Package className="w-6 h-6 mr-3" />
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-full font-bold text-lg transition-all"
                data-testid="button-contact-us"
              >
                <Star className="w-6 h-6 mr-3" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}