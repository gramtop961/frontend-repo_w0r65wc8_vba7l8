import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  { title: 'Clean-Up Drive at IIT Delhi', tags: ['Environment'], upvotes: 128 },
  { title: 'Animal Rescue', tags: ['Rescue', 'Awareness'], upvotes: 92 },
  { title: 'College Food Donation', tags: ['Food', 'Community'], upvotes: 210 },
  { title: 'Blood Donation Camp', tags: ['Health'], upvotes: 76 },
  { title: 'Senior Care Weekend', tags: ['Care'], upvotes: 64 },
  { title: 'Lake Rejuvenation', tags: ['Water'], upvotes: 154 },
]

export default function Community() {
  return (
    <section className="relative bg-gradient-to-b from-black to-indigoDeep text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center font-playfair text-4xl md:text-5xl">Community Feed</h2>
        <p className="mt-3 text-center text-white/70">What people near you are doing right now</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl bg-white/5 p-5 backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="rounded-full bg-white/10 px-3 py-1 text-sm">▲ {p.upvotes}</div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
