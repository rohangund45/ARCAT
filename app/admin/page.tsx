"use client";
import { useEffect, useState } from "react";
import { Alert, StorageKeys, getLocal } from "@/lib/storage";
import { broadcastAlert, initSeeds } from "@/lib/mockApi";
import { useToast } from "@/components/ToastProvider";

export default function AdminPage() {
  const { show } = useToast();
  const [form, setForm] = useState({ location: "Nashik", message: "", type: "Rain" });
  const [alerts, setAlerts] = useState<Alert[]>([]);
  useEffect(() => {
    initSeeds();
    setAlerts(getLocal<Alert[]>(StorageKeys.alerts, []));
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newAlert: Alert = {
      id: `a${Date.now()}`,
      location: form.location,
      message: form.message,
      type: form.type,
      timestamp: new Date().toISOString(),
      read: false,
    };
    await broadcastAlert(newAlert);
    setAlerts(getLocal<Alert[]>(StorageKeys.alerts, []));
    setForm({ ...form, message: "" });
    show({ title: "Alert broadcasted" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Admin Broadcast</h2>
      <form onSubmit={submit} className="glass rounded p-4 grid md:grid-cols-4 gap-3 mb-6">
        <select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="px-3 py-2 rounded bg-transparent border border-white/20">
          <option value="Nashik">Nashik</option>
          <option value="Pune">Pune</option>
        </select>
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="px-3 py-2 rounded bg-transparent border border-white/20">
          <option>Rain</option>
          <option>Heat</option>
          <option>Flood</option>
        </select>
        <input value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="px-3 py-2 rounded bg-transparent border border-white/20 md:col-span-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded md:col-span-4">Broadcast</button>
      </form>

      <div className="space-y-2">
        {alerts.slice(0).reverse().map((a) => (
          <div key={a.id} className="glass rounded p-3 text-sm">
            <div className="font-medium">{a.type} • {a.location}</div>
            <div className="opacity-80">{a.message}</div>
            <div className="opacity-60 text-xs">{new Date(a.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

