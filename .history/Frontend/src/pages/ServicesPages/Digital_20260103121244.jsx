import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  BarChart3,
  Share2,
  Mail,
  Camera,
} from "lucide-react";

const cardHover = {
  initial: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    y: -12,
    boxShadow: "0 25px 50px rgba(0,0,0,0.18)",
    transition: { type: "spring", stiffness: 250 },
  },
};

export default function Digital() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO WITH IMAGE */}
      <section className="w-full min-h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1533750349088-cd871a92f312"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Digital Marketing"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8">
              SA Infotech helps brands grow online with creative, data‑driven
              and result‑oriented digital marketing solutions.
            </p>
            <button className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition">
              Grow Your Business
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID WITH IMAGES */}
      <section className="w-full bg-gray-50 py-20">
        <div className="px-4 sm:px-8 lg:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-14">
            Our Digital Marketing Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: Megaphone,
              title: "Social Media Marketing",
              img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
              text: "Build brand presence and engage customers on social platforms.",
            },{
              icon: Search,
              title: "SEO & Content Marketing",
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
              text: "Increase visibility and rank higher on search engines.",
            },{
              icon: BarChart3,
              title: "Performance Advertising",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              text: "ROI‑focused Google Ads & Social Media campaigns.",
            },{
              icon: Mail,
              title: "Email Marketing",
              img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
              text: "Automated email strategies that convert leads to customers.",
            },{
              icon: Share2,
              title: "Influencer Marketing",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              text: "Reach the right audience with trusted digital voices.",
            },{
              icon: Camera,
              title: "Creative & Branding",
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
              text: "Eye‑catching creatives that define your brand identity.",
            }].map((item, i) => (
              <motion.div
                key={i}
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="bg-white rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="w-full grid grid-cols-2 sm:grid-cols-4">
        {["photo-1492724441997-5dc865305da7","photo-1521737604893-d14cc237f11d","photo-1519389950473-47ba0277781c","photo-1556761175-5973dc0f32e7"].map((id, i) => (
          <motion.img
            key={i}
            whileHover={{ scale: 1.05 }}
            src={`https://images.unsplash.com/${id}`}
            className="h-40 sm:h-56 w-full object-cover"
            alt="Marketing"
          />
        ))}
      </section>

      {/* CTA */}
      <section className="w-full bg-blue-700 py-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Scale Your Digital Presence?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-8">
            Partner with SA Infotech for powerful digital marketing solutions.
          </p>
          <button className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:-translate-y-1 transition">
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
}
