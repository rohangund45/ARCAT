"use client";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export function WeatherChart({ data }: { data: { timestamp: string; rainfallMm: number; temperatureC: number }[] }) {
  const formatted = data.map((d) => ({
    time: new Date(d.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    rainfall: d.rainfallMm,
    temp: d.temperatureC,
  }));
  return (
    <div className="glass rounded p-4">
      <div className="font-semibold mb-2">Rainfall & Temperature</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatted} margin={{ left: 8, right: 16, top: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" orientation="left" label={{ value: "mm", angle: -90, position: "insideLeft" }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: "°C", angle: -90, position: "insideRight" }} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="rainfall" stroke="#0ea5e9" strokeWidth={2} dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#22c55e" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

