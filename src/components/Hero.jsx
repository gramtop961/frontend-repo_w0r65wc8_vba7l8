import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onJoinClick }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-gradient-to-b from-indigoDeep via-[#0c1025] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md ring-1 ring-white/15">
          <span className="h-2 w-2 rounded-full bg-amberWarm animate-pulse" />
          For Humanity
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 font-playfair text-5xl sm:text-6xl md:text-7xl leading-tight">
          Karm — The Social Platform for Social Good
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-5 max-w-2xl text-lg text-white/80">
          Join the movement of connecting humans with their humanity. Collaborate on local causes, reduce food waste, and create measurable impact.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8 flex flex-wrap items-center gap-4">
          <button onClick={onJoinClick} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-turquoise to-amberWarm px-7 py-3 font-semibold text-black shadow-lg shadow-indigo-900/30 transition-transform hover:scale-[1.02]">
            <span className="relative z-10">Join Karm</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <div className="flex items-center gap-3 text-white/70">
            <div className="h-2 w-2 rounded-full bg-turquoise animate-pulse" />
            Live: community actions happening now
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: 'Sign in as individual', desc: 'Discover and join local causes' },
            { title: 'Sign in as non-profit organisation', desc: 'Mobilize volunteers and resources' },
            { title: 'Sign in as institution', desc: 'Empower your campus to lead change' },
          ].map((card, idx) => (
            <div key={idx} className="rounded-2xl bg-white/8 p-5 backdrop-blur-md ring-1 ring-white/15 hover:ring-white/25 transition-all">
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-1 text-sm text-white/70">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
