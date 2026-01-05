// Digital.jsx
import React, { useState } from 'react';
import { 
  BarChart3, Code, Smartphone, Search, 
  TrendingUp, Palette, Globe, Users,
  CheckCircle, ArrowRight, Cpu
} from 'lucide-react';

const Digital = () => {
  const [activeTab, setActiveTab] = useState('digital-marketing');

  // Digital Marketing Services
  const marketingServices = [
    { 
      id: 1, 
      title: 'SEO Optimization', 
      desc: 'Improve your website ranking on search engines with our proven SEO strategies.',
      icon: <Search size={32} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
    },
    { 
      id: 2, 
      title: 'Social Media Marketing', 
      desc: 'Engage your audience across all social platforms with targeted campaigns.',
      icon: <Users size={32} />,
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974'
    },
    { 
      id: 3, 
      title: 'Content Marketing', 
      desc: 'Create compelling content that attracts and retains your target audience.',
      icon: <TrendingUp size={32} />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
    },
    { 
      id: 4, 
      title: 'Web Design & Development', 
      desc: 'Build responsive, high-performance websites that convert visitors into customers.',
      icon: <Globe size={32} />,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080'
    },
  ];

  // Software Development Languages & Technologies
  const techStack = [
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-400', text: 'text-black' },
    { name: 'Python', icon: 'Py', color: 'bg-blue-500', text: 'text-white' },
    { name: 'Java', icon: 'Jv', color: 'bg-red-500', text: 'text-white' },
    { name: 'C#', icon: 'C#', color: 'bg-green-600', text: 'text-white' },
    { name: 'PHP', icon: 'PHP', color: 'bg-purple-500', text: 'text-white' },
    { name: 'React.js', icon: 'Rj', color: 'bg-cyan-400', text: 'text-black' },
    { name: 'Node.js', icon: 'Nj', color: 'bg-green-500', text: 'text-white' },
    { name: 'Angular', icon: 'Ag', color: 'bg-red-600', text: 'text-white' },
    { name: 'Vue.js', icon: 'Vj', color: 'bg-green-400', text: 'text-white' },
    { name: 'Django', icon: 'Dj', color: 'bg-green-700', text: 'text-white' },
    { name: 'MySQL', icon: 'SQL', color: 'bg-blue-600', text: 'text-white' },
    { name: 'MongoDB', icon: 'MDB', color: 'bg-green-800', text: 'text-white' },
  ];

  // What SA Infotech Provides
  const saInfotechServices = [
    'Custom Software Development',
    'Mobile App Development (iOS & Android)',
    'E-commerce Solutions',
    'CRM & ERP Systems',
    'Cloud Migration Services',
    'AI & Machine Learning Solutions',
    'IT Consulting & Strategy',
    '24/7 Support & Maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
 

      <main className="container mx-auto px-4 py-8">
   

        {/* Digital Marketing Section */}
        <section className={`mb-16 transition-all duration-500 ${activeTab === 'digital-marketing' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-10">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md mr-4">
              <BarChart3 size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Digital Marketing Services</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-10 max-w-4xl">
            We create data-driven digital marketing strategies that deliver measurable results. 
            From SEO to social media, we help your brand stand out in the crowded digital landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-md">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn more 
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Digital Marketing Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <TrendingUp size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-lg">Data-Driven Strategies</h4>
                </div>
                <p className="text-gray-600">We use analytics and insights to create marketing campaigns that deliver real ROI.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <Smartphone size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold text-lg">Mobile-First Approach</h4>
                </div>
                <p className="text-gray-600">All our campaigns are optimized for mobile users, who make up the majority of web traffic.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-pink-100 rounded-lg mr-4">
                    <Palette size={24} className="text-pink-600" />
                  </div>
                  <h4 className="font-bold text-lg">Creative Excellence</h4>
                </div>
                <p className="text-gray-600">Our creative team produces stunning visuals and compelling content that captures attention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development Section */}
        <section className={`mb-16 transition-all duration-500 ${activeTab === 'software-dev' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-10">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-md mr-4">
              <Code size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Software Development</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What is Software Development?</h3>
              <p className="text-gray-700 text-lg mb-6">
                Software development is the process of designing, creating, testing, and maintaining applications, 
                frameworks, or other software components. It involves writing and maintaining source code, but in a 
                broader sense, it includes all that is involved between the conception of the desired software 
                through to the final manifestation of the software.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Key Programming Languages & Technologies</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="group flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                      <div className={`${tech.color} ${tech.text} w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      <span className="font-medium text-gray-800 text-center text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">SA Infotech Services</h3>
                <p className="mb-6">We provide end-to-end software development solutions tailored to your business needs:</p>
                
                <ul className="space-y-4">
                  {saInfotechServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 w-full py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                  Request a Quote
                </button>
              </div>
              
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Development Process</h4>
                <div className="space-y-4">
                  {[
                    { step: 'Requirement Analysis', color: 'bg-blue-500' },
                    { step: 'Planning & Design', color: 'bg-green-500' },
                    { step: 'Implementation', color: 'bg-purple-500' },
                    { step: 'Testing & QA', color: 'bg-yellow-500' },
                    { step: 'Deployment', color: 'bg-pink-500' },
                    { step: 'Maintenance', color: 'bg-indigo-500' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group cursor-pointer">
                      <div className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {item.step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl mb-16 transform hover:-translate-y-2 transition-transform duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need digital marketing expertise or custom software solutions, SA Infotech has you covered.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Schedule a Free Consultation
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3">
                <Cpu size={36} className="text-blue-400" />
                <h2 className="text-2xl font-bold">SA Infotech</h2>
              </div>
              <p className="text-gray-400 mt-2">Digital Solutions for the Future</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2023 SA Infotech. All rights reserved.</p>
              <p className="text-gray-400 mt-2">contact@sainfotech.com | +91 9876543210</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Digital;