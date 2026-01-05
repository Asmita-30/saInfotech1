import React, { useEffect, useState } from 'react';

const WebsiteDevelopment = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Initial animation
    setIsVisible(true);
    
    // Scroll animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 overflow-hidden">
      
      <div className="md:hidden  w-fullfixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 py-3 px-4 shadow-sm border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <h1 className="text-lg font-bold">SA INFOTECH</h1>
          </div>
          <button className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section id="home" className="pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Text Content - Mobile First */}
            <div className={`w-full lg:w-1/2 ${isMobile ? 'order-2' : ''} transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Development</span> Services
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                SA INFOTECH provides cutting-edge web development solutions that help businesses grow in the digital world.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                  Start Project
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Image - Mobile First */}
            <div className={`w-full lg:w-1/2 ${isMobile ? 'order-1 mb-4' : ''} transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl md:rounded-2xl transform rotate-1 md:rotate-2 group-hover:rotate-2 md:group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-48 md:h-64 lg:h-80 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-xl md:rounded-2xl transform -rotate-1 md:-rotate-2 group-hover:-rotate-2 md:group-hover:-rotate-3 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Development" 
                  className="absolute top-1 left-1 md:top-2 md:left-2 w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-xl group-hover:shadow-2xl transition-all duration-500 hover-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Web Development - Mobile Optimized */}
      <section id="about" className="py-8 md:py-12 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 animate-on-scroll">
            What is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Development</span>?
          </h2>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="animate-on-scroll w-full">
              <div className="bg-black text-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-300 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 group hover-card">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                  🌐
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Web Development</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Website development is the process of building and maintaining websites. It includes web design, web content development, client-side/server-side scripting, and network security configuration.
                </p>
              </div>
              
              <div className="mt-4 md:mt-6 grid grid-cols-2 gap-2 md:gap-3">
                <div className="bg-black text-white p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover-card">
                  <h4 className="font-bold text-blue-400 text-sm md:text-base">Frontend</h4>
                  <p className="text-xs md:text-sm text-gray-300">UI/UX Development</p>
                </div>
                <div className="bg-black text-white p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover-card">
                  <h4 className="font-bold text-purple-400 text-sm md:text-base">Backend</h4>
                  <p className="text-xs md:text-sm text-gray-300">Server & Database</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll w-full">
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-black text-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-card">
                  <h4 className="font-bold text-blue-400 text-sm md:text-base mb-1">Responsive</h4>
                  <p className="text-xs text-gray-300">All devices</p>
                </div>
                <div className="bg-black text-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-card">
                  <h4 className="font-bold text-purple-400 text-sm md:text-base mb-1">Fast Loading</h4>
                  <p className="text-xs text-gray-300">Optimized</p>
                </div>
                <div className="bg-black text-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-card">
                  <h4 className="font-bold text-blue-400 text-sm md:text-base mb-1">SEO Friendly</h4>
                  <p className="text-xs text-gray-300">Search ranking</p>
                </div>
                <div className="bg-black text-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover-card">
                  <h4 className="font-bold text-purple-400 text-sm md:text-base mb-1">Secure</h4>
                  <p className="text-xs text-gray-300">Protected</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg md:rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Web Development Process" 
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700 hover-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section id="services" className="py-8 md:py-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-black text-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-300 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 animate-on-scroll group hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {service.tech.map((t, i) => (
                    <span key={i} className="bg-gray-900/80 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - More Images */}
      <section id="gallery" className="py-8 md:py-12 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work Gallery</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg animate-on-scroll gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 md:h-40 object-cover transform group-hover:scale-110 transition-transform duration-700 hover-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-2 md:p-3">
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SA INFOTECH - Mobile Optimized */}
      <section className="py-8 md:py-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="w-full lg:w-1/2 animate-on-scroll">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SA INFOTECH</span>
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 group hover-card">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-600 text-base md:text-lg">{reason.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold mb-1">{reason.title}</h4>
                      <p className="text-gray-700 text-sm md:text-base">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 animate-on-scroll">
              <div className="relative group">
                <div className="w-full h-48 md:h-64 lg:h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl md:rounded-2xl transform rotate-1 md:rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="SA INFOTECH Team" 
                  className="absolute top-0 left-0 w-full h-48 md:h-64 lg:h-72 object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-xl group-hover:shadow-2xl transition-all duration-500 hover-image"
                />
              </div>
              
              <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-3">
                <div className="bg-black text-white text-center p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover-card">
                  <div className="text-lg md:text-xl font-bold text-blue-400">150+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </div>
                <div className="bg-black text-white text-center p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover-card">
                  <div className="text-lg md:text-xl font-bold text-purple-400">98%</div>
                  <div className="text-xs text-gray-300">Satisfaction</div>
                </div>
                <div className="bg-black text-white text-center p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover-card">
                  <div className="text-lg md:text-xl font-bold text-blue-400">50+</div>
                  <div className="text-xs text-gray-300">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   



      <style jsx="true">{`
        /* Scroll Animation */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Card Hover Animation */
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        /* Image Hover Animation with Up-Down Movement */
        .hover-image:hover {
          animation: floatUpDown 1.5s ease-in-out infinite;
        }
        
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0) scale(1.1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }
        
        /* Gallery Item Hover */
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        /* Button Hover Effect */
        button:hover {
          transform: translateY(-2px);
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hover-image:hover {
            animation: floatUpDownMobile 1.5s ease-in-out infinite;
          }
          
          @keyframes floatUpDownMobile {
            0%, 100% {
              transform: translateY(0) scale(1.05);
            }
            50% {
              transform: translateY(-5px) scale(1.05);
            }
          }
          
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

// Data for services
const services = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces using modern frameworks.",
    tech: ["React", "Vue.js", "Tailwind", "JavaScript"]
  },
  {
    icon: "🔧",
    title: "Backend Development",
    description: "Building robust server-side applications and APIs.",
    tech: ["Node.js", "Python", "MongoDB", "APIs"]
  },
  {
    icon: "📱",
    title: "Mobile Responsive",
    description: "Websites that work perfectly on all devices.",
    tech: ["Responsive", "Mobile First", "Flexbox", "Grid"]
  },
  {
    icon: "🚀",
    title: "Web Performance",
    description: "Optimizing websites for speed and SEO.",
    tech: ["Optimization", "Lazy Loading", "CDN", "Caching"]
  },
  {
    icon: "🔒",
    title: "Web Security",
    description: "Protecting websites from vulnerabilities.",
    tech: ["HTTPS", "Firewalls", "Auth", "Encryption"]
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Building online stores with payment systems.",
    tech: ["Shopify", "WooCommerce", "Payments", "Cart"]
  }
];

// Data for gallery - More images
const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "E-commerce Platform",
    category: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Business Dashboard",
    category: "UI/UX Design"
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Mobile App",
    category: "React Native"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Corporate Website",
    category: "Web Dev"
  },
  {
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Portfolio Design",
    category: "Creative"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Admin Panel",
    category: "Backend"
  },
  {
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Landing Page",
    category: "Marketing"
  },
  {
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Web Application",
    category: "Full Stack"
  }
];

// Data for reasons
const reasons = [
  {
    icon: "⭐",
    title: "Expert Developers",
    description: "Experienced team with modern web technology expertise."
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Projects delivered on time without compromising quality."
  },
  {
    icon: "💼",
    title: "Client-Centric",
    description: "Focus on understanding and exceeding client requirements."
  },
  {
    icon: "🔄",
    title: "Continuous Support",
    description: "Ongoing maintenance and support for smooth operation."
  }
];

export default WebsiteDevelopment;