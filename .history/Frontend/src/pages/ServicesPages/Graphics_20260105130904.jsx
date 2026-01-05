// Graphics.jsx
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
    // {
    //   id: 5,
    //   title: "Photo Editing",
    //   description: "Professional photo manipulation, retouching, and color correction services.",
    //   image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   technologies: ["Photoshop", "Lightroom", "Capture One"],
    //   color: "from-violet-500 to-indigo-600"
    // },
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
    <div className="min-h-screen  w-full bg-white-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Header */}
      <header className="relative w-full  py-8 md:py-12 px-4 md:px-8">
        <div className="w-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Graphics Design Services
          </h1>
         <p className="text-lg md:text-xl text-black text-center max-w-4xl mx-auto">
  Professional graphics solutions using modern technologies and tools. 
  Creating visually stunning designs for web, mobile, and print media.
</p>

          {/* Animated elements */}
          <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
      </header>

      <main className=" w-full px-4 md:px-8 pb-16">
        <section className="max-w-7xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-700">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {infotechServices.title}
            </h2>
            <p className="text-gray-300 mb-8 text-lg">{infotechServices.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Our Services</h3>
                <ul className="space-y-3">
                  {infotechServices.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-3">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {infotechServices.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm border border-gray-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-cyan-300">Graphics Languages & Tools</h4>
                  <p className="text-gray-300">
                    We use a combination of programming languages and specialized tools including 
                    <span className="font-semibold text-white"> JavaScript (React, Three.js)</span>, 
                    <span className="font-semibold text-white"> WebGL</span>, 
                    <span className="font-semibold text-white"> Canvas API</span>, 
                    <span className="font-semibold text-white"> SVG</span>, and design tools like 
                    <span className="font-semibold text-white"> Adobe Creative Suite</span> and 
                    <span className="font-semibold text-white"> Figma</span> to create stunning graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphics Portfolio Section */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Graphics Portfolio</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {graphicsData.map((item) => (
              <div 
                key={item.id}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform ${hoveredCard === item.id ? 'md:-translate-y-4 scale-105' : 'scale-100'}`}
                onMouseEnter={() => !isMobile && setHoveredCard(item.id)}
                onMouseLeave={() => !isMobile && setHoveredCard(null)}
                onClick={() => isMobile && setHoveredCard(hoveredCard === item.id ? null : item.id)}
              >
                {/* Image container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 mix-blend-multiply`}></div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-6 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-500 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-100'}`}>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-cyan-300">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated button */}
                  <div className="flex justify-center">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
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
        <section className="max-w-7xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">Infotech</span> for Graphics?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">High Performance</h3>
                  <p className="text-gray-300">Optimized graphics solutions for smooth performance across all devices and platforms.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Creative Designs</h3>
                  <p className="text-gray-300">Unique and attractive designs tailored to your brand identity and target audience.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Responsive & Adaptive</h3>
                  <p className="text-gray-300">Perfect display on all screen sizes from desktop to mobile with no gaps or distortions.</p>
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