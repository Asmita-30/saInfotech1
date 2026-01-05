// Managed.jsx
import React from 'react';
import { Shield, Cloud, Server, Lock, BarChart, Headphones, CheckCircle } from 'lucide-react';

const Managed = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Management",
      description: "24/7 monitoring and optimization of your cloud infrastructure"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Support",
      description: "Proactive maintenance and management of IT infrastructure"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Services",
      description: "Comprehensive security monitoring and threat protection"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Protection",
      description: "Backup, disaster recovery and data integrity solutions"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Real-time insights and performance optimization"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Help Desk Support",
      description: "Round-the-clock technical support for your team"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Monitoring" },
    { value: "50+", label: "Experts Team" },
    { value: "500+", label: "Happy Clients" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Managed <span className="text-blue-600">IT Services</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Complete IT management solutions to streamline your business operations and enhance productivity
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Side - Image with Improved Spacing */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Top spacing container */}
              <div className="mb-8 md:mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Expert Managed Services</h3>
                      <p className="text-gray-600">Trusted by businesses worldwide</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Our managed services provide round-the-clock support, proactive monitoring, and strategic IT planning to keep your business running smoothly.
                  </p>
                </div>
              </div>
              
              {/* Main Image Container with Better Spacing */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:shadow-2xl">
                <div className="aspect-w-16 aspect-h-12 md:aspect-h-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Managed Services Team at SA Infotech"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                
                {/* Image Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Active Monitoring</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Professional IT Management</h3>
                  <p className="text-blue-100 text-sm md:text-base">Ensuring your technology works for you</p>
                </div>
              </div>
              
              {/* Stats Overlay - Positioned below image with spacing */}
              <div className="relative -mt-6 mx-4">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transform transition-all duration-300 hover:shadow-2xl">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-1 group-hover:text-blue-800 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom spacing container */}
              <div className="mt-10 md:mt-12">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Need Immediate Support?</h4>
                      <p className="text-blue-100 text-sm">Contact our 24/7 support team</p>
                    </div>
                    <button className="ml-auto bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="lg:w-1/2 w-full">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200">
                Why Choose SA Infotech
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your <span className="text-blue-600">Business</span> with Our Managed Services
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At SA Infotech, we provide comprehensive managed IT services that empower businesses to focus on their core operations while we handle the technology. Our team of experts delivers proactive solutions, robust security, and scalable infrastructure.
              </p>
              
              {/* Features List */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Reduce operational costs by up to 40%",
                    "Improve system reliability and uptime",
                    "Enhanced security and compliance",
                    "Access to enterprise-grade technology",
                    "Scalable solutions for growth",
                    "Predictable monthly pricing"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Core Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Service Tiers */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 mb-8 border border-gray-200">
                <h4 className="font-bold text-gray-800 text-xl mb-4">Our Service Tiers</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                    <div className="font-bold text-gray-800 mb-2">Basic</div>
                    <div className="text-sm text-gray-600">Monitoring & Alerting</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border-2 border-blue-500 shadow-sm relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                    <div className="font-bold text-gray-800 mb-2">Professional</div>
                    <div className="text-sm text-gray-600">Full Management</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                    <div className="font-bold text-gray-800 mb-2">Enterprise</div>
                    <div className="text-sm text-gray-600">Custom Solutions</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex-1 flex items-center justify-center">
                  <span>Get Free Consultation</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 flex-1 flex items-center justify-center">
                  <span>Download Brochure</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </button>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Trust & Reliability</div>
                      <div className="text-sm text-gray-600">ISO 27001 Certified</div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-xs text-gray-500">Average response time</div>
                    <div className="font-bold text-blue-600">Under 15 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-20 md:mt-24">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Join 500+ businesses that trust SA Infotech for their managed IT services
            </p>
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Schedule a Demo Today
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Managed;