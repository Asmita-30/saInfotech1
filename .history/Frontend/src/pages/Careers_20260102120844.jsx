import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, TrendingUp, Heart, DollarSign, Calendar,
  MapPin, Clock, Briefcase, Upload, CheckCircle, ChevronRight,
  Code, Smartphone, Monitor, Mail, Palette, Cloud, Server,
  BarChart, Target, Zap, Shield, Cpu, MessageSquare,
  GraduationCap, Rocket, Laptop, Smartphone as Phone, PenTool,
  MessageCircle, Headphones, Globe, Database, ShoppingBag,
  Video, Music, Camera, Gamepad, BookOpen, Coffee
} from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: <Award className="w-6 h-6" />, title: 'Career Growth', desc: 'Clear promotion paths and skill development' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Flexible Hours', desc: 'Work-life balance with remote options' },
    { icon: <Heart className="w-6 h-6" />, title: 'Health Benefits', desc: 'Comprehensive medical and dental plans' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Stock Options', desc: 'Share in company success' },
    { icon: <Users className="w-6 h-6" />, title: 'Great Culture', desc: 'Inclusive and collaborative environment' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build scalable web applications using modern technologies.',
      requirements: ['React/Node.js', 'REST APIs', 'Database design', 'Git'],
      postedDate: '2024-01-15',
      salary: '₹6L - ₹12L'
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      department: 'Development',
      location: 'Pune',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Develop cross-platform mobile applications.',
      requirements: ['React Native/Flutter', 'REST APIs', 'UI/UX sense', 'App Store deployment'],
      postedDate: '2024-01-10',
      salary: '₹4L - ₹8L'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Create beautiful and functional designs for web and mobile.',
      requirements: ['Figma expertise', 'User research', 'Prototyping', 'Design systems'],
      postedDate: '2024-01-05',
      salary: '₹3L - ₹6L'
    },
    {
      id: 4,
      title: 'Digital Marketing Executive',
      department: 'Marketing',
      location: 'Pune',
      type: 'Full-time',
      experience: '6+ months',
      description: 'Manage digital campaigns and social media presence.',
      requirements: ['SEO/SEM', 'Content creation', 'Analytics', 'Social media'],
      postedDate: '2024-01-01',
      salary: '₹2.5L - ₹5L'
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Pune',
      type: 'Full-time',
      experience: '0-6 months',
      description: 'Generate leads and build client relationships.',
      requirements: ['Communication skills', 'Client handling', 'Market research', 'Presentation'],
      postedDate: '2023-12-28',
      salary: '₹2L - ₹4L + Incentives'
    },
    {
      id: 6,
      title: 'Intern - Web Development',
      department: 'Training',
      location: 'Pune',
      type: 'Internship',
      experience: 'Fresher',
      description: '6 months internship with training and hands-on projects.',
      requirements: ['Basic programming', 'Willingness to learn', 'HTML/CSS', 'Problem solving'],
      postedDate: '2023-12-25',
      salary: 'Stipend + Certificate'
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      duration: '6 Months',
      mode: 'Online + Offline',
      projects: '5+ Real Projects',
      placement: '100% Guaranteed',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML/CSS/JS', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      duration: '4 Months',
      mode: 'Online + Offline',
      projects: '3+ Apps',
      placement: '100% Guaranteed',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['React Native', 'Flutter', 'Firebase', 'APIs', 'App Deployment']
    },
    {
      id: 3,
      title: 'Digital Marketing',
      duration: '3 Months',
      mode: 'Online',
      projects: 'Live Campaigns',
      placement: 'Internship Guaranteed',
      icon: <BarChart className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: ['SEO', 'Social Media', 'Google Ads', 'Content Marketing', 'Analytics']
    },
    {
      id: 4,
      title: 'Graphic Design',
      duration: '3 Months',
      mode: 'Offline',
      projects: 'Portfolio Building',
      placement: 'Freelance Support',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-orange-500 to-amber-500',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'UI Design', 'Branding']
    }
  ];

  const services = [
    {
      id: 1,
      title: 'Training Programs',
      description: 'Comprehensive training in Web Development, Mobile App Development, Digital Marketing and more with placement assistance.',
      icon: <GraduationCap className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      details: [
        'Web Development (MERN Stack)',
        'Mobile App Development',
        'Digital Marketing',
        'UI/UX Design',
        'Java/Python Programming',
        'Placement Guarantee'
      ]
    },
    {
      id: 2,
      title: 'Managed Services',
      description: 'Comprehensive IT infrastructure management including 24/7 monitoring, end-user support, and proactive maintenance.',
      icon: <Server className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      details: [
        '24/7 Network Monitoring',
        'End-User Support',
        'Security Management',
        'Cloud Management',
        'Backup Solutions',
        'Disaster Recovery'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Boost online presence with expert strategies. From SEO to social media, we craft campaigns that increase visibility and conversions.',
      icon: <Target className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      iconColor: 'text-green-600',
      details: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Google/Facebook Ads',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      id: 4,
      title: 'On-Site Resource Services',
      description: 'Extend your team with skilled IT professionals. We deploy certified experts for long-term projects and technical support.',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
      iconColor: 'text-amber-600',
      details: [
        'Long-term Hiring',
        'Technical Consultants',
        'Project Managers',
        'System Administrators',
        'Database Administrators',
        'Support Engineers'
      ]
    },
    {
      id: 5,
      title: 'Website Development',
      description: 'Create user-friendly websites with responsive design and optimized performance for enhanced user experience.',
      icon: <Globe className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      iconColor: 'text-cyan-600',
      details: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'WordPress Development',
        'Custom Web Applications',
        'Website Maintenance',
        'SEO Optimization'
      ]
    },
    {
      id: 6,
      title: 'Software Application',
      description: 'Develop innovative software solutions that streamline operations and enhance productivity with security and scalability.',
      icon: <Cpu className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      iconColor: 'text-indigo-600',
      details: [
        'Custom Software Development',
        'ERP/CRM Solutions',
        'Inventory Management',
        'Accounting Software',
        'API Development',
        'Legacy System Migration'
      ]
    },
    {
      id: 7,
      title: 'Graphic Designing',
      description: 'Bring your brand to life with stunning visuals. From logos to marketing materials, we design impactful graphics.',
      icon: <PenTool className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100',
      iconColor: 'text-pink-600',
      details: [
        'Logo & Brand Identity',
        'Marketing Collateral',
        'Social Media Graphics',
        'Print Design',
        'Packaging Design',
        'Illustration'
      ]
    },
    {
      id: 8,
      title: 'Mobile Application',
      description: 'Transform ideas into powerful mobile apps with smooth functionality and user satisfaction for both Android and iOS.',
      icon: <Phone className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-violet-50 to-violet-100',
      iconColor: 'text-violet-600',
      details: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Apps',
        'App UI/UX Design',
        'App Store Deployment',
        'App Maintenance'
      ]
    },
    {
      id: 9,
      title: 'Bulk SMS Services',
      description: 'Reach your audience instantly with reliable bulk SMS services for promotions, alerts, and notifications.',
      icon: <MessageCircle className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
      iconColor: 'text-teal-600',
      details: [
        'Promotional SMS',
        'Transactional SMS',
        'OTP Services',
        'API Integration',
        'High Deliverability',
        'Real-time Analytics'
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Build Your Career With
            <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">SA Infotech</span>
          </motion.h1>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Join a dynamic team that's shaping the future of technology. Grow with us, learn with us, 
            and build amazing things together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </button>
            <button 
              onClick={() => document.getElementById('training').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              Explore Training
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work at <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SA Infotech?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in nurturing talent and providing opportunities for growth, innovation, and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="training" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-700">LEARN & GROW</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master in-demand skills with our industry-oriented training programs and kickstart your tech career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">{program.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Mode:</span>
                      <span className="font-semibold">{program.mode}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Projects:</span>
                      <span className="font-semibold">{program.projects}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Placement:</span>
                      <span className="font-semibold text-green-600">{program.placement}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Hiring Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Practical Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-2 rounded-full mb-4">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IT Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end technology services to help your business grow and thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}
                onClick={() => setSelectedService(service === selectedService ? null : service)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${service.bgColor.replace('50', '100').replace('to-br', '')} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className={service.iconColor}>{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>

                {selectedService === service && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-gray-300/50"
                  >
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                )}

                {selectedService !== service && (
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">Click to view details</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-2 rounded-full mb-4">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">CAREER OPPORTUNITIES</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our talented team and work on exciting projects that make a real impact.
            </p>
          </div>

          {/* Job Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {['All', 'Development', 'Design', 'Marketing', 'Sales', 'Training', 'Internship'].map((filter, idx) => (
              <button
                key={idx}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-6xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                          {job.department}
                        </span>
                        {job.type === 'Internship' && (
                          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                            Training Available
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="text-green-600 font-semibold">
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[200px]">
                      <button
                        onClick={() => {
                          setSelectedJob(job);
                          document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                          setFormData(prev => ({ ...prev, position: job.title }));
                        }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => setSelectedJob(job === selectedJob ? null : job)}
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        {selectedJob === job ? 'Hide Details' : 'View Details'}
                        <ChevronRight className={`w-4 h-4 transition-transform ${selectedJob === job ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedJob === job && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-gray-900">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-4 text-gray-900">What We Offer:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Competitive salary and benefits</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Professional growth opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Modern work environment</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Training and certification support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Apply for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Position</span>
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our HR team will contact you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Application Submitted Successfully!</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8">
                    Thank you for applying to SA Infotech. Our HR team will review your application 
                    and contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Apply for Another Position
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {selectedJob && (
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Applying for:</h4>
                          <p className="text-blue-700 font-semibold">{selectedJob.title}</p>
                          <p className="text-gray-600 text-sm">{selectedJob.department} • {selectedJob.location}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedJob(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          Change Position
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Years of Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="text-gray-600 mb-2">
                          {formData.resume ? (
                            <span className="text-green-600 font-semibold">{formData.resume.name}</span>
                          ) : (
                            'Click to upload or drag and drop'
                          )}
                        </div>
                        <div className="text-sm text-gray-500">PDF, DOC, DOCX up to 5MB</div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-5 h-5 mt-1 text-blue-600"
                    />
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the privacy policy and consent to having my data processed for recruitment purposes.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking for a job, internship, or professional training, 
            we have the perfect opportunity for you to grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
              Apply for Training
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;