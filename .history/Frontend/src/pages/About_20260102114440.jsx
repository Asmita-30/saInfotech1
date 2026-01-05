import { useState } from "react";
import {
  Users, Target, Award, Star, Code, Clock, Shield,
  TrendingUp, CheckCircle, ArrowRight, Briefcase,
  GraduationCap, ChevronRight, Globe, Zap,
  Cpu, Cloud, Database, Smartphone, Palette, Rocket
} from "lucide-react";

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const companyInfo = {
    founded: "2018",
    projects: "250+",
    clients: "150+",
    employees: "25+",
    satisfaction: "98%",
  };

  const ceoInfo = {
    name: "Sarah Anderson",
    role: "CEO & Director",
    education: "MSc. Computer Science, Stanford University",
    experience: "12+ Years in Tech Industry",
    quote: "We don't just build websites, we craft digital experiences that transform businesses and exceed expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
    specializations: [
      { name: "Web Development", icon: Code },
      { name: "Cloud Architecture", icon: Cloud },
      { name: "UI/UX Strategy", icon: Palette },
      { name: "Digital Transformation", icon: Rocket }
    ]
  };

  const whyChooseUs = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Cutting-edge technologies & best practices",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      gradient: "from-blue-600/90 to-cyan-500/90",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Projects delivered before deadline",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      gradient: "from-green-600/90 to-emerald-500/90",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise grade security",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      gradient: "from-purple-600/90 to-violet-500/90",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Revenue focused solutions",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      gradient: "from-orange-600/90 to-amber-500/90",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      expertise: ["React", "Node", "AWS"],
      experience: "5+ Years",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Designer",
      expertise: ["Figma", "UX", "Prototyping"],
      experience: "4+ Years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Backend Developer",
      expertise: ["Node", "MongoDB", "APIs"],
      experience: "6+ Years",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bgGradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* ================= HERO ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              <span className="text-blue-600 font-semibold">ABOUT OUR COMPANY</span>
            </div>
            
            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                SA INFOTECHS
              </span>
              <span className="block text-4xl text-gray-800 mt-3">Building Digital Futures</span>
            </h1>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              We specialize in creating scalable, secure, and innovative IT solutions that empower growing 
              businesses to thrive in the digital age. Our team combines technical expertise with creative 
              vision to deliver exceptional results.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {Object.entries(companyInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600">
                    {value}
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-2">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Team collaboration at SA Infotechs"
              className="relative rounded-3xl shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Excellence in Every Project
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just code - we deliver value, innovation, and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="relative h-72 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-95 transition-opacity`}></div>
                </div>
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-3">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white ml-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CEO Image with Badge */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={ceoInfo.image} 
                  alt={ceoInfo.name} 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* CEO Badge - Now at top */}
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-lg inline-flex items-center gap-2 backdrop-blur-sm bg-white/10">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-bold text-sm">CEO & DIRECTOR</span>
                  </div>
                </div>
                
                {/* CEO Name Card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white">{ceoInfo.name}</h3>
                  <p className="text-gray-200">Founder & Visionary Leader</p>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div>
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold">LEADERSHIP</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Meet Our Visionary <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Leader</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
                {ceoInfo.name} is the visionary Founder and Director of SA Infotechs, a leading 
                web development agency known for delivering high-performance, user-centric 
                digital solutions. With over {ceoInfo.experience.toLowerCase()} in the tech industry, 
                she combines technical expertise with strategic insight to craft innovative 
                web applications, eCommerce platforms, and custom software solutions.
              </p>

              {/* Education & Experience */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Education</div>
                      <div className="text-gray-600 mt-1">{ceoInfo.education}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Experience</div>
                      <div className="text-gray-600 mt-1">{ceoInfo.experience}</div>
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
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <spec.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-800 font-medium">{spec.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border-l-4 border-purple-500">
                <div className="text-5xl text-purple-200 absolute top-4 left-6">"</div>
                <p className="text-lg text-gray-800 italic mb-4 pl-8">
                  {ceoInfo.quote}
                </p>
                <div className="flex items-center pl-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></div>
                  <span className="font-bold text-gray-900">{ceoInfo.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">MEET THE TEAM</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Creative <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Experts</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-20`}></div>
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                      <span className="text-sm font-semibold text-gray-800">{member.experience}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 px-3 py-2 rounded-full font-medium border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Hover Contact Info */}
                    <div className={`overflow-hidden transition-all duration-500 ${hoveredMember === member.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Available for projects</span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                            Contact <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            
            <div className="relative p-12 md:p-16 text-center text-white">
              <Zap className="w-16 h-16 mx-auto mb-8 text-yellow-300 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Let's build something amazing together. Schedule a free consultation with our experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Start Project <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:shadow-2xl transition-all duration-300">
                  Schedule Call
                </button>
              </div>
              
              <p className="mt-8 text-white/70 text-sm">
                Get response within 24 hours • Free 30-min consultation • No commitment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}