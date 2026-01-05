import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava } from 'react-icons/fa';

import { 
  FaMobileAlt, 
  FaCode,
  FaAndroid,
  FaApple,
  FaReact,
  FaArrowRight,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaPalette,
  FaChartLine,
  FaServer,
  FaUsers,
  FaShieldAlt,
  FaSyncAlt
} from 'react-icons/fa';
import { SiJavascript, SiKotlin, SiSwift, SiFlutter, SiReact } from 'react-icons/si';

const MobileApplication = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  // Mobile Development services data
  const mobileServices = [
    {
      id: 1,
      title: "iOS Development",
      description: "Native iOS apps using Swift and SwiftUI with modern design patterns. We create seamless, high-performance apps optimized for Apple's ecosystem.",
      icon: <FaApple className="text-4xl text-white" />,
      languages: ["Swift", "SwiftUI", "Objective-C", "Xcode"],
      features: ["App Store Deployment", "ARKit Integration", "In-App Purchases", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-800 to-gray-900",
      accentColor: "bg-gray-800",
      duration: "4-6 weeks"
    },
    {
      id: 2,
      title: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for optimal performance. Building responsive, feature-rich applications for millions of users.",
      icon: <FaAndroid className="text-4xl text-white" />,
      languages: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"],
      features: ["Google Play Store", "Material Design", "Google Maps Integration", "Background Services"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-600 to-emerald-700",
      accentColor: "bg-green-600",
      duration: "4-6 weeks"
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      description: "Cross-platform mobile apps using React Native and Flutter for maximum code reusability. One codebase for both iOS and Android.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
      languages: ["React Native", "Flutter", "JavaScript", "Dart"],
      features: ["Single Codebase", "Faster Development", "Cost Effective", "Hot Reload"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-600",
      accentColor: "bg-blue-500",
      duration: "6-8 weeks"
    }
  ];

  // Mobile Programming languages
  const mobileLanguages = [
    { 
      name: "Swift", 
      icon: <SiSwift className="text-2xl" />, 
      color: "bg-orange-100 text-orange-800 border-orange-300",
      hoverColor: "bg-orange-500 text-white border-orange-600",
      shadow: "hover:shadow-orange-200",
      iconColor: "text-orange-600",
      description: "Apple's modern language"
    },
    { 
      name: "Kotlin", 
      icon: <SiKotlin className="text-2xl" />, 
      color: "bg-purple-100 text-purple-800 border-purple-300",
      hoverColor: "bg-purple-500 text-white border-purple-600",
      shadow: "hover:shadow-purple-200",
      iconColor: "text-purple-600",
      description: "Modern Android development"
    },
    { 
      name: "React Native", 
      icon: <SiReact className="text-2xl" />, 
      color: "bg-cyan-100 text-cyan-800 border-cyan-300",
      hoverColor: "bg-cyan-500 text-white border-cyan-600",
      shadow: "hover:shadow-cyan-200",
      iconColor: "text-cyan-600",
      description: "Cross-platform framework"
    },
    { 
      name: "Flutter", 
      icon: <SiFlutter className="text-2xl" />, 
      color: "bg-blue-100 text-blue-800 border-blue-300",
      hoverColor: "bg-blue-500 text-white border-blue-600",
      shadow: "hover:shadow-blue-200",
      iconColor: "text-blue-600",
      description: "Google's UI toolkit"
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-2xl" />, 
      color: "bg-red-100 text-red-800 border-red-300",
      hoverColor: "bg-red-500 text-white border-red-600",
      shadow: "hover:shadow-red-200",
      iconColor: "text-red-600",
      description: "Android development"
    },
  ];

  // Mobile App Development Process
  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your requirements, target audience, and defining project scope.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-400"
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences.",
      icon: "🎨",
      color: "from-purple-500 to-pink-400"
    },
    {
      step: 3,
      title: "Development",
      description: "Building the application with clean, maintainable code and best practices.",
      icon: "💻",
      color: "from-green-500 to-emerald-400"
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Rigorous testing across devices and platforms to ensure quality.",
      icon: "🧪",
      color: "from-yellow-500 to-orange-400"
    },
    {
      step: 5,
      title: "Deployment",
      description: "Publishing to app stores (Apple App Store & Google Play Store).",
      icon: "🚀",
      color: "from-red-500 to-pink-400"
    },
    {
      step: 6,
      title: "Maintenance & Support",
      description: "Regular updates, bug fixes, and performance optimization.",
      icon: "🔧",
      color: "from-indigo-500 to-purple-400"
    }
  ];

  // Mobile App Benefits
  const mobileBenefits = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Wider Reach",
      description: "Access billions of smartphone users worldwide through app stores.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Enhanced Security",
      description: "Built-in security features and regular updates to protect user data.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaSyncAlt className="text-3xl" />,
      title: "Offline Access",
      description: "Functionality available without internet connection for better user experience.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Higher Engagement",
      description: "Push notifications and personalized content increase user engagement.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  // Header Component
  const Header = () => (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{ 
              y: -100,
              x: Math.random() * 100 + 'vw',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100,
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10
            }}
          />
        ))}
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <FaMobileAlt className="text-4xl text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile App <span className="text-yellow-300">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transforming your ideas into powerful mobile experiences with cutting-edge technologies
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold bg-white text-blue-600 shadow-lg"
            >
              <span className="flex items-center">
                <FaMobileAlt className="mr-2" />
                Start Your Mobile Project
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* What is Mobile Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  What is Mobile App Development?
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Mobile development is the process of creating software applications that run on mobile devices 
                  like smartphones and tablets. It involves designing, building, testing, and deploying apps 
                  for platforms like iOS and Android, either natively or using cross-platform frameworks.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                    <FaCode className="mr-2" />
                    Core Mobile Technologies We Use:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {mobileLanguages.map((lang, index) => (
                      <motion.button
                        key={lang.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -5, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={() => setHoveredLanguage(lang.name)}
                        onMouseLeave={() => setHoveredLanguage(null)}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl border-2 transition-all duration-300 ${lang.color} ${lang.shadow} ${hoveredLanguage === lang.name ? lang.hoverColor : ''}`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-2 ${lang.iconColor} ${hoveredLanguage === lang.name ? 'text-white' : ''}`}>
                            {lang.icon}
                          </div>
                          <span className="font-bold">{lang.name}</span>
                        </div>
                        
                        <AnimatePresence>
                          {hoveredLanguage === lang.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="mt-2 text-xs font-medium"
                            >
                              {lang.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mobile App Development"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-2xl font-bold mb-2"
                    >
                      Build for Mobile First
                    </motion.h3>
                    <p className="text-gray-300">
                      Creating engaging mobile experiences that users love
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-xl"
                >
                  <FaMobileAlt />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Development Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mobile App
              </span> Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert mobile solutions for iOS, Android, and cross-platform development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -20,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl">
                  {/* Image container */}
                  <div className="relative overflow-hidden h-56">
                    <motion.img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredCard === service.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === service.id ? 360 : 0,
                        scale: hoveredCard === service.id ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-6 right-6 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === service.id ? "100px" : "60px" }}
                        className="h-1 bg-white mt-2 rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Card content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
                        <FaCode className="mr-2" />
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.languages.map((lang, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                          >
                            {lang}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
                        <FaCogs className="mr-2" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium text-center"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="ml-2 font-bold text-gray-800">{service.duration}</span>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 90 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 border border-blue-200"
                      >
                        <FaArrowRight />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-block p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              >
                <FaLightbulb className="text-3xl text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Mobile App <span className="text-blue-600">Development Process</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A structured approach to deliver high-quality mobile applications on time and within budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${process.color} flex items-center justify-center text-2xl text-white mr-4`}
                      >
                        {process.icon}
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">STEP {process.step}</div>
                        <h3 className="font-bold text-gray-800 text-lg">{process.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {process.description}
                    </p>
                    
                    {/* Step connector for desktop */}
                    {index < developmentProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Benefits of <span className="text-yellow-300">Mobile Apps</span>
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Why investing in a mobile application is crucial for your business growth
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mobileBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  >
                    <div className="flex items-start">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${benefit.color} bg-opacity-20 backdrop-blur-sm mr-4`}>
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <FaRocket className="text-4xl text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your idea into a successful mobile application
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold bg-white text-blue-600 shadow-lg text-lg"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileApplication;