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
  Sparkles,
  Palette,
  Database as DatabaseIcon,
  UserCheck,
  Layout,
  Cpu as CpuIcon,
  Smartphone as SmartphoneIcon,
  MessageSquare as MessageSquareIcon,
  Brush,
  ChevronRight as ChevronRightIcon
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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

  // Auto slide for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
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

  // Updated Services Array
  const services = [
    {
      title: 'Database Managed Services',
      description: 'Comprehensive database management, monitoring, and optimization services.',
      icon: <DatabaseIcon className="w-12 h-12" />,
      category: 'database',
      color: 'from-blue-500 to-cyan-500',
      features: ['24/7 Monitoring', 'Performance Tuning', 'Backup & Recovery', 'Security Management']
    },
    {
      title: 'Managed Services',
      description: 'Complete IT infrastructure management and support services.',
      icon: <Server className="w-12 h-12" />,
      category: 'managed',
      color: 'from-green-500 to-emerald-500',
      features: ['Proactive Monitoring', 'Network Management', 'Security Services', 'Help Desk Support']
    },
    {
      title: 'On-Site Resource Services',
      description: 'Dedicated IT professionals working at your location.',
      icon: <UserCheck className="w-12 h-12" />,
      category: 'onsite',
      color: 'from-purple-500 to-pink-500',
      features: ['Dedicated Staff', 'Technical Support', 'Project Management', 'Consultation']
    },
    {
      title: 'Website Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Layout className="w-12 h-12" />,
      category: 'web development',
      color: 'from-red-500 to-orange-500',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      title: 'Software Application',
      description: 'Custom software solutions for your business needs.',
      icon: <CpuIcon className="w-12 h-12" />,
      category: 'software development',
      color: 'from-indigo-500 to-blue-500',
      features: ['Custom Solutions', 'Scalable Architecture', 'Maintenance', 'Integration']
    },
    {
      title: 'Mobile Application',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <SmartphoneIcon className="w-12 h-12" />,
      category: 'mobile development',
      color: 'from-pink-500 to-rose-500',
      features: ['iOS & Android', 'Hybrid Apps', 'App Store Deployment', 'Push Notifications']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for business growth.',
      icon: <BarChart3 className="w-12 h-12" />,
      category: 'digital marketing',
      color: 'from-yellow-500 to-amber-500',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      title: 'Bulk SMS Services',
      description: 'Mass messaging solutions for marketing and alerts.',
      icon: <MessageSquareIcon className="w-12 h-12" />,
      category: 'bulk sms',
      color: 'from-teal-500 to-green-500',
      features: ['High Delivery', 'Scheduling', 'Personalization', 'Analytics']
    },
    {
      title: 'Graphic Designing',
      description: 'Creative design solutions for branding and marketing.',
      icon: <Brush className="w-12 h-12" />,
      category: 'graphic design',
      color: 'from-purple-600 to-violet-500',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design']
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
    },
    {
      name: 'Emily Davis',
      role: 'Operations Manager',
      content: 'Outstanding database management services. Our system performance improved dramatically.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: '2 weeks ago'
    },
    {
      name: 'Robert Wilson',
      role: 'IT Director',
      content: 'The managed services team is extremely responsive and proactive.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: '1 week ago'
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

      {/* Services Section - Updated */}
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
              Complete range of IT services to transform your business digitally
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
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
                  Learn More <ChevronRightIcon className="w-5 h-5" />
                </button>
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

      {/* Animated Testimonials Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
              <Star className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from businesses that have transformed with our solutions
            </p>
          </div>
          
          <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-r from-white via-gray-50 to-white shadow-xl">
            {/* Testimonials Carousel */}
            <motion.div
              className="absolute inset-0 flex"
              animate={{ x: `-${testimonialIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full h-full flex items-center justify-center p-8 md:p-12"
                >
                  <div className="max-w-4xl mx-auto w-full">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Client Image and Info */}
                        <div className="text-center md:text-left">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full mx-auto md:mx-0 border-4 border-blue-100 shadow-lg"
                          />
                          <div className="mt-4">
                            <h4 className="text-2xl font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-blue-600 font-medium">{testimonial.role}</p>
                            <div className="flex justify-center md:justify-start mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Testimonial Content */}
                        <div className="flex-1">
                          <div className="relative">
                            <div className="absolute -top-6 -left-6 text-blue-200 opacity-50">
                              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6v-10c0-3.3-2.7-6-6-6h-6zm18 0c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6v-10c0-3.3-2.7-6-6-6h-6z" />
                              </svg>
                            </div>
                            <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed relative z-10">
                              "{testimonial.content}"
                            </p>
                          </div>
                          <div className="mt-8 flex items-center justify-between">
                            <div className="text-gray-500 text-sm">
                              <Clock className="w-4 h-4 inline mr-2" />
                              {testimonial.date}
                            </div>
                            <div className="text-blue-600 font-semibold flex items-center gap-2">
                              Verified Review
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    testimonialIndex === index 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Partners & Clients Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Collaborative</span> Network
            </h2>
            <p className="text-gray-600 text-lg">
              We're proud to partner with industry giants to deliver exceptional results
            </p>
          </div>

          {/* Logo Grid with Hover Effects */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-40 flex items-center justify-center">
                  <div className="relative w-full h-12 flex items-center justify-center">
                    {/* Gradient Border on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    
                    {/* Logo */}
                    <img
                      src={logo}
                      alt={`Client ${index + 1}`}
                      className="max-w-full max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                    
                    {/* Company Name Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
                      {['Google', 'Apple', 'Amazon', 'Microsoft', 'Microsoft', 'IBM'][index]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.projects}+
                </div>
                <div className="text-blue-100 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.clients}+
                </div>
                <div className="text-blue-100 font-semibold">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.countries}+
                </div>
                <div className="text-blue-100 font-semibold">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.team}+
                </div>
                <div className="text-blue-100 font-semibold">Team Members</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of satisfied clients and let's create something amazing together.
            </p>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 mx-auto">
                <Rocket className="w-5 h-5" />
                Start Your Project Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;