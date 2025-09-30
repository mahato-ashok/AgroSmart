// src/services/api.js
import axios from "axios";

// ✅ Base URL from .env (fallback to localhost:5000)
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000, // 10 seconds timeout
});

// ✅ Attach token automatically to each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
