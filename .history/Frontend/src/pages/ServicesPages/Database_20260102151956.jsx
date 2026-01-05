// SimpleDatabaseInfo.jsx
import React from 'react';
import { FaDatabase, FaCheck, FaServer } from 'react-icons/fa';

const SimpleDatabaseInfo = () => {
  const technologies = [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
    'SQL Server', 'Oracle', 'Cassandra', 'DynamoDB',
    'MariaDB', 'Elasticsearch', 'Firebase', 'SQLite'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Information */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-4xl text-blue-600 mr-3" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Database Managed Services
                  </h1>
                  <p className="text-gray-600">Professional database administration made simple</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  What is Database Managed Services?
                </h2>
                <p className="text-gray-700 mb-4">
                  Database Managed Services is a solution where specialized providers handle the complete administration, maintenance, and optimization of your database systems. This includes monitoring, backups, security, performance tuning, and updates.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-3">Key Advantages:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Expert management without hiring specialists</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>24/7 monitoring and instant alerts</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Automated backups and disaster recovery</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Enhanced security and compliance</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>Cost-effective compared to in-house teams</span>
                  </li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Ideal for:</strong> Companies that need reliable database performance but don't want to maintain a dedicated database team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Technologies */}
          <div className="md:w-1/3">
            <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-6">
                <FaServer className="text-3xl text-blue-300 mr-3" />
                <h2 className="text-2xl font-bold">Supported Databases</h2>
              </div>
              
              <p className="text-blue-200 mb-6">
                We manage all major database technologies:
              </p>

              <div className="space-y-4">
                {['SQL Databases', 'NoSQL Databases', 'Cloud Databases'].map((category, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-2 text-blue-300">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {technologies.slice(index*4, index*4+4).map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-blue-800/50 px-3 py-2 rounded-lg font-medium text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-700">
                <h4 className="font-bold mb-3">Benefits You Get:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>99.9% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>24/7 Technical Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Security & Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Performance Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDatabaseInfo;