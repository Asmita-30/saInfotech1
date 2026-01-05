import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  BarChart3,
  Share2,
  Mail,
  Camera,
  Target,
  TrendingUp,
  Users,
  Globe,
  Zap,
  CheckCircle
} from "lucide-react";

const cardHover = {
  initial: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    y: -15,
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
    transition: { type: "spring", stiffness: 250, damping: 15 }
  }
};

const imageHover = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.4 } }
};

export default function DigitalMarketingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Digital Marketing Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70" />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-white text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-cyan-400">Digital</span> Presence
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              We craft data-driven digital marketing strategies that deliver measurable results and accelerate business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <Target className="w-12 h-12 text-cyan-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute top-20 right-10 hidden lg:block"
        >
          <TrendingUp className="w-12 h-12 text-purple-400" />
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "450%", label: "ROI Increase", icon: TrendingUp },
              { value: "10M+", label: "Impressions", icon: Users },
              { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
              { value: "24/7", label: "Campaign Monitoring", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-600">Digital Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              End-to-end digital marketing services designed to drive growth and maximize your online potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Megaphone,
                title: "Social Media Marketing",
                img: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                text: "Strategic social campaigns that build brand loyalty and drive engagement across all major platforms.",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: Search,
                title: "SEO & Content Strategy",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
                text: "Data-driven SEO optimization and content creation that ranks your brand at the top of search results.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: BarChart3,
                title: "Performance Marketing",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                text: "ROI-focused PPC campaigns across Google, Facebook, and LinkedIn that convert traffic into revenue.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Mail,
                title: "Email Marketing Automation",
                img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
                text: "Personalized email journeys that nurture leads and drive conversions through automation.",
                color: "from-orange-500 to-amber-600"
              },
              {
                icon: Share2,
                title: "Influencer Partnerships",
                img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                text: "Strategic influencer collaborations that amplify your brand message to targeted audiences.",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: Camera,
                title: "Creative & Video Production",
                img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                text: "Captivating visual content and video campaigns that tell your brand's story effectively.",
                color: "from-red-500 to-pink-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    variants={imageHover}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{item.text}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-blue-600">4-Step</span> Success Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Strategy & Planning", desc: "In-depth analysis and custom strategy development" },
              { number: "02", title: "Campaign Execution", desc: "Multi-channel implementation with creative assets" },
              { number: "03", title: "Optimization", desc: "Real-time monitoring and performance enhancement" },
              { number: "04", title: "Reporting & Growth", desc: "Detailed analytics and scaling successful initiatives" }
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "photo-1516321318423-f06f85e504b3",
              "photo-1551650975-87deedd944c3",
              "photo-1460925895917-afdab827c52f",
              "photo-1522202176988-66273c2fd55f",
              "photo-1497366754035-f200968a6e72",
              "photo-1552664730-d307ca884978",
              "photo-1551434678-e076c223a692",
              "photo-1593359677879-a4bb92f829d1"
            ].map((id, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={`https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  className="w-full h-64 object-cover"
                  alt="Digital Marketing"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="CTA Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-20 h-20 mx-auto mb-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Accelerate Your <span className="text-cyan-400">Digital Growth</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join 500+ successful businesses that trust us with their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-lg"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/20"
              >
                Call Now: (555) 123-4567
              </motion.button>
            </div>
            <p className="mt-8 text-blue-200">
              Get your FREE digital marketing audit worth $2,500
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}