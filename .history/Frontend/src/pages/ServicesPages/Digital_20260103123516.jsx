// Digital.jsx
import React from 'react';

const Digital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SA</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">SA Infotech</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#languages" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Technologies</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Digital Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Kya Hota Hai?
              </span>
            </h1>
            <p className="text-gray-700 text-lg mt-6 mb-8">
              Digital marketing internet aur digital technologies ka istemal karke products aur services ko promote karne ka tareeka hai. Isme social media, search engines, email, mobile apps aur websites jaisi digital platforms ka istemal hota hai.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Learn More
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Marketing Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section - What SA Infotech Provides */}
      <section id="services" className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SA Infotech Digital Marketing Mein Kya Provide Karti Hai
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hamari comprehensive digital marketing services aapke business ko online duniya mein aage le jaane mein madad karti hain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="SEO Optimization" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO & Search Engine Optimization</h3>
              <p className="text-gray-600 mb-4">
                Google search results mein aapki website ki ranking improve karna, organic traffic badhana aur visibility enhance karna.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Keyword Research</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">On-Page SEO</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Technical SEO</span>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Social Media Marketing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Facebook, Instagram, Twitter, LinkedIn aur dusre social media platforms par brand awareness create karna aur engagement badhana.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Content Creation</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Community Management</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Paid Campaigns</span>
              </div>
              <a href="#" className="text-purple-600 font-medium hover:text-purple-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Content Marketing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Valuable aur relevant content create karna jo aapke target audience ko attract aur engage kare, aur ultimately profitable action ki taraf le jaye.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Blog Writing</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Video Content</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Infographics</span>
              </div>
              <a href="#" className="text-green-600 font-medium hover:text-green-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service Card 4 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Email Marketing" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Targeted email campaigns design karna jo aapke audience tak pahuche, engagement badhaye aur conversions generate kare.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Newsletters</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Automation</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Campaign Analytics</span>
              </div>
              <a href="#" className="text-orange-600 font-medium hover:text-orange-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service Card 5 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="PPC Advertising" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg mb-4">
                <span className="text-white font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">
                Google Ads, Facebook Ads aur dusre platforms par targeted paid advertising campaigns create aur manage karna.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Google Ads</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Facebook Ads</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">ROI Tracking</span>
              </div>
              <a href="#" className="text-red-600 font-medium hover:text-red-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service Card 6 */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Analytics & Reporting" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg mb-4">
                <span className="text-white font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Performance tracking, detailed analytics aur comprehensive reporting se aapke campaigns ki effectiveness measure karna.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Google Analytics</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Dashboard</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Performance Metrics</span>
              </div>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies/Languages Section */}
      <section id="languages" className="container mx-auto px-4 py-12 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Mein Konsi Languages/Tools Aati Hain
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Digital marketing mein multiple programming languages aur tools ka istemal hota hai jo campaigns ko design, implement aur analyze karne mein madad karte hain.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Technology 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">HTML</span>
            </div>
            <h4 className="font-bold text-gray-900">HTML/CSS</h4>
            <p className="text-sm text-gray-600 mt-2">Web pages aur landing pages design karne ke liye</p>
          </div>
          
          {/* Technology 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">JS</span>
            </div>
            <h4 className="font-bold text-gray-900">JavaScript</h4>
            <p className="text-sm text-gray-600 mt-2">Interactive elements aur tracking codes ke liye</p>
          </div>
          
          {/* Technology 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">SQL</span>
            </div>
            <h4 className="font-bold text-gray-900">SQL/Databases</h4>
            <p className="text-sm text-gray-600 mt-2">Customer data analysis aur segmentation ke liye</p>
          </div>
          
          {/* Technology 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">GA</span>
            </div>
            <h4 className="font-bold text-gray-900">Google Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">Website traffic aur user behavior tracking</p>
          </div>
          
          {/* Technology 5 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">FB</span>
            </div>
            <h4 className="font-bold text-gray-900">Facebook Ads</h4>
            <p className="text-sm text-gray-600 mt-2">Social media advertising aur targeting</p>
          </div>
          
          {/* Technology 6 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">PY</span>
            </div>
            <h4 className="font-bold text-gray-900">Python/R</h4>
            <p className="text-sm text-gray-600 mt-2">Data analysis aur automation ke liye</p>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">SA Infotech Ki Specializations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Customized Solutions</h4>
                <p className="text-gray-600 mt-1">Har business ke liye tailored digital marketing strategies</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Advanced Analytics</h4>
                <p className="text-gray-600 mt-1">Data-driven decisions ke liye comprehensive reporting</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Multi-Platform Expertise</h4>
                <p className="text-gray-600 mt-1">Social media, search engines, email marketing sab platforms par expertise</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">ROI-Focused Campaigns</h4>
                <p className="text-gray-600 mt-1">Maximum return on investment ke liye optimized campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apna Digital Marketing Campaign Start Karen</h2>
              <p className="text-blue-100 mb-8">
                SA Infotech ke saath apne business ko digital duniya mein aage le jayein. Humare experts aapko customized solution denge jo aapke business goals ke hisaab se tailored honge.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call us at</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Free Consultation Book Karen</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Apna naam likhen" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="apna@email.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="Apni requirements likhen..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SA</span>
                </div>
                <h2 className="text-2xl font-bold">SA Infotech</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Digital marketing solutions jo aapke business ko online duniya mein aage le jati hain.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <span className="font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="font-bold">yt</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PPC Advertising</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Technologies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HTML/CSS/JavaScript</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Google Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook Ads</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Python/R for Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SQL Databases</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-400">123 Business Street, Mumbai, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-400">info@sainfotech.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SA Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Digital;