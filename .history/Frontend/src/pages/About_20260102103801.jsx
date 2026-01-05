import { Users, Target, Award, Eye, Rocket, Shield } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Senior Web Developer",
      expertise: "React.js, Next.js, TypeScript",
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer Lead",
      expertise: "Figma, Adobe Suite, User Research",
      experience: "4+ years",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop"
    },
    {
      name: "Amit Verma",
      role: "Backend Developer",
      expertise: "Node.js, Python, MongoDB",
      experience: "6+ years",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Neha Singh",
      role: "Digital Marketing Head",
      expertise: "SEO, SEM, Content Strategy",
      experience: "5+ years",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primaryPurple/10 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transforming Digital Landscapes Since 2018
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SA Infotechs is a premier technology-driven company delivering 
                cutting-edge digital solutions that propel businesses forward 
                in the modern digital ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primaryPurple mr-2" />
                  <span className="font-semibold">200+ Projects</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primaryPurple mr-2" />
                  <span className="font-semibold">50+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-primaryPurple mr-2" />
                  <span className="font-semibold">98% Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                  alt="SA Infotechs Office" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primaryPurple/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-primaryPurple">6+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted digital transformation partner for businesses 
                worldwide, leveraging cutting-edge technology to create solutions that 
                drive growth, innovation, and sustainable success in the digital age.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg mb-6">
                <Rocket className="w-8 h-8 text-primaryPurple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with robust, scalable, and user-centric digital 
                solutions through continuous innovation, technical excellence, and 
                unwavering commitment to client success, while fostering a culture 
                of learning and growth.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SA Infotechs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proven Expertise",
                description: "6+ years of delivering successful digital solutions across industries"
              },
              {
                icon: Target,
                title: "Client-Centric Approach",
                description: "Tailored solutions focused on your specific business goals and challenges"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Rigorous testing and quality checks ensuring flawless performance"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center p-4 bg-primaryPurple/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primaryPurple" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop" 
                  alt="Ankush Sapkal - CEO" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primaryPurple/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primaryPurple text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm">Founder & Director</div>
                <div className="font-bold text-lg">Since 2018</div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-primaryPurple/10 rounded-full mb-6">
                <span className="text-primaryPurple font-semibold">Leadership</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ankush Sapkal
                <span className="block text-2xl text-primaryPurple mt-2">CEO & Director</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Ankush Sapkal is the visionary Founder and Director of SA Infotechs, 
                  a leading web development agency known for delivering high-performance, 
                  user-centric digital solutions.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="font-semibold text-gray-900">Education</div>
                    <div className="text-gray-600 text-sm">Diploma in Computer Engineering + BE</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="font-semibold text-gray-900">Experience</div>
                    <div className="text-gray-600 text-sm">6+ Years in Tech Industry</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Database Administration (SQL)</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Frontend Development</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Business Strategy</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Client Relations</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primaryPurple pl-4 italic text-gray-700">
                  "To empower businesses through digital innovation and deliver web solutions 
                  that not only meet expectations—but exceed them."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of passionate professionals dedicated to crafting exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primaryPurple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className="text-primaryPurple font-semibold mb-3">{member.role}</div>
                  <div className="text-gray-600 text-sm mb-3">{member.expertise}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">Experience:</span>
                    <span className="ml-2">{member.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 bg-primaryPurple text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
              <Users className="w-5 h-5 mr-2" />
              View Full Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}