// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';

// Import all your service pages
import DatabaseService from './ServicesPages/Database';
import ManagedServices from './ServicesPages/ManagedServices';
import DigitalMarketing from './ServicesPages/DigitalMarketing';
import OnSiteResources from './ServicesPages/OnSiteResources';
import WebsiteDevelopment from './ServicesPages/WebsiteDevelopment';
import SoftwareApplication from './ServicesPages/SoftwareApplication';
import GraphicDesigning from './ServicesPages/GraphicDesigning';
import MobileApplication from './ServicesPages/MobileApplication';
import BulkSMSService from './ServicesPages/BulkSMS';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Define routes for each service page */}
        <Route path="/service/database" element={<DatabaseService />} />
        <Route path="/service/managed-services" element={<ManagedServices />} />
        <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/service/on-site-resources" element={<OnSiteResources />} />
        <Route path="/service/website-development" element={<WebsiteDevelopment />} />
        <Route path="/service/software-application" element={<SoftwareApplication />} />
        <Route path="/service/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/service/mobile-application" element={<MobileApplication />} />
        <Route path="/service/bulk-sms" element={<BulkSMSService />} />
        
        {/* 404 Page - Optional */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// 404 Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-8">Page not found</p>
        <a href="/" className="text-blue-600 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

export default App;