// EnhancedDatabaseInfo.jsx
import React from 'react';
import {
  FaDatabase, FaCheck, FaServer, FaShieldAlt, FaChartLine,
  FaSync, FaUserShield, FaCloud, FaRegClock, FaCogs
} from 'react-icons/fa';
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
      icon: <FaShieldAlt className="text-lg md:text-2xl" />,
      title: "Security & Compliance",
      desc: "Enterprise-grade security with SOC2, GDPR, HIPAA compliance",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaChartLine className="text-lg md:text-2xl" />,
      title: "Performance Tuning",
      desc: "24/7 monitoring and optimization for peak performance",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaSync className="text-lg md:text-2xl" />,
      title: "Automated Backups",
      desc: "Point-in-time recovery with automated backup management",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <FaUserShield className="text-lg md:text-2xl" />,
      title: "Expert Support",
      desc: "24/7 access to certified database administrators",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 px-3 py-6 md:px-8 md:py-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">

          {/* LEFT */}
          <div className="w-full lg:w-2/3">

            {/* Intro */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-8 mb-6">
              <h2 className="text-lg md:text-3xl font-bold mb-4">
                What is Database Managed Services?
              </h2>

              <p className="text-gray-700 text-sm md:text-lg mb-4 leading-relaxed">
                Database Managed Services is a comprehensive solution where experts handle
                monitoring, backups, security, optimization, and maintenance of databases.
              </p>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 md:p-5 text-sm md:text-lg text-blue-800">
                <b>Ideal for:</b> Startups, SMBs & Enterprises seeking reliability without in-house DB teams.
              </div>
            </div>

            {/* Features */}
            <h2 className="text-lg md:text-3xl font-bold mb-4">Key Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className={`inline-flex p-2 rounded-md bg-gradient-to-r ${f.color} text-white mb-3`}>
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-base md:text-xl mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-xs md:text-base">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gray-900 text-white rounded-xl p-4 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-4 flex items-center">
                <FaCheck className="text-green-400 mr-2" /> Key Benefits
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                {[
                  "Expert management without hiring specialists",
                  "24/7 monitoring and instant alerts",
                  "Automated backups and disaster recovery",
                  "Enhanced security and compliance",
                  "Cost-effective vs in-house teams",
                  "Performance tuning & scalability"
                ].map((b, i) => (
                  <div key={i} className="flex items-start">
                    <FaCheck className="text-green-400 mt-1 mr-2 text-xs" />
                    <span className="text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-6">

              <div className="bg-gray-900 text-white rounded-xl p-4 md:p-6 shadow-xl">
                <h2 className="text-lg md:text-2xl font-bold mb-4 flex items-center">
                  <FaServer className="text-cyan-400 mr-2" /> Supported Databases
                </h2>

                {['SQL Databases', 'NoSQL Databases', 'Cloud Databases'].map((cat, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-cyan-300 font-semibold mb-2 flex items-center text-sm md:text-base">
                      <MdStorage className="mr-1" /> {cat}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                      {technologies
                        .filter(t => t.category === cat)
                        .map((t, j) => (
                          <div key={j} className="bg-gray-800 rounded p-2 flex items-center">
                            <span className="mr-1">{t.icon}</span>{t.name}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

                <button className="mt-4 w-full py-2 text-sm md:text-base bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md font-semibold">
                  Get Free Database Assessment
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnhancedDatabaseInfo;
