import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
  Award,
  Clock,
  TrendingUp
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      title: 'INNOVATIVE IT SOLUTIONS',
      subtitle: 'Transforming Businesses with Cutting-Edge Technology',
      description: 'We deliver secure, scalable, and innovative IT solutions that drive business growth and digital transformation.',
      image: slideImages[0],
      buttonText: 'Start Your Project'
    },
    {
      title: 'DIGITAL MARKETING EXPERTS',
      subtitle: 'Amplify Your Brand Presence',
      description: 'Data-driven marketing strategies that increase visibility, engagement, and conversion rates.',
      image: slideImages[1],
      buttonText: 'Boost Your Marketing'
    },
    {
      title: 'SOFTWARE DEVELOPMENT',
      subtitle: 'Custom Solutions for Unique Challenges',
      description: 'Build robust, user-friendly applications tailored to your specific business needs.',
      image: slideImages[2],
      buttonText: 'Build with Us'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Globe className="w-10 h-10" />,
      category: 'web development',
      color: 'from-blue-500 to-blue-700',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration']
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for your business needs.',
      icon: <Code className="w-10 h-10" />,
      category: 'software development',
      color: 'from-green-500 to-green-700',
      features: ['Custom Solutions', 'API Integration', 'Maintenance']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for growth.',
      icon: <BarChart3 className="w-10 h-10" />,
      category: 'digital marketing',
      color: 'from-purple-500 to-purple-700',
      features: ['SEO', 'Social Media', 'PPC Campaigns']
    },
    {
      title: 'Bulk SMS',
      description: 'Mass messaging solutions for marketing and alerts.',
      icon: <MessageSquare className="w-10 h-10" />,
      category: 'bulk sms',
      color: 'from-red-500 to-red-700',
      features: ['Bulk Messaging', 'API Integration', 'Analytics']
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <Smartphone className="w-10 h-10" />,
      category: 'software development',
      color: 'from-indigo-500 to-indigo-700',
      features: ['iOS & Android', 'Hybrid Apps', 'App Store']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience.',
      icon: <Award className="w-10 h-10" />,
      category: 'web development',
      color: 'from-pink-500 to-pink-700',
      features: ['Wireframing', 'Prototyping', 'User Testing']
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Excellent service! Our website traffic increased by 300% after working with this team.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      project: 'E-commerce Platform'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'Professional team with exceptional attention to detail. Highly recommended!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      project: 'Digital Marketing Campaign'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content: 'Their mobile app development expertise helped us launch successfully.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      project: 'Mobile Banking App'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Banking App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Flutter', 'Firebase', 'REST API']
    },
    {
      title: 'Social Media Campaign',
      category: 'digital marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      tags: ['SEO', 'Content', 'Analytics']
    },
    {
      title: 'SMS Gateway',
      category: 'bulk sms',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Node.js', 'Twilio', 'Database']
    },
    {
      title: 'Hotel Booking System',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Vue.js', 'Express', 'MySQL']
    },
    {
      title: 'Food Delivery App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80',
      tags: ['React Native', 'Google Maps', 'Payment']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (234) 567-8900</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@sainfotechs.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-3">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300" />
              <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-300" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-blue-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrollPosition > 100 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  SAInfotechs
                </h1>
                <p className="text-xs text-gray-500">Digital Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold">
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-600/10 rounded-full mb-6 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-blue-300 font-medium">Welcome to SAInfotechs</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl text-blue-200 mb-6 font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-white/90 mb-8 max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      {slide.buttonText} <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                      View Our Work
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 -mt-16 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
              { label: 'Happy Clients', value: '250+', icon: <Users className="w-6 h-6" /> },
              { label: 'Team Members', value: '50+', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Years Experience', value: '10+', icon: <Clock className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-600/5 rounded-full mb-4">
              <span className="text-blue-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the modern digital landscape.
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Side Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-2xl text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">10+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-600/5 rounded-full mb-6">
                <span className="text-blue-600 font-semibold">About Us</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Leading IT Solutions Provider
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At SAInfotechs, we are committed to delivering innovative digital solutions that drive business growth and transformation. Our team of experts combines technical expertise with creative thinking to solve complex challenges.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Custom software development',
                  'Digital marketing strategies',
                  'Web and mobile applications',
                  'IT consulting services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Discover Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Review Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-600/5 rounded-full mb-4">
              <span className="text-blue-600 font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.project}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-600/5 rounded-full mb-4">
              <span className="text-blue-600 font-semibold">Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio across different service categories
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'web development', 'software development', 'digital marketing', 'bulk sms'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 group/btn">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-600 mb-12 text-xl font-semibold">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                View Pricing Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SAInfotechs</h3>
                  <p className="text-gray-400 text-sm">Digital Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                We deliver innovative digital solutions that drive business growth and transformation.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">123 Business Street, City, Country</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">info@sainfotechs.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SAInfotechs. All rights reserved.</p>
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
    const duration = 2000;
    const increment = end / (duration / 20);

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

export default Home;