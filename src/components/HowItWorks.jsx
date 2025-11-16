import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Users, Activity } from 'lucide-react'

const items = [
  {
    icon: Compass,
    title: 'Discover Causes Nearby',
    desc: 'Find real needs in your neighborhood and city in real time.'
  },
  {
    icon: Users,
    title: 'Connect & Collaborate',
    desc: 'Team up with students, NGOs, and citizens to take action.'
  },
  {
    icon: Activity,
    title: 'Track Your Impact',
    desc: 'See measurable results with transparent, live progress.'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-black to-indigoDeep text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,199,194,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center font-playfair text-4xl md:text-5xl">How It Works</h2>
        <p className="mt-3 text-center text-white/70">Three simple steps to spark real change</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-turquoise to-amberWarm text-black shadow-lg">
                {React.createElement(item.icon, { size: 24 })}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
