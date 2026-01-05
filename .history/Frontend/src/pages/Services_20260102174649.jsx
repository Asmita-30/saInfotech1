// Services.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
     {
    id: 'database',
    title: 'Database Managed Services',
    description: 'We take full responsibility for the performance and security of your data systems.',
    icon: '🗄️',
    features: ['Database Administration', 'Performance Tuning', 'Backup & Recovery', 'Security Management'],
    details: 'Expert DBAs handle everything from installation to high availability setup.',
    link: '/services/database'  
  },
    {
      id: 'managed-services',
      title: 'Managed Services',
      description: 'Comprehensive IT infrastructure and operations management.',
      icon: '🛡️',
      features: ['24/7 Monitoring', 'End-User Support', 'IT Management', 'Proactive Maintenance'],
      details: 'Give your business a strategic advantage with our managed services.',
      link: '/services/Manged'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Boost your online presence with expert digital marketing strategies.',
      icon: '📈',
      features: ['SEO', 'Social Media Marketing', 'PPC Campaigns', 'Content Marketing'],
      details: 'Tailored campaigns that increase visibility, engagement, and conversions.',
      link: '/service/digital-marketing'
    },
    {
      id: 'on-site-resources',
      title: 'On-Site Resource Services',
      description: 'Extend your technical capabilities with long-term hiring solutions.',
      icon: '👥',
      features: ['Skilled Professionals', 'Certified Experts', 'Long-term Deployment', 'Flexible Models'],
      details: 'Deploy IT professionals directly to maintain operational excellence.',
      link: '/service/OnSide'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'User-friendly websites tailored to your business needs.',
      icon: '🌐',
      features: ['Responsive Design', 'Performance Optimization', 'User Experience', 'Custom Development'],
      details: 'Enhanced user experience with optimized performance.',
      link: '/service/Website'
    },
    {
      id: 'software-application',
      title: 'Software Application',
      description: 'Innovative software solutions to streamline operations.',
      icon: '💻',
      features: ['Custom Software', 'Efficiency Focused', 'Security', 'Scalability'],
      details: 'Designed for efficiency, security, and scalability.',
      link: '/services/SoftwareDevelopment'
    },
    {
      id: 'graphic-designing',
      title: 'Graphic Designing',
      description: 'Stunning visuals that bring your brand to life.',
      icon: '🎨',
      features: ['Logo Design', 'Marketing Materials', 'Brand Identity', 'Visual Content'],
      details: 'Impactful graphics that captivate audiences.',
      link: '/service/Graphic'
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      description: 'Transform ideas into powerful mobile apps.',
      icon: '📱',
      features: ['Android & iOS', 'High Performance', 'User Engagement', 'Smooth Functionality'],
      details: 'Applications that offer smooth functionality and user satisfaction.',
      link: '/service/Mobile'
    },
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Services',
      description: 'Reach your audience instantly with reliable SMS services.',
      icon: '💬',
      features: ['Promotional SMS', 'Transactional SMS', 'High Deliverability', 'Instant Communication'],
      details: 'Effective communication with high deliverability and impactful messaging.',
      link: '/service/bulksms'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to empower your business. 
            From IT infrastructure to digital marketing, we cover all aspects of your digital needs.
          </p>
        </div>

        {/* Services Grid - 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Our Working Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and business goals' },
              { step: '02', title: 'Planning', desc: 'Designing the strategy and solution architecture' },
              { step: '03', title: 'Execution', desc: 'Implementing the solution with regular updates' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and continuous improvement' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="gradient-bg w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-bg rounded-2xl p-8 md:p-12 text-white text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can drive your business growth
          </p>
          <Link to="/contact">
            <button className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;