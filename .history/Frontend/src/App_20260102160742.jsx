import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import DatabaseService from './pages/ServicesPages/Database';
import Manged from './pages/ServicesPages/Manged';
import OnSide from './pages/ServicesPages/OnSite';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Pages */}
<Route path="/services/database" element={<DatabaseService />} />   
<Route path="/services/Manged" element={<Manged/>}/>
<Route path="/services/OnSide" element={<OnSide/>}/>



   </Routes>
    </MainLayout>
  );
}

export default App;
