
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, MessageCircle, Clock, CreditCard, Route } from 'lucide-react';

const Index = () => {
  // Sample services
  const services = [
    {
      icon: <Route size={48} className="text-roadside-500" />,
      title: "Towing Service",
      description: "Need a tow? We'll connect you with nearby towing services to get you to a repair shop."
    },
    {
      icon: <Clock size={48} className="text-roadside-500" />,
      title: "Quick Repairs",
      description: "For minor issues, get roadside repairs that get you back on the road without a tow."
    },
    {
      icon: <CreditCard size={48} className="text-roadside-500" />,
      title: "Transparent Pricing",
      description: "See estimated costs upfront. No hidden fees or surprises when the mechanic arrives."
    },
    {
      icon: <MessageCircle size={48} className="text-roadside-500" />,
      title: "Direct Communication",
      description: "Chat directly with your mechanic to describe your vehicle issues in detail."
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Dallas, TX",
      text: "I was stranded on a highway 50 miles from home with a flat tire and no spare. Within 15 minutes of using RoadReady, a mechanic arrived and got me back on the road.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Marcus Chen",
      location: "Portland, OR",
      text: "As a traveling salesperson, I'm often in unfamiliar cities. RoadReady has saved me multiple times when my car wouldn't start. The mechanics are fast, professional, and fairly priced.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Aisha Williams",
      location: "Miami, FL",
      text: "When my car broke down with my kids in the back seat, I was panicking. The RoadReady app quickly connected me with a mechanic who arrived in 10 minutes. Amazing service!",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How RoadReady Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get back on the road in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-roadside-100 flex items-center justify-center mb-4">
                <span className="text-roadside-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Location</h3>
              <p className="text-gray-600">
                Use our app to share your location and describe your vehicle issue.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-roadside-100 flex items-center justify-center mb-4">
                <span className="text-roadside-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                We'll connect you with nearby mechanics who can help with your specific issue.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-roadside-100 flex items-center justify-center mb-4">
                <span className="text-roadside-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Back on the Road</h3>
              <p className="text-gray-600">
                The mechanic arrives to fix your issue or tow your vehicle if needed.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/find-mechanic">
              <Button size="lg" className="bg-roadside-600 hover:bg-roadside-700">
                Find a Mechanic Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Services We Offer</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              From flat tires to dead batteries, our mechanics can handle a variety of roadside emergencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-roadside-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Why Choose RoadReady?</h2>
              <p className="text-xl text-roadside-100 mb-8 max-w-lg">
                We make finding roadside assistance simple, fast, and stress-free, even when you're in an unfamiliar location.
              </p>

              <div className="space-y-4">
                {[
                  "Vetted, professional mechanics",
                  "Average response time under 20 minutes",
                  "Service available 24/7, 365 days a year",
                  "Transparent, upfront pricing",
                  "Real-time mechanic tracking"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-accent-400 mr-2" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-12">
              <div className="bg-white rounded-lg shadow-xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-roadside-800">Join RoadReady Today</h3>
                <p className="text-gray-600 mb-6">
                  Create a free account to get roadside assistance when you need it most.
                </p>
                <div className="space-y-4">
                  <Link to="/user-signup" className="w-full block">
                    <Button size="lg" className="w-full bg-roadside-600 hover:bg-roadside-700">
                      Sign Up as a Driver
                    </Button>
                  </Link>
                  <Link to="/mechanic-signup" className="w-full block">
                    <Button size="lg" variant="outline" className="w-full border-roadside-600 text-roadside-600 hover:bg-roadside-50">
                      Register as a Mechanic
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500 text-center pt-2">
                    Already have an account? <Link to="/login" className="text-roadside-600 hover:underline">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from drivers we've helped get back on the road
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of drivers who rely on RoadReady for quick roadside assistance.
          </p>
          <Link to="/user-signup">
            <Button size="lg" className="bg-white text-accent-700 hover:bg-white/90">
              Sign Up Now — It's Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
