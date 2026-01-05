import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <div className="text-white">{service.icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature, idx) => (
            <span key={idx} className="bg-light-gray text-gray-700 px-3 py-1 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>
      <button className="flex items-center text-primary-blue font-semibold hover:text-primary-purple transition-colors">
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;