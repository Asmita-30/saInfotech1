import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="SA Infotech Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold">
            SA<span className="text-primary-blue">Infotech</span>
          </span>
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
          {/* <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-dark-bg shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-xl font-bold">
            SA<span className="text-primary-blue">Infotech</span>
          </span>
          <button onClick={() => setIsOpen(false)} className="focus:outline-none">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-primary-blue text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg mt-4 w-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
