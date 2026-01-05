import React, { useState, useEffect } from 'react';

const Graphics = () => {
  // Graphics data with images and descriptions
  const graphicsData = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and experiences for web and mobile applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Figma", "Adobe XD", "Sketch"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "3D Modeling",
      description: "Building realistic 3D models for games, animations, and architectural visualization.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Blender", "Maya", "3DS Max"],
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "Motion Graphics",
      description: "Designing animated graphics for videos, presentations, and digital advertisements.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["After Effects", "Premiere Pro", "Cinema 4D"],
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 4,
      title: "Vector Illustration",
      description: "Creating scalable vector artwork for logos, icons, and print materials.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Illustrator", "CorelDRAW", "Inkscape"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 6,
      title: "Infographic Design",
      description: "Transforming complex data into visually appealing and understandable infographics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Canva", "Visme", "Adobe Spark"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  // State for tracking hovered card
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Info about what Infotech provides
  const infotechServices = {
    title: "Infotech Graphics Services",
    description: "Infotech provides comprehensive graphics solutions using cutting-edge technologies and tools. Our services include:",
    services: [
      "Custom UI/UX design for web and mobile applications",
      "High-quality 3D modeling and animation",
      "Professional photo editing and manipulation",
      "Motion graphics and video editing",
      "Vector illustrations and logo design",
      "Infographic and data visualization",
      "Brand identity and marketing materials"
    ],
    technologies: ["React", "Three.js", "WebGL", "Canvas API", "SVG", "CSS Animations", "Framer Motion"]
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 overflow-hidden">
      {/* Header */}
      <header className="relative w-full py-8 md:py-12 px-4 md:px-0">
        <div className="w-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Graphics Design Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto md:px-12 lg:px-24">
            Professional graphics solutions using modern technologies and tools. 
            Creating visually stunning designs for web, mobile, and print media.
          </p>

          {/* Animated elements */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
      </header>

      <main className="w-full px-4 md:px-0 pb-16">
        <section className="w-full mb-16">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-300 md:mx-12 lg:mx-24">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              {infotechServices.title}
            </h2>
            <p className="text-gray-700 mb-8 text-lg">{infotechServices.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">Our Services</h3>
                <ul className="space-y-3">
                  {infotechServices.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-600 mr-3">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-700">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {infotechServices.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full text-sm border border-gray-400 hover:border-cyan-600 transition-all duration-300 hover:scale-105 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl border border-gray-400">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-700">Graphics Languages & Tools</h4>
                  <p className="text-gray-700">
                    We use a combination of programming languages and specialized tools including 
                    <span className="font-semibold text-gray-900"> JavaScript (React, Three.js)</span>, 
                    <span className="font-semibold text-gray-900"> WebGL</span>, 
                    <span className="font-semibold text-gray-900"> Canvas API</span>, 
                    <span className="font-semibold text-gray-900"> SVG</span>, and design tools like 
                    <span className="font-semibold text-gray-900"> Adobe Creative Suite</span> and 
                    <span className="font-semibold text-gray-900"> Figma</span> to create stunning graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphics Portfolio Section */}
        <section className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center md:px-12 lg:px-24">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">Graphics Portfolio</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:px-12 lg:px-24">
            {graphicsData.map((item) => (
              <div 
                key={item.id}
                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform ${hoveredCard === item.id ? 'md:-translate-y-4 scale-105' : 'scale-100'}`}
                onMouseEnter={() => !isMobile && setHoveredCard(item.id)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => isMobile && setHoveredCard(hoveredCard === item.id ? null : item.id)}
              >
                {/* Image container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 mix-blend-multiply`}></div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                
                {/* Content - Smaller card content */}
                <div className={`p-4 bg-gradient-to-b from-gray-50 to-gray-100 transition-all duration-500 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-100'} border border-gray-300`}>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-cyan-700 text-sm md:text-base">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-xs md:text-sm text-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated button - Smaller */}
                  <div className="flex justify-center">
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full font-semibold hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-md text-white text-sm md:text-base">
                      View Project
                    </button>
                  </div>
                </div>
                
                {/* Hover effect indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transition-all duration-500 ${hoveredCard === item.id ? 'opacity-100 h-2' : 'opacity-70'}`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="w-full mt-16">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12 overflow-hidden relative md:mx-12 lg:mx-24 border border-gray-300">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Infotech</span> for Graphics?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl border border-gray-400 hover:border-cyan-600 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">High Performance</h3>
                  <p className="text-gray-700">Optimized graphics solutions for smooth performance across all devices and platforms.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl border border-gray-400 hover:border-purple-600 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-700 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Creative Designs</h3>
                  <p className="text-gray-700">Unique and attractive designs tailored to your brand identity and target audience.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl border border-gray-400 hover:border-green-600 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Responsive & Adaptive</h3>
                  <p className="text-gray-700">Perfect display on all screen sizes from desktop to mobile with no gaps or distortions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .grid-cols-1 > div {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Graphics;