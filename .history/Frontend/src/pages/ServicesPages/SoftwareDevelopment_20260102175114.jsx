// SoftwareDevelopment.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeBracketIcon, CpuChipIcon, DevicePhoneMobileIcon, ServerIcon, CloudIcon, ShieldCheckIcon, RocketLaunchIcon, WrenchScrewdriverIcon, CheckCircleIcon, ArrowPathIcon, ChartBarIcon, UsersIcon, GlobeAltIcon, CommandLineIcon } from '@heroicons/react/24/outline';

function SoftwareDevelopment() {
  const [activeTab, setActiveTab] = useState('web');
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = {
    web: [
      { name: 'React', level: 95, color: 'bg-blue-500', icon: '⚛️' },
      { name: 'Angular', level: 85, color: 'bg-red-500', icon: '🅰️' },
      { name: 'Vue.js', level: 80, color: 'bg-green-500', icon: '🟢' },
      { name: 'Node.js', level: 90, color: 'bg-green-600', icon: '🟩' },
      { name: 'Python/Django', level: 88, color: 'bg-green-400', icon: '🐍' },
      { name: 'PHP/Laravel', level: 82, color: 'bg-red-400', icon: '🐘' },
    ],
    mobile: [
      { name: 'React Native', level: 92, color: 'bg-blue-400', icon: '📱' },
      { name: 'Flutter', level: 87, color: 'bg-blue-300', icon: '📲' },
      { name: 'iOS Swift', level: 85, color: 'bg-gray-700', icon: '🍏' },
      { name: 'Android Kotlin', level: 83, color: 'bg-green-500', icon: '🤖' },
      { name: 'Ionic', level: 75, color: 'bg-purple-500', icon: '⚡' },
    ],
    database: [
      { name: 'MySQL', level: 90, color: 'bg-blue-600', icon: '🗄️' },
      { name: 'MongoDB', level: 88, color: 'bg-green-500', icon: '🍃' },
      { name: 'PostgreSQL', level: 85, color: 'bg-blue-700', icon: '🐘' },
      { name: 'Firebase', level: 82, color: 'bg-yellow-500', icon: '🔥' },
      { name: 'Redis', level: 80, color: 'bg-red-600', icon: '🔴' },
    ],
    cloud: [
      { name: 'AWS', level: 88, color: 'bg-yellow-600', icon: '☁️' },
      { name: 'Azure', level: 85, color: 'bg-blue-500', icon: '🔷' },
      { name: 'Google Cloud', level: 82, color: 'bg-blue-400', icon: '🔵' },
      { name: 'Docker', level: 86, color: 'bg-blue-300', icon: '🐳' },
      { name: 'Kubernetes', level: 80, color: 'bg-blue-600', icon: '⚓' },
    ]
  };

  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored web applications that drive business growth and enhance user engagement.",
      icon: <GlobeAltIcon className="h-10 w-10" />,
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "Push Notifications"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Enterprise Software",
      description: "Scalable enterprise solutions that streamline operations and boost productivity.",
      icon: <ServerIcon className="h-10 w-10" />,
      features: ["ERP Systems", "CRM Solutions", "Inventory Management", "Business Intelligence"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Cloud Solutions",
      description: "Secure cloud infrastructure and migration services for modern businesses.",
      icon: <CloudIcon className="h-10 w-10" />,
      features: ["Cloud Migration", "Server Management", "DevOps Services", "Microservices"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <ChartBarIcon className="h-10 w-10" />,
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your software running smoothly.",
      icon: <WrenchScrewdriverIcon className="h-10 w-10" />,
      features: ["Bug Fixing", "Performance Optimization", "Security Updates", "Technical Support"],
      color: "from-red-500 to-red-700"
    }
  ];

  const developmentProcess = [
    { step: 1, title: "Discovery & Planning", description: "Requirement analysis and project roadmap creation" },
    { step: 2, title: "UI/UX Design", description: "Wireframing, prototyping, and design system development" },
    { step: 3, title: "Development", description: "Agile development with regular sprints and updates" },
    { step: 4, title: "Testing & QA", description: "Comprehensive testing including unit, integration, and user testing" },
    { step: 5, title: "Deployment", description: "Production deployment with zero-downtime strategies" },
    { step: 6, title: "Maintenance", description: "Ongoing support, updates, and performance optimization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Vision Into
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SA Infotech delivers cutting-edge software solutions that drive innovation, efficiency, and business growth. We turn complex challenges into elegant digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Project
                </a>
                <a href="#services" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Code • Create • Innovate</h3>
                    <p className="text-blue-100">250+ Projects Delivered</p>
                    <p className="text-blue-100">98% Client Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Software Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end software solutions tailored to your business needs, from concept to deployment and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern technologies and frameworks to build scalable, secure, and high-performance applications.
            </p>
          </div>
          
          {/* Technology Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(technologies).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Development Expertise
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team has extensive experience in {activeTab} technologies, delivering robust solutions for businesses of all sizes.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-800 mb-4">Why Choose Our {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Solutions?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <RocketLaunchIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">High-performance applications with optimized code</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure by design with industry best practices</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowPathIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Scalable architecture for future growth</span>
                    </li>
                    <li className="flex items-start">
                      <UsersIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">User-centric design and seamless experience</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Technology Proficiency</h4>
                <div className="space-y-6">
                  {technologies[activeTab].map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                          <span className="mr-2 text-lg">{tech.icon}</span>
                          <span className="font-medium text-gray-800">{tech.name}</span>
                        </div>
                        <span className="text-gray-600 font-medium">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${tech.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology Logos */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Trusted By Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker'].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                  <div className="text-3xl font-bold text-gray-800">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures quality, transparency, and successful project delivery.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12 md:space-y-0">
              {developmentProcess.map((step, index) => (
                <div 
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white z-10"></div>
                  
                  {/* Step number for mobile */}
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Software Development */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Software Development</span>?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.
              </p>
              <p className="text-gray-600 mb-8">
                At SA Infotech, we specialize in transforming business requirements into functional software solutions. Our approach combines technical expertise with business understanding to deliver software that not only works flawlessly but also drives real business value.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Expert Developers</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="text-center mb-6">
                  <CommandLineIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SA Infotech Provides</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Custom software solutions tailored to your business",
                    "End-to-end development from concept to deployment",
                    "Agile development methodology",
                    "Cross-platform mobile applications",
                    "Scalable cloud-based solutions",
                    "Ongoing maintenance and support",
                    "Integration with existing systems",
                    "Performance optimization and scaling"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Software Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom software solution that drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210" 
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                📞 Call Now: +91 98765 43210
              </a>
              <a 
                href="mailto:software@sainfotech.com" 
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                  <CodeBracketIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">SA Infotech</h2>
                  <p className="text-blue-300 text-sm">Software Development Services</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative software solutions since 2010.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#technologies" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📍 IT Park, Sector 67, Mohali, Punjab</p>
                <p>📞 +91 98765 43210</p>
                <p>📧 software@sainfotech.com</p>
                <p>🕐 Mon-Fri: 9AM-7PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SA Infotech - Software Development Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SoftwareDevelopment;