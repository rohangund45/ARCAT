"use client";
import { AlertCircle, Share2, Check } from "lucide-react";
import { Alert as AlertType } from "@/lib/storage";
import { useToast } from "@/components/ToastProvider";
import { pushBitChat } from "@/lib/bitchat";

export function AlertCard({ alert, onMarkRead, currentFarmerId }: { alert: AlertType; onMarkRead?: (id: string) => void; currentFarmerId?: string }) {
  const { show } = useToast();
  const share = () => {
    if (!currentFarmerId) return;
    pushBitChat({ id: `${alert.id}:${Date.now()}`, fromFarmerId: currentFarmerId, alert, timestamp: new Date().toISOString() });
    show({ title: "Message shared successfully", description: "BitChat broadcast queued" });
  };

  return (
    <div className="glass rounded p-4 flex items-start gap-3">
      <AlertCircle className="text-sky-500 shrink-0" />
      <div className="flex-1">
        <div className="font-semibold">{alert.type} • {alert.location}</div>
        <div className="opacity-80 text-sm">{alert.message}</div>
        <div className="text-xs opacity-60 mt-1">{new Date(alert.timestamp).toLocaleString()}</div>
      </div>
      <div className="flex gap-2">
        {onMarkRead && !alert.read && (
          <button onClick={() => onMarkRead(alert.id)} className="glass px-2 py-1 rounded text-sm flex items-center gap-1">
            <Check size={14} /> Mark as Read
          </button>
        )}
        <button onClick={share} className="glass px-2 py-1 rounded text-sm flex items-center gap-1">
          <Share2 size={14} /> Share via BitChat
        </button>
      </div>
    </div>
  );
}

