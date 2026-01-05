// EnhancedDatabaseInfo.jsx
import React from 'react';
import { FaDatabase, FaCheck, FaServer, FaShieldAlt, FaChartLine, FaSync, FaUserShield, FaCloud, FaRegClock, FaCogs } from 'react-icons/fa';
import { MdSecurity, MdSpeed, MdStorage } from 'react-icons/md';

const EnhancedDatabaseInfo = () => {
  const technologies = [
    { name: 'MySQL', icon: '🔵', category: 'SQL Databases' },
    { name: 'PostgreSQL', icon: '🔷', category: 'SQL Databases' },
    { name: 'MongoDB', icon: '🟢', category: 'NoSQL Databases' },
    { name: 'Redis', icon: '🔺', category: 'NoSQL Databases' },
    { name: 'SQL Server', icon: '🔶', category: 'SQL Databases' },
    { name: 'Oracle', icon: '🔴', category: 'SQL Databases' },
    { name: 'Cassandra', icon: '🟣', category: 'NoSQL Databases' },
    { name: 'DynamoDB', icon: '🟡', category: 'Cloud Databases' },
    { name: 'MariaDB', icon: '🔵', category: 'SQL Databases' },
    { name: 'Elasticsearch', icon: '🟠', category: 'NoSQL Databases' },
    { name: 'Firebase', icon: '🟧', category: 'Cloud Databases' },
    { name: 'SQLite', icon: '🔷', category: 'SQL Databases' }
  ];

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security & Compliance",
      desc: "Enterprise-grade security with SOC2, GDPR, HIPAA compliance",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Performance Tuning",
      desc: "24/7 monitoring and optimization for peak performance",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaSync className="text-2xl" />,
      title: "Automated Backups",
      desc: "Point-in-time recovery with automated backup management",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <FaUserShield className="text-2xl" />,
      title: "Expert Support",
      desc: "24/7 access to certified database administrators",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "<15min", label: "Avg Response Time" },
    { value: "24/7", label: "Monitoring" },
    { value: "1hr", label: "Recovery Time Objective" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
  

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Information & Features */}
          <div className="xl:w">
            {/* What is Database Managed Services */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                What is Database Managed Services?
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-6 text-lg">
                    Database Managed Services is a comprehensive solution where specialized providers handle the complete administration, maintenance, and optimization of your database systems. This includes proactive monitoring, automated backups, security hardening, performance tuning, and regular updates.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl mb-6 border border-blue-100">
                    <p className="text-blue-800 text-lg">
                      <span className="font-bold">Ideal for:</span> Companies that need reliable database performance but don't want to maintain a dedicated database team. Perfect for startups, SMBs, and enterprises looking to reduce operational overhead.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-5 h-full text-white">
                    <h3 className="font-bold text-xl mb-4 flex items-center">
                      <FaCogs className="mr-2" /> Why Choose Us?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>Certified DB Experts</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>Predictable Monthly Pricing</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>Custom SLA Agreements</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>Migration Assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Benefits List */}
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaCheck className="text-green-400 mr-3" /> Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Expert management without hiring specialists",
                  "24/7 monitoring and instant alerts",
                  "Automated backups and disaster recovery",
                  "Enhanced security and compliance",
                  "Cost-effective compared to in-house teams",
                  "Performance optimization and tuning",
                  "Scalability with business growth",
                  "Reduced operational overhead"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <FaCheck className="text-xs text-white" />
                      </div>
                    </div>
                    <span className="ml-3 text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Technologies */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-6 md:p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mr-4">
                      <FaServer className="text-3xl text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Supported Databases</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-8">
                    We manage all major database technologies across SQL, NoSQL, and Cloud platforms:
                  </p>

                  {/* Database Categories */}
                  <div className="space-y-6 mb-8">
                    {['SQL Databases', 'NoSQL Databases', 'Cloud Databases'].map((category, catIndex) => (
                      <div key={catIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                        <h3 className="font-bold text-lg mb-3 text-cyan-300 flex items-center">
                          <MdStorage className="mr-2" /> {category}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {technologies
                            .filter(tech => tech.category === category)
                            .map((tech, techIndex) => (
                              <div 
                                key={techIndex}
                                className="bg-gray-900/70 hover:bg-gray-800 transition-colors duration-200 p-3 rounded-lg flex items-center"
                              >
                                <span className="text-xl mr-2">{tech.icon}</span>
                                <span className="font-medium">{tech.name}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="font-bold text-xl mb-4 flex items-center">
                      <MdSecurity className="mr-2 text-green-400" /> Security & Performance
                    </h4>
                    <div className="space-y-4">
                      {[
                        { icon: <FaShieldAlt className="text-green-400" />, text: "Enterprise Security & Compliance" },
                        { icon: <MdSpeed className="text-blue-400" />, text: "High Performance & Low Latency" },
                        { icon: <FaCloud className="text-cyan-400" />, text: "Hybrid & Multi-Cloud Support" },
                        { icon: <FaRegClock className="text-amber-400" />, text: "24/7 Support & Monitoring" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="mr-3">{item.icon}</div>
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Get Free Database Assessment
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 bg-white rounded-xl shadow-lg p-5 text-center">
                <p className="text-gray-600 mb-3 font-medium">Trusted by industry leaders</p>
                <div className="flex justify-center space-x-6 text-3xl">
                  <span className="opacity-70">🏢</span>
                  <span className="opacity-70">🚀</span>
                  <span className="opacity-70">💼</span>
                  <span className="opacity-70">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDatabaseInfo;