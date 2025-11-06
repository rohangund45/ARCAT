"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type Toast = { id: number; title: string; description?: string };

type ToastCtx = {
  toasts: Toast[];
  show: (t: Omit<Toast, "id">) => void;
  dismiss: (id: number) => void;
};

const Ctx = createContext<ToastCtx | null>(null);

export function useToast() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("ToastProvider missing");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show: ToastCtx["show"] = useCallback((t) => {
    const id = Date.now() + Math.random();
    setToasts((s) => [...s, { id, ...t }]);
    setTimeout(() => setToasts((s) => s.filter((x) => x.id !== id)), 3500);
  }, []);
  const dismiss: ToastCtx["dismiss"] = useCallback((id) => setToasts((s) => s.filter((x) => x.id !== id)), []);
  const value = useMemo(() => ({ toasts, show, dismiss }), [toasts, show, dismiss]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className="glass rounded p-3 min-w-[220px]">
            <div className="font-medium">{t.title}</div>
            {t.description && <div className="text-sm opacity-80">{t.description}</div>}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

