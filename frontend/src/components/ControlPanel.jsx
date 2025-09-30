// src/components/ControlPanel.jsx
import React, { useState } from 'react';
import api from '../services/api';

export default function ControlPanel({ deviceId, onCommandSent }) {
  const [loading, setLoading] = useState(false);

  const send = async (type) => {
    setLoading(true);
    try {
      await api.post('/control/valve', { commandType: type, payload: { deviceId } });
      onCommandSent?.();
      alert('Command queued');
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      <h4 className="font-semibold">Manual Controls</h4>
      <div className="flex gap-3">
        <button disabled={loading} onClick={() => send('OPEN_VALVE')} className="px-4 py-2 bg-blue-600 text-white rounded">Open Valve</button>
        <button disabled={loading} onClick={() => send('CLOSE_VALVE')} className="px-4 py-2 bg-red-600 text-white rounded">Close Valve</button>
      </div>
    </div>
  );
}
