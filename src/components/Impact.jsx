import React from 'react'
import { motion } from 'framer-motion'

export default function Impact() {
  const stats = [
    { label: 'meals saved', value: 23000 },
    { label: 'volunteers', value: 4500 },
    { label: 'NGOs connected', value: 120 },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0a0e24] to-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,199,194,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center font-playfair text-4xl md:text-5xl">Impact Tracker</h2>
        <p className="mt-3 text-center text-white/70">Transparent, measurable, real-time</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex flex-col items-center rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10">
              <div className="relative h-28 w-28">
                <svg className="h-full w-full" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" stroke="white" strokeOpacity="0.15" strokeWidth="12" fill="none" />
                  <motion.circle cx="60" cy="60" r="52" stroke="#16c7c2" strokeWidth="12" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.75 - i * 0.15 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-semibold">{s.value.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-3 text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
