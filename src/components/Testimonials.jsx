import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const testimonials = [
  { name: 'Ayesha, Student', quote: 'Karm helped our campus rescue 2,000+ meals last semester. It made volunteering easy and meaningful.' },
  { name: 'Sanjay, NGO Lead', quote: 'Coordinating volunteers and food pickups is 10x smoother. We see real-time impact now.' },
  { name: 'Meera, Citizen', quote: 'I discovered causes near me that I never knew existed. Karm made it simple to show up.' },
]

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-indigoDeep to-[#0a0e24] text-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-amberWarm/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-turquoise/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center font-playfair text-4xl md:text-5xl">Stories of Change</h2>
        <p className="mt-3 text-center text-white/70">Real voices from students, NGOs, and citizens</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10">
              <Heart className="absolute -right-6 -top-6 h-24 w-24 text-amberWarm/20" />
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
