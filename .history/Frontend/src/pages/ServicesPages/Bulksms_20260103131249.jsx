import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  BarChart3, 
  Shield, 
  Users, 
  Clock, 
  Globe,
  MessageSquare,
  Bell,
  Smartphone,
  Cloud,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const Bulksms = () => {
  const services = [
    {
      id: 1,
      title: "Transactional SMS",
      description: "Instant delivery of OTPs, alerts, and notifications with high reliability",
      icon: <Bell className="w-12 h-12 text-blue-600" />,
      features: ["99.9% Delivery", "Real-time Tracking", "API Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Promotional SMS",
      description: "Reach thousands of customers instantly with promotional campaigns",
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      features: ["Bulk Campaigns", "Scheduling", "Analytics"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "OTP Services",
      description: "Secure OTP delivery for authentication and verification",
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      features: ["Instant Delivery", "High Security", "Two-Factor Auth"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Voice SMS",
      description: "Send voice messages to customers who prefer audio communication",
      icon: <MessageSquare className="w-12 h-12 text-red-600" />,
      features: ["Multi-language", "Custom Voice", "Scheduling"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Mobile Marketing",
      description: "Complete mobile marketing solutions with SMS integration",
      icon: <Smartphone className="w-12 h-12 text-orange-600" />,
      features: ["Segmentation", "Personalization", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Cloud Platform",
      description: "Scalable cloud-based SMS platform for enterprise needs",
      icon: <Cloud className="w-12 h-12 text-cyan-600" />,
      features: ["Auto-scaling", "99.95% Uptime", "Global Reach"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    {
      icon: <Send className="w-8 h-8" />,
      title: "High Speed Delivery",
      description: "Messages delivered in seconds"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Detailed Analytics",
      description: "Real-time reports & insights"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-user Access",
      description: "Team collaboration features"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Send SMS worldwide"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Dual Delivery",
      description: "Primary & fallback routes"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-12 md:mb-20"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Bulk SMS Services by  <span className="text-blue-600 block">SA</span><span className="text-blue-600">Infotech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 px-4">
            Professional SMS solutions for businesses of all sizes. Reach your audience instantly with our reliable, scalable, and feature-rich platform.
          </p>
          
          {/* Animated Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-16"
          >
            {[
              { value: "99.9%", label: "Delivery Rate" },
              { value: "10M+", label: "Messages/Month" },
              { value: "200+", label: "Countries" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 md:p-6 rounded-2xl shadow-lg"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto mb-16 md:mb-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our Bulk SMS Services?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 md:w-8 md:h-8 text-blue-600" })}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-16">
          Our Comprehensive SMS Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6 md:mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-3" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:shadow-lg"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20 md:mt-32 mb-10 md:mb-20 px-4"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Boost Your Business Communication?
          </h2>
          <p className="text-blue-100 mb-8 md:mb-10 text-lg md:text-xl">
            Start your free trial today and experience the power of our Bulk SMS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="mb-2">© 2024 Infotech Bulk SMS Solutions. All rights reserved.</p>
          <p className="text-sm">Reliable | Scalable | Secure | Affordable</p>
        </div>
      </div>
    </div>
  );
};

export default Bulksms;