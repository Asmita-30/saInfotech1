import React, { useState, useRef, useEffect } from 'react';
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
import logo from '../assets/LOGO-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef(null);
  const timeoutRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
       { 
      name: 'Database Management', 
      icon: <Database size={20} className="text-blue-400" />, 
      path: '/services/database-management',
      description: 'SQL, NoSQL, data optimization'
    },
    { 
      name: 'Managed Services', 
      icon: <Server size={20} className="text-blue-400" />, 
      path: '/services/managed-services',
      description: '24/7 IT infrastructure support'
    },
    { 
      name: 'On-site Resources', 
      icon: <Users size={20} className="text-blue-400" />, 
      path: '/services/on-site-resources',
      description: 'Dedicated team at your location'
    },
    { 
      name: 'Website Development', 
      icon: <Code size={20} className="text-blue-400" />, 
      path: '/services/website-development',
      description: 'Custom websites and web apps'
    },
    { 
      name: 'Software Application', 
      icon: <Cpu size={20} className="text-blue-400" />, 
      path: '/services/software-application',
      description: 'Desktop & enterprise software'
    },
    { 
      name: 'Mobile Application', 
      icon: <Smartphone size={20} className="text-blue-400" />, 
      path: '/services/mobile-application',
      description: 'iOS & Android apps'
    },
    { 
      name: 'Digital Marketing', 
      icon: <TrendingUp size={20} className="text-blue-400" />, 
      path: '/services/digital-marketing',
      description: 'SEO, SMM, PPC campaigns'
    },
    { 
      name: 'Graphics Designing', 
      icon: <Palette size={20} className="text-blue-400" />, 
      path: '/services/graphics-designing',
      description: 'Logo, banners, UI designs'
    },
   
    { 
      name: 'Bulk SMS Services', 
      icon: <MessageSquare size={20} className="text-blue-400" />, 
      path: '/services/bulk-sms',
      description: 'Marketing & transactional SMS'
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    };

    if (serviceOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [serviceOpen]);

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServiceOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServiceOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-xl border-b border-gray-800">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img src={logo} alt="SA Infotech Logo" className="h-20 w-auto" />
            {/* <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-200">
              SA<span className="text-blue-400">Infotech</span> */}
            {/* </span> */}
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

            {/* Services Dropdown - FIXED HOVER AREA */}
            <div 
              className="relative"
              ref={serviceRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer hover:bg-gray-800 flex items-center gap-1"
              >
                Services <ChevronDown size={16} className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu - NO GAP BETWEEN BUTTON AND DROPDOWN */}
              {serviceOpen && (
                <div 
                  className="absolute top-full left-0 w-96 bg-gray-900 border border-gray-700 rounded-b-lg shadow-2xl z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ marginTop: '0px' }} // Remove any gap
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-blue-400 mb-3 px-3">Our Professional Services</h3>
                    <div className="grid grid-cols-1 gap-2 max-h-[70vh] overflow-y-auto pr-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 cursor-pointer group border border-transparent hover:border-blue-500/30"
                          onClick={() => setServiceOpen(false)}
                        >
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/40 transition-colors duration-200">
                              {service.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-200 truncate">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate mt-0.5">
                              {service.description}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 shadow-2xl overflow-y-auto">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <img src={logo} alt="SA Infotech Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold">
                  SA<span className="text-blue-400">Infotech</span>
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
                  className="block py-3 px-4 hover:bg-gray-800/50 rounded-lg hover:text-blue-400 transition-all duration-200 cursor-pointer font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Accordion */}
              <div className="mt-2 pt-2 border-t border-gray-800">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800/50 hover:text-blue-400 transition-colors cursor-pointer font-medium flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {serviceOpen && (
                  <div className="ml-4 mt-2 space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group border-l-2 border-l-transparent group-hover:border-l-blue-500"
                        onClick={() => {
                          setIsOpen(false);
                          setServiceOpen(false);
                        }}
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30">
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-200 group-hover:text-blue-400">
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
        </div>
      )}

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