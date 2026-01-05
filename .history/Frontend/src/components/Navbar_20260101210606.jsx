import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  PenTool,
  Cloud,
  Megaphone,
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
    { name: 'Website Development', icon: <Globe size={18} />, path: '/services/web' },
    { name: 'Mobile Development', icon: <Smartphone size={18} />, path: '/services/mobile' },
    { name: 'UI/UX Design', icon: <PenTool size={18} />, path: '/services/ui-ux' },
    { name: 'Cloud Solutions', icon: <Cloud size={18} />, path: '/services/cloud' },
    { name: 'Marketing Services', icon: <Megaphone size={18} />, path: '/services/marketing' },
  ];

  return (
    <nav className="bg-dark-bg text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="SA Infotech Logo" className="h-12" />
          <span className="text-xl font-bold">
            SA<span className="text-primary-blue">Infotech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.name} to={item.path} className="hover:text-primary-blue">
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-blue">
              Services <ChevronDown size={16} />
            </button>

            {serviceOpen && (
              <div className="absolute top-10 left-0 w-64 bg-dark-bg border border-gray-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {/* Scrollbar styling */}
                <div className="max-h-56 overflow-y-auto custom-scrollbar">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors duration-200"
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.slice(2).map((item) => (
            <Link key={item.name} to={item.path} className="hover:text-primary-blue">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-dark-bg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <span className="text-xl font-bold">
            SA<span className="text-primary-blue">Infotech</span>
          </span>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {navItems.filter(item => item.name !== 'Services').map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-primary-blue transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-primary-blue transition-colors duration-200"
            >
              <span>Services</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {serviceOpen && (
              <div className="mt-2 ml-4 max-h-64 overflow-y-auto custom-scrollbar">
                <div className="space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => {
                        setIsOpen(false);
                        setServiceOpen(false);
                      }}
                      className="flex items-center gap-3 py-2 hover:text-primary-blue transition-colors duration-200"
                    >
                      {service.icon}
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4b5563;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;