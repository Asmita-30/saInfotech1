import { useState } from "react";
import {
  Users, Target, Award, Star, Code, Clock, Shield,
  TrendingUp, CheckCircle, ArrowRight, Briefcase,
  GraduationCap, ChevronRight, Globe, Zap
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

  const whyChooseUs = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Cutting-edge technologies & best practices",
      bgImage:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      gradient: "from-blue-600/90 to-cyan-500/90",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Projects delivered before deadline",
      bgImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      gradient: "from-green-600/90 to-emerald-500/90",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise grade security",
      bgImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      gradient: "from-purple-600/90 to-violet-500/90",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Revenue focused solutions",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
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
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UI/UX Designer",
      expertise: ["Figma", "UX", "Prototyping"],
      experience: "4+ Years",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Backend Developer",
      expertise: ["Node", "MongoDB", "APIs"],
      experience: "6+ Years",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      {/* ================= HERO ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                SA
              </span>
              <span className="block text-blue-900">INFOTECHS</span>
            </h1>

            <p className="text-lg text-gray-700 mt-6">
              We build scalable, secure and modern IT solutions for growing
              businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {Object.entries(companyInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white p-4 rounded-xl shadow text-center"
                >
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-sm text-gray-500 uppercase">{key}</div>
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
            alt="team"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="relative h-64 rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                  ></div>
                </div>
                <div className="relative p-6 text-white">
                  <item.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
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

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-3xl shadow hover:shadow-xl overflow-hidden"
              >
                <img src={m.photo} alt={m.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <p className="text-indigo-700">{m.role}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {m.expertise.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
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
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-16 text-center text-white">
            <Zap className="w-14 h-14 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Build future-ready digital solutions with SA Infotechs.
            </p>

            <div className="flex justify-center gap-4">
              <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold">
                Start Project
              </button>
              <button className="border border-white px-8 py-4 rounded-xl">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
