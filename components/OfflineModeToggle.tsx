"use client";
import { WifiOff, Wifi } from "lucide-react";
import { StorageKeys, getLocal, setLocal } from "@/lib/storage";
import { useEffect, useState } from "react";

export function OfflineModeToggle() {
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    setOffline(getLocal<boolean>(StorageKeys.offline, false));
  }, []);
  const toggle = () => {
    const next = !offline;
    setOffline(next);
    setLocal(StorageKeys.offline, next);
  };
  return (
    <button onClick={toggle} className={`glass px-3 py-2 rounded flex items-center gap-2 ${offline ? "text-primary" : ""}`}>
      {offline ? <WifiOff size={16} /> : <Wifi size={16} />} Offline Mode
    </button>
  );
}

