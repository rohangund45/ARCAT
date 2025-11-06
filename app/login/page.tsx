"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Farmer, StorageKeys, setLocal } from "@/lib/storage";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Nashik");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: Farmer = { id: `u-${Date.now()}`, name: name || "Farmer", location, phone: "" };
    setLocal(StorageKeys.user, user);
    router.push("/dashboard");
  };
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Login (Mock)</h2>
      <form onSubmit={submit} className="glass rounded p-4 space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-3 py-2 rounded bg-transparent border border-white/20" />
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 rounded bg-transparent border border-white/20">
          <option>Nashik</option>
          <option>Pune</option>
        </select>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full">Continue</button>
      </form>
    </div>
  );
}

