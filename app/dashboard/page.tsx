"use client";
import { useEffect, useMemo, useState } from "react";
import { initSeeds, fetchAlerts, fetchWeather } from "@/lib/mockApi";
import { Alert, Farmer, StorageKeys, getLocal, setLocal } from "@/lib/storage";
import { AlertCard } from "@/components/AlertCard";
import { WeatherChart } from "@/components/WeatherChart";
import { OfflineModeToggle } from "@/components/OfflineModeToggle";
import { useToast } from "@/components/ToastProvider";
import { consumeBitChat } from "@/lib/bitchat";
import { MitraAI } from "@/components/MitraAI";

export default function DashboardPage() {
  const { show } = useToast();
  const [user, setUser] = useState<Farmer | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [weather, setWeather] = useState<any | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    initSeeds();
    const storedUser = getLocal<Farmer | null>(StorageKeys.user, null);
    if (!storedUser) {
      const defaultUser = getLocal<Farmer[]>(StorageKeys.farmers, [])[0] ?? { id: "f1", name: "Rohan", location: "Nashik", phone: "+91" };
      setLocal(StorageKeys.user, defaultUser);
      setUser(defaultUser);
    } else {
      setUser(storedUser);
    }
    setOffline(getLocal<boolean>(StorageKeys.offline, false));
    fetchAlerts().then(setAlerts);
    fetchWeather().then(setWeather);
  }, []);

  useEffect(() => {
    if (!user) return;
    if (!offline) return;
    const msgs = consumeBitChat(user.id);
    if (msgs.length) {
      const received = msgs.map((m) => m.alert);
      setAlerts((a) => {
        const byId = new Map(a.map((x) => [x.id, x]));
        received.forEach((r) => byId.set(r.id, r));
        const next = Array.from(byId.values());
        setLocal(StorageKeys.alerts, next);
        return next;
      });
      show({ title: "Offline alerts synced", description: `${msgs.length} received via BitChat` });
    }
  }, [offline, user, show]);

  const activeAlerts = useMemo(() => alerts.filter((a) => !a.read && a.location === user?.location), [alerts, user]);
  const historyAlerts = useMemo(() => alerts.filter((a) => a.read || a.location !== user?.location), [alerts, user]);

  const markRead = (id: string) => {
    setAlerts((a) => {
      const next = a.map((x) => (x.id === id ? { ...x, read: true } : x));
      setLocal(StorageKeys.alerts, next);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold">Welcome back{user ? `, ${user.name}` : ""} 👋</div>
        <OfflineModeToggle />
      </div>
      {offline && (
        <div className="glass rounded p-3 mb-4 text-sm">Offline Sync Active — BitChat will sync nearby alerts</div>
      )}

      {weather && (
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2"><WeatherChart data={weather.predictions} /></div>
          <div className="glass rounded p-4">
            <div className="font-semibold mb-1">AI Insight</div>
            <div className="opacity-80 text-sm">{weather.aiSummary}</div>
          </div>
        </div>
      )}

      <section className="grid lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Active Alerts</h3>
          <div className="space-y-3">
            {activeAlerts.length ? activeAlerts.map((a) => (
              <AlertCard key={a.id} alert={a} onMarkRead={markRead} currentFarmerId={user?.id} />
            )) : <div className="opacity-60 text-sm">No active alerts</div>}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Alert History</h3>
          <div className="space-y-3">
            {historyAlerts.length ? historyAlerts.map((a) => (
              <AlertCard key={a.id} alert={a} currentFarmerId={user?.id} />
            )) : <div className="opacity-60 text-sm">No history</div>}
          </div>
        </div>
      </section>

      <MitraAI />
    </div>
  );
}

