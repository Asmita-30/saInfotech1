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
  ExternalLink
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

  const slides = [
    {
      title: 'SECURE & IT SERVICES',
      subtitle: 'Make The Easiest Solution For You',
      image: slideImages[0]
    },
    {
      title: 'BEST MARKETING SERVICE',
      subtitle: 'Perfect IT Solution For Your Business',
      image: slideImages[1]
    },
    {
      title: 'WE ARE BUILDING BETTER NETWORKS',
      subtitle: 'Superior Data Management Available for All',
      image: slideImages[2]
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Globe className="w-8 h-8" />,
      category: 'web development',
      color: 'bg-blue-500'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions for your business needs.',
      icon: <Code className="w-8 h-8" />,
      category: 'software development',
      color: 'bg-green-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for growth.',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'digital marketing',
      color: 'bg-purple-500'
    },
    {
      title: 'Bulk SMS',
      description: 'Mass messaging solutions for marketing and alerts.',
      icon: <MessageSquare className="w-8 h-8" />,
      category: 'bulk sms',
      color: 'bg-red-500'
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <Smartphone className="w-8 h-8" />,
      category: 'software development',
      color: 'bg-indigo-500'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience.',
      icon: <Globe className="w-8 h-8" />,
      category: 'web development',
      color: 'bg-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Excellent service! Our website traffic increased by 300% after working with this team.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'Professional team with exceptional attention to detail. Highly recommended!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content: 'Their mobile app development expertise helped us launch successfully.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];

  const portfolioProjects = [
    {
      title: 'E-commerce Platform',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Banking App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Social Media Campaign',
      category: 'digital marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
    },
    {
      title: 'SMS Gateway',
      category: 'bulk sms',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Hotel Booking System',
      category: 'web development',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Food Delivery App',
      category: 'software development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1481&q=80'
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <h1 className="text 5xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* About Section with Side Image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={clientsCount} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-semibold">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We are a leading IT solutions provider with expertise in web development, 
                software development, digital marketing, and bulk SMS services. Our team 
                of dedicated professionals works tirelessly to deliver exceptional results 
                for our clients.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                With years of experience in the industry, we understand the unique challenges 
                businesses face in the digital world and provide tailored solutions to help 
                them thrive.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Projects Completed', value: '500+' },
                  { label: 'Team Members', value: '50+' },
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Countries Served', value: '20+' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Review Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Reviews
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Counter Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Delivered', endValue: 500, suffix: '+' },
              { label: 'Happy Clients', endValue: 250, suffix: '+' },
              { label: 'Countries Served', endValue: 25, suffix: '+' },
              { label: 'Team Members', endValue: 50, suffix: '+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <Counter end={stat.endValue} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Work
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our portfolio across different service categories
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'web development', 'software development', 'digital marketing', 'bulk sms'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 capitalize">{project.category}</span>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      View Details <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-gray-600 mb-8">
            Companies we've worked with
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to start your project? Get in touch with us today!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <div className="font-semibold">Phone</div>
                <div>+1 (555) 123-4567</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <div className="font-semibold">Email</div>
                <div>info@company.com</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <div className="font-semibold">Address</div>
                <div>123 Business St, City, Country</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Call Now <Phone className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Email Us <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
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