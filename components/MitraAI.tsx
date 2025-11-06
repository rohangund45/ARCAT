"use client";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

function getAnswer(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("heavy rain") || s.includes("rain")) return "High rainfall expected, cover seeds, ensure drainage, and store fertilizers safely.";
  if (s.includes("sowing") || s.includes("sow")) return "Best time is after first good rainfall when soil is moist but not waterlogged.";
  if (s.includes("heat")) return "Irrigate in early morning or evening, use mulch to reduce evaporation.";
  return "Keep tools ready and follow local advisories. For more, contact your Krishi Sevak.";
}

export function MitraAI() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);
  return (
    <div className="fixed bottom-4 right-4 z-40">
      {open && (
        <div className="glass rounded p-4 w-80 mb-2">
          <div className="font-semibold">MitraAI</div>
          <div className="text-sm opacity-80 mb-2">Ask about weather and farming tips</div>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type your question..." className="w-full px-3 py-2 rounded border border-white/20 bg-transparent mb-2" />
          <button onClick={() => setA(getAnswer(q))} className="glass px-3 py-2 rounded w-full">Ask</button>
          {a && <div className="mt-3 text-sm">{a}</div>}
        </div>
      )}
      <button onClick={() => setOpen((s) => !s)} className="glass rounded-full p-3">
        <MessageCircle />
      </button>
    </div>
  );
}

