import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Gift, TrendingUp, Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      message: "",
    },
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      return apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote request submitted successfully!",
        description: "We will contact you within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      console.error("Error submitting quote request:", error);
      toast({
        variant: "destructive",
        title: "Error submitting quote request",
        description: "Please try again or contact us directly.",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    setIsSubmitting(true);
    submitQuoteMutation.mutate(data);
  };

  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Quote</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Ready to revolutionize your laundry experience? Contact us today for pricing and availability.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-quote-request">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            {...field} 
                            className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            {...field} 
                            className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-2 focus:ring-brand-blue focus:border-transparent" data-testid="select-quantity">
                              <SelectValue placeholder="Select quantity range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sample">Sample Pack (10-50 pods)</SelectItem>
                            <SelectItem value="small">Small Order (100-500 pods)</SelectItem>
                            <SelectItem value="medium">Medium Order (500-2,000 pods)</SelectItem>
                            <SelectItem value="large">Large Order (2,000+ pods)</SelectItem>
                            <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6} 
                            {...field} 
                            placeholder="Tell us about your specific needs, preferred delivery timeline, or any questions you have about our products."
                            className="focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms" 
                      required 
                      className="mt-1 text-brand-blue focus:ring-brand-blue border-gray-300"
                      data-testid="checkbox-terms"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to receive communications about CleanPods Pro products and services. 
                      You can unsubscribe at any time.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue text-white hover:bg-blue-700 transition-all transform hover:scale-105 py-4 rounded-lg font-semibold"
                    data-testid="button-submit-quote"
                  >
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {/* Quick Response */}
                <div className="bg-blue-50 p-8 rounded-2xl" data-testid="info-quick-response">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Clock className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
                  </div>
                  <p className="text-gray-700 mb-4">We respond to all quote requests within 24 hours during business days.</p>
                  <div className="text-sm text-gray-600">
                    <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Sample Program */}
                <div className="bg-green-50 p-8 rounded-2xl" data-testid="info-sample-program">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Gift className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Free Sample Program</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Try CleanPods Pro risk-free with our complimentary sample program. 
                    Perfect for testing compatibility with your washing machines and preferences.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5-pod sample pack included</li>
                    <li>• Usage instructions provided</li>
                    <li>• No commitment required</li>
                  </ul>
                </div>

                {/* Bulk Pricing */}
                <div className="bg-purple-50 p-8 rounded-2xl" data-testid="info-bulk-pricing">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Volume Discounts</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Significant savings available for bulk orders. Perfect for businesses, 
                    laundromats, or group purchases.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tiered pricing structure</li>
                    <li>• Custom packaging available</li>
                    <li>• Flexible delivery schedules</li>
                  </ul>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Alternative Contact Methods</h3>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg" data-testid="contact-email">
                    <Mail className="text-brand-blue text-xl" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">info@cleanpodspro.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg" data-testid="contact-phone">
                    <Phone className="text-brand-blue text-xl" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">1-800-CLEANPOD</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg" data-testid="contact-chat">
                    <MessageCircle className="text-brand-blue text-xl" />
                    <div>
                      <div className="font-medium text-gray-900">Live Chat</div>
                      <div className="text-gray-600">Available on our website</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-minimum-order">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is the minimum order quantity?</h3>
              <p className="text-gray-600">
                We offer flexible ordering options starting from sample packs of 10 pods. 
                There's no minimum order requirement, making it perfect for individual users or large-scale operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-shipping">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does shipping take?</h3>
              <p className="text-gray-600">
                Standard shipping takes 5-7 business days. Express shipping options are available. 
                Bulk orders may require additional processing time depending on quantity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-compatibility">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are the pods compatible with all washing machines?</h3>
              <p className="text-gray-600">
                Yes, our pods are designed for both front-load and top-load washing machines. 
                The low sud formulation ensures optimal performance across all machine types.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-return-policy">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day satisfaction guarantee. If you're not completely satisfied with the cleaning performance, 
                we'll provide a full refund or replacement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
