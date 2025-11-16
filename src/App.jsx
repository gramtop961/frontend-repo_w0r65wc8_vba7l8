import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Impact from './components/Impact'
import Community from './components/Community'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  const handleJoin = () => {
    const el = document.getElementById('join')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />
      <main>
        <Hero onJoinClick={handleJoin} />
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <div id="impact"><Impact /></div>
        <div id="community"><Community /></div>
        <div id="stories"><Testimonials /></div>
        <div id="join"><CTA /></div>
      </main>
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-turquoise to-amberWarm" />
              <p className="mt-3 text-sm text-white/70">Good karma starts with one act.</p>
            </div>
            <div className="text-white/80">
              <div className="font-semibold">About</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#">Impact</a></li>
                <li><a href="#">Partnerships</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="text-white/80">
              <div className="font-semibold">Follow</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">X</a></li>
              </ul>
            </div>
            <div className="text-white/80">
              <div className="font-semibold">Newsletter</div>
              <p className="mt-2 text-sm text-white/70">Get impact stories, not spam.</p>
              <div className="mt-3 flex max-w-sm overflow-hidden rounded-full border border-white/10 bg-white/5">
                <input className="w-full bg-transparent px-4 py-2 text-white placeholder-white/40 outline-none" placeholder="Email address" />
                <button className="bg-white px-4 py-2 text-black">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Karm</div>
        </div>
      </footer>
    </div>
  )
}

export default App
