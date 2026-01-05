import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Shield, Zap, RefreshCw, Users } from 'lucide-react';
import Services from '../pages/Services';   

const DatabaseService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to All Services
        </Link>

        {/* Service Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🗄️</span>
                <h1 className="text-4xl font-bold gradient-text">Database Managed Services</h1>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                We take full responsibility for the performance and security of your data systems.
              </p>
              <p className="text-gray-600">
                Our team of expert database administrators (DBAs) handles everything from installation to performance, 
                backup and recovery, and high availability setup.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Full Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Comprehensive Database Management</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Our Database Managed Services provide end-to-end management of your database infrastructure. 
                  We ensure optimal performance, maximum security, and high availability for your critical data.
                </p>
                <p className="text-gray-700">
                  With our proactive monitoring and maintenance approach, we prevent issues before they impact 
                  your business operations, allowing you to focus on core business activities.
                </p>
              </div>
            </div>

            {/* Key Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Key Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Database Administration</h3>
                    <p className="text-gray-600">24/7 monitoring and management of database systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Security Management</h3>
                    <p className="text-gray-600">Implementing security protocols and access controls</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Performance Tuning</h3>
                    <p className="text-gray-600">Optimizing queries and improving database performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Backup & Recovery</h3>
                    <p className="text-gray-600">Automated backups and disaster recovery planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Technologies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Technologies</h2>
              <div className="space-y-3">
                {[
                  'MySQL',
                  'PostgreSQL',
                  'MongoDB',
                  'Oracle',
                  'SQL Server',
                  'Redis',
                  'Elasticsearch',
                  'AWS RDS',
                  'Azure SQL'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Benefits</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Reduced Operational Costs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Improved Performance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Enhanced Security</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 Expert Support</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="gradient-bg rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Database Support?</h2>
              <p className="mb-6">Get a free database health check and consultation.</p>
              <Link to="/contact">
                <button className="w-full bg-white text-dark-bg py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Request Free Audit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseService;