import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'SECURE & IT SERVICES',
    subtitle: 'Make The Easiest Solution For You',
    image: 'https://images.unsplash.com/photo-1526378722484-cc5c51052b26'
  },
  {
    title: 'BEST MARKETING SERVICE',
    subtitle: 'Perfect IT Solution For Your Business',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    title: 'WE ARE BUILDING BETTER NETWORKS',
    subtitle: 'Superior Data Management Available for All',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  }
];

const workFilters = ['All', 'Web Development', 'Software Development', 'Digital Marketing', 'Bulk SMS'];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* HERO SLIDER */}
      <section className="relative h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,40,90,0.7), rgba(0,40,90,0.7)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}

        <div className="relative z-20 flex items-center h-full">
          <div className="container mx-auto px-6 text-white max-w-4xl">
            <motion.h1
              key={slides[current].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl mb-6"
            >
              {slides[current].subtitle}
            </motion.p>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            className="rounded-xl shadow-lg"
            alt="About"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-600 mb-6">
              We are a trusted IT solutions provider delivering secure, scalable,
              and innovative digital services for modern businesses.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Happy Clients', value: 250 },
                { label: 'Projects', value: 480 },
                { label: 'Reviews', value: 120 }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-blue-600">{item.value}+</h3>
                  <p className="text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {workFilters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full border ${
                  filter === item ? 'bg-blue-600 text-white' : 'bg-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <img
                  src="https://dummyimage.com/120x60/000/fff"
                  className="mx-auto mb-4"
                  alt="Client Logo"
                />
                <p className="text-gray-600">Client Project {i}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
