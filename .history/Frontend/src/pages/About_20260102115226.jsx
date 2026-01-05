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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4">
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                SA
              </span>
              <span className="text-6xl font-bold text-blue-900 block -mt-2">INFOTECHS</span>
            </div>

            <p className="text-lg text-gray-700 mt-6">
              We build scalable, secure and modern IT solutions for growing businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {Object.entries(companyInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white p-4 rounded-xl shadow text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl font-bold text-blue-700">{value}</div>
                  <div className="text-sm text-gray-500 uppercase mt-1">{key}</div>
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="relative h-60 rounded-2xl overflow-hidden group hover:shadow-xl transition-all"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>
                </div>
                <div className="relative p-5 text-white h-full flex flex-col justify-between">
                  <div>
                    <item.icon className="w-7 h-7 mb-3" />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* CEO Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={ceoInfo.image} 
                  alt={ceoInfo.name} 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                
                {/* CEO Badge - Top */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg inline-flex items-center shadow-lg">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="font-bold text-sm">CEO & Director</span>
                  </div>
                </div>
                
                {/* Name at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{ceoInfo.name}</h3>
                </div>
              </div>
            </div>

            {/* CEO Information - Reduced Gaps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Visionary Leader
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {ceoInfo.name} is the visionary Founder and Director of SA Infotechs, a leading 
                web development agency known for delivering high-performance, user-centric 
                digital solutions. With over {ceoInfo.experience.toLowerCase()}, he combines 
                technical expertise with strategic insight to craft innovative web applications, 
                eCommerce platforms, and custom software solutions for clients across various 
                sectors. He holds a {ceoInfo.education} and began his professional journey 
                with 2 years of experience as a Marketing Manager, which helped him develop 
                a strong foundation in client relations and business strategy. {ceoInfo.name.split(' ')[0]} 
                specializes in Database Administration (SQL) and Frontend Development, bringing 
                a deep understanding of both backend architecture and user interface design. 
                His leadership continues to drive SA Infotechs toward digital excellence and 
                client success.
              </p>

              {/* Education & Experience - Side by side */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Education</div>
                      <div className="text-sm text-gray-600">{ceoInfo.education}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow border border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Briefcase className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Experience</div>
                      <div className="text-sm text-gray-600">{ceoInfo.experience}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations - Tight layout */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Specializations</h4>
                <div className="grid grid-cols-2 gap-3">
                  {ceoInfo.specializations.map((spec, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow transition-shadow"
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center mr-2">
                          <spec.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{spec.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote - Compact */}
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                <div className="text-3xl text-blue-200 mb-1">"</div>
                <p className="text-gray-800 italic mb-2">
                  {ceoInfo.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-blue-400 mr-2"></div>
                  <span className="font-bold text-gray-900">{ceoInfo.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition-all"
                onMouseEnter={() => setHoveredMember(m.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative h-48">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                    {m.experience}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">{m.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{m.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.expertise.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
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

      {/* ================= CTA - Simple Blue ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-6">
              Build future-ready digital solutions with SA Infotechs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Project
              </button>
              <button className="bg-transparent border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}