import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  FaJava
} from 'react-icons/fa';

const MobileApplication = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  // Development services data
  const mobileServices = [
    {
      id: 1,
      title: "iOS Development",
      description: "Native iOS apps using Swift and SwiftUI with modern design patterns.",
      icon: <FaApple className="text-4xl text-gray-700" />,
      languages: ["Swift", "SwiftUI", "Objective-C"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for optimal performance.",
      icon: <FaAndroid className="text-4xl text-green-600" />,
      languages: ["Kotlin", "Java", "Jetpack Compose"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Cross-Platform",
      description: "Cross-platform mobile apps using React Native and Flutter for code reusability.",
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      languages: ["React Native", "Flutter", "JavaScript"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const softwareServices = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern web applications using React, Vue.js, and Angular with responsive design.",
      icon: <FaDesktop className="text-4xl text-purple-600" />,
      languages: ["JavaScript", "TypeScript", "React", "Vue.js"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Scalable server-side applications with Node.js, Python, and Java.",
      icon: <FaServer className="text-4xl text-red-500" />,
      languages: ["Node.js", "Python", "Java", "C#"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, and containerization solutions.",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      languages: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Programming languages data
  const languages = [
    { name: "JavaScript", icon: <FaCode className="text-xl" />, color: "bg-yellow-100 text-yellow-800" },
    { name: "Python", icon: <FaPython className="text-xl" />, color: "bg-blue-100 text-blue-800" },
    { name: "Java", icon: <FaJava className="text-xl" />, color: "bg-red-100 text-red-800" },
    { name: "React", icon: <FaReact className="text-xl" />, color: "bg-cyan-100 text-cyan-800" },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" />, color: "bg-green-100 text-green-800" },
    { name: "Swift", icon: <FaApple className="text-xl" />, color: "bg-gray-100 text-gray-800" },
    { name: "Kotlin", icon: <FaAndroid className="text-xl" />, color: "bg-purple-100 text-purple-800" },
  ];

  // InfoTech offerings
  const infoTechOfferings = [
    "Custom Mobile App Development",
    "Enterprise Software Solutions",
    "UI/UX Design & Prototyping",
    "API Development & Integration",
    "Cloud Migration Services",
    "Quality Assurance & Testing",
    "Maintenance & Support",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile & Software Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Transforming ideas into powerful digital solutions with cutting-edge technologies
            </p>
          </motion.div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-12 relative z-10">
        <div className="flex justify-center">
          <div className="inline-flex rounded-lg bg-white shadow-lg overflow-hidden">
            <button
              className={`px-6 py-4 md:px-8 md:py-5 text-lg font-medium transition-all duration-300 ${activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('mobile')}
            >
              <div className="flex items-center">
                <FaMobileAlt className="mr-3" />
                Mobile Development
              </div>
            </button>
            <button
              className={`px-6 py-4 md:px-8 md:py-5 text-lg font-medium transition-all duration-300 ${activeTab === 'software' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('software')}
            >
              <div className="flex items-center">
                <FaCode className="mr-3" />
                Software Development
              </div>
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* What is Mobile/Software Development Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is {activeTab === 'mobile' ? 'Mobile Development' : 'Software Development'}?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 text-lg mb-6">
                  {activeTab === 'mobile' 
                    ? "Mobile development is the process of creating software applications that run on mobile devices like smartphones and tablets. It involves designing, building, testing, and deploying apps for platforms like iOS and Android, either natively or using cross-platform frameworks."
                    : "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. It follows a structured process to deliver high-quality software products."}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-center px-4 py-2 rounded-full ${lang.color}`}
                    >
                      {lang.icon}
                      <span className="ml-2 font-medium">{lang.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={activeTab === 'mobile' 
                    ? "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  } 
                  alt={activeTab === 'mobile' ? "Mobile Development" : "Software Development"} 
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                  <h3 className="text-white text-xl font-bold">
                    {activeTab === 'mobile' ? "Build for Mobile First" : "Enterprise-Grade Solutions"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our {activeTab === 'mobile' ? 'Mobile' : 'Software'} Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'mobile' ? mobileServices : softwareServices).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.languages.map((lang, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">Learn More →</span>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <FaCode />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* InfoTech Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              What InfoTech Provides
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl">
              We deliver end-to-end digital solutions tailored to your business needs, 
              combining technical expertise with innovative approaches.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoTechOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <FaDatabase />
                    </div>
                    <h3 className="font-bold text-gray-800">{offering}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Comprehensive solutions with industry best practices and cutting-edge technology.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Why Choose Our Development Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6">
                  <FaMobileAlt className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
                <p className="text-gray-300">
                  Seamless experience across all devices from desktop to mobile with adaptive layouts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-6">
                  <FaCloud className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Performance</h3>
                <p className="text-gray-300">
                  Optimized code and architecture for fast loading and smooth user experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
                  <FaServer className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
                <p className="text-gray-300">
                  Future-proof applications that grow with your business and user base.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">InfoTech Solutions</h3>
              <p className="text-gray-400">
                Leading provider of mobile and software development services with a focus on innovation and quality.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mobile App Development</li>
                <li>Web Application Development</li>
                <li>UI/UX Design</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {languages.slice(0, 5).map((lang) => (
                  <span 
                    key={lang.name} 
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} InfoTech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileApplication;