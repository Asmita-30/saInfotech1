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
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Deployment", "Push Notifications"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Enterprise Software",
      description: "Scalable enterprise solutions that streamline operations and boost productivity.",
      icon: <ServerIcon className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      features: ["ERP Systems", "CRM Solutions", "Inventory Management", "Business Intelligence"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Cloud Solutions",
      description: "Secure cloud infrastructure and migration services for modern businesses.",
      icon: <CloudIcon className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      features: ["Cloud Migration", "Server Management", "DevOps Services", "Microservices"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <ChartBarIcon className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your software running smoothly.",
      icon: <WrenchScrewdriverIcon className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800",
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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform -skew-y-6 origin-top-left"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Software <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforming ideas into powerful, scalable, and innovative software solutions that drive business growth and digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000" 
                alt="Software Development" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full -z-10 animate-pulse animation-delay-1000"></div>
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
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Expert Developers</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-3xl">
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
                    <div key={index} className="flex items-start group">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{item}</span>
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

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build robust and scalable solutions.
            </p>
          </div>
          
          {/* Technology Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.keys(technologies).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Technology Cards - Full width on desktop, smaller on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {technologies[activeTab].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{tech.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{tech.name}</span>
                        <span className="font-bold text-blue-600">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${tech.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Software Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to meet your business needs.
            </p>
          </div>
          
          {/* Services Grid - Full width on desktop, smaller cards on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 transform"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`}></div>
                  <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-lg font-semibold hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-[1.02]">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
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
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform group">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white z-10 hover:scale-125 transition-transform duration-300"></div>
                  
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



      {/* Add custom animations in style tag */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default SoftwareDevelopment;