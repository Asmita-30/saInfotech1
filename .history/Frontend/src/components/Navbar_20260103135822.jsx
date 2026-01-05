import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const serviceRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

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
      path: '/services/OnSide',
      description: 'Dedicated team at your location',
      gradient: 'from-green-500 to-emerald-400'
    },
    { 
      name: 'Website Development', 
      icon: <Code size={20} />, 
      path: '/services/Website',
      description: 'Custom websites and web apps',
      gradient: 'from-orange-500 to-yellow-400'
    },
    { 
      name: 'Software Development', 
      icon: <Cpu size={20} />, 
      path: '/services/SoftwareDevelopment',
      description: 'Desktop & enterprise software',
      gradient: 'from-red-500 to-rose-400'
    },
    { 
      name: 'Mobile Application', 
      icon: <Smartphone size={20} />, 
      path: '/services/MobileApplication',
      description: 'iOS & Android apps',
      gradient: 'from-indigo-500 to-blue-400'
    },
    { 
      name: 'Digital Marketing', 
      icon: <TrendingUp size={20} />, 
      path: '/services/Digital',
      description: 'SEO, SMM, PPC campaigns',
      gradient: 'from-teal-500 to-cyan-400'
    },
    { 
      name: 'Graphics Designing', 
      icon: <Palette size={20} />, 
      path: '/services/Graphics',
      description: 'Logo, banners, UI designs',
      gradient: 'from-pink-500 to-rose-400'
    },
    { 
      name: 'Bulk SMS Services', 
      icon: <MessageSquare size={20} />, 
      path: '/services/Bulksms',
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

  // Handle mobile navigation
  const handleMobileNavigation = (path) => {
    setIsOpen(false);
    setServiceOpen(false);
    // Navigate immediately
    navigate(path);
  };

  return (
    <nav className={`bg-gray-900 text-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'shadow-2xl border-b border-gray-800 backdrop-blur-lg bg-gray-900/95' 
        : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced glow effect */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500 group-hover:duration-200"></div>
              <img 
                src={logo} 
                alt="SA Infotech Logo" 
                className="h-16 w-auto relative transform group-hover:scale-105 transition-all duration-300 group-hover:rotate-2 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
              />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                SA Infotech
              </span> */}
              {/* <span className="text-xs text-gray-400 font-medium">Transforming Ideas into Reality</span> */}
            </div>
          </Link>

          {/* Desktop Menu with Enhanced Animations */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 2).map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="relative group px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {item.icon}
                  </span>
                  <span className="relative">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-all duration-300 relative z-10 group-hover:tracking-wide">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}

            {/* Services Dropdown with Enhanced Animations */}
            <div 
              className="relative"
              ref={serviceRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="group px-4 py-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-2 relative"
                onMouseEnter={() => setHoveredItem('Services')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative">
                  <Zap 
                    size={18} 
                    className="text-yellow-400 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-yellow-300" 
                  />
                  <div className="absolute -inset-1 bg-yellow-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <span className="relative">
                  <span className="text-gray-300 group-hover:text-white transition-all duration-300 relative z-10 group-hover:tracking-wide">
                    Services
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-orange-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></span>
                </span>
                <ChevronDown
                  size={16}
                  className={`text-blue-400 transition-all duration-300 ${
                    serviceOpen ? 'rotate-180' : ''
                  } group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {serviceOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl z-50 animate-fade-in">
                  
                  {/* Header with animation */}
                  <div className="px-4 py-3 border-b border-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-sm font-semibold text-blue-400 relative z-10 transform transition-all duration-300 group-hover:scale-105">
                      Our Services
                    </h3>
                    <p className="text-xs text-gray-400 relative z-10">
                      Professional IT Solutions
                    </p>
                  </div>

                  {/* SERVICES LIST – SINGLE COLUMN with enhanced hover */}
                  <div className="p-3 max-h-[60vh] overflow-y-auto space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setServiceOpen(false)}
                        className="group flex items-center gap-3 p-2 rounded-md bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
                        onMouseEnter={() => setHoveredItem(service.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"></div>
                        
                        {/* Icon with pulse animation */}
                        <div className={`p-1.5 rounded-md bg-gradient-to-br ${service.gradient} relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                          <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-md blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {React.cloneElement(service.icon, {
                            size: 16,
                            className: 'text-white relative z-10',
                          })}
                        </div>

                        {/* Text with glow effect */}
                        <div className="flex-1 relative z-10">
                          <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-all duration-300 group-hover:tracking-wide relative">
                            {service.name}
                            <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                          </p>
                          <p className="text-[11px] text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-0.5">
                            {service.description}
                          </p>
                        </div>

                        <ChevronDown
                          size={14}
                          className="rotate-90 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Footer with enhanced button */}
                  <div className="p-3 border-t border-gray-800">
                    <Link
                      to="/services"
                      onClick={() => setServiceOpen(false)}
                      className="block text-center text-sm py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">View All Services</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
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
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {item.icon}
                  </span>
                  <span className="relative">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-all duration-300 relative z-10 group-hover:tracking-wide">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-cyan-500/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}

            {/* CTA Button with enhanced animations */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <button 
            className="lg:hidden p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              {isOpen ? (
                <X size={26} className="text-red-400 transform group-hover:rotate-90 transition-all duration-300 group-hover:scale-110" />
              ) : (
                <Menu size={26} className="text-blue-400 transform group-hover:rotate-180 transition-all duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu - SIMPLIFIED VERSION */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Overlay with animation */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar with slide-in animation */}
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-800 shadow-2xl transform transition-all duration-500 animate-slide-in">
            <div className="p-4 border-b border-gray-800 bg-gray-800/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-between relative z-10">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 group"
                  onClick={() => setIsOpen(false)}
                >
                  <img 
                    src={logo} 
                    alt="SA Infotech Logo" 
                    className="h-12 w-auto transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2" 
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <X size={24} className="text-gray-300 hover:text-red-400" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
              {/* Main Navigation Items with enhanced hover */}
              {navItems.map((item) => (
                <div
                  key={item.name} 
                  onClick={() => handleMobileNavigation(item.path)}
                  className="flex items-center gap-3 py-3 px-3 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer font-medium group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-900/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-all duration-300 relative z-10 group-hover:tracking-wide group-hover:translate-x-2">
                    {item.name}
                  </span>
                </div>
              ))}
              
              {/* Services Section with enhanced hover */}
              <div className="mt-2 pt-4 border-t border-gray-800">
                <div className="mb-2 px-3">
                  <span className="text-sm font-semibold text-blue-400 group-hover:tracking-wide transition-all duration-300">
                    Our Services
                  </span>
                </div>
                
                <div className="space-y-1">
                  {services.map((service) => (
                    <div
                      key={service.name}
                      onClick={() => handleMobileNavigation(service.path)}
                      className="flex items-center gap-3 py-3 px-3 hover:bg-gray-800 rounded-lg transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10`}>
                        {React.cloneElement(service.icon, { className: "text-white" })}
                      </div>
                      <div className="flex-1 relative z-10">
                        <p className="font-medium text-gray-200 group-hover:text-white transition-all duration-300 group-hover:tracking-wide">
                          {service.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 transition-colors duration-300 group-hover:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button with enhanced animation */}
              <div className="mt-8 p-2">
                <div
                  onClick={() => handleMobileNavigation('/contact')}
                  className="w-full py-3 px-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-300 cursor-pointer relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
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
          animation: slide-in 0.3s ease-out;
        }
        
        /* Text glow effect for hovered items */
        .text-glow {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5),
                       0 0 20px rgba(59, 130, 246, 0.3),
                       0 0 30px rgba(59, 130, 246, 0.2);
        }
        
        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.3);
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 2px;
        }
        
        /* Pulse animation for active items */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Shimmer effect for text */
        .text-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;