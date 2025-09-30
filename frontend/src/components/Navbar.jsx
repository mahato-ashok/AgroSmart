// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, clearToken } from '../utils/auth';

export default function Navbar(){
  const nav = useNavigate();
  const handleLogout = () => {
    clearToken();
    nav('/login');
  };

  return (
    <nav className=" shadow sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-7">
          {/* <img
         src="/images/Irriviologo1"
         alt="Agrosmart"
         className="w-12 h-12 rounded-lg shadow-lg object-cover"
      /> */}
          <Link to="/" className="text-xl font-bold text-green-600">AgroSmart</Link>
          <span className="text-sm text-slate-500">Sensor-based irrigation</span>
           
        </div>
        <div>
          {isLoggedIn() ? (
            <div className="flex gap-3 items-center">
              <Link to="/dashboard" className="px-3 py-1 rounded bg-green-600 text-white hover:scale-105 duration-200 ">Dashboard</Link>
              <button onClick={handleLogout} className="px-3 py-1 rounded border hover:scale-105 duration-200 ">Logout</button>
            </div>
          ) : (
            <div className="flex gap-6 items-center">
              <Link to="/login" className="px-3 py-1 rounded bg-green-600 text-white hover:scale-105 duration-200 ">Login</Link>
              <Link to="/signup" className="px-3 py-1 rounded bg-green-600 text-white hover:scale-105 duration-200 ">Sign up</Link>
              <Link to="/signup" className="px-3 py-1 rounded bg-green-600 text-white hover:scale-105 duration-200 ">Contact us</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
