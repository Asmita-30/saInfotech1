import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.jpeg";

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
    <footer className="bg-dark-bg text-white pt-3 pb-2 md:pt-10 md:pb-6">
      <div className="container mx-auto px-3 md:px-4">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">

          {/* Company */}
          <div className="col-span-2 md:col-span-1">

            {/* Logo */}
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <img
                src={logo}
                alt="SA Infotech Logo"
                className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-36 lg:h-18 object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-[11px] md:text-sm mb-2 md:mb-3 leading-snug">
              Smart digital solutions for businesses.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-2">
              {socialLinks.map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-gray-800 p-1.5 md:p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs md:text-lg font-semibold mb-1 md:mb-3">
              Links
            </h3>
            <ul className="space-y-0.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 text-[11px] md:text-base hover:text-primary-blue transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Desktop only) */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-primary-blue transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs md:text-lg font-semibold mb-1 md:mb-3">
              Contact
            </h3>

            <div className="space-y-1 md:space-y-3">
              <div className="flex items-center gap-1.5 md:gap-3">
                <Mail size={14} className="text-primary-blue md:size-5" />
                <a
                  href="mailto:sainfotechs25@gmail.com"
                  className="text-gray-400 text-[11px] md:text-base hover:text-primary-blue transition-colors duration-300"
                >
                  sainfotechs25@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-1.5 md:gap-3">
                <Phone size={14} className="text-primary-blue md:size-5" />
                <a
                  href="tel:+918104012686"
                  className="text-gray-400 text-[11px] md:text-base hover:text-primary-blue transition-colors duration-300"
                >
                  +91-8104012686
                </a>
              </div>

              {/* Address hidden on mobile */}
              <div className="flex items-start gap-1.5 md:gap-3">
  <MapPin size={5} className="text-primary-blue mt-0.5 md:size-10" />
  <span className="text-gray-400 text-[11px] md:text-sm leading-snug">
    S-57, Haware Fantasia Business Park, Sector 30A, Vashi,
    Navi Mumbai – 400703
  </span>
</div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-3 md:mt-6 pt-2 md:pt-4 text-center text-[10px] md:text-sm text-gray-500">
          © 2025 SA Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
