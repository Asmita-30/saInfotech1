// Digital.jsx
import React, { useState, useEffect } from 'react';

const Digital = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Service cards data
  const services = [
    {
      id: 1,
      title: "SEO & Search Engine Optimization",
      description: "Improve your website's ranking in Google search results, increase organic traffic, and enhance online visibility.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔍",
      color: "from-blue-500 to-blue-600",
      tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Create brand awareness and increase engagement on Facebook, Instagram, Twitter, LinkedIn and other social platforms.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📱",
      color: "from-purple-500 to-purple-600",
      tags: ["Content Creation", "Community Management", "Paid Campaigns", "Influencer Marketing"],
      hoverColor: "hover:shadow-purple-500/20"
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Create valuable and relevant content that attracts and engages your target audience, leading to profitable actions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📝",
      color: "from-green-500 to-green-600",
      tags: ["Blog Writing", "Video Content", "Infographics", "E-books"],
      hoverColor: "hover:shadow-green-500/20"
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Design targeted email campaigns that reach your audience, increase engagement, and generate conversions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "✉️",
      color: "from-orange-500 to-orange-600",
      tags: ["Newsletters", "Automation", "Campaign Analytics", "Segmentation"],
      hoverColor: "hover:shadow-orange-500/20"
    },
    {
      id: 5,
      title: "PPC Advertising",
      description: "Create and manage targeted paid advertising campaigns on Google Ads, Facebook Ads, and other platforms.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💰",
      color: "from-red-500 to-red-600",
      tags: ["Google Ads", "Facebook Ads", "ROI Tracking", "Retargeting"],
      hoverColor: "hover:shadow-red-500/20"
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      description: "Track performance, analyze detailed metrics, and provide comprehensive reports to measure campaign effectiveness.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📊",
      color: "from-indigo-500 to-indigo-600",
      tags: ["Google Analytics", "Dashboards", "Performance Metrics", "KPI Tracking"],
      hoverColor: "hover:shadow-indigo-500/20"
    },
    {
      id: 7,
      title: "Web Design & Development",
      description: "Create responsive, user-friendly websites that convert visitors into customers and support your marketing goals.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💻",
      color: "from-cyan-500 to-cyan-600",
      tags: ["UI/UX Design", "Responsive Design", "E-commerce", "WordPress"],
      hoverColor: "hover:shadow-cyan-500/20"
    },
    {
      id: 8,
      title: "Brand Strategy",
      description: "Develop comprehensive brand strategies that establish your identity, values, and position in the market.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🎯",
      color: "from-pink-500 to-pink-600",
      tags: ["Brand Identity", "Market Positioning", "Competitive Analysis", "Brand Guidelines"],
      hoverColor: "hover:shadow-pink-500/20"
    }
  ];

  // Technology cards data
  const technologies = [
    { name: "HTML/CSS", description: "For designing web pages and landing pages", icon: "💻", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", description: "For interactive elements and tracking codes", icon: "⚡", color: "from-yellow-500 to-yellow-600" },
    { name: "Python/R", description: "For data analysis and marketing automation", icon: "🐍", color: "from-green-500 to-green-600" },
    { name: "Google Analytics", description: "For website traffic and user behavior tracking", icon: "📈", color: "from-red-500 to-red-600" },
    { name: "SQL/Databases", description: "For customer data analysis and segmentation", icon: "🗄️", color: "from-purple-500 to-purple-600" },
    { name: "Facebook/Instagram Ads", description: "For social media advertising and targeting", icon: "📱", color: "from-blue-400 to-blue-500" },
    { name: "WordPress", description: "For content management and website development", icon: "🔧", color: "from-gray-700 to-gray-800" },
    { name: "Adobe Creative Suite", description: "For graphic design and content creation", icon: "🎨", color: "from-red-400 to-red-500" }
  ];

  // SA Infotech specializations
  const specializations = [
    "Customized Digital Marketing Solutions",
    "Advanced Analytics & Data-Driven Decisions",
    "Multi-Platform Marketing Expertise",
    "ROI-Focused Campaign Optimization",
    "24/7 Campaign Monitoring & Management",
    "Regular Performance Reporting",
    "Competitive Analysis & Market Research",
    "Conversion Rate Optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section id="home" className="w-full mx-auto px-4 py-12 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-blue-700">Leading Digital Marketing Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Digital Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2 animate-gradient">
                What Is It & How It Works
              </span>
            </h1>
            
            <p className="text-gray-700 text-lg mt-6 mb-8 leading-relaxed">
              Digital marketing is the use of the internet and digital technologies to promote products and services. 
              It encompasses various digital platforms including social media, search engines, email, mobile apps, and websites 
              to connect with current and prospective customers.
            </p>
        
            
            <div className="flex items-center mt-5 space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Marketing Team Collaboration" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
   
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl shadow-2xl -z-10 animate-float-slow"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl shadow-2xl -z-10 animate-float-slower"></div>
            
            
            <div className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-xl max-w-xs animate-float-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Increased ROI</div>
                  <div className="text-xs text-gray-600">Average 300% growth</div>
                </div>
              </div>
            </div>
        
            <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-xl shadow-xl max-w-xs animate-float-slower">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Targeted Campaigns</div>
                  <div className="text-xs text-gray-600">Precision marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Card Hover */}
      <section id="services" className="w-full mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Services We Provide
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our comprehensive digital marketing services help your business thrive in the online world with proven strategies and measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100"
            >
              {/* Card hover background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <div className="relative p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl mb-4 -mt-12 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{service.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center group/link">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Hover shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section with Hover Animation */}
      {/* <section id="technologies" className="container mx-auto px-4 py-12 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-12"> */}
        
        
        {/* SA Infotech Specializations */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-6xl mx-auto transform hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose SA Infotech for Digital Marketing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((item, index) => (
              <div 
                key={index}
                className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{item}</h4>
                  <p className="text-gray-600 text-sm mt-1">Expert implementation with proven results</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-700">10+</div>
              <div className="text-gray-900 font-medium mt-2">Years Experience</div>
              <div className="text-gray-600 text-sm mt-1">In digital marketing</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-700">500+</div>
              <div className="text-gray-900 font-medium mt-2">Projects Delivered</div>
              <div className="text-gray-600 text-sm mt-1">Across industries</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-700">98%</div>
              <div className="text-gray-900 font-medium mt-2">Client Satisfaction</div>
              <div className="text-gray-600 text-sm mt-1">Rated 4.8+ stars</div>
            </div>
          </div>
        </div>
      {/* </section> */}

      {/* Portfolio/Showcase Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Digital Marketing Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            See how we've helped businesses grow with our data-driven digital marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "E-commerce Brand", 
              result: "Increased revenue by 320%", 
              image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              desc: "Comprehensive digital strategy including SEO, PPC, and social media"
            },
            { 
              title: "SaaS Platform", 
              result: "Reduced CAC by 45%", 
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              desc: "Targeted content marketing and conversion optimization"
            },
            { 
              title: "Healthcare Provider", 
              result: "Increased appointments by 280%", 
              image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              desc: "Local SEO and community-focused social media campaigns"
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full font-medium">
                    {project.result}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {project.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">View Case Study →</div>
                  <div className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Digital;