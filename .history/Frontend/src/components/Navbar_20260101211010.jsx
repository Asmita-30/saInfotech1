import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Palette,
  Server,
  TrendingUp,
  Globe,
  Shield,
  Database,
  BarChart,
} from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { 
      name: 'Website Development', 
      icon: <Code size={18} className="text-primary-blue" />, 
      path: '/services/web',
      description: 'Custom websites and web applications'
    },
    { 
      name: 'Mobile App Development', 
      icon: <Smartphone size={18} className="text-primary-blue" />, 
      path: '/services/mobile',
      description: 'iOS & Android native apps'
    },
    { 
      name: 'UI/UX Design', 
      icon: <Palette size={18} className="text-primary-blue" />, 
      path: '/services/ui-ux',
      description: 'User-centered design solutions'
    },
    { 
      name: 'Cloud Solutions', 
      icon: <Server size={18} className="text-primary-blue" />, 
      path: '/services/cloud',
      description: 'AWS, Azure, Google Cloud'
    },
    { 
      name: 'Digital Marketing', 
      icon: <TrendingUp size={18} className="text-primary-blue" />, 
      path: '/services/marketing',
      description: 'SEO, Social Media, PPC'
    },
    { 
      name: 'E-commerce Solutions', 
      icon: <Globe size={18} className="text-primary-blue" />, 
      path: '/services/ecommerce',
      description: 'Online store development'
    },
    { 
      name: 'Cyber Security', 
      icon: <Shield size={18} className="text-primary-blue" />, 
      path: '/services/security',
      description: 'Security audits & protection'
    },
    { 
      name: 'Data Analytics', 
      icon: <BarChart size={18} className="text-primary-blue" />, 
      path: '/services/analytics',
      description: 'BI & Data visualization'
    },
  ];

  return (
    <nav className="bg-dark-bg text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
          <img src={logo} alt="SA Infotech Logo" className="h-12" />
          <span className="text-xl font-bold group-hover:text-primary-blue transition-colors duration-200">
            SA<span className="text-primary-blue">Infotech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navItems.slice(0, 2).map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="hover:text-primary-blue transition-colors duration-200 cursor-pointer font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-blue transition-colors duration-200 cursor-pointer font-medium">
              Services <ChevronDown size={16} className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
            </button>

            {serviceOpen && (
              <div className="absolute top-10 left-0 w-80 bg-dark-bg border border-gray-700 rounded-lg shadow-xl">
                <div className="max-h-96 overflow-y-auto pr-2 p-2">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-start gap-3 p-3 hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer group"
                        onClick={() => setServiceOpen(false)}
                      >
                        <div className="mt-1">{service.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-primary-blue transition-colors">
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="hover:text-primary-blue transition-colors duration-200 cursor-pointer font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-dark-bg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40 border-l border-gray-800`}
      >
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="SA Infotech Logo" className="h-10" />
            <span className="text-lg font-bold">
              SA<span className="text-primary-blue">Infotech</span>
            </span>
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-1">
          {navItems.filter(item => item.name !== 'Services').map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 hover:bg-gray-800/50 rounded-lg hover:text-primary-blue transition-all duration-200 cursor-pointer font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services */}
          <div className="mt-2">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800/50 rounded-lg hover:text-primary-blue transition-all duration-200 cursor-pointer font-medium"
            >
              <span>Services</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {serviceOpen && (
              <div className="mt-2 ml-4 max-h-96 overflow-y-auto pr-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => {
                      setIsOpen(false);
                      setServiceOpen(false);
                    }}
                    className="flex items-start gap-3 py-3 px-4 hover:bg-gray-800/30 rounded-lg transition-all duration-200 cursor-pointer group"
                  >
                    {service.icon}
                    <div className="flex-1">
                      <p className="font-medium text-sm group-hover:text-primary-blue transition-colors">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #3b82f6;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: #2563eb;
        }
        
        /* Firefox */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #1f2937;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;