import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['   sainfotechs25@gmail.com'],
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      delay: '100'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 8104 0126 86'],
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
      delay: '200'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['S-57, Haware Fantasia Business Park, 203, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703'],
      color: 'from-purple-500 to-pink-400',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-100',
      delay: '300'
    }
  ];

  const [currentHour, setCurrentHour] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    setCurrentHour(hour);
  }, []);

  const isOpen = currentHour >= 9 && currentHour < 18;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 -z-10"></div>
        
        {/* Hero Section with Animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-sm mb-6 animate-pulse-slow">
            We're here to help
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Contact Us
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Our team is ready to help you transform your digital presence.
            Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`${info.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${info.delay}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-md`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p 
                        key={idx} 
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours Card */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl animate-slide-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <div className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
                  {isOpen ? 'Open Now' : 'Closed'}
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', time: '10:00 AM - 6:30 PM' },
                  { day: 'Saturday', time: 'Closed' },
                  { day: 'Sunday', time: 'Closed' }
                ].map((schedule, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-gray-800">Quick Response</h4>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond within <span className="font-bold text-blue-600">2 hours</span> during business days
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Send className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>
                <p className="text-blue-100">Fill out the form below and we'll get back to you promptly</p>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500 animate-bounce" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-6">
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label className="block text-gray-700 mb-2 font-semibold flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none hover:border-gray-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-gray-700 mb-2 font-semibold flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none hover:border-gray-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none hover:border-gray-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none hover:border-gray-300 appearance-none bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Project Quote">Project Quote</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Careers">Careers</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none hover:border-gray-300"
                        placeholder="Tell us about your project, ideas, or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                        isLoading 
                          ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-blue-500/25'
                      } text-white flex items-center justify-center gap-3`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Response Time', value: '< 2 Hours' },
                { label: 'Support', value: '24/7' },
                { label: 'Satisfaction', value: '98%' },
                { label: 'Clients', value: '500+' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Find Us Here
              </h2>
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                {/* Mock Map with Interactive Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Map Grid */}
                    <div className="absolute inset-0 opacity-10">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-gray-400" style={{ top: `${i * 5}%` }}></div>
                      ))}
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="absolute h-full w-px bg-gray-400" style={{ left: `${i * 5}%` }}></div>
                      ))}
                    </div>
                    
                    {/* Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                      <div className="relative">
                        <div className="w-24 h-24 bg-red-500/10 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-full shadow-2xl">
                            <MapPin className="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Info */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl max-w-md">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-5 h-5 text-red-500" />
                        <h3 className="font-bold text-gray-800">Sainfotech Headquarters</h3>
                      </div>
                      <p className="text-gray-600 mb-2">123 Tech Street, San Francisco</p>
                      <p className="text-gray-600">California, CA 94107</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float -z-10"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed -z-10"></div>
      </div>

      {/* Add some custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 1s;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;