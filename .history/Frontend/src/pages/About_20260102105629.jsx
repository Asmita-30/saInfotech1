import { useState } from 'react';
import { 
  Users, Target, Award, Eye, Rocket, Shield, 
  Code, Globe, Clock, TrendingUp, Star, Zap,
  Briefcase, GraduationCap, Cpu, Users as UsersIcon,
  CheckCircle, ArrowRight
} from 'lucide-react';

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const companyInfo = {
    founded: "2018",
    projects: "250+",
    clients: "150+",
    employees: "25+",
    satisfaction: "98%"
  };

  const whyChooseUs = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Cutting-edge technologies and best practices",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "90% projects delivered before deadline",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security protocols",
      color: "from-purple-500 to-violet-400"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Solutions that drive revenue growth",
      color: "from-orange-500 to-amber-400"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Senior Full Stack Developer",
      expertise: ["React.js", "Node.js", "AWS"],
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Design Lead",
      expertise: ["Figma", "Adobe XD", "Prototyping"],
      experience: "4+ years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Backend Architect",
      expertise: ["Python", "MongoDB", "Microservices"],
      experience: "6+ years",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Neha Singh",
      role: "Digital Marketing Head",
      expertise: ["SEO", "SEM", "Content Strategy"],
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  const ceoInfo = {
    name: "Ankush Sapkal",
    position: "CEO & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face",
    quote: "To empower businesses through digital innovation and deliver web solutions that not only meet expectations—but exceed them.",
    education: "Diploma in Computer Engineering + BE",
    experience: "6+ Years in Tech Industry",
    specializations: [
      { name: "Database Administration (SQL)", icon: Cpu },
      { name: "Frontend Development", icon: Code },
      { name: "Business Strategy", icon: TrendingUp },
      { name: "Client Relations", icon: UsersIcon }
    ],
    achievements: [
      "Founded SA Infotechs in 2018",
      "Grew company to 25+ team members",
      "Delivered 250+ successful projects",
      "98% client satisfaction rate"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Company Information with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primaryPurple/20 via-transparent to-blue-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primaryPurple to-purple-600 rounded-full mb-8">
                <span className="text-white font-semibold text-sm">Since {companyInfo.founded}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Pioneering Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-blue-600">
                  Excellence Since 2018
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                SA Infotechs is a premier technology solutions provider, delivering innovative 
                digital transformation services. With over {companyInfo.projects} successful projects 
                and {companyInfo.clients} satisfied clients, we combine technical expertise with 
                strategic thinking to drive business growth through cutting-edge solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {Object.entries(companyInfo).map(([key, value]) => (
                  <div key={key} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primaryPurple to-blue-600 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-gray-600 font-medium capitalize mt-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-primaryPurple to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Our Services
                </button>
                <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border-2 border-primaryPurple hover:bg-primaryPurple/5 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
                  alt="SA Infotechs Team Collaboration" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Innovating Today for Tomorrow's Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Background Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80")'
                  }}
                ></div>
                <div className="relative p-10">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl mb-8">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To be the most trusted digital transformation partner globally, creating 
                    technology solutions that redefine industry standards and empower businesses 
                    to achieve unprecedented growth in the digital era.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>See Our Future Roadmap</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-500/10 rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80")'
                  }}
                ></div>
                <div className="relative p-10">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl mb-8">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To deliver innovative, scalable, and user-centric digital solutions that 
                    drive business success through technical excellence, continuous innovation, 
                    and unwavering commitment to our clients' growth and satisfaction.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span>Explore Our Projects</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SA Infotechs */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-primaryPurple mr-2" />
              <span className="text-primaryPurple font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why SA Infotechs Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical mastery with business insight to deliver solutions that
              drive real results and sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${item.color} rounded-xl mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Proven Results</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primaryPurple to-blue-600 rounded-3xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join 150+ satisfied clients who have accelerated their growth with our solutions
              </p>
              <button className="px-8 py-4 bg-white text-primaryPurple font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ceoInfo.image} 
                  alt={ceoInfo.name} 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <span className="text-white font-semibold">Leadership</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{ceoInfo.name}</h3>
                  <p className="text-xl text-gray-200">{ceoInfo.position}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full mb-8">
                <Briefcase className="w-5 h-5 text-primaryPurple mr-2" />
                <span className="text-primaryPurple font-semibold">CEO Profile</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Meet Our Visionary Leader
                <span className="block text-2xl text-primaryPurple mt-2">{ceoInfo.name}</span>
              </h2>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                {ceoInfo.name} is the visionary Founder and Director of SA Infotechs, a leading 
                web development agency known for delivering high-performance, user-centric 
                digital solutions. With over {ceoInfo.experience.toLowerCase()} in the tech industry, 
                he combines technical expertise with strategic insight to craft innovative 
                web applications, eCommerce platforms, and custom software solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primaryPurple mr-3" />
                    <span className="font-bold text-gray-900">Education</span>
                  </div>
                  <p className="text-gray-700">{ceoInfo.education}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-primaryPurple mr-3" />
                    <span className="font-bold text-gray-900">Experience</span>
                  </div>
                  <p className="text-gray-700">{ceoInfo.experience}</p>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Specializations</h4>
                <div className="flex flex-wrap gap-3">
                  {ceoInfo.specializations.map((spec, index) => (
                    <div key={index} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full">
                      <spec.icon className="w-4 h-4 text-primaryPurple mr-2" />
                      <span className="text-gray-800 font-medium">{spec.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-primaryPurple">
                <div className="flex items-start">
                  <div className="text-5xl text-gray-300 mr-4">"</div>
                  <div>
                    <p className="text-xl text-gray-800 italic mb-4">{ceoInfo.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-px bg-gradient-to-r from-primaryPurple to-blue-500 mr-3"></div>
                      <span className="font-semibold text-gray-900">{ceoInfo.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full mb-6">
              <Users className="w-5 h-5 text-primaryPurple mr-2" />
              <span className="text-primaryPurple font-semibold">Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of passionate professionals dedicated to crafting exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primaryPurple to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-80">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Award className="w-5 h-5 text-primaryPurple" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="absolute -top-8 left-6 bg-gradient-to-r from-primaryPurple to-blue-500 text-white px-4 py-2 rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-bold">{member.experience}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{member.name}</h3>
                    <p className="text-primaryPurple font-semibold mb-4">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-white/90 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-primaryPurple hover:text-primaryPurple transition-all duration-300 flex items-center justify-center group/btn">
                      <span>View Profile</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primaryPurple to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <Users className="w-6 h-6 mr-3" />
              View All Team Members
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primaryPurple via-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Let's build something amazing together. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-primaryPurple font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Schedule a Call
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}