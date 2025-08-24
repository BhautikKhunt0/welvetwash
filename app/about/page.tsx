import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Heart, Shield, TrendingUp, Clock, Star, Package, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About CleanPods Pro</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Leading the revolution in laundry technology with innovative, eco-friendly solutions that deliver professional-grade cleaning results for homes worldwide.
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
                  Founded with a vision to revolutionize the laundry industry, CleanPods Pro emerged from a simple yet powerful idea: every household deserves professional-grade cleaning technology that's both effective and environmentally responsible.
                </p>
                <p>
                  Our journey began when our team of chemists and engineers noticed a gap in the market for truly concentrated, multi-functional laundry solutions. We spent years developing our proprietary 5-in-1 and 7-in-1 formulas that combine advanced cleaning power with anti-bacterial protection, color preservation, and long-lasting fragrance.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 satisfied customers across 25+ countries, delivering exceptional results with every pod while maintaining our commitment to sustainability and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="CleanPods Pro team and facilities" 
                className="rounded-3xl shadow-2xl w-full"
                data-testid="img-company-story"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600">Guiding principles that drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative, eco-friendly laundry solutions that deliver professional-grade results while protecting the environment and improving lives worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the global leader in advanced laundry technology, setting new standards for effectiveness, sustainability, and customer satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, sustainability, quality, and customer-centricity form the foundation of everything we do, ensuring every product exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-cyan-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-testid="text-customers">10,000+</div>
              <div className="text-cyan-100 text-lg">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-testid="text-countries">25+</div>
              <div className="text-cyan-100 text-lg">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-testid="text-rating">4.9/5</div>
              <div className="text-cyan-100 text-lg">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" data-testid="text-years">5+</div>
              <div className="text-cyan-100 text-lg">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">The CleanPods Pro difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">ISO certified manufacturing with rigorous quality control ensures every pod meets the highest standards.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">Dermatologically tested, hypoallergenic formulas safe for sensitive skin and families with children.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">24/7 customer support and satisfaction guarantee ensure every customer receives exceptional service.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">Continuous R&D investment keeps us at the forefront of laundry technology and sustainability.</p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">International shipping and distribution network ensuring our products reach customers worldwide.</p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">Commitment to environmental responsibility through biodegradable formulas and eco-friendly packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders and certified by international bodies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600">International Organization for Standardization certified manufacturing processes</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MSDS Compliant</h3>
              <p className="text-gray-600">Material Safety Data Sheet compliance ensuring product safety and transparency</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Award className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SMETA 6.1</h3>
              <p className="text-gray-600">Sedex Members Ethical Trade Audit ensuring ethical and responsible practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the CleanPods Pro Family</h2>
          <p className="text-xl text-cyan-100 mb-8">
            Experience the difference that professional-grade cleaning technology can make in your home.
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