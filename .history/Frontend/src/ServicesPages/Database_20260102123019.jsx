import React from 'react';

const Database = () => {
  const services = [
    "Database Monitoring & Performance Tuning",
    "Automated Backup & Recovery Solutions",
    "Security Management & Patching",
    "High Availability & Disaster Recovery",
    "Database Migration & Upgrades",
    "24/7 Expert Support & Maintenance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Database Managed Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive database management solutions to ensure optimal performance, 
            security, and reliability for your critical data infrastructure.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Database Management Dashboard"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-700 font-medium">Uptime SLA</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-700 font-medium">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What are Database Managed Services?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Database Managed Services provide end-to-end management of your database 
                infrastructure, including setup, configuration, monitoring, backup, 
                security, and performance optimization. Our experts handle the complexity 
                so you can focus on your core business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-800 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="text-blue-600 mb-3">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Proactive Monitoring</h4>
                <p className="text-gray-700">Real-time monitoring with predictive analytics</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="text-blue-600 mb-3">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Enterprise Security</h4>
                <p className="text-gray-700">Advanced security protocols and compliance</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                Get Free Database Assessment
                <svg className="inline-block ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Supported Databases */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Supported Database Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'].map((db) => (
              <div key={db} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{db}</div>
                <div className="text-gray-600">Full Support</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;