"use client";
import { motion } from "framer-motion";
import { CloudRain, Sun, Wind, Waves } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            {t("hero_title")}
          </motion.h1>
          <p className="mt-4 opacity-80">
            AI-driven alerts via SMS, BitChat (offline), and app notifications.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/features" className="glass px-4 py-2 rounded">
              {t("how_it_works")}
            </Link>
            <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded">
              {t("get_alerts")}
            </Link>
          </div>
        </div>
        <AnimatedWeatherBg />
      </section>

      <section id="problem" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-4">
        <Card title="Unpredictable Weather" icon={<CloudRain />}>
          Frequent extremes without timely alerts
        </Card>
        <Card title="Poor Connectivity" icon={<Wind />}>
          Rural areas lack consistent internet
        </Card>
        <Card title="Delayed Warnings" icon={<Waves />}>
          Traditional channels are slow
        </Card>
      </section>

      <section id="solution" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-4">
        <Card title="AI Weather Analytics" icon={<Sun />}>
          Predict rainfall, heat, storms
        </Card>
        <Card title="BitChat Offline" icon={<Wind />}>
          Bluetooth mesh sharing without internet
        </Card>
        <Card title="SMS Alerts" icon={<CloudRain />}>
          Reliable alerts to any phone
        </Card>
      </section>
    </div>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded p-4">
      <div className="flex items-center gap-2 font-semibold mb-1">
        {icon} {title}
      </div>
      <div className="opacity-80 text-sm">{children}</div>
    </motion.div>
  );
}

function AnimatedWeatherBg() {
  const icons = [CloudRain, Sun, Wind];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{ y: 300, x: Math.random() * 1200 }}
            animate={{ y: -100, x: Math.random() * 1200 }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Icon size={40} />
          </motion.div>
        );
      })}
    </div>
  );
}
