import React from 'react'

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0e24] to-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl">Be part of your city’s story of change.</h2>
        <p className="mt-3 text-white/70">Sign up and start contributing in minutes.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90">Sign Up as Individual</button>
          <button className="rounded-full bg-turquoise text-black px-6 py-3 font-semibold hover:brightness-110">Register NGO</button>
          <button className="rounded-full bg-amberWarm text-black px-6 py-3 font-semibold hover:brightness-110">Partner with College</button>
        </div>
      </div>
    </section>
  )
}
