import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications with modern technologies.',
      icon: <Globe className="w-8 h-8" />,
      features: ['React.js', 'Node.js', 'Next.js', 'MongoDB']
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps with native and cross-platform solutions.',
      icon: <Globe className="w-8 h-8" />,
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience.',
      icon: <Globe className="w-8 h-8" />,
      features: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: <Globe className="w-8 h-8" />,
      features: ['AWS', 'Azure', 'Google Cloud', 'Docker']
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for growth.',
      icon: <Globe className="w-8 h-8" />,
      features: ['SEO', 'PPC', 'Social Media', 'Analytics']
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Monitoring', 'Updates', 'Security', 'Backup']
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content: 'Excellent service! Our website traffic increased by 300% after working with SA Infotech.',
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

  const technologies = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'Flutter', 'React Native'];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Building Smart Digital Solutions
          </motion.h1>
          <p className="text-xl mb-8 opacity-90">Web | Mobile | Cloud | AI</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRight />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-gray-700 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to transform your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Why Choose SA Infotech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users />, title: 'Expert Team', desc: 'Certified professionals with 10+ years experience' },
              { icon: <CheckCircle />, title: 'Quality Assurance', desc: 'Rigorous testing for flawless delivery' },
              { icon: <Shield />, title: 'Data Security', desc: 'Enterprise-grade security protocols' },
              { icon: <Star />, title: 'Client Satisfaction', desc: '98% client retention rate' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-gradient-primary text-white px-6 py-2 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <button className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;