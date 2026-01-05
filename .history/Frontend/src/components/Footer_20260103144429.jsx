import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
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

  // Social media links
  const socialLinks = [
    {
      Icon: Facebook,
      link: 'https://www.facebook.com/people/SA-infotechs/61573905925502/', 
      label: 'Facebook'
    },
  
    {
      Icon: Linkedin,
      link: 'https://www.linkedin.com/company/sa-infotechs/', 
      label: 'LinkedIn'
    },
    {
      Icon: Instagram,
      link: 'https://www.instagram.com/sainfotechs/', 
      label: 'Instagram'
    },
  ];

  return (
    <footer className="bg-dark-bg text-white pt-4 pb-3 md:pt-12 md:pb-8">
      <div className="container mx-auto px-3 md:px-4">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">

          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-2 md:mb-4">
              <div className="gradient-bg text-white font-bold text-xs md:text-xl px-2 py-1 md:p-2 rounded-md">
                SA
              </div>
              <span className="text-xs md:text-xl font-bold">
                Infotech<span className="text-primary-blue">.</span>
              </span>
            </div>

            <p className="text-gray-400 text-xs md:text-base mb-2 md:mb-4 leading-tight">
              Smart digital solutions for businesses.
            </p>

            <div className="flex space-x-2 md:space-x-4">
              {socialLinks.map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-1.5 md:p-2 rounded-full hover:bg-gradient-primary transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={14} className="md:size-5 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs md:text-lg font-semibold mb-1 md:mb-4">
              Links
            </h3>
            <ul className="space-y-0.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 text-xs md:text-base hover:text-primary-blue transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (HIDDEN ON MOBILE) */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-blue transition-colors duration-300 hover:underline"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs md:text-lg font-semibold mb-1 md:mb-4">
              Contact
            </h3>

            <div className="space-y-1 md:space-y-3">
              <div className="flex items-center space-x-1.5 md:space-x-3">
                <Mail size={14} className="text-primary-blue md:size-5" />
                <a 
                  href="mailto:sainfotechs25@gmail.com"
                  className="text-gray-400 text-xs md:text-base hover:text-primary-blue transition-colors duration-300 hover:underline"
                >
                  sainfotechs25@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-1.5 md:space-x-3">
                <Phone size={14} className="text-primary-blue md:size-5" />
                <a 
                  href="tel:+918104012686"
                  className="text-gray-400 text-xs md:text-base hover:text-primary-blue transition-colors duration-300 hover:underline"
                >
                  +91-8104012686
                </a>
              </div>

              {/* Address hidden on mobile */}
              <div className="hidden md:flex items-start space-x-3">
                <MapPin size={20} className="text-primary-blue mt-1" />
                <span className="text-gray-400">
                  S-57, Haware Fantasia Business Park, Sector 30A, Vashi,
                  Navi Mumbai – 400703
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-3 md:mt-8 pt-2 md:pt-8 text-center text-[10px] md:text-sm text-gray-500">
          © 2025 SA Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;