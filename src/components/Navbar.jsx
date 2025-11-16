import React, { useState, useEffect } from 'react'
import { Menu, Moon, SunMedium } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-turquoise to-amberWarm" />
          <span className="font-poppins text-lg font-semibold">Karm</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-white/80 hover:text-white" href="#how">How it Works</a>
          <a className="text-white/80 hover:text-white" href="#features">Features</a>
          <a className="text-white/80 hover:text-white" href="#impact">Impact</a>
          <a className="text-white/80 hover:text-white" href="#community">Community</a>
          <a className="text-white/80 hover:text-white" href="#stories">Stories</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
            {dark ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden rounded-full bg-white px-4 py-2 font-semibold text-black hover:bg-white/90 md:block">Join</button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/60 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-white/90">
            <a href="#how" onClick={() => setOpen(false)}>How it Works</a>
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#impact" onClick={() => setOpen(false)}>Impact</a>
            <a href="#community" onClick={() => setOpen(false)}>Community</a>
            <a href="#stories" onClick={() => setOpen(false)}>Stories</a>
          </div>
        </div>
      )}
    </header>
  )
}
