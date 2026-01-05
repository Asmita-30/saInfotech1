// Frontend/src/pages/ServicesPages/Database.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DatabaseService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Database Managed Services
          </h1>
          <p className="text-xl text-gray-600">
            Professional database management solutions for your business
          </p>
        </div>
        
        {/* 添加具体内容 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-3">
              <li>✅ Database Administration & Monitoring</li>
              <li>✅ Performance Tuning & Optimization</li>
              <li>✅ Backup & Recovery Solutions</li>
              <li>✅ Security Management</li>
              <li>✅ 24/7 Support</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <ul className="space-y-3">
              <li>📊 MySQL, PostgreSQL, MongoDB</li>
              <li>⚡ Redis, Elasticsearch</li>
              <li>🔧 AWS RDS, Azure SQL</li>
              <li>🛡️ Database Security Audits</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DatabaseService;