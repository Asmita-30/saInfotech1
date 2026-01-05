// Digital.jsx
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from "lucide-react";

import { 
  BarChart3, Code, Smartphone, Search, 
  TrendingUp, Palette, Globe, Users,
  CheckCircle, ArrowRight, Cpu, Sparkles,
  Zap, Target, Rocket, Shield, Clock,
  Layers, Database, Cloud, Code2, Smartphone as Mobile,
  Server, Brain, LineChart, MessageCircle, Instagram,
  Facebook, Twitter, Youtube, Mail, Phone, MapPin
} from 'lucide-react';

const Digital = () => {
  const [activeTab, setActiveTab] = useState('digital-marketing');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Digital Marketing Services with enhanced data
  const marketingServices = [
    { 
      id: 1, 
      title: 'SEO Optimization', 
      desc: 'Improve your website ranking on search engines with our proven SEO strategies.',
      icon: <Search size={28} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      color: 'from-blue-500 to-cyan-400',
      stats: '300%+ ROI',
      delay: '100'
    },
    { 
      id: 2, 
      title: 'Social Media Marketing', 
      desc: 'Engage your audience across all social platforms with targeted campaigns.',
      icon: <Users size={28} />,
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974',
      color: 'from-purple-500 to-pink-500',
      stats: '2.5M+ Reach',
      delay: '200'
    },
    { 
      id: 3, 
      title: 'Content Marketing', 
      desc: 'Create compelling content that attracts and retains your target audience.',
      icon: <TrendingUp size={28} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      color: 'from-orange-500 to-yellow-400',
      stats: '45% Engagement',
      delay: '300'
    },
    { 
      id: 4, 
      title: 'Web Design & Development', 
      desc: 'Build responsive, high-performance websites that convert visitors into customers.',
      icon: <Globe size={28} />,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080',
      color: 'from-green-500 to-emerald-400',
      stats: '95% Satisfaction',
      delay: '400'
    },
    { 
      id: 5, 
      title: 'PPC Advertising', 
      desc: 'Drive targeted traffic with precision pay-per-click campaigns across platforms.',
      icon: <Target size={28} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      color: 'from-red-500 to-orange-400',
      stats: '4x Conversions',
      delay: '500'
    },
    { 
      id: 6, 
      title: 'Analytics & Insights', 
      desc: 'Data-driven decisions with comprehensive analytics and performance tracking.',
      icon: <LineChart size={28} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      color: 'from-indigo-500 to-blue-400',
      stats: 'Real-time Tracking',
      delay: '600'
    },
  ];

  // Software Development Languages & Technologies
  const techStack = [
    { name: 'JavaScript', icon: 'JS', color: 'from-yellow-400 to-orange-400', text: 'text-black', level: '95%' },
    { name: 'Python', icon: 'Py', color: 'from-blue-500 to-blue-700', text: 'text-white', level: '90%' },
    { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-500', text: 'text-black', level: '98%' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700', text: 'text-white', level: '92%' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-red-700', text: 'text-white', level: '85%' },
    { name: 'Vue.js', icon: '🟩', color: 'from-green-400 to-teal-500', text: 'text-white', level: '88%' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-600 to-pink-600', text: 'text-white', level: '82%' },
    { name: 'Flutter', icon: '📱', color: 'from-blue-400 to-indigo-500', text: 'text-white', level: '80%' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-indigo-500', text: 'text-white', level: '75%' },
    { name: 'MySQL', icon: '🗄️', color: 'from-blue-600 to-cyan-500', text: 'text-white', level: '90%' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800', text: 'text-white', level: '85%' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500', text: 'text-black', level: '88%' },
  ];

  // What SA Infotech Provides
  const saInfotechServices = [
    { title: 'Custom Software Development', icon: <Code2 size={20} />, desc: 'Tailored solutions for your unique business needs' },
    { title: 'Mobile App Development', icon: <Mobile size={20} />, desc: 'iOS & Android apps with native performance' },
    { title: 'E-commerce Solutions', icon: <ShoppingBag size={20} />, desc: 'Scalable online stores with integrated payment' },
    { title: 'CRM & ERP Systems', icon: <Layers size={20} />, desc: 'Streamline operations with custom management systems' },
    { title: 'Cloud Migration', icon: <Cloud size={20} />, desc: 'Seamless transition to cloud infrastructure' },
    { title: 'AI/ML Solutions', icon: <Brain size={20} />, desc: 'Intelligent automation and predictive analytics' },
    { title: 'IT Consulting', icon: <Shield size={20} />, desc: 'Strategic technology planning and implementation' },
    { title: '24/7 Support', icon: <Clock size={20} />, desc: 'Round-the-clock maintenance and support' },
  ];

  // Social Media Platforms
  const socialPlatforms = [
    { name: 'Instagram', icon: <Instagram size={24} />, color: 'from-pink-500 to-purple-600', followers: '50K+' },
    { name: 'Facebook', icon: <Facebook size={24} />, color: 'from-blue-600 to-blue-800', followers: '100K+' },
    { name: 'Twitter', icon: <Twitter size={24} />, color: 'from-blue-400 to-cyan-400', followers: '30K+' },
    { name: 'YouTube', icon: <Youtube size={24} />, color: 'from-red-600 to-red-700', followers: '25K+' },
  ];

  // Stats Data
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <Rocket size={24} /> },
    { value: '99%', label: 'Client Satisfaction', icon: <Sparkles size={24} /> },
    { value: '24/7', label: 'Support Available', icon: <Clock size={24} /> },
    { value: '50+', label: 'Expert Developers', icon: <Users size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-transparent rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-70"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <Cpu size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SA Infotech
                </h1>
                <p className="text-gray-600 text-sm flex items-center">
                  <Sparkles size={12} className="mr-1 text-yellow-500" />
                  Transforming Digital Experiences
                </p>
              </div>
            </div>
            
            <nav className="flex space-x-1 bg-gradient-to-r from-gray-50 to-gray-100 p-1 rounded-2xl shadow-inner animate-fade-in">
              <button
                onClick={() => setActiveTab('digital-marketing')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center group relative overflow-hidden ${
                  activeTab === 'digital-marketing' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <BarChart3 size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Digital Marketing</span>
                </span>
                {activeTab === 'digital-marketing' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-slow"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('software-dev')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center group relative overflow-hidden ${
                  activeTab === 'software-dev' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <Code size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Software Development</span>
                </span>
                {activeTab === 'software-dev' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse-slow"></div>
                )}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-1000"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Marketing Section */}
        <section className={`mb-20 transition-all duration-1000 ${activeTab === 'digital-marketing' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-600">Digital Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">That Drives Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just create campaigns, we create <span className="font-bold text-blue-600">digital experiences</span> that convert.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {marketingServices.map((service) => (
              <div 
                key={service.id} 
                className="group perspective-1000 animate-fade-in"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="relative h-full transform-style-3d transition-all duration-700 group-hover:rotate-y-10">
                  {/* Card Front */}
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 backface-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                          {service.icon}
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800">
                          {service.stats}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-5">
                        {service.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                          Explore Strategy
                          <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full text-sm text-blue-600 font-medium">
                          Learn More →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Back - Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl transform rotate-y-180 backface-hidden p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl mb-4 transform rotate-6 group-hover:rotate-0 transition-transform duration-700`}>
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Quick Results</h4>
                    <p className="text-gray-600 mb-4">See measurable results within 30 days</p>
                    <div className="px-4 py-2 bg-white rounded-full shadow-md font-medium text-blue-600">
                      Get Started Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Platforms */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl mb-16 transform hover:-translate-y-1 transition-transform duration-500">
            <div className="flex items-center mb-8">
              <MessageCircle size={32} className="text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Social Media Management</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className={`p-4 bg-gradient-to-r ${platform.color} rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{platform.name}</h4>
                  <div className="text-2xl font-bold text-gray-800">{platform.followers}</div>
                  <div className="text-sm text-gray-500">Followers Growth</div>
                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className={`mb-20 transition-all duration-1000 ${activeTab === 'software-dev' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-600">Code. Create. Conquer.</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Software Development
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">Custom Solutions That Scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What is Software Development */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-md mr-4 animate-bounce-slow">
                    <Code size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What is Software Development?</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Software development is the <span className="font-bold text-purple-600">art and science</span> of creating applications that solve real-world problems. 
                  It's about transforming ideas into <span className="font-bold text-blue-600">functional, scalable solutions</span> that drive business growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="font-bold text-blue-600 mb-2">Frontend</div>
                    <div className="text-sm text-gray-600">User Interfaces & Experiences</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                    <div className="font-bold text-purple-600 mb-2">Backend</div>
                    <div className="text-sm text-gray-600">Server Logic & Databases</div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Our Technology Stack</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 flex flex-col items-center border border-gray-100">
                        <div className={`bg-gradient-to-r ${tech.color} ${tech.text} w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                          {tech.icon}
                        </div>
                        <span className="font-semibold text-gray-800 text-center mb-2">{tech.name}</span>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                            style={{ width: tech.level }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">Expertise: {tech.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - SA Infotech Services */}
            <div className="space-y-8">
              {/* Services Card */}
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-white/20 rounded-lg mr-3 backdrop-blur-sm">
                        <Sparkles size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">SA Infotech Services</h3>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {saInfotechServices.map((service, index) => (
                        <li 
                          key={index} 
                          className="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
                        >
                          <div className="p-1 bg-white/20 rounded-lg mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-semibold">{service.title}</div>
                            <div className="text-sm text-white/80">{service.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <Zap size={20} className="mr-2" />
                      Request Custom Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Development Process */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg mr-3">
                    <Layers size={24} className="text-blue-600" />
                  </div>
                  Development Process
                </h4>
                <div className="space-y-4">
                  {[
                    { step: 'Discovery & Planning', color: 'from-blue-500 to-cyan-400', duration: '1-2 weeks' },
                    { step: 'UI/UX Design', color: 'from-purple-500 to-pink-400', duration: '2-3 weeks' },
                    { step: 'Development', color: 'from-green-500 to-emerald-400', duration: '4-8 weeks' },
                    { step: 'Testing & QA', color: 'from-yellow-500 to-orange-400', duration: '1-2 weeks' },
                    { step: 'Deployment', color: 'from-indigo-500 to-blue-400', duration: '1 week' },
                    { step: 'Support & Maintenance', color: 'from-gray-500 to-gray-400', duration: 'Ongoing' },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center group cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 p-3 rounded-xl transition-all duration-300"
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        <div className={`relative bg-gradient-to-r ${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {item.step}
                        </div>
                        <div className="text-sm text-gray-500">{item.duration}</div>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
            <MessageCircle size={20} className="mr-2 group-hover:animate-bounce" />
            Get Free Consultation
            <div className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
              Today
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Cpu size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">SA Infotech</h2>
                  <p className="text-gray-400 text-sm">Digital Transformation Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                We create digital experiences that inspire, engage, and convert your audience into loyal customers.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <div key={index} className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Services', 'Portfolio', 'About Us', 'Careers', 'Blog', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center">
                      <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {['Digital Marketing', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'SEO Optimization', 'Cloud Solutions'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-blue-400" />
                  +91 98765 43210
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-blue-400" />
                  info@sainfotech.com
                </li>
                <li className="flex items-start text-gray-400">
                  <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 SA Infotech. All rights reserved. | Made with ❤️ for digital excellence
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Digital;