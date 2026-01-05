// Database.jsx
import React, { useState, useEffect } from 'react';
import './';

const Database = () => {
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState([
    { value: 99.9, label: 'Uptime SLA', suffix: '%' },
    { value: 40, label: 'Cost Reduction', suffix: '%' },
    { value: 24, label: 'Support Hours', suffix: '/7' },
    { value: 50, label: 'Faster Deployment', suffix: '%' }
  ]);

  // Services data
  const services = [
    {
      id: 0,
      title: 'Database Monitoring',
      description: '24/7 monitoring and alerting for your database infrastructure with real-time performance insights.',
      features: ['Performance Metrics', 'Alert Management', 'Health Dashboard', 'Anomaly Detection'],
      icon: '📊'
    },
    {
      id: 1,
      title: 'Backup & Recovery',
      description: 'Automated backup solutions with point-in-time recovery to ensure zero data loss.',
      features: ['Automated Backups', 'Disaster Recovery', 'Point-in-Time Restore', 'Encrypted Storage'],
      icon: '💾'
    },
    {
      id: 2,
      title: 'Performance Tuning',
      description: 'Optimize query performance, indexing strategies, and configuration for peak efficiency.',
      features: ['Query Optimization', 'Index Management', 'Configuration Tuning', 'Capacity Planning'],
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Security & Compliance',
      description: 'End-to-end security with encryption, access controls, and compliance auditing.',
      features: ['Encryption at Rest', 'Access Management', 'Vulnerability Assessment', 'Audit Logging'],
      icon: '🔒'
    },
    {
      id: 4,
      title: 'Migration Services',
      description: 'Seamless database migration between platforms with minimal downtime and risk.',
      features: ['Platform Migration', 'Schema Conversion', 'Data Synchronization', 'Cutover Planning'],
      icon: '🚚'
    },
    {
      id: 5,
      title: 'Scalability Management',
      description: 'Horizontal and vertical scaling solutions to match your growing business needs.',
      features: ['Auto-scaling', 'Read Replicas', 'Sharding Strategy', 'Load Balancing'],
      icon: '📈'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechFlow Inc.',
      comment: 'Their database management reduced our operational overhead by 60% and improved query performance significantly.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Lead DBA, DataSphere',
      comment: 'The migration service was seamless. Zero downtime during our PostgreSQL to Aurora migration.',
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Sharma',
      role: 'DevOps Manager, CloudFirst',
      comment: '24/7 monitoring and proactive alerts have prevented multiple potential outages. Highly recommended.',
      avatar: '👩‍🔧'
    }
  ];

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.value + (Math.random() > 0.5 ? 0.1 : -0.1)
        }))
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle service selection
  const handleServiceSelect = (id) => {
    setActiveService(id);
  };

  return (
    <div className="database-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Database Managed Services</h1>
          <p className="hero-subtitle">
            Fully managed database solutions that ensure performance, security, and reliability
            so you can focus on what matters most - your application.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Schedule a Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="database-visual">
            <div className="server-node primary"></div>
            <div className="connection-line"></div>
            <div className="server-node secondary"></div>
            <div className="connection-line"></div>
            <div className="server-node tertiary"></div>
            <div className="data-flow"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-value">{stat.value.toFixed(1)}{stat.suffix}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Database Services</h2>
        <p className="section-subtitle">
          Comprehensive database management solutions tailored to your technology stack and business requirements.
        </p>
        
        <div className="services-container">
          <div className="services-list">
            {services.map(service => (
              <div 
                className={`service-item ${activeService === service.id ? 'active' : ''}`}
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="service-detail">
            <div className="detail-header">
              <div className="detail-icon">{services[activeService].icon}</div>
              <h3 className="detail-title">{services[activeService].title}</h3>
            </div>
            <p className="detail-description">{services[activeService].description}</p>
            
            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                {services[activeService].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="database-types">
              <h4>Supported Databases:</h4>
              <div className="database-logos">
                <div className="db-logo">MySQL</div>
                <div className="db-logo">PostgreSQL</div>
                <div className="db-logo">MongoDB</div>
                <div className="db-logo">Redis</div>
                <div className="db-logo">Cassandra</div>
                <div className="db-logo">Oracle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.comment}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Optimize Your Database?</h2>
          <p className="cta-text">
            Let our experts handle your database management while you focus on innovation and growth.
          </p>
          <div className="cta-form">
            <input type="email" placeholder="Enter your email address" className="email-input" />
            <button className="cta-button primary">Start Free Trial</button>
          </div>
          <p className="cta-note">14-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Database Managed Services</div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">© 2023 Database Managed Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Database;