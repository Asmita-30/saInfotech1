import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      details: ['info@sainfotech.com', 'support@sainfotech.com'],
      color: 'text-blue-500'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'text-green-500'
    },
    {
      icon: <MapPin />,
      title: 'Office',
      details: ['123 Tech Street', 'San Francisco, CA 94107'],
      color: 'text-red-500'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${info.color} p-3 rounded-lg bg-gray-50`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="bg-light-gray p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-8 gradient-text">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Project Quote">Project Quote</option>
                          <option value="Support">Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Careers">Careers</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary-blue to-primary-purple flex items-center justify-center text-white">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl">San Francisco, CA</p>
              <p className="opacity-90">Interactive map would be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;