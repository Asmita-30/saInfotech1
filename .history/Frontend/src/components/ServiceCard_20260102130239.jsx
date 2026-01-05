// components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <Link 
      to={service.link}
      className="group block"
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
        <div className="flex items-start justify-between mb-6">
          <span className="text-4xl">{service.icon}</span>
          <span className="gradient-bg text-white text-sm font-bold px-3 py-1 rounded-full">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>
        
        <div className="space-y-2 mb-8">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">
                +{service.features.length - 3} more
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
          Explore Service
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;