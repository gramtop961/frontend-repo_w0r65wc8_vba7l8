import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Real-time issue posting & upvoting',
    desc: 'Share local needs instantly and let the community prioritize.',
  },
  {
    title: 'Gamified volunteering badges',
    desc: 'Earn badges and levels as you contribute to causes.',
  },
  {
    title: 'Food Connect System',
    desc: 'Redistribute leftover food safely and quickly with nearby NGOs.',
  },
  {
    title: 'NGO Collaboration Dashboard',
    desc: 'Manage programs, volunteers, and reporting in one place.',
  },
]

export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-indigoDeep to-[#0a0e24] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center font-playfair text-4xl md:text-5xl">Features</h2>
        <p className="mt-3 text-center text-white/70">An ecosystem where every click drives real-world change</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500 via-turquoise to-amberWarm opacity-20 blur-2xl transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-1 text-white/70">{f.desc}</p>
              <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
