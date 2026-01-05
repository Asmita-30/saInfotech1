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

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { name: 'Database Management', icon: <Database />, path: '/services/database', description: 'SQL, NoSQL', gradient: 'from-blue-500 to-cyan-400' },
    { name: 'Managed Services', icon: <Server />, path: '/services/Manged', description: '24/7 IT Support', gradient: 'from-purple-500 to-pink-400' },
    { name: 'On-site Resources', icon: <Users />, path: '/services/OnSide', description: 'Dedicated team', gradient: 'from-green-500 to-emerald-400' },
    { name: 'Website Development', icon: <Code />, path: '/services/Website', description: 'Web solutions', gradient: 'from-orange-500 to-yellow-400' },
    { name: 'Software Development', icon: <Cpu />, path: '/services/SoftwareDevelopment', description: 'Enterprise apps', gradient: 'from-red-500 to-rose-400' },
    { name: 'Mobile Application', icon: <Smartphone />, path: '/services/Mobile', description: 'iOS & Android', gradient: 'from-indigo-500 to-blue-400' },
    { name: 'Digital Marketing', icon: <TrendingUp />, path: '/services/Digital', description: 'SEO & PPC', gradient: 'from-teal-500 to-cyan-400' },
    { name: 'Graphics Designing', icon: <Palette />, path: '/services/Graphics', description: 'UI & Branding', gradient: 'from-pink-500 to-rose-400' },
    { name: 'Bulk SMS Services', icon: <MessageSquare />, path: '/services/Bulksms', description: 'SMS Marketing', gradient: 'from-violet-500 to-purple-400' },
  ];

  /* Close service dropdown on outside click (desktop) */
  useEffect(() => {
    const handler = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={`bg-gray-900 text-white sticky top-0 z-50 ${scrolled ? 'shadow-2xl' : 'shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.slice(0, 2).map(item => (
              <Link key={item.name} to={item.path} className="px-4 py-2 hover:text-blue-400">
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              ref={serviceRef}
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
              className="relative"
            >
              <button className="flex items-center gap-2 px-4 py-2 hover:text-blue-400">
                <Zap size={16} /> Services <ChevronDown size={14} />
              </button>

              {serviceOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl">
                  {services.map(s => (
                    <Link
                      key={s.name}
                      to={s.path}
                      onClick={() => setServiceOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-800"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(2).map(item => (
              <Link key={item.name} to={item.path} className="px-4 py-2 hover:text-blue-400">
                {item.name}
              </Link>
            ))}

            <Link to="/contact" className="ml-4 px-5 py-2 bg-blue-600 rounded-lg">
              Get Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className="fixed right-0 top-0 h-full w-80 bg-gray-900 z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <img src={logo} className="h-10" />
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 rounded hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full text-left py-3 px-3 flex justify-between items-center hover:bg-gray-800 rounded"
              >
                Services <ChevronDown className={serviceOpen ? 'rotate-180' : ''} />
              </button>

              {serviceOpen && (
                <div className="ml-3 space-y-1">
                  {services.map(s => (
                    <Link
                      key={s.name}
                      to={s.path}
                      onClick={() => {
                        setIsOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block py-2 px-3 text-sm hover:bg-gray-800 rounded"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
