// ServicesPages/WebDevelopment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Database, Cloud, Shield } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        {/* Service Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🌐</span>
                <h1 className="text-4xl font-bold gradient-text">Web Development</h1>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Full-stack web applications with modern frameworks and technologies.
              </p>
              <p className="text-gray-600">
                We build scalable web applications with clean architecture and best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Service Overview</h2>
              <p className="text-gray-700 mb-4">
                Our web development service focuses on creating robust, scalable, and high-performance 
                web applications tailored to your business needs. We leverage modern technologies 
                and best practices to deliver solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-700">
                From single-page applications to complex enterprise systems, we ensure seamless 
                user experiences across all devices. Our team follows agile methodologies to 
                deliver projects on time and within budget.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Code className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
                    <p className="text-gray-600">React, Vue.js, Angular, Next.js</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Backend Development</h3>
                    <p className="text-gray-600">Node.js, Python, PHP, Java</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cloud className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cloud Deployment</h3>
                    <p className="text-gray-600">AWS, Azure, Google Cloud, Vercel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Security & Maintenance</h3>
                    <p className="text-gray-600">SSL, Firewalls, Regular Updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Vue.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express.js', 'Next.js', 'TypeScript', 'AWS', 'Docker'].map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Benefits</h2>
              <div className="space-y-4">
                {[
                  'Responsive Design',
                  'Fast Performance',
                  'SEO Optimized',
                  'Secure & Scalable',
                  'Regular Updates',
                  '24/7 Support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="gradient-bg rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Start Your Project</h2>
              <p className="mb-6">Get a free consultation and quote for your web development project.</p>
              <Link to="/contact">
                <button className="w-full bg-white text-dark-bg py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;