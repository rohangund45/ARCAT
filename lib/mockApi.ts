import alertsSeed from "@/data/alerts.json";
import farmersSeed from "@/data/farmers.json";
import weather from "@/data/weather.json";
import { Alert, Farmer, StorageKeys, getLocal, seedIfEmpty, setLocal } from "@/lib/storage";

export function initSeeds() {
  seedIfEmpty<Alert[]>(StorageKeys.alerts, alertsSeed as Alert[]);
  seedIfEmpty<Farmer[]>(StorageKeys.farmers, farmersSeed as Farmer[]);
}

export function fetchWeather() {
  return Promise.resolve(weather);
}

export function fetchAlerts(): Promise<Alert[]> {
  const a = getLocal<Alert[]>(StorageKeys.alerts, []);
  return Promise.resolve(a);
}

export function broadcastAlert(alert: Alert) {
  const all = getLocal<Alert[]>(StorageKeys.alerts, []);
  const exists = all.find((x) => x.id === alert.id);
  const next = exists ? all.map((x) => (x.id === alert.id ? alert : x)) : [...all, alert];
  setLocal(StorageKeys.alerts, next);
  return Promise.resolve(alert);
}

