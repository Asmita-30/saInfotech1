// Managed.jsx
import React from 'react';
import { Shield, Cloud, Server, Lock, BarChart, Headphones } from 'lucide-react';

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
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl h-96 md:h-[500px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Managed Services Team"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-700">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Our Expertise
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Comprehensive <span className="text-blue-600">Managed IT Services</span> for Your Business
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                At SA Infotech, we provide end-to-end managed IT services that ensure your business operations run smoothly, securely, and efficiently. Our expert team handles your technology so you can focus on what matters most - growing your business.
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Core Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{service.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gray-800 text-lg mb-3">Why Choose SA Infotech?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Proactive monitoring and maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Customized solutions for your business needs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Reduced IT costs with predictable pricing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Scalable services that grow with your business</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Get Free Consultation
                </button>
                <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
        
  
      </main>

    
    </div>
  );
};

export default Managed;