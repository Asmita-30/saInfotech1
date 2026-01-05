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
