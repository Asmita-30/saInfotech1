import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-darkBg text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <img src={logo} className="h-10" />
        <ul className="hidden md:flex gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
