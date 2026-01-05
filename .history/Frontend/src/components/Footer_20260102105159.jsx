import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Careers', 'Contact'];
  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'Digital Marketing',
    'Maintenance & Support'
  ];

  return (
    <footer className="bg-dark-bg text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="gradient-bg text-white font-bold text-xl p-2 rounded-lg">
                SA
              </div>
              <span className="text-xl font-bold">
                Infotech<span className="text-primary-blue">.</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Building smart digital solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gradient-primary transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary-blue transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-blue" />
                <span className="text-gray-400">sainfotechs25@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-blue" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-primary-blue" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {2025} SA Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;