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
  Sparkles,
  Zap,
  Shield,
  Cloud,
} from 'lucide-react';
import logo from '../assets/LOGO-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const serviceRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Sparkles size={16} /> },
    { name: 'About', path: '/about', icon: <Shield size={16} /> },
    { name: 'Careers', path: '/careers', icon: <Users size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Cloud size={16} /> },
  ];

  const services = [
    
   { 
    name: 'Database Management', 
    icon: <Database size={20} />, 
    path: '/services/database',  
    description: 'SQL, NoSQL, data optimization',
    gradient: 'from-blue-500 to-cyan-400'
  },
    { 
      name: 'Managed Services', 
      icon: <Server size={20} />, 
      path: '/services/Manged',
      description: '24/7 IT infrastructure support',
      gradient: 'from-purple-500 to-pink-400'
    },
    { 
      name: 'On-site Resources', 
      icon: <Users size={20} />, 
      path: '/services/on-site-resources',
      description: 'Dedicated team at your location',
      gradient: 'from-green-500 to-emerald-400'
    },
    { 
      name: 'Website Development', 
      icon: <Code size={20} />, 
      path: '/Frontend/src/ServicesPages/web.jsx',
      description: 'Custom websites and web apps',
      gradient: 'from-orange-500 to-yellow-400'
    },
    { 
      name: 'Software Application', 
      icon: <Cpu size={20} />, 
      path: '/Frontend/src/ServicesPages/software.jsx',
      description: 'Desktop & enterprise software',
      gradient: 'from-red-500 to-rose-400'
    },
    { 
      name: 'Mobile Application', 
      icon: <Smartphone size={20} />, 
      path: '/Frontend/src/ServicesPages/mobile.jsx',
      description: 'iOS & Android apps',
      gradient: 'from-indigo-500 to-blue-400'
    },
    { 
      name: 'Digital Marketing', 
      icon: <TrendingUp size={20} />, 
      path: '/Frontend/src/ServicesPages/Digital.jsx',
      description: 'SEO, SMM, PPC campaigns',
      gradient: 'from-teal-500 to-cyan-400'
    },
    { 
      name: 'Graphics Designing', 
      icon: <Palette size={20} />, 
      path: '/Frontend/src/ServicesPages/Graphic.jsx',
      description: 'Logo, banners, UI designs',
      gradient: 'from-pink-500 to-rose-400'
    },
    { 
      name: 'Bulk SMS Services', 
      icon: <MessageSquare size={20} />, 
      path: '/Frontend/src/ServicesPages/Bulk.jsx',
      description: 'Marketing & transactional SMS',
      gradient: 'from-violet-500 to-purple-400'
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
    }, 200);
  };

  return (
    <nav className={`bg-gray-900 text-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'shadow-2xl border-b border-gray-800 backdrop-blur-lg bg-gray-900/95' 
        : 'shadow-lg'
    }`}>
      {/* Animated gradient border top */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient-x"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with glow effect */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer relative">
            <div className="relative">
              {/* <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div> */}
              <img src={logo} alt="SA Infotech Logo" className="h-16 w-auto relative transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                SA Infotech
              </span> */}
              {/* <span className="text-xs text-gray-400 font-medium">Transforming Ideas into Reality</span> */}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 2).map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="relative group px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}

            {/* Services Dropdown - Enhanced */}
            <div 
              className="relative"
              ref={serviceRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="group px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-cyan-900/20 transition-all duration-300 cursor-pointer flex items-center gap-2 relative"
              >
                <Zap size={18} className="text-yellow-400 animate-pulse group-hover:animate-none" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  Services
                </span>
                <ChevronDown size={16} className={`text-blue-400 transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              {/* Enhanced Dropdown Menu */}
              {serviceOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[480px] bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown Header */}
                  <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          Our Services
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">Professional solutions for your business</p>
                      </div>
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-700/30">
                        <Sparkles size={20} className="text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="group relative p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                          onClick={() => setServiceOpen(false)}
                        >
                          {/* Gradient background effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          
                          <div className="flex items-start gap-3 relative">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                              {React.cloneElement(service.icon, { className: "text-white" })}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                                  {service.name}
                                </p>
                                <ChevronDown size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 rotate-90 transition-all duration-300" />
                              </div>
                              <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Dropdown Footer */}
                  <div className="p-4 border-t border-gray-800 bg-gray-900">
                    <Link
                      to="/services"
                      className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
                      onClick={() => setServiceOpen(false)}
                    >
                      <span>View All Services</span>
                      <ChevronDown size={16} className="rotate-90" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(2).map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="relative group px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              {isOpen ? (
                <X size={26} className="text-red-400 transform group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={26} className="text-blue-400 transform group-hover:rotate-180 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Animated Overlay */}
          <div 
            className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 backdrop-blur-lg"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>
          
          {/* Enhanced Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 shadow-2xl overflow-y-auto animate-slide-in">
            <div className="p-6 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="flex items-center justify-between">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={logo} alt="SA Infotech Logo" className="h-12 w-auto" />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      SA Infotech
                    </span>
                    <span className="text-xs text-gray-400">Innovate. Create. Elevate.</span>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer hover:rotate-90"
                >
                  <X size={24} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-1">
              {navItems.filter(item => item.name !== 'Services').map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 hover:bg-gray-800/50 rounded-xl hover:text-blue-400 transition-all duration-300 cursor-pointer font-medium group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white">{item.name}</span>
                  <ChevronDown size={16} className="ml-auto text-blue-400 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              
              {/* Mobile Services Accordion */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl hover:bg-gray-800/50 hover:text-blue-400 transition-all duration-300 cursor-pointer font-medium group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                      <Zap size={18} className="text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white">Our Services</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-blue-400 transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {serviceOpen && (
                  <div className="ml-4 mt-3 space-y-2 max-h-[60vh] overflow-y-auto pr-2 animate-fade-in">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group border-l-4 border-l-transparent group-hover:border-l-blue-500"
                        onClick={() => {
                          setIsOpen(false);
                          setServiceOpen(false);
                        }}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                          {React.cloneElement(service.icon, { className: "text-white" })}
                        </div>
                        <div>
                          <p className="font-medium text-gray-200 group-hover:text-white">
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-6 p-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 px-4 text-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #0891b2);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;