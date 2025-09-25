import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/Irriviologo.jpg"; // Correct import

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Irrivio Logo" />
          
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#features">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#get-started" className="get-started">Get Started</a></li>
        </ul>

        {/* Hamburger for mobile */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
