import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMobileAlt, 
  FaDesktop, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaServer,
  FaAndroid,
  FaApple,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaArrowRight,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaPalette,
  FaChartLine
} from 'react-icons/fa';
import { SiJavascript, SiKotlin, SiSwift } from 'react-icons/si';

const MobileApplication = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  // Development services data
  const mobileServices = [
    {
      id: 1,
      title: "iOS Development",
      description: "Native iOS apps using Swift and SwiftUI with modern design patterns.",
      icon: <FaApple className="text-4xl text-gray-800" />,
      languages: ["Swift", "SwiftUI", "Objective-C"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-gray-800 to-gray-900",
      accentColor: "bg-gray-800"
    },
    {
      id: 2,
      title: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for optimal performance.",
      icon: <FaAndroid className="text-4xl text-green-600" />,
      languages: ["Kotlin", "Java", "Jetpack Compose"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-green-600 to-emerald-700",
      accentColor: "bg-green-600"
    },
    {
      id: 3,
      title: "Cross-Platform",
      description: "Cross-platform mobile apps using React Native and Flutter for code reusability.",
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      languages: ["React Native", "Flutter", "JavaScript"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-blue-500 to-cyan-600",
      accentColor: "bg-blue-500"
    }
  ];

  const softwareServices = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern web applications using React, Vue.js, and Angular with responsive design.",
      icon: <FaDesktop className="text-4xl text-purple-600" />,
      languages: ["JavaScript", "TypeScript", "React", "Vue.js"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-purple-600 to-indigo-700",
      accentColor: "bg-purple-600"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Scalable server-side applications with Node.js, Python, and Java.",
      icon: <FaServer className="text-4xl text-red-500" />,
      languages: ["Node.js", "Python", "Java", "C#"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-red-500 to-orange-600",
      accentColor: "bg-red-500"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, and containerization solutions.",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      languages: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      color: "from-blue-400 to-cyan-500",
      accentColor: "bg-blue-400"
    }
  ];

  // Enhanced Programming languages data with better icons and animations
  const languages = [
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="text-2xl" />, 
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
      hoverColor: "bg-yellow-500 text-white border-yellow-600",
      shadow: "hover:shadow-yellow-200",
      iconColor: "text-yellow-600",
      description: "The language of the web"
    },
    { 
      name: "Python", 
      icon: <FaPython className="text-2xl" />, 
      color: "bg-blue-100 text-blue-800 border-blue-300",
      hoverColor: "bg-blue-500 text-white border-blue-600",
      shadow: "hover:shadow-blue-200",
      iconColor: "text-blue-600",
      description: "Versatile and powerful"
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-2xl" />, 
      color: "bg-red-100 text-red-800 border-red-300",
      hoverColor: "bg-red-500 text-white border-red-600",
      shadow: "hover:shadow-red-200",
      iconColor: "text-red-600",
      description: "Enterprise-grade applications"
    },
    { 
      name: "React", 
      icon: <FaReact className="text-2xl" />, 
      color: "bg-cyan-100 text-cyan-800 border-cyan-300",
      hoverColor: "bg-cyan-500 text-white border-cyan-600",
      shadow: "hover:shadow-cyan-200",
      iconColor: "text-cyan-600",
      description: "Modern UI library"
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-2xl" />, 
      color: "bg-green-100 text-green-800 border-green-300",
      hoverColor: "bg-green-500 text-white border-green-600",
      shadow: "hover:shadow-green-200",
      iconColor: "text-green-600",
      description: "JavaScript runtime"
    },
    { 
      name: "Swift", 
      icon: <SiSwift className="text-2xl" />, 
      color: "bg-gray-100 text-gray-800 border-gray-300",
      hoverColor: "bg-gray-500 text-white border-gray-600",
      shadow: "hover:shadow-gray-200",
      iconColor: "text-gray-600",
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
  ];

  // InfoTech offerings
  const infoTechOfferings = [
    {
      title: "Custom Mobile App Development",
      icon: <FaMobileAlt />,
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Enterprise Software Solutions",
      icon: <FaCogs />,
      color: "text-purple-600 bg-purple-100"
    },
    {
      title: "UI/UX Design & Prototyping",
      icon: <FaPalette />,
      color: "text-pink-600 bg-pink-100"
    },
    {
      title: "API Development & Integration",
      icon: <FaCode />,
      color: "text-green-600 bg-green-100"
    },
    {
      title: "Cloud Migration Services",
      icon: <FaCloud />,
      color: "text-cyan-600 bg-cyan-100"
    },
    {
      title: "Quality Assurance & Testing",
      icon: <FaChartLine />,
      color: "text-orange-600 bg-orange-100"
    },
    {
      title: "Maintenance & Support",
      icon: <FaServer />,
      color: "text-red-600 bg-red-100"
    },
    {
      title: "Performance Optimization",
      icon: <FaRocket />,
      color: "text-yellow-600 bg-yellow-100"
    }
  ];

  // Header with enhanced animation
  // const Header = () => (
  //   <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
  //     {/* Animated background elements */}
  //     {/* <div className="absolute inset-0 overflow-hidden">
  //       {[...Array(20)].map((_, i) => (
  //         <motion.div
  //           key={i}
  //           className="absolute rounded-full bg-white/10"
  //           initial={{ 
  //             y: -100,
  //             x: Math.random() * 100 + 'vw',
  //             scale: Math.random() * 0.5 + 0.5
  //           }}
  //           animate={{ 
  //             y: window.innerHeight + 100,
  //             rotate: 360
  //           }}
  //           transition={{
  //             duration: Math.random() * 10 + 10,
  //             repeat: Infinity,
  //             delay: Math.random() * 5
  //           }}
  //           style={{
  //             width: Math.random() * 20 + 10,
  //             height: Math.random() * 20 + 10
  //           }}
  //         />
  //       ))}
  //     </div> */}
      
  //     <div className="relative container mx-auto px-4 py-16 md:py-24">
  //       <motion.div
  //         initial={{ opacity: 0, y: -30 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.8, type: "spring" }}
  //         className="text-center"
  //       >
  //         <motion.div
  //           initial={{ scale: 0 }}
  //           animate={{ scale: 1 }}
  //           transition={{ delay: 0.2, type: "spring" }}
  //           className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6"
  //         >
  //           <FaCode className="text-3xl text-white" />
  //         </motion.div>
          
  //         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
  //           Mobile & Software <span className="text-yellow-300">Development</span>
  //         </h1>
  //         <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
  //           Transforming ideas into powerful digital solutions with cutting-edge technologies
  //         </p>
          
  //         <motion.div 
  //           className="flex flex-wrap justify-center gap-4"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.4 }}
  //         >
  //           <motion.button
  //             whileHover={{ scale: 1.05 }}
  //             whileTap={{ scale: 0.95 }}
  //             onClick={() => setActiveTab('mobile')}
  //             className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'mobile' ? 'bg-white text-blue-600 shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}
  //           >
  //             <span className="flex items-center">
  //               <FaMobileAlt className="mr-2" />
  //               Mobile Development
  //             </span>
  //           </motion.button>
            
  //           <motion.button
  //             whileHover={{ scale: 1.05 }}
  //             whileTap={{ scale: 0.95 }}
  //             onClick={() => setActiveTab('software')}
  //             className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'software' ? 'bg-white text-purple-600 shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}`}
  //           >
  //             {/* <span className="flex items-center">
  //               <FaDesktop className="mr-2" />
  //               Software Development
  //             </span> */}
  //           </motion.button>
  //         </motion.div>
  //       </motion.div>
  //     </div>
  //   </header>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* What is Mobile/Software Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is {activeTab === 'mobile' ? 'Mobile Development' : 'Software Development'}?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {activeTab === 'mobile' 
                    ? "Mobile development is the process of creating software applications that run on mobile devices like smartphones and tablets. It involves designing, building, testing, and deploying apps for platforms like iOS and Android, either natively or using cross-platform frameworks."
                    : "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. It follows a structured process to deliver high-quality software products."}
                </p>
                
                {/* Enhanced Language Buttons with Hover Effects */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Core Technologies We Use:</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang, index) => (
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
                        
                        {/* Tooltip on hover */}
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
                    src={activeTab === 'mobile' 
                      ? "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    } 
                    alt={activeTab === 'mobile' ? "Mobile Development" : "Software Development"} 
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
                      {activeTab === 'mobile' ? "Build for Mobile First" : "Enterprise-Grade Solutions"}
                    </motion.h3>
                    <p className="text-gray-300">
                      {activeTab === 'mobile' 
                        ? "Creating engaging mobile experiences that users love"
                        : "Building robust software solutions for business growth"}
                    </p>
                  </div>
                </motion.div>
                
                {/* Floating animation elements */}
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
                  {activeTab === 'mobile' ? <FaMobileAlt /> : <FaCode />}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Cards with Enhanced Hover Effects */}
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
                {activeTab === 'mobile' ? 'Mobile' : 'Software'}
              </span> Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge solutions tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'mobile' ? mobileServices : softwareServices).map((service, index) => (
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
                {/* Card shadow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl">
                  {/* Image container with gradient overlay */}
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
                    
                    {/* Icon with animation */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === service.id ? 360 : 0,
                        scale: hoveredCard === service.id ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Title overlay */}
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
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
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
                    
                    {/* Action button with animation */}
                    <motion.div 
                      className="flex justify-between items-center"
                      animate={{ 
                        x: hoveredCard === service.id ? 10 : 0
                      }}
                    >
                      <span className="text-blue-600 font-semibold flex items-center">
                        Explore Details 
                        <motion.span
                          animate={{ x: hoveredCard === service.id ? 10 : 0 }}
                          className="ml-2"
                        >
                          <FaArrowRight />
                        </motion.span>
                      </span>
                      <motion.div
                        whileHover={{ rotate: 90 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 border border-blue-200"
                      >
                        <FaArrowRight />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Hover border effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${service.accentColor.split('-')[1]}-500 transition-all duration-500 pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* InfoTech Services with Enhanced Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-[1.005] transition-transform duration-500">
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-block p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              >
                <FaLightbulb className="text-3xl text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                What <span className="text-blue-600">SA InfoTech</span> Provides
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We deliver end-to-end digital solutions tailored to your business needs, 
                combining technical expertise with innovative approaches to drive your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoTechOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    y: -10,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${offering.color} mr-4`}
                    >
                      {offering.icon}
                    </motion.div>
                    <h3 className="font-bold text-gray-800 text-lg pt-1">{offering.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive solutions with industry best practices and cutting-edge technology for maximum impact.
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Section with Enhanced Visuals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-5"
        >
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose <span className="text-yellow-300">Our Development</span> Services
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We combine technical excellence with creative innovation to deliver exceptional results
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-700/30 text-center"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <FaMobileAlt className="text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Responsive Design</h3>
                  <p className="text-gray-300">
                    Seamless experience across all devices from desktop to mobile with adaptive layouts that ensure optimal viewing.
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 text-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <FaCloud className="text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">High Performance</h3>
                  <p className="text-gray-300">
                    Optimized code and architecture for fast loading and smooth user experience with industry-leading performance metrics.
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-8 rounded-2xl backdrop-blur-sm border border-green-700/30 text-center"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <FaServer className="text-4xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                  <p className="text-gray-300">
                    Future-proof applications that grow with your business and user base, built on scalable cloud architectures.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MobileApplication;