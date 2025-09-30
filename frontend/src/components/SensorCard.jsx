// src/components/SensorCard.jsx
import React from 'react';

export default function SensorCard({ title, value, unit, note }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm text-slate-500">{title}</h3>
        <div className="text-2xl font-bold">{value}{unit}</div>
      </div>
      {note && <p className="text-xs text-slate-400 mt-2">{note}</p>}
    </div>
  );
}
