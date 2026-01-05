
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const allServices = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and technologies.',
      icon: '🌐',
      features: ['React.js', 'Vue.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      details: 'We build scalable web applications with clean architecture and best practices.'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile applications for iOS and Android.',
      icon: '📱',
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      details: 'From concept to deployment, we create engaging mobile experiences.'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and conversion.',
      icon: '🎨',
      features: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
      details: 'Beautiful and functional designs that users love.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️',
      features: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      details: 'Cloud architecture optimized for performance and cost.'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies for business growth.',
      icon: '📈',
      features: ['SEO', 'PPC', 'Social Media', 'Content Marketing', 'Analytics'],
      details: 'Increase your online presence and drive qualified traffic.'
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services.',
      icon: '🔧',
      features: ['Monitoring', 'Updates', 'Security', 'Backup', 'Performance'],
      details: 'Proactive maintenance to keep your systems running smoothly.'
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
            Comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we ensure excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and requirements' },
              { step: '02', title: 'Planning', desc: 'Create detailed project roadmap and architecture' },
              { step: '03', title: 'Development', desc: 'Agile development with regular updates' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and support' }
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
            Have a Project in Mind?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <button className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;