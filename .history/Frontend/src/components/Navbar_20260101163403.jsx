import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-dark-bg text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">

            <img 
  src='/Frontend/src/assets/logo.jpeg'
  alt="SA Infotech Logo" 
  className="h-10 w-auto"
/>

 
            {/* <div className="gradient-bg text-white font-bold text-xl p-2 rounded-lg">
              SA
            </div>
            <span className="text-xl font-bold">
              Infotech<span className="text-primary-blue">.</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-primary-blue transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button className="gradient-bg text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 hover:text-primary-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="gradient-bg text-white px-6 py-2 rounded-lg mt-4 w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;