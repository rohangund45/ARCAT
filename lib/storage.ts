export type Farmer = { id: string; name: string; location: string; phone: string };
export type Alert = { id: string; location: string; message: string; type: string; timestamp: string; read?: boolean };

const KEYS = {
  farmers: "arcat:farmers",
  alerts: "arcat:alerts",
  offline: "arcat:offline",
  user: "arcat:user",
  bitchat: "arcat:bitchat",
};

export function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function seedIfEmpty<T>(key: string, seed: T) {
  if (typeof window === "undefined") return;
  if (!localStorage.getItem(key)) setLocal(key, seed);
}

export const StorageKeys = KEYS;

