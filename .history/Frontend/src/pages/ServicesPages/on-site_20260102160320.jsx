// OnSide.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { WrenchScrewdriverIcon, ShieldCheckIcon, UserGroupIcon, ClockIcon, ComputerDesktopIcon, ServerIcon, CpuChipIcon, WifiIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function OnSide() {
  const allServices = [
    { 
      id: 1, 
      name: "IT Infrastructure Setup", 
      description: "Complete setup of servers, networks, and workstations for new offices or expansions.",
      details: ["Server installation & configuration", "Network cabling & setup", "Workstation deployment", "Peripheral device setup"],
      icon: <ServerIcon className="h-10 w-10 text-blue-600" />
    },
    { 
      id: 2, 
      name: "Network Installation & Configuration", 
      description: "LAN/WAN setup, Wi-Fi installation, and secure network configuration.",
      details: ["Router & switch installation", "Wireless network setup", "Network security configuration", "VLAN segmentation"],
      icon: <WifiIcon className="h-10 w-10 text-green-600" />
    },
    { 
      id: 3, 
      name: "Hardware Maintenance & Repair", 
      description: "Regular maintenance and troubleshooting of IT equipment to ensure optimal performance.",
      details: ["Desktop & laptop repair", "Printer & scanner maintenance", "Server hardware diagnostics", "Component replacement"],
      icon: <WrenchScrewdriverIcon className="h-10 w-10 text-purple-600" />
    },
    { 
      id: 4, 
      name: "Software Support & Installation", 
      description: "Installation, configuration, and troubleshooting of business software applications.",
      details: ["Operating system installation", "Business software setup", "License management", "Software troubleshooting"],
      icon: <ComputerDesktopIcon className="h-10 w-10 text-red-600" />
    },
    { 
      id: 5, 
      name: "Data Center Services", 
      description: "Server room setup, cooling solutions, power management, and rack installation.",
      details: ["Server rack installation", "Cooling system setup", "Power backup configuration", "Cable management"],
      icon: <CpuChipIcon className="h-10 w-10 text-yellow-600" />
    },
    { 
      id: 6, 
      name: "24/7 Emergency Support", 
      description: "Round-the-clock emergency technical support for critical IT issues.",
      details: ["Emergency on-site response", "Critical system recovery", "Data backup restoration", "Security breach response"],
      icon: <ClockIcon className="h-10 w-10 text-orange-600" />
    },
    { 
      id: 7, 
      name: "Cybersecurity Setup", 
      description: "Implementation of security measures to protect your IT infrastructure.",
      details: ["Firewall installation", "Antivirus deployment", "Security policy implementation", "Vulnerability assessment"],
      icon: <ShieldCheckIcon className="h-10 w-10 text-indigo-600" />
    },
    { 
      id: 8, 
      name: "IT Consultation & Planning", 
      description: "Strategic IT planning and consultation for business growth and digital transformation.",
      details: ["IT infrastructure planning", "Technology roadmap development", "Budget planning", "Vendor management"],
      icon: <UserGroupIcon className="h-10 w-10 text-teal-600" />
    }
  ];

  const processSteps = [
    { number: "1", title: "Service Request", description: "Contact us via phone, email, or online form" },
    { number: "2", title: "Assessment", description: "Our expert evaluates your requirements on-site" },
    { number: "3", title: "Solution Proposal", description: "We provide a detailed plan and quotation" },
    { number: "4", title: "Implementation", description: "Our certified technicians execute the solution" },
    { number: "5", title: "Testing & Quality Check", description: "Thorough testing to ensure everything works perfectly" },
    { number: "6", title: "Support & Maintenance", description: "Ongoing support and maintenance as needed" }
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <WrenchScrewdriverIcon className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">SA Infotech</h1>
                  <p className="text-xs text-blue-600">On-Site Resource Services</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/onsite-services" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Our Services</Link>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </div>
            
            <Link to="/" className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive On-Site IT Services</h1>
            <p className="text-xl mb-8">SA Infotech delivers expert technical solutions directly at your location. Our certified professionals ensure your IT infrastructure runs smoothly with minimal disruption to your business operations.</p>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2" />
              <span className="text-lg">Call for immediate support: <strong>+91 98765 43210</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our On-Site Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From initial setup to ongoing maintenance and emergency support, we provide comprehensive IT solutions tailored to your business needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Service Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured approach to ensure efficient and effective delivery of on-site IT services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Our On-Site Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Choosing SA Infotech for your on-site IT needs provides numerous advantages for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <ClockIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Minimal Downtime</h3>
                  <p className="text-gray-600">Our on-site technicians resolve issues quickly, reducing business disruption and maintaining productivity.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Security</h3>
                  <p className="text-gray-600">On-site handling of sensitive data and systems ensures better security compared to remote solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <UserGroupIcon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Service</h3>
                  <p className="text-gray-600">Face-to-face interaction allows for better understanding of your specific needs and customized solutions.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Troubleshooting</h3>
                  <p className="text-gray-600">Physical access to hardware enables comprehensive diagnostics and more effective problem resolution.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <CheckCircleIcon className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Direct supervision and testing ensure that all work meets our high standards before completion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <ClockIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Faster Complex Resolutions</h3>
                  <p className="text-gray-600">Complex hardware issues that are difficult to diagnose remotely can be resolved quickly on-site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Reliable On-Site IT Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today to schedule a consultation or emergency service call. Our team is ready to assist you with all your IT needs.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+919876543210" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now: +91 98765 43210
            </a>
            <Link to="/" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 inline-flex items-center justify-center">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <WrenchScrewdriverIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">SA Infotech</h2>
                  <p className="text-blue-300 text-sm">On-Site Resource Services</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">Your trusted partner for on-site IT solutions and technical support.</p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <p className="text-gray-400">+91 98765 43210</p>
              <p className="text-gray-400">support@sainfotech.com</p>
              <p className="text-gray-400">IT Park, Sector 67, Mohali</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SA Infotech - On-Site Resource Services. All rights reserved.</p>
            <p className="mt-2">
              <Link to="/" className="text-blue-300 hover:text-white">Home</Link> | 
              <Link to="/onsite-services" className="text-blue-300 hover:text-white ml-2 mr-2"> Our Services</Link> | 
              <a href="#contact" className="text-blue-300 hover:text-white ml-2">Contact</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OnSide;