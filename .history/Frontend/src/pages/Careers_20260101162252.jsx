import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  DollarSign, 
  Calendar,
  MapPin,
  Clock,
  Briefcase,
  Upload,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: <Award className="w-6 h-6" />, title: 'Career Growth', desc: 'Clear promotion paths and skill development' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Flexible Hours', desc: 'Work-life balance with remote options' },
    { icon: <Heart className="w-6 h-6" />, title: 'Health Benefits', desc: 'Comprehensive medical and dental plans' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Stock Options', desc: 'Share in company success' },
    { icon: <Users className="w-6 h-6" />, title: 'Great Culture', desc: 'Inclusive and collaborative environment' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced React developer to join our frontend team.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'State management expertise', 'Testing experience'],
      postedDate: '2024-01-15',
      salary: '$120,000 - $150,000'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and functional designs for web and mobile applications.',
      requirements: ['Figma expertise', 'User research skills', 'Prototyping experience', 'Design system knowledge'],
      postedDate: '2024-01-10',
      salary: '$90,000 - $120,000'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: ['AWS/Azure experience', 'Docker & Kubernetes', 'CI/CD tools', 'Infrastructure as Code'],
      postedDate: '2024-01-05',
      salary: '$130,000 - $160,000'
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Management',
      location: 'New York',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Lead development teams and manage client projects from start to finish.',
      requirements: ['Agile/Scrum experience', 'Client communication', 'Risk management', 'Team leadership'],
      postedDate: '2024-01-01',
      salary: '$110,000 - $140,000'
    },
    {
      id: 5,
      title: 'Quality Assurance Engineer',
      department: 'Testing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure our products meet the highest quality standards.',
      requirements: ['Automation testing', 'Selenium/Cypress', 'API testing', 'Performance testing'],
      postedDate: '2023-12-28',
      salary: '$85,000 - $110,000'
    },
    {
      id: 6,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive growth through data-driven marketing strategies.',
      requirements: ['SEO/SEM expertise', 'Content marketing', 'Analytics tools', 'Social media management'],
      postedDate: '2023-12-25',
      salary: '$70,000 - $95,000'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
    }, 5000);
  };

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Team
          </motion.h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Build your career with a company that values innovation, creativity, and growth.
            We're looking for talented individuals to help shape the future of technology.
          </p>
          <button 
            onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
            Why Work at SA Infotech?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We believe in creating an environment where talented people can do their best work and grow professionally.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.8</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
            Open Positions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our current job openings and find the perfect match for your skills and career goals.
          </p>

          {/* Job Filter */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button className="bg-gradient-primary text-white px-6 py-2 rounded-full">All</button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200">Engineering</button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200">Design</button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200">Marketing</button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200">Management</button>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200">Remote</button>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className="bg-blue-100 text-primary-blue text-sm px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience} experience</span>
                      </div>
                      <div className="text-green-600 font-semibold">
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                        setFormData(prev => ({ ...prev, position: job.title }));
                      }}
                      className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => setSelectedJob(job === selectedJob ? null : job)}
                      className="text-primary-blue font-medium hover:text-primary-purple transition-colors flex items-center justify-center gap-2"
                    >
                      View Details
                      <ChevronRight className={`w-4 h-4 transition-transform ${selectedJob === job ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedJob === job && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-200"
                  >
                    <h4 className="font-semibold mb-4">Job Description</h4>
                    <p className="text-gray-600 mb-6">
                      We're looking for a talented {job.title} to join our {job.department} team. 
                      In this role, you'll work on challenging projects and collaborate with a team of experts.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold mb-3">Requirements:</h5>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Responsibilities:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Collaborate with cross-functional teams</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Participate in code reviews and technical discussions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Contribute to architecture and design decisions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Mentor junior team members</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                      Posted on: {new Date(job.postedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gradient-to-b from-white to-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
              Apply for Position
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Fill out the form below and we'll get back to you within 48 hours.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for applying to SA Infotech. Our HR team will review your application 
                    and contact you if there's a match with our requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Job Selection */}
                  <div>
                    <label className="block text-gray-700 mb-3 font-semibold">
                      Select Position *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {jobOpenings.slice(0, 6).map((job) => (
                        <button
                          type="button"
                          key={job.id}
                          onClick={() => setFormData(prev => ({ ...prev, position: job.title }))}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.position === job.title
                              ? 'border-primary-blue bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium">{job.title}</div>
                          <div className="text-sm text-gray-500">{job.department}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
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
                      <label className="block text-gray-700 mb-2">Years of Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-7">5-7 years</option>
                        <option value="7+">7+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-gray-700 mb-2">Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-blue transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <div className="text-gray-600 mb-2">
                          {formData.resume ? (
                            <span className="text-green-600 font-semibold">{formData.resume.name}</span>
                          ) : (
                            'Click to upload or drag and drop'
                          )}
                        </div>
                        <div className="text-sm text-gray-500">PDF, DOC, DOCX up to 5MB</div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-5 h-5 text-primary-blue"
                    />
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the privacy policy and consent to having my data processed for recruitment purposes.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>

            {/* Application Tips */}
            <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Application Tips</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="font-semibold mb-2">📝 Tailor Your Resume</div>
                  <p className="text-gray-600 text-sm">Customize your resume to highlight relevant experience</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">⏱️ Response Time</div>
                  <p className="text-gray-600 text-sm">We typically respond within 3-5 business days</p>
                </div>
                <div>
                  <div className="font-semibold mb-2">📞 Interview Process</div>
                  <p className="text-gray-600 text-sm">3 rounds: HR screening, technical, and culture fit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See a Perfect Match?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-dark-bg px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Submit General Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;