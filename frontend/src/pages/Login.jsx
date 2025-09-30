// src/pages/Login.jsx
import React, { useState } from 'react';
import api from '../services/api';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [form, setForm] = useState({ email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/auth/login', form);
      saveToken(res.data.token);
      nav('/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input name="email" onChange={handle} value={form.email} placeholder="Email" className="w-full border rounded px-3 py-2"/>
        <input name="password" type="password" onChange={handle} value={form.password} placeholder="Password" className="w-full border rounded px-3 py-2"/>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          {loading ? 'Logging...' : 'Log in'}
        </button>
      </form>
    </div>
  );
}
