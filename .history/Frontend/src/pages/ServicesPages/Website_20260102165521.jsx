import React, { useEffect } from 'react';

const WebsiteDevelopment = () => {
  useEffect(() => {
    // Add scroll animation effect
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SA INFOTECH
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors duration-300">Gallery</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-on-scroll">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Website Development</span> Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                SA INFOTECH provides cutting-edge web development solutions that help businesses grow in the digital world. We create responsive, fast, and engaging websites.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Project
                </button>
                <button className="border border-blue-500 hover:bg-blue-500/20 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-on-scroll">
              <div className="relative">
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl transform rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-64 md:h-96 bg-gradient-to-tr from-blue-600/40 to-purple-500/40 rounded-3xl transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Web Development" 
                  className="absolute top-4 left-4 w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Web Development */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            What is <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Website Development</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-300">
                  Website development is the process of building and maintaining websites. It includes web design, web content development, client-side/server-side scripting, and network security configuration. Modern web development focuses on creating responsive, accessible, and performant websites.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-blue-400">Frontend</h4>
                  <p className="text-sm text-gray-300">User interface and experience</p>
                </div>
                <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-purple-400">Backend</h4>
                  <p className="text-sm text-gray-300">Server, database, and application logic</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/20 p-6 rounded-2xl border border-blue-700/50">
                  <h4 className="font-bold text-lg mb-2">Responsive Design</h4>
                  <p className="text-gray-300 text-sm">Websites that work perfectly on all devices</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-600/20 p-6 rounded-2xl border border-purple-700/50">
                  <h4 className="font-bold text-lg mb-2">Fast Loading</h4>
                  <p className="text-gray-300 text-sm">Optimized performance for better user experience</p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/20 p-6 rounded-2xl border border-blue-700/50">
                  <h4 className="font-bold text-lg mb-2">SEO Friendly</h4>
                  <p className="text-gray-300 text-sm">Built to rank higher in search results</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-600/20 p-6 rounded-2xl border border-purple-700/50">
                  <h4 className="font-bold text-lg mb-2">Secure</h4>
                  <p className="text-gray-300 text-sm">Protection against vulnerabilities and threats</p>
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Web Development Process" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Development Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
            SA INFOTECH offers a comprehensive range of web development services to meet your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex space-x-4">
                  {service.tech.map((t, i) => (
                    <span key={i} className="bg-gray-900/80 px-3 py-1 rounded-full text-sm">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work Gallery</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
            Explore our portfolio of stunning web development projects
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-2xl animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SA INFOTECH */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SA INFOTECH</span> is the Best Choice
              </h2>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                      <span className="text-blue-400 text-xl">{reason.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-on-scroll">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="SA INFOTECH Team" 
                  className="absolute top-0 left-0 w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <div className="text-3xl font-bold text-blue-400">150+</div>
                  <div className="text-gray-400">Projects Done</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Start Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Web Project</span> Today
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Contact SA INFOTECH for professional website development services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-300">contact@sainfotech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-gray-300">123 Tech Park, Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows="4"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SA INFOTECH
            </h1>
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>© 2023 SA INFOTECH. All rights reserved.</p>
            <p className="text-sm mt-1">Professional Website Development Services</p>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
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
    description: "Creating responsive, interactive user interfaces using React, Vue, and modern JavaScript frameworks.",
    tech: ["React", "Vue.js", "Tailwind CSS", "JavaScript"]
  },
  {
    icon: "🔧",
    title: "Backend Development",
    description: "Building robust server-side applications, APIs, and databases for scalable web solutions.",
    tech: ["Node.js", "Python", "MongoDB", "PostgreSQL"]
  },
  {
    icon: "📱",
    title: "Mobile Responsive",
    description: "Developing websites that work perfectly on all devices from desktop to mobile phones.",
    tech: ["Responsive Design", "Mobile First", "Flexbox", "Grid"]
  },
  {
    icon: "🚀",
    title: "Web Performance",
    description: "Optimizing websites for speed and performance to enhance user experience and SEO.",
    tech: ["Optimization", "Lazy Loading", "CDN", "Caching"]
  },
  {
    icon: "🔒",
    title: "Web Security",
    description: "Implementing security best practices to protect websites from vulnerabilities and attacks.",
    tech: ["HTTPS", "Firewalls", "Authentication", "Encryption"]
  },
  {
    icon: "🛒",
    title: "E-commerce Solutions",
    description: "Building online stores with payment integration, inventory management, and customer portals.",
    tech: ["Shopify", "WooCommerce", "Payment Gateways", "Cart Systems"]
  }
];

// Data for gallery
const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Platform",
    category: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
    title: "Business Dashboard",
    category: "UI/UX Design"
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Mobile App Interface",
    category: "React Native"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Website",
    category: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Portfolio Design",
    category: "Creative Design"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Admin Panel",
    category: "Backend System"
  }
];

// Data for reasons
const reasons = [
  {
    icon: "⭐",
    title: "Expert Developers",
    description: "Our team consists of experienced developers with expertise in modern web technologies."
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising on quality and performance."
  },
  {
    icon: "💼",
    title: "Client-Centric Approach",
    description: "We focus on understanding client requirements and delivering solutions that exceed expectations."
  },
  {
    icon: "🔄",
    title: "Continuous Support",
    description: "We provide ongoing maintenance and support to ensure your website runs smoothly."
  }
];

export default WebsiteDevelopment;