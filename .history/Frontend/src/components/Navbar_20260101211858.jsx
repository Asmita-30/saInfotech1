import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Database,
  Server,
  Users,
  Code,
  Cpu,
  Smartphone,
  TrendingUp,
  Palette,
  MessageSquare,
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
      icon: <Code size={18} className="text-blue-400" />, 
      path: '/services/website-development',
      description: 'Custom websites and web apps'
    },
    { 
      name: 'Software Application', 
      icon: <Cpu size={18} className="text-blue-400" />, 
      path: '/services/software-application',
      description: 'Desktop & enterprise software'
    },
    { 
      name: 'Mobile Application', 
      icon: <Smartphone size={18} className="text-blue-400" />, 
      path: '/services/mobile-application',
      description: 'iOS & Android apps'
    },
    { 
      name: 'Digital Marketing', 
      icon: <TrendingUp size={18} className="text-blue-400" />, 
      path: '/services/digital-marketing',
      description: 'SEO, SMM, PPC campaigns'
    },
    { 
      name: 'Graphics Designing', 
      icon: <Palette size={18} className="text-blue-400" />, 
      path: '/services/graphics-designing',
      description: 'Logo, banners, UI designs'
    },
    { 
      name: 'Database Management', 
      icon: <Database size={18} className="text-blue-400" />, 
      path: '/services/database-management',
      description: 'SQL, NoSQL, data optimization'
    },
    { 
      name: 'Managed Services', 
      icon: <Server size={18} className="text-blue-400" />, 
      path: '/services/managed-services',
      description: '24/7 IT infrastructure support'
    },
    { 
      name: 'On-site Resources', 
      icon: <Users size={18} className="text-blue-400" />, 
      path: '/services/on-site-resources',
      description: 'Dedicated team at your location'
    },
    { 
      name: 'Bulk SMS Services', 
      icon: <MessageSquare size={18} className="text-blue-400" />, 
      path: '/services/bulk-sms',
      description: 'Marketing & transactional SMS'
    },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img src={logo} alt="SA Infotech Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-200">
              SA<span className="text-blue-400">Infotech</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-gray-800 flex items-center gap-1"
                onClick={() => setServiceOpen(!serviceOpen)}
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                Services <ChevronDown size={16} className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu - Now opens below */}
              {serviceOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-blue-400 mb-3 px-3">Our Services</h3>
                    <div className="grid grid-cols-1 gap-2 max-h-[70vh] overflow-y-auto pr-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-700"
                          onClick={() => setServiceOpen(false)}
                        >
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                              {service.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors truncate">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                              {service.description}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronDown size={16} className="rotate-90 text-blue-400" />
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
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
          {navItems.filter(item => item.name !== 'Services').map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-gray-300 hover:text-blue-400 hover:bg-gray-800 block px-3 py-3 rounded-md text-base font-medium transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Services Accordion */}
          <div className="border-t border-gray-800 pt-2">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full text-left text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-3 py-3 rounded-md text-base font-medium transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {serviceOpen && (
              <div className="ml-6 mt-2 space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
                    onClick={() => {
                      setIsOpen(false);
                      setServiceOpen(false);
                    }}
                  >
                    <div className="p-2 bg-gray-800 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-200 group-hover:text-blue-400">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-400">
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

      {/* Custom Scrollbar */}
      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #1f2937;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;