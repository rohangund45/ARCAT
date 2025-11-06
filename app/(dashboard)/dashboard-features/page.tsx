"use client";
import { motion } from "framer-motion";

const features = [
  { title: "AI Predictions", body: "Smart forecasts for rainfall, heat, and storms" },
  { title: "BitChat Offline Mode", body: "Peer-to-peer Bluetooth sharing without internet" },
  { title: "Predictive Graphs", body: "Visualize rainfall and temperature trends" },
  { title: "Localized Alerts", body: "Language-aware notifications" }
];

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="glass rounded p-4">
            <div className="font-semibold">{f.title}</div>
            <div className="opacity-80 text-sm">{f.body}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

