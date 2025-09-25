import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.jpg";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="hero">
        
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Smart Irrigation, Sustainable Future</h1>
          <p>
            Irrivio empowers you to manage your irrigation systems with precision,
            ensuring efficient water use and healthy landscapes.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn-primary">Learn More</a>
            <a href="#get-started" className="btn-secondary">Get Started</a>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Soil Monitoring</h3>
            <p>Monitor soil moisture in real time to prevent overwatering and ensure optimal plant health.</p>
          </div>
          <div className="feature-card">
            <h3>Water Monitoring</h3>
            <p>Precisely track water usage. Identify leaks to conserve water and cut costs.</p>
          </div>
          <div className="feature-card">
            <h3>Report and Analytics</h3>
            <p>Access detailed reports to understand consumption patterns and make data-driven decisions.</p>
          </div>
          <div className="feature-card">
            <h3>Irrigation System</h3>
            <p>Control your irrigation system remotely. Set schedules, adjust zones, and receive alerts anywhere.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Privacy Policy | Terms of Service</p>
        <p>© 2024 Irrivio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
