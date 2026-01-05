import { useState } from "react";
import {
  Users, Target, Award, Star, Code, Clock, Shield,
  TrendingUp, CheckCircle, ArrowRight, Briefcase,
  GraduationCap, ChevronRight, Globe, Zap,
  Database, Palette, Rocket, Sparkles, Quote, Heart
} from "lucide-react";

export default function About() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const companyInfo = [
    { label: "Founded", value: "2018", icon: Target },
    { label: "Projects", value: "250+", icon: Code },
    { label: "Clients", value: "150+", icon: Users },
    { label: "Satisfaction", value: "98%", icon: Heart },
  ];

  const ceoInfo = {
    name: "Ankush Sapkal",
    role: "CEO & Director",
    education: "Diploma in Computer Engineering, Bachelor's Degree in Engineering (BE)",
    experience: "6+ Years in Tech Industry, 2 Years as Marketing Manager",
    quote: "To empower businesses through digital innovation and deliver web solutions that not only meet expectations—but exceed them.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
    specializations: [
      { name: "Database Administration (SQL)", icon: Database },
      { name: "Frontend Development", icon: Code },
      { name: "Client Relations", icon: Users },
      { name: "Business Strategy", icon: TrendingUp }
    ]
  };

  const whyChooseUs = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Cutting-edge technologies & industry best practices",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistent early project delivery record",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade data protection & compliance",
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      bg: "bg-gradient-to-br from-purple-500/10 to-violet-500/10"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Revenue-focused digital transformation",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      bg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      expertise: ["React", "Node.js", "AWS", "MongoDB"],
      experience: "5+ Years",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Designer",
      expertise: ["Figma", "User Research", "Prototyping", "Animation"],
      experience: "4+ Years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Backend Architect",
      expertise: ["Node.js", "Python", "PostgreSQL", "Redis"],
      experience: "6+ Years",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  SA
                </span>
                <span className="text-6xl md:text-7xl font-bold text-gray-900 block -mt-4">
                  INFOTECHS
                </span>
              </div>
              
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-medium">Trusted by 150+ businesses worldwide</span>
              </div>

              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                We craft <span className="font-semibold text-blue-600">scalable, secure, and innovative</span> digital 
                solutions that transform businesses and drive measurable growth in today's competitive landscape.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {companyInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color === 'blue' ? 'from-blue-50 to-blue-100' : 'from-purple-50 to-purple-100'}`}>
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 text-center">{item.value}</div>
                    <div className="text-sm text-gray-600 text-center mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="SA Infotechs Team"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      <span className="font-medium">Innovating Since 2018</span>
                    </div>
                    <p className="text-lg">Award-winning team delivering excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-blue-700">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Deliver Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every project is backed by our commitment to quality, innovation, and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`relative group ${item.bg} backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Industry certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* CEO Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ceoInfo.image}
                  alt={ceoInfo.name}
                  className="w-full h-[400px] lg:h-[450px] object-cover"
                />
                
                {/* CEO Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl shadow-lg inline-flex items-center gap-2 backdrop-blur-sm">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-bold">CEO & DIRECTOR</span>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="text-sm font-bold text-gray-900">{ceoInfo.experience.split(',')[0]}</div>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-semibold text-blue-700">VISIONARY LEADERSHIP</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Meet <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{ceoInfo.name}</span>
                </h2>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                As the Founder and Director of SA Infotechs, {ceoInfo.name.split(' ')[0]} combines 
                <span className="font-semibold text-blue-600"> technical expertise</span> with 
                <span className="font-semibold text-purple-600"> strategic vision</span> to deliver 
                exceptional digital solutions. With over {ceoInfo.experience.toLowerCase()}, his journey 
                from Marketing Manager to tech entrepreneur provides a unique perspective on 
                business needs and technical implementation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Education</div>
                      <div className="text-sm text-gray-600 mt-1">Diploma in Computer Engineering</div>
                      <div className="text-sm text-gray-600">Bachelor's Degree in Engineering</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Expertise</div>
                      <div className="text-sm text-gray-600 mt-1">6+ Years Tech Industry</div>
                      <div className="text-sm text-gray-600">2+ Years Marketing Leadership</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Core Specializations</h4>
                <div className="grid grid-cols-2 gap-3">
                  {ceoInfo.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                          <spec.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800 text-sm">{spec.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH QUOTE ================= */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Quote className="w-12 h-12 mx-auto mb-6 text-white/50" />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl font-medium italic mb-8 leading-relaxed">
                {ceoInfo.quote}
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-white/50"></div>
                <div>
                  <div className="font-bold text-xl">{ceoInfo.name}</div>
                  <div className="text-white/80">CEO & Director, SA Infotechs</div>
                </div>
                <div className="w-16 h-px bg-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 mb-4">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">MEET THE TEAM</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert</span> Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to turning your vision into reality
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-gray-800">{member.experience}</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/90">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredMember === member.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Available for new projects</span>
                        </div>
                        <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                          View Profile <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}