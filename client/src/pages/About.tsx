import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FlaskConical, Leaf, Users, Atom, Microscope, TestTubeDiagonal, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About CleanPods Pro</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing laundry care through innovative compartmentalized technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At CleanPods Pro, we believe that exceptional laundry care shouldn't come at the expense 
                of convenience or environmental responsibility. Our mission is to deliver cutting-edge 
                cleaning technology that makes every wash more effective, efficient, and eco-friendly.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Through our innovative 5-in-1 compartmentalized storage system, we've created a laundry 
                solution that maximizes cleaning power while minimizing environmental impact. Each pod 
                represents years of research and development in cleaning chemistry and sustainable packaging.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="mission-point-1">
                  <CheckCircle className="text-green-500 text-xl" />
                  <span className="text-gray-700">Advanced compartmentalized technology</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="mission-point-2">
                  <CheckCircle className="text-green-500 text-xl" />
                  <span className="text-gray-700">99% cleaning and antibacterial efficiency</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="mission-point-3">
                  <CheckCircle className="text-green-500 text-xl" />
                  <span className="text-gray-700">Natural plant-based fragrances</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="mission-point-4">
                  <CheckCircle className="text-green-500 text-xl" />
                  <span className="text-gray-700">Universal machine compatibility</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern laboratory with laundry research" 
                className="rounded-2xl shadow-lg"
                data-testid="img-mission-laboratory"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="value-innovation">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing the boundaries of cleaning technology through research and development 
                to deliver superior laundry solutions.
              </p>
            </div>

            <div className="text-center" data-testid="value-sustainability">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Committed to environmental responsibility through eco-friendly formulations and 
                sustainable packaging solutions.
              </p>
            </div>

            <div className="text-center" data-testid="value-excellence">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional quality and performance in every product, ensuring customer 
                satisfaction and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Science Behind Our Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our revolutionary compartmentalized storage system maximizes the effectiveness of each ingredient
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Scientific laboratory with cleaning research" 
                className="rounded-2xl shadow-lg"
                data-testid="img-technology-lab"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-8">Advanced Formulation Technology</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="tech-feature-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Atom className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Compartmentalized Storage</h4>
                    <p className="text-gray-600">Each function is independently stored to prevent premature activation and maximize effectiveness when needed.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="tech-feature-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">70% Active Ingredients</h4>
                    <p className="text-gray-600">Our concentrated formula delivers maximum cleaning power with minimal environmental impact.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="tech-feature-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TestTubeDiagonal className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Plant Fragrances</h4>
                    <p className="text-gray-600">Carefully selected botanical extracts provide long-lasting freshness without harsh chemicals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who have revolutionized their laundry routine with CleanPods Pro.
          </p>
          <Link href="/contact">
            <Button 
              className="bg-white text-brand-blue hover:bg-gray-100 transition-all transform hover:scale-105 px-10 py-4 rounded-full font-semibold text-lg"
              data-testid="button-get-quote-cta"
            >
              Get Your Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
