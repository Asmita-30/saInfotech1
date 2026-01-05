import { useState } from 'react';
import { 
  Users, Target, Award, Eye, Rocket, Shield, 
  Code, Clock, TrendingUp, CheckCircle, ArrowRight,
  Briefcase, GraduationCap, Cpu, Star, Zap,
  ChevronRight, Globe, Database, Palette
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
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      gradient: "from-blue-600/90 to-cyan-500/90"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "90% projects delivered before deadline",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      gradient: "from-green-600/90 to-emerald-500/90"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security protocols",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w-800&q=80",
      gradient: "from-purple-600/90 to-violet-500/90"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Solutions that drive revenue growth",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-orange-600/90 to-amber-500/90"
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
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Design Lead",
      expertise: ["Figma", "Adobe XD", "Prototyping"],
      experience: "4+ years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Backend Architect",
      expertise: ["Python", "MongoDB", "Microservices"],
      experience: "6+ years",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Neha Singh",
      role: "Digital Marketing Head",
      expertise: ["SEO", "SEM", "Content Strategy"],
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
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
      { name: "Database Administration (SQL)", icon: Database },
      { name: "Frontend Development", icon: Code },
      { name: "Business Strategy", icon: TrendingUp },
      { name: "Client Relations", icon: Users }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      
      {/* Hero Section - Company Information */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primaryPurple/5 via-transparent to-blue-100/20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Content */}
            <div className="relative">
              {/* About Us Heading */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-primaryPurple to-blue-500 rounded-full"></div>
                  <span className="text-primaryPurple font-semibold tracking-wide">ABOUT US</span>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-primaryPurple rounded-full"></div>
                </div>
                
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
  <span className="text-transparent bg-clip-text 
bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
  SA
</span>

  <span className="text-infotechBlue">
  INFOTECHS
</span>

</h1>

                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                  SA Infotechs is a premier technology solutions provider, delivering innovative 
                  digital transformation services. With over <span className="font-semibold text-primaryPurple">250+ successful projects</span> 
                  and <span className="font-semibold text-primaryPurple">150+ satisfied clients</span>, we combine technical expertise with 
                  strategic thinking to drive business growth through cutting-edge solutions.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {[
                  { label: "founded", value: companyInfo.founded, icon: <Star className="w-5 h-5 text-yellow-500" /> },
                  { label: "projects", value: companyInfo.projects, icon: <Target className="w-5 h-5 text-blue-500" /> },
                  { label: "clients", value: companyInfo.clients, icon: <Users className="w-5 h-5 text-green-500" /> },
                  { label: "employees", value: companyInfo.employees, icon: <Briefcase className="w-5 h-5 text-purple-500" /> },
                  { label: "satisfaction", value: companyInfo.satisfaction, icon: <Award className="w-5 h-5 text-red-500" /> }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      {stat.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primaryPurple to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    <Globe className="w-5 h-5 mr-3" />
                    Our Services
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primaryPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl border-2 border-primaryPurple hover:bg-primaryPurple/5 transition-all duration-300 hover:shadow-lg">
                  <span className="flex items-center">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=90" 
                  alt="SA Infotechs Team Collaboration" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                
                {/* Floating Element */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-gray-800">Innovating Today</span>
                  </div>
                  <div className="text-sm text-gray-600">For Tomorrow's Success</div>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Web Development</div>
                        <div className="text-gray-200">Custom Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Background Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full mb-6">
              <Star className="w-6 h-6 text-primaryPurple mr-3" />
              <span className="text-primaryPurple font-bold text-lg">Why Choose SA Infotechs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical mastery with business insight to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-500"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/90 text-sm mb-6">{item.description}</p>
                    
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Proven Results</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primaryPurple/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CEO Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ceoInfo.image} 
                  alt={ceoInfo.name} 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                
                {/* CEO Badge */}
                <div className="absolute top-8 left-8">
                  <div className="bg-gradient-to-r from-primaryPurple to-purple-600 text-white px-6 py-3 rounded-xl inline-flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span className="font-bold">CEO & Director</span>
                  </div>
                </div>
                
                {/* Name at Bottom */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{ceoInfo.name}</h3>
                  <p className="text-xl text-gray-200">Founder of SA Infotechs</p>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div>
              <div className="mb-8">
                <div className="text-sm text-primaryPurple font-semibold tracking-wider mb-4">LEADERSHIP</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Meet Our Visionary Leader
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                {ceoInfo.name} is the visionary Founder and Director of SA Infotechs, a leading 
                web development agency known for delivering high-performance, user-centric 
                digital solutions. With over {ceoInfo.experience.toLowerCase()} in the tech industry, 
                he combines technical expertise with strategic insight to craft innovative 
                web applications, eCommerce platforms, and custom software solutions.
              </p>

              {/* Education & Experience */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Education</div>
                      <div className="text-sm text-gray-600 mt-1">{ceoInfo.education}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Experience</div>
                      <div className="text-sm text-gray-600 mt-1">{ceoInfo.experience}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Specializations</h4>
                <div className="grid grid-cols-2 gap-4">
                  {ceoInfo.specializations.map((spec, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-primaryPurple/30 transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primaryPurple/10 rounded-lg flex items-center justify-center mr-3">
                          <spec.icon className="w-4 h-4 text-primaryPurple" />
                        </div>
                        <span className="text-gray-800 font-medium">{spec.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryPurple to-blue-500 rounded-full"></div>
                <div className="ml-8">
                  <div className="text-5xl text-gray-300 absolute -top-6 left-4">"</div>
                  <p className="text-xl text-gray-800 italic mb-6 pl-6">
                    {ceoInfo.quote}
                  </p>
                  <div className="flex items-center pl-6">
                    <div className="w-8 h-px bg-gradient-to-r from-primaryPurple to-blue-500 mr-3"></div>
                    <span className="font-bold text-gray-900">{ceoInfo.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primaryPurple/10 to-blue-100 rounded-full mb-6">
              <Users className="w-6 h-6 text-primaryPurple mr-3" />
              <span className="text-primaryPurple font-bold text-lg">OUR TEAM</span>
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
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-primaryPurple to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg">
                    {member.experience}
                  </div>
                </div>
                
                {/* Team Member Photo - ALWAYS VISIBLE */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-primaryPurple font-semibold mb-4 flex items-center">
                    <span>{member.role}</span>
                    <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-3 font-medium">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-primaryPurple/10 hover:text-primaryPurple transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-primaryPurple hover:text-primaryPurple transition-all duration-300 flex items-center justify-center group/btn">
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primaryPurple to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primaryPurple via-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative z-10 p-12 text-center text-white">
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Join 150+ satisfied clients who have accelerated their growth with our solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-primaryPurple font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}