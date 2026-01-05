// Database.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaServer, 
  FaDatabase, 
  FaShieldAlt, 
  FaSync, 
  FaChartLine, 
  FaCloudUploadAlt,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaPlay,
  FaChevronRight
} from 'react-icons/fa';
import { MdSpeed, MdSecurity, MdBackup, MdSupportAgent } from 'react-icons/md';
import { TbRefresh } from 'react-icons/tb';

const Database = () => {
  const [activeTab, setActiveTab] = useState('monitoring');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState([
    { value: 99.9, label: 'Uptime SLA', suffix: '%', color: 'text-green-400' },
    { value: 40, label: 'Cost Reduction', suffix: '%', color: 'text-blue-400' },
    { value: 24, label: 'Support', suffix: '/7', color: 'text-purple-400' },
    { value: 50, label: 'Faster Deployment', suffix: '%', color: 'text-orange-400' }
  ]);

  // Services data
  const services = {
    monitoring: {
      title: '24/7 Database Monitoring',
      description: 'Proactive monitoring and alerting for your database infrastructure with real-time performance insights and predictive analytics.',
      icon: <FaChartLine className="text-4xl text-blue-500" />,
      features: [
        'Real-time performance metrics',
        'Automated alert management',
        'Health dashboard & reporting',
        'Anomaly detection',
        'Predictive capacity planning'
      ],
      databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    backup: {
      title: 'Automated Backup & Recovery',
      description: 'Enterprise-grade backup solutions with point-in-time recovery to ensure zero data loss and business continuity.',
      icon: <MdBackup className="text-4xl text-green-500" />,
      features: [
        'Automated daily backups',
        'Disaster recovery planning',
        'Point-in-time restore',
        'Encrypted storage',
        'Backup validation'
      ],
      databases: ['Oracle', 'SQL Server', 'MySQL', 'PostgreSQL']
    },
    performance: {
      title: 'Performance Tuning',
      description: 'Optimize query performance, indexing strategies, and configuration for maximum efficiency and throughput.',
      icon: <MdSpeed className="text-4xl text-purple-500" />,
      features: [
        'Query optimization',
        'Index management',
        'Configuration tuning',
        'Capacity planning',
        'Bottleneck analysis'
      ],
      databases: ['All SQL Databases', 'NoSQL', 'In-memory DBs']
    },
    security: {
      title: 'Security & Compliance',
      description: 'End-to-end security with encryption, access controls, and compliance auditing for regulatory requirements.',
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      features: [
        'Encryption at rest & transit',
        'Access management',
        'Vulnerability assessment',
        'Audit logging',
        'GDPR/HIPAA compliance'
      ],
      databases: ['All Supported Databases']
    },
    migration: {
      title: 'Migration Services',
      description: 'Seamless database migration between platforms with zero downtime and minimal risk.',
      icon: <FaSync className="text-4xl text-yellow-500" />,
      features: [
        'Platform migration',
        'Schema conversion',
        'Data synchronization',
        'Cutover planning',
        'Post-migration support'
      ],
      databases: ['Cloud Migrations', 'Version Upgrades', 'Platform Changes']
    },
    scalability: {
      title: 'Scalability Management',
      description: 'Horizontal and vertical scaling solutions to match your growing business needs.',
      icon: <FaCloudUploadAlt className="text-4xl text-indigo-500" />,
      features: [
        'Auto-scaling',
        'Read replicas',
        'Sharding strategy',
        'Load balancing',
        'Performance scaling'
      ],
      databases: ['MongoDB', 'Cassandra', 'MySQL Cluster', 'PostgreSQL']
    }
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechFlow Inc.',
      comment: 'Their database management reduced our operational overhead by 60% and improved query performance by 3x. Absolutely game-changing!',
      avatar: 'SJ',
      rating: 5,
      companyLogo: 'TF'
    },
    {
      name: 'Michael Chen',
      role: 'Lead DBA, DataSphere',
      comment: 'The migration service was seamless. We moved from on-prem to cloud with zero downtime. Their team is incredibly professional.',
      avatar: 'MC',
      rating: 5,
      companyLogo: 'DS'
    },
    {
      name: 'Priya Sharma',
      role: 'DevOps Manager, CloudFirst',
      comment: '24/7 monitoring and proactive alerts have prevented multiple potential outages. Their support team is always available.',
      avatar: 'PS',
      rating: 5,
      companyLogo: 'CF'
    }
  ];

  // Database types for logos
  const databaseLogos = [
    { name: 'MySQL', color: 'bg-blue-100 text-blue-800', icon: 'my' },
    { name: 'PostgreSQL', color: 'bg-gray-100 text-gray-800', icon: 'pg' },
    { name: 'MongoDB', color: 'bg-green-100 text-green-800', icon: 'mg' },
    { name: 'Redis', color: 'bg-red-100 text-red-800', icon: 'rd' },
    { name: 'Cassandra', color: 'bg-indigo-100 text-indigo-800', icon: 'cs' },
    { name: 'Oracle', color: 'bg-red-100 text-red-800', icon: 'or' },
    { name: 'SQL Server', color: 'bg-purple-100 text-purple-800', icon: 'ss' },
    { name: 'Elasticsearch', color: 'bg-yellow-100 text-yellow-800', icon: 'es' }
  ];

  // Animation for stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.value + (Math.random() > 0.5 ? 0.1 : -0.1)
        }))
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaDatabase className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                DBManaged
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition">Testimonials</a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Trusted by 500+ companies worldwide
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professional
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Database Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Fully managed database solutions ensuring performance, security, and reliability. 
                Focus on your application while we handle the infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all flex items-center justify-center hover:scale-105">
                  Start Free Trial
                  <FaArrowRight className="ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium text-lg hover:bg-blue-50 transition-all flex items-center justify-center">
                  <FaPlay className="mr-2" />
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value.toFixed(1)}{stat.suffix}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-2xl">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
                  <FaServer className="text-3xl" />
                </div>
                
                {/* Database Visualization */}
                <div className="relative h-80">
                  <div className="absolute top-10 left-1/4 w-16 h-16 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                    <FaDatabase className="text-white text-2xl" />
                  </div>
                  <div className="absolute top-32 left-10 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
                    <FaDatabase className="text-white text-xl" />
                  </div>
                  <div className="absolute top-20 right-20 w-14 h-14 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center">
                    <FaDatabase className="text-white text-xl" />
                  </div>
                  <div className="absolute bottom-20 left-20 w-10 h-10 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
                    <FaDatabase className="text-white text-lg" />
                  </div>
                  <div className="absolute bottom-10 right-1/4 w-16 h-16 bg-indigo-500 rounded-lg shadow-lg flex items-center justify-center">
                    <FaDatabase className="text-white text-2xl" />
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-20 left-1/3 w-1/4 h-1 bg-gradient-to-r from-blue-400 to-green-400 transform rotate-12"></div>
                  <div className="absolute top-40 left-1/4 w-1/3 h-1 bg-gradient-to-r from-purple-400 to-red-400 transform -rotate-6"></div>
                  <div className="absolute bottom-24 left-1/3 w-1/4 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 transform rotate-45"></div>
                  
                  {/* Animated data point */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Monitoring Dashboard</h3>
                  <p className="text-gray-600">Live tracking of all database instances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Database Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end database management solutions tailored to your technology stack
            </p>
          </div>
          
          {/* Service Tabs */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    activeTab === key 
                      ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-md' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className={`p-3 rounded-lg mb-3 ${
                    activeTab === key ? 'bg-white shadow-sm' : 'bg-white'
                  }`}>
                    {services[key].icon}
                  </div>
                  <span className={`font-medium text-sm text-center ${
                    activeTab === key ? 'text-blue-700' : 'text-gray-700'
                  }`}>
                    {services[key].title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services[activeTab].title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  {services[activeTab].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all inline-flex items-center">
                  Learn More
                  <FaChevronRight className="ml-2" />
                </button>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Supported Databases</h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {services[activeTab].databases.map((db, index) => (
                      <span key={index} className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                        {db}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Performance</span>
                      <span className="font-bold text-green-600">+85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2 mt-4">
                      <span className="text-gray-600">Uptime</span>
                      <span className="font-bold text-blue-600">99.95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99.95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Support Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support for All Major Databases
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              We manage all popular SQL, NoSQL, and in-memory databases
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {databaseLogos.map((db, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${db.color} font-bold text-lg mb-3`}>
                  {db.icon}
                </div>
                <span className="text-white font-medium">{db.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Solution?</h3>
                <p className="text-gray-300">We provide tailored database management for specialized requirements</p>
              </div>
              <button className="mt-6 md:mt-0 bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              See what our customers say about our database management services
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-2 ${
                    activeTestimonial === index ? 'border-blue-300' : 'border-transparent'
                  } transition-all hover:shadow-xl cursor-pointer`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
                  <p className="text-gray-700 italic mb-6">{testimonial.comment}</p>
                  
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 mr-1" />
                    ))}
                    <div className="ml-auto bg-gray-100 px-4 py-2 rounded-lg font-bold">
                      {testimonial.companyLogo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Database Transformation Today
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of companies who trust us with their critical database infrastructure
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Start Free Trial
              </button>
            </div>
            
            <p className="text-blue-200 mt-6">
              <span className="font-bold">14-day free trial</span> • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <FaDatabase className="text-3xl text-blue-400 mr-3" />
              <span className="text-2xl font-bold text-white">DBManaged</span>
            </div>
            
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="font-bold">F</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="font-bold">T</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <span className="font-bold">In</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} DBManaged Services. All rights reserved.</p>
            <p className="mt-2">Enterprise-grade database management solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Database;