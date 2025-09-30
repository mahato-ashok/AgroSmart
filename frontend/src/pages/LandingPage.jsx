// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FarmingDashboardCards from '../components/FarmingDashboardCards';

export default function LandingPage() {
  return (
    <div className='bg-green-100'>
    <div className="text-center py-20 bg-[url('https://images.pexels.com/photos/6131279/pexels-photo-6131279.jpeg')] bg-cover bg-center">
      <h1 className="text-4xl font-extrabold text-green-900">AgroSmart</h1>
      <p className="mt-4 text-slate-600 max-w-xl mx-auto">
        Sensor-based smart irrigation with crop intelligence and rainwater monitoring.
      </p>
      <div className="mt-8 flex justify-center gap-6">
        <Link
          to="/signup"
          className="px-6 py-3 bg-green-700 text-white rounded hover:scale-105 duration-200"
        >
          Get Started
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-green-700 text-white rounded hover:scale-105 duration-200"
        >
          View Dashboard
        </Link>
      </div>
      
    </div>
    <FarmingDashboardCards></FarmingDashboardCards>
    </div>
  );
}
