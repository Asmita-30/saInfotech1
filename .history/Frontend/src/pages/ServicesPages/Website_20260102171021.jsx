import React, { useEffect, useState } from 'react';

const WebsiteDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll animation effect
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
    
    // Initial animation
    setIsVisible(true);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section - Reduced Gap */}
      <section id="home" className="pt-20 pb-10 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Development</span> Services
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                SA INFOTECH provides cutting-edge web development solutions that help businesses grow in the digital world.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Project
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-64 md:h-80 bg-gradient-to-tr from-blue-200/30 to-purple-200/30 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Web Development" 
                  className="absolute top-2 left-2 w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Web Development - Tight Layout */}
      <section id="about" className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 animate-on-scroll">
            What is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Website Development</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-on-scroll">
              <div className="bg-black text-white p-6 rounded-2xl border border-gray-300 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-gray-300">
                  Website development is the process of building and maintaining websites. It includes web design, web content development, client-side/server-side scripting, and network security configuration.
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-black text-white p-3 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <h4 className="font-bold text-blue-400">Frontend</h4>
                  <p className="text-xs text-gray-300">User interface and experience</p>
                </div>
                <div className="bg-black text-white p-3 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                  <h4 className="font-bold text-purple-400">Backend</h4>
                  <p className="text-xs text-gray-300">Server, database, and logic</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black text-white p-4 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="font-bold text-blue-400 mb-1">Responsive</h4>
                  <p className="text-xs text-gray-300">Works on all devices</p>
                </div>
                <div className="bg-black text-white p-4 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="font-bold text-purple-400 mb-1">Fast Loading</h4>
                  <p className="text-xs text-gray-300">Optimized performance</p>
                </div>
                <div className="bg-black text-white p-4 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="font-bold text-blue-400 mb-1">SEO Friendly</h4>
                  <p className="text-xs text-gray-300">Higher search ranking</p>
                </div>
                <div className="bg-black text-white p-4 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="font-bold text-purple-400 mb-1">Secure</h4>
                  <p className="text-xs text-gray-300">Protection against threats</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Web Development Process" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Compact Cards */}
      <section id="services" className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-black text-white p-6 rounded-2xl border border-gray-300 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
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
      <section id="gallery" className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work Gallery</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SA INFOTECH */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SA INFOTECH</span>
              </h2>
              
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-600 text-lg">{reason.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                      <p className="text-gray-700 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-on-scroll">
              <div className="relative group">
                <div className="w-full h-64 md:h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="SA INFOTECH Team" 
                  className="absolute top-0 left-0 w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                />
              </div>
              
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-black text-white text-center p-3 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xl font-bold text-blue-400">150+</div>
                  <div className="text-xs text-gray-300">Projects Done</div>
                </div>
                <div className="bg-black text-white text-center p-3 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xl font-bold text-purple-400">98%</div>
                  <div className="text-xs text-gray-300">Satisfaction</div>
                </div>
                <div className="bg-black text-white text-center p-3 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="text-xl font-bold text-blue-400">50+</div>
                  <div className="text-xs text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section id="contact" className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-gray-300 shadow-lg animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-700 text-sm">contact@sainfotech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-700 text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-gray-700 text-sm">123 Tech Park, Mumbai, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">f</span>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">in</span>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">t</span>
                    </div>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">ig</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows="3"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-6 px-6 border-t border-gray-300 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-3 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <h1 className="text-lg font-bold">
              SA INFOTECH
            </h1>
          </div>
          
          <div className="text-gray-400 text-center text-sm">
            <p>© 2023 SA INFOTECH. All rights reserved.</p>
            <p className="text-xs mt-1">Professional Website Development</p>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
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