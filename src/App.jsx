import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
// import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLightMode } from './hooks/useLightMode'

export default function App() {
  const { isLight, toggle } = useLightMode()

  return (
    <div className="bg-[#111] text-white font-['Nunito'] min-h-screen">

      {/* ── Hero (full-screen) ── */}
      <div className="relative h-screen flex flex-col">
        <Header isLight={isLight} onToggleTheme={toggle} />
        {/* Hero fills remaining space and handles its own layout internally */}
        <div className="flex flex-col justify-between flex-1 relative">
          <Hero />
        </div>
      </div>

      {/* ── About ── */}
      <About />

      {/* ── Projects ── */}
      <Projects />

      {/* ── Certificates ── */}
      {/* <Certificates /> */}

      {/* ── Contact ── */}
      <Contact />

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
