"use client"
import { motion } from 'framer-motion'
import { Brain, Bluetooth, MessageSquare, Languages } from 'lucide-react'

const features = [
  { title: 'AI Predictions', icon: Brain, desc: 'Rainfall, temperature, drought, and storm risk predictions.' },
  { title: 'BitChat Offline Mode', icon: Bluetooth, desc: 'Bluetooth-like peer alerts using local storage simulation.' },
  { title: 'Localized Alerts', icon: Languages, desc: 'English, Hindi, Marathi with i18n-ready strings.' },
  { title: 'Actionable Guidance', icon: MessageSquare, desc: 'Simple farmer-friendly tips to reduce risk.' }
]

export default function FeaturesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
      {features.map((f) => (
        <motion.div key={f.title} whileHover={{ scale: 1.02 }} className="glass p-6 rounded-2xl">
          <f.icon className="w-7 h-7 mb-3" />
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="opacity-80">{f.desc}</p>
        </motion.div>
      ))}
    </main>
  )
}

