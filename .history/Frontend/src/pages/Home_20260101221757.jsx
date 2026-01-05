import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Globe, 
  Shield,
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Clock,
  ThumbsUp,
  Server,
  Cloud,
  Database,
  Lock,
  Zap,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Globe as GlobeIcon,
  Smartphone as PhoneIcon,
  Headphones,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react';

// Import your images - replace with actual paths
const slideImages = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80'
];

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012-2019%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/02/IBM_logo.svg'
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    team: 0
  });

  // Counter animation for happy clients
  useEffect(() => {
    const timer = setTimeout(() => {
      if (clientsCount < 100) {
        setClientsCount(prev => Math.min(prev + 5, 100));
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [clientsCount]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated counters for stats
  useEffect(() => {
    const targets = { projects: 500, clients: 100, countries: 20, team: 50 };
    const duration = 2000;
    const steps = 60;
    
    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          setStats(prev => ({ ...prev, [key]: targets[key] }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    });
  }, []);

  const slides = [
    {
      title: 'SECURE & IT SERVICES',
      subtitle: 'Make The Easiest Solution For You',
      image: slideImages[0],
      features: ['24/7 Support', '99.9% Uptime', 'Secure Infrastructure']
    },
    {
      title: 'BEST MARKETING SERVICE',
      subtitle: 'Perfect IT Solution For Your Business',
      image: slideImages[1],
      features: ['Data Analytics', 'AI-Powered Insights', 'Real-Time Tracking']
    },
    {
      title: 'WE ARE BUILDING BETTER NETWORKS',
      subtitle: 'Superior Data Management Available for All',
      image: slideImages[2],
      features: ['Cloud Solutions', 'Network Security', 'Scalable Infrastructure']
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Globe className="w-12 h-12" />,
      category: 'web development',
      color: 'from-blue-500 to-cyan-500',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for your business needs.',
      icon: <Code className="w-12 h-12" />,
      category: 'software development',
      color: 'from-green-500 to-emerald-500',
      features: ['Custom Solutions', 'Scalable Architecture', 'Maintenance', 'Integration']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for growth.',
      icon: <BarChart3 className="w-12 h-12" />,
      category: 'digital marketing',
      color: 'from-purple-500 to-pink-500',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      title: 'Bulk SMS',
      description: 'Mass messaging solutions for marketing and alerts.',
      icon: <MessageSquare className="w-12 h-12" />,
      category: 'bulk sms',
      color: 'from-red-500 to-orange-500',
      features: ['High Delivery', 'Scheduling', 'Personalization', 'Analytics']
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <Smartphone className="w-12 h-12" />,
      category: 'software development',
      color: 'from-indigo-500 to-blue-500',
      features: ['iOS & Android', 'Hybrid Apps', 'App Store Deployment', 'Push Notifications']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience.',
      icon: <GlobeIcon className="w-12 h-12" />,
      category: 'web development',
      color: 'from-pink-500 to-rose-500',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Excellent service! Our website traffic increased by 300% after working with this team.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '2 months ago'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'Professional team with exceptional attention to detail. Highly recommended!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '1 month ago'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content: 'Their mobile app development expertise helped us launch successfully.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      date: '3 weeks ago'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'Fashion Store'
    },
    {
      title: 'Banking App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      client: 'National Bank'
    },
    {
      title: 'Social Media Campaign',
      category: 'digital marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      technologies: ['Facebook Ads', 'Instagram', 'Google Analytics'],
      client: 'Beauty Brand'
    },
    {
      title: 'SMS Gateway',
      category: 'bulk sms',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      client: 'Hospital Chain'
    },
    {
      title: 'Hotel Booking System',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      client: 'Hotel Group'
    },
    {
      title: 'Food Delivery App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80',
      technologies: ['React Native', 'GraphQL', 'MongoDB'],
      client: 'Food Delivery Startup'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: '100% Secure',
      description: 'Enterprise-grade security for all your data'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Grow your business with our scalable solutions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow Section */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-1 bg-blue-500"></div>
                    <span className="text-blue-400 font-semibold">WELCOME TO OUR COMPANY</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 hover:scale-105 transform transition-transform">
                        Get Started <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                    <Link to="/about">
                      <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Features Banner
      <section className="py-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section with Side Image */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {clientsCount}+
                  </div>
                  <div className="text-gray-600 font-semibold">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="font-semibold">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-600 font-semibold">ABOUT OUR COMPANY</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Provide The Best <span className="text-blue-600">IT Solutions</span>
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We are a leading IT solutions provider with expertise in web development, 
                software development, digital marketing, and bulk SMS services. Our team 
                of dedicated professionals works tirelessly to deliver exceptional results 
                for our clients.
              </p>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With over 10 years of experience in the industry, we understand the unique challenges 
                businesses face in the digital world and provide tailored solutions to help 
                them thrive in today's competitive market.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  '24/7 Technical Support',
                  'Cutting-edge Technology',
                  'Affordable Pricing',
                  'Timely Delivery'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Award className="w-8 h-8" />, title: 'Award Winning', desc: 'Multiple awards' },
                  { icon: <Clock className="w-8 h-8" />, title: 'Fast Delivery', desc: 'On-time projects' },
                  { icon: <ThumbsUp className="w-8 h-8" />, title: '95% Success', desc: 'Project success rate' },
                  { icon: <Users className="w-8 h-8" />, title: 'Expert Team', desc: 'Certified professionals' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 hover:scale-105 transform transition-transform">
                    Learn More About Us <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-600">IT Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We offer a wide range of IT services to help your business grow and succeed in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} inline-flex mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', value: stats.projects, suffix: '+', icon: <Rocket className="w-8 h-8" /> },
              { label: 'Happy Clients', value: stats.clients, suffix: '+', icon: <Users className="w-8 h-8" /> },
              { label: 'Countries Served', value: stats.countries, suffix: '+', icon: <Globe className="w-8 h-8" /> },
              { label: 'Team Members', value: stats.team, suffix: '+', icon: <Award className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-4">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold">OUR PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our portfolio across different service categories
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web development', 'software development', 'digital marketing', 'bulk sms'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/90">Client: {project.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-600 capitalize font-medium">{project.category}</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                      View Details <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Review Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-4 border-blue-50"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <motion.div
              className="flex gap-12 py-8"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 hover:scale-105 transform transition-transform">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IT Solutions</h3>
              <p className="text-gray-400 mb-4">
                Providing world-class IT solutions for businesses worldwide.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                    {social[0]}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link to={`/services#${service.category}`} className="text-gray-400 hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">123 Business Street, City, Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@itsolutions.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Counter Component
const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 20); // Update every 20ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

// CountUp Component
const CountUp = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

export default Home;