import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava } from 'react-icons/fa';

import { 
  FaMobileAlt, 
  FaCode,
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaSyncAlt
} from 'react-icons/fa';

import { SiKotlin, SiSwift, SiFlutter, SiReact } from 'react-icons/si';

const MobileApplication = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  /* ===================== SERVICES ===================== */
  const mobileServices = [
    {
      id: 1,
      title: "iOS Development",
      description:
        "Native iOS apps using Swift and SwiftUI with modern design patterns optimized for Apple ecosystem.",
      icon: <FaApple className="text-4xl text-white" />,
      languages: ["Swift", "SwiftUI", "Objective-C", "Xcode"],
      features: ["App Store Deployment", "ARKit", "In-App Purchases", "Push Notifications"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      color: "from-gray-800 to-gray-900",
      duration: "4-6 weeks",
    },
    {
      id: 2,
      title: "Android Development",
      description:
        "High-performance Android apps using Kotlin & Jetpack Compose with modern UI and scalability.",
      icon: <FaAndroid className="text-4xl text-white" />,
      languages: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"],
      features: ["Play Store", "Material Design", "Google Maps", "Background Services"],
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      color: "from-green-600 to-emerald-700",
      duration: "4-6 weeks",
    },
    {
      id: 3,
      title: "Cross-Platform Apps",
      description:
        "Single codebase apps using React Native & Flutter for faster development and reduced cost.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
      languages: ["React Native", "Flutter", "JavaScript", "Dart"],
      features: ["Single Codebase", "Hot Reload", "Cost Effective", "Fast Delivery"],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      color: "from-blue-500 to-cyan-600",
      duration: "6-8 weeks",
    },
  ];

  /* ===================== LANGUAGES ===================== */
  const mobileLanguages = [
    { name: "Swift", icon: <SiSwift />, desc: "Apple iOS Language" },
    { name: "Kotlin", icon: <SiKotlin />, desc: "Modern Android Language" },
    { name: "React Native", icon: <SiReact />, desc: "Cross Platform" },
    { name: "Flutter", icon: <SiFlutter />, desc: "Google UI Toolkit" },
    { name: "Java", icon: <FaJava />, desc: "Android Base Language" },
  ];

  /* ===================== PROCESS ===================== */
  const developmentProcess = [
    { step: 1, title: "Planning", desc: "Requirement analysis & strategy" },
    { step: 2, title: "UI/UX Design", desc: "User-friendly app design" },
    { step: 3, title: "Development", desc: "Clean & scalable code" },
    { step: 4, title: "Testing", desc: "Quality assurance" },
    { step: 5, title: "Deployment", desc: "Play Store & App Store" },
    { step: 6, title: "Support", desc: "Maintenance & updates" },
  ];

  /* ===================== BENEFITS ===================== */
  const mobileBenefits = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "More Users",
      desc: "Reach global mobile users",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure",
      desc: "Strong data protection",
    },
    {
      icon: <FaSyncAlt className="text-3xl" />,
      title: "Offline Access",
      desc: "Better user experience",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Growth",
      desc: "Boost business revenue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-14">

        {/* ================= WHAT IS MOBILE APP ================= */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-6"
          >
            Mobile App Development
          </motion.h2>

          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
            We build powerful, scalable, and user-friendly mobile applications
            for Android, iOS, and cross-platform solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {mobileLanguages.map((lang) => (
              <motion.div
                key={lang.name}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredLanguage(lang.name)}
                onMouseLeave={() => setHoveredLanguage(null)}
                className="px-5 py-3 bg-white rounded-xl shadow-md border flex items-center gap-2"
              >
                {lang.icon}
                <span className="font-semibold">{lang.name}</span>
                <AnimatePresence>
                  {hoveredLanguage === lang.name && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-gray-500 block"
                    >
                      {lang.desc}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Mobile App Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -15 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="relative h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute top-4 right-4 bg-black/70 p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.languages.map((l) => (
                      <span key={l} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                        {l}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{service.duration}</span>
                    <FaArrowRight className="text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developmentProcess.map((p) => (
              <div key={p.step} className="bg-white p-6 rounded-2xl shadow">
                <div className="text-blue-600 font-bold mb-2">
                  STEP {p.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">
            Benefits of Mobile Apps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileBenefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow flex gap-4"
              >
                <div className="text-blue-600">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-xl">{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default MobileApplication;
