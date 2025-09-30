// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SensorCard from '../components/SensorCard';
import ControlPanel from '../components/ControlPanel';

export default function Dashboard(){
  const [latest, setLatest] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLatest = async () => {
    try {
      const res = await api.get('/sensors/latest');
      setLatest(res.data);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  useEffect(() => {
    fetchLatest();
    const id = setInterval(fetchLatest, 10_000); // refresh every 10s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SensorCard title="Soil moisture" value={latest?.soilMoisture ?? '--'} unit="%" />
          <SensorCard title="Temperature" value={latest?.temperature ?? '--'} unit="°C" />
          <SensorCard title="Humidity" value={latest?.humidity ?? '--'} unit="%" />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Tank level</h3>
          <div className="bg-white p-4 rounded shadow">
            <div className="w-full bg-slate-100 rounded h-6">
              <div style={{ width: `${latest?.waterLevel ?? 0}%` }} className="h-6 rounded bg-green-500"></div>
            </div>
            <div className="text-sm text-slate-600 mt-2">{latest?.waterLevel ?? '--'}% available</div>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <ControlPanel deviceId={latest?.device} onCommandSent={() => fetchLatest()} />
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Crop</h4>
          <p className="text-sm text-slate-600 mt-2">{latest?.crop || 'Not set'}</p>
        </div>
      </aside>
    </div>
  );
}
