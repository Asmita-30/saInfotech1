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

      {/* Hero Section */}
  

      {/* Services Section */}
      <section className="py-16">
        <div className="w-full px-4">
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

      

      
    </div>
  );
}

export default OnSide;