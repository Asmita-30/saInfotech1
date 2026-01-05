import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Careers', 'Contact'];
  const services = [
    'Database Managed Services',
    'Web Development',
    'Software Application',
    'Mobile App Development',
    'Bulk SMS Services',
    'Digital Marketing',
  ];

  return (
    <footer className="bg-dark-bg text-white pt-6 pb-4 md:pt-12 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="gradient-bg text-white font-bold text-base md:text-xl p-2 rounded-lg">
                SA
              </div>
              <span className="text-base md:text-xl font-bold">
                Infotech<span className="text-primary-blue">.</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">
              Building smart digital solutions for businesses worldwide.
            </p>

            <div className="flex space-x-3 md:space-x-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-gradient-primary transition-all"
                >
                  <Icon size={16} className="md:size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 text-sm md:text-base hover:text-primary-blue transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Services
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm md:text-base hover:text-primary-blue transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail size={16} className="text-primary-blue md:size-5" />
                <span className="text-gray-400 text-sm md:text-base">
                  sainfotechs25@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone size={16} className="text-primary-blue md:size-5" />
                <span className="text-gray-400 text-sm md:text-base">
                  +91-8104012686
                </span>
              </div>

              <div className="flex items-start space-x-2 md:space-x-3">
                <MapPin size={16} className="text-primary-blue md:size-5 mt-1" />
                <span className="text-gray-400 text-sm md:text-base hidden sm:block">
                  S-57, Haware Fantasia Business Park, 203, Sector 30A, Vashi,
                  Navi Mumbai, Maharashtra 400703
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-8 text-center text-xs md:text-sm text-gray-500">
          <p>© 2025 SA Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
