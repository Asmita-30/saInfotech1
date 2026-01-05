import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight as ChevronRightIcon,
  Heart,
  TrendingUp as TrendingUpIcon,
  Globe as GlobeIcon2,
  Quote,
  Verified,
  Calendar,
  Building,
  Award as AwardIcon,
  ArrowLeft,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';

// Import your images - replace with actual paths
const slideImages = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80'
];

const clientLogos = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012-2019%29.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/IBM_logo.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Uber_logo_2018.svg' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  // Updated Services Array
  const services = [
    {
      title: 'Database Managed Services',
      description: 'Comprehensive database management, monitoring, and optimization services.',
      icon: <DatabaseIcon className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'database',
      color: 'from-blue-500 to-cyan-500',
      features: ['24/7 Monitoring', 'Performance Tuning', 'Backup & Recovery', 'Security Management']
    },
    {
      title: 'Managed Services',
      description: 'Complete IT infrastructure management and support services.',
      icon: <Server className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'managed',
      color: 'from-green-500 to-emerald-500',
      features: ['Proactive Monitoring', 'Network Management', 'Security Services', 'Help Desk Support']
    },
    {
      title: 'On-Site Resource Services',
      description: 'Dedicated IT professionals working at your location.',
      icon: <UserCheck className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'onsite',
      color: 'from-purple-500 to-pink-500',
      features: ['Dedicated Staff', 'Technical Support', 'Project Management', 'Consultation']
    },
    {
      title: 'Website Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Layout className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'web development',
      color: 'from-red-500 to-orange-500',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      title: 'Software Application',
      description: 'Custom software solutions for your business needs.',
      icon: <CpuIcon className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'software development',
      color: 'from-indigo-500 to-blue-500',
      features: ['Custom Solutions', 'Scalable Architecture', 'Maintenance', 'Integration']
    },
    {
      title: 'Mobile Application',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <SmartphoneIcon className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'mobile development',
      color: 'from-pink-500 to-rose-500',
      features: ['iOS & Android', 'Hybrid Apps', 'App Store Deployment', 'Push Notifications']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for business growth.',
      icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'digital marketing',
      color: 'from-yellow-500 to-amber-500',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      title: 'Bulk SMS Services',
      description: 'Mass messaging solutions for marketing and alerts.',
      icon: <MessageSquareIcon className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'bulk sms',
      color: 'from-teal-500 to-green-500',
      features: ['High Delivery', 'Scheduling', 'Personalization', 'Analytics']
    },
    {
      title: 'Graphic Designing',
      description: 'Creative design solutions for branding and marketing.',
      icon: <Brush className="w-10 h-10 md:w-12 md:h-12" />,
      category: 'graphic design',
      color: 'from-purple-600 to-violet-500',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design']
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Excellent service! Our website traffic increased by 300% after working with this team. The database managed services have improved our system performance dramatically. Highly recommended for any business looking to scale.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '2 months ago',
      company: 'TechCorp Inc.',
      project: 'Enterprise Website & Database Migration'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'Professional team with exceptional attention to detail. Their digital marketing strategies helped us achieve record sales this quarter. The ROI on our marketing campaigns increased by 450% in just 3 months.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '1 month ago',
      company: 'Global Retail Group',
      project: 'Digital Marketing Campaign'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content: 'Their mobile app development expertise helped us launch successfully in both iOS and Android stores. The on-site resource support was invaluable during critical phases. Our user base grew from 0 to 50,000 in 2 months.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      date: '3 weeks ago',
      company: 'StartupXYZ',
      project: 'Mobile Application Development'
    },
    {
      name: 'Emily Davis',
      role: 'Operations Manager',
      content: 'Outstanding database management services. Our system performance improved by 40% after implementing their optimization solutions. The 24/7 support is exceptional. We have reduced our IT costs by 35% since partnering with them.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: '2 weeks ago',
      company: 'Healthcare Solutions Ltd.',
      project: 'Database Optimization'
    },
    {
      name: 'Robert Wilson',
      role: 'IT Director',
      content: 'The managed services team is extremely responsive and proactive. Our IT infrastructure has never been more stable. Their bulk SMS service helped us reach 95% more customers. Overall efficiency improved by 60%.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: '1 week ago',
      company: 'Financial Services Corp',
      project: 'Managed IT Services & SMS Campaign'
    },
    {
      name: 'Lisa Thompson',
      role: 'Creative Director',
      content: 'The graphic designing team transformed our brand identity completely. Their creative solutions helped us stand out in the market. The website redesign increased our conversion rate by 300%. Exceptional work!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: '4 days ago',
      company: 'Creative Agency',
      project: 'Brand Identity & Website Redesign'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      category: 'Web development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'Fashion Store'
    },
    {
      title: 'Banking App',
      category: 'Software development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      client: 'National Bank'
    },
    {
      title: 'Social Media Campaign',
      category: 'Digital marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      technologies: ['Facebook Ads', 'Instagram', 'Google Analytics'],
      client: 'Beauty Brand'
    },
    {
      title: 'SMS Gateway',
      category: 'Bulk sms',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      client: 'Hospital Chain'
    },
    {
      title: 'Hotel Booking System',
      category: 'Web development',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      client: 'Hotel Group'
    },
    {
      title: 'Food Delivery App',
      category: 'Software development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80',
      technologies: ['React Native', 'GraphQL', 'MongoDB'],
      client: 'Food Delivery Startup'
    }
  ];

  const categories = ['All', 'Web development', 'Software development', 'Digital marketing', 'Bulk sms'];

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full">
      {/* Hero Slideshow Section - Responsive Height */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[95vh] overflow-hidden">
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
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="w-6 sm:w-8 md:w-12 h-1 bg-blue-500"></div>
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm md:text-base">WELCOME TO OUR COMPANY</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm md:text-base">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                    <Link to="/contact">
                      <button className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1 sm:gap-2 hover:scale-105 transform transition-transform text-xs sm:text-sm md:text-base">
                        Get Started <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </button>
                    </Link>
                    <Link to="/about">
                      <button className="bg-transparent border border-white/30 text-white px-4 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-xs sm:text-sm md:text-base">
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
        <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-white w-4 h-2 sm:w-6 sm:h-2 md:w-8 md:h-3' 
                  : 'bg-white/50 w-2 h-2 sm:w-3 sm:h-3'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1 sm:p-1.5 md:p-2 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1 sm:p-1.5 md:p-2 rounded-full text-white transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
        </button>
      </section>

      {/* About Section with Side Image */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                    {clientsCount}+
                  </div>
                  <div className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">10+</div>
                  <div className="font-semibold text-xs sm:text-sm md:text-base">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 rounded-full">
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">ABOUT OUR COMPANY</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                We Provide The Best <span className="text-blue-600">IT Solutions</span>
              </h2>
              
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                We are a leading IT solutions provider with expertise in web development, 
                software development, digital marketing, and bulk SMS services. Our team 
                of dedicated professionals works tirelessly to deliver exceptional results 
                for our clients.
              </p>
              
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
                With over 10 years of experience in the industry, we understand the unique challenges 
                businesses face in the digital world and provide tailored solutions to help 
                them thrive in today's competitive market.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
                {[
                  '24/7 Technical Support',
                  'Cutting-edge Technology',
                  'Affordable Pricing',
                  'Timely Delivery'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, title: 'Award Winning', desc: 'Multiple awards' },
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, title: 'Fast Delivery', desc: 'On-time projects' },
                  { icon: <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, title: '95% Success', desc: 'Project success rate' },
                  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />, title: 'Expert Team', desc: 'Certified professionals' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
                    <div className="p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm md:text-base">{item.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <Link to="/about">
                  <button className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1 sm:gap-2 hover:scale-105 transform transition-transform text-xs sm:text-sm md:text-base">
                    Learn More About Us <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-transparent border border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-xs sm:text-sm md:text-base">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Updated */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 rounded-full">
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">OUR SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Comprehensive <span className="text-blue-600">IT Solutions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Complete range of IT services to transform your business digitally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300`}></div>
                
                <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} inline-flex mb-4 sm:mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="text-blue-600 font-semibold flex items-center gap-1 sm:gap-2 group-hover:gap-2 sm:group-hover:gap-3 transition-all text-sm sm:text-base">
                  Learn More <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 rounded-full">
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">OUR PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Explore our portfolio across different service categories
            </p>
          </div>

          {/* Updated Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-xs sm:text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md sm:shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">Client: {project.client}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{project.category}</div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 sm:gap-2 font-semibold group-hover:gap-2 sm:group-hover:gap-3 transition-all text-xs sm:text-sm md:text-base">
                      View Details <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trusted Partners Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
            >
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg">TRUSTED BY INDUSTRY LEADERS</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Collaborative</span> Network
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              We're proud to partner with industry giants and deliver exceptional results through strategic collaborations
            </p>
          </div>

          {/* Distributed Logo Grid */}
          <div className="relative">
            {/* Top Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {clientLogos.slice(0, 6).map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg md:hover:shadow-xl transition-all duration-300 h-20 sm:h-24 md:h-32 flex flex-col items-center justify-center border border-gray-200">
                    <div className="relative w-full h-6 sm:h-8 md:h-10 flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-6 sm:max-h-8 md:max-h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-medium text-gray-700">{client.name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {clientLogos.slice(6, 12).map((client, index) => (
                <motion.div
                  key={index + 6}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 6) * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group"
                >
                  <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg md:hover:shadow-xl transition-all duration-300 h-20 sm:h-24 md:h-32 flex flex-col items-center justify-center border border-gray-200">
                    <div className="relative w-full h-6 sm:h-8 md:h-10 flex items-center justify-center mb-1 sm:mb-2 md:mb-3">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-6 sm:max-h-8 md:max-h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-medium text-gray-700">{client.name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Stats */}
            <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl md:shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {stats.projects}+
                  </div>
                  <div className="text-blue-100 font-semibold text-xs sm:text-sm md:text-base">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {stats.clients}+
                  </div>
                  <div className="text-blue-100 font-semibold text-xs sm:text-sm md:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {stats.countries}+
                  </div>
                  <div className="text-blue-100 font-semibold text-xs sm:text-sm md:text-base">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {stats.team}+
                  </div>
                  <div className="text-blue-100 font-semibold text-xs sm:text-sm md:text-base">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Customer Reviews Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
            >
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg">CUSTOMER REVIEWS</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Hear from businesses that have transformed with our innovative solutions and exceptional service
            </p>
          </div>

          {/* Single Review Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left Side - Client Info */}
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-6 sm:p-8 md:p-12 text-white">
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <div className="relative mb-4 sm:mb-6">
                        <img
                          src={testimonials[testimonialIndex].image}
                          alt={testimonials[testimonialIndex].name}
                          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 sm:border-3 md:border-4 border-white/30 shadow-lg md:shadow-2xl"
                        />
                        <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-1 sm:p-2 rounded-full">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{testimonials[testimonialIndex].name}</h3>
                      <p className="text-blue-100 font-medium text-xs sm:text-sm md:text-base mb-1">{testimonials[testimonialIndex].role}</p>
                      <div className="flex items-center gap-1 sm:gap-2 text-blue-100 mb-3 sm:mb-4">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm md:text-base">{testimonials[testimonialIndex].company}</span>
                      </div>
                      
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300 fill-current" />
                        ))}
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{testimonials[testimonialIndex].date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                          <Verified className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Verified Customer</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                          <AwardIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{testimonials[testimonialIndex].project}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Testimonial Content */}
                  <div className="lg:col-span-2 p-6 sm:p-8 md:p-12">
                    <div className="h-full flex flex-col justify-center">
                      <div className="relative mb-6 sm:mb-8">
                        <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 md:-top-8 md:-left-8 text-blue-100">
                          <Quote className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                        </div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed italic pl-6 sm:pl-8">
                          "{testimonials[testimonialIndex].content}"
                        </p>
                      </div>
                      
                      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                          <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            <span className="font-semibold text-green-700 text-xs sm:text-sm md:text-base">Project Success</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                            <span className="font-semibold text-blue-700 text-xs sm:text-sm md:text-base">Positive ROI</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                            <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                            <span className="font-semibold text-purple-700 text-xs sm:text-sm md:text-base">Satisfied Client</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 sm:mt-10 md:mt-12 space-x-4 sm:space-x-6 md:space-x-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                Previous
              </button>
              
              {/* Review Counter */}
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
                  {testimonialIndex + 1} / {testimonials.length}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">Customer Reviews</div>
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                Next
                <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Review Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    testimonialIndex === index
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 w-4 h-2 sm:w-6 sm:h-2 md:w-8 md:h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3'
                  }`}
                />
              ))}
            </div>

            {/* Review Stats */}
            <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">4.9/5</div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Average Rating</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2">98%</div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">150+</div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">5-Star Reviews</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">95%</div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">Repeat Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-white-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have accelerated their growth with our comprehensive IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-white-to-r from-white-600  text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:scale-105 transform flex items-center gap-2 text-sm sm:text-base md:text-lg">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                    Start Your Project Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Link>
                {/* <Link to="/portfolio">
                  <button className="bg-transparent border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base md:text-lg">
                    View More Projects
                  </button>
                </Link> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;