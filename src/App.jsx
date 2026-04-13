import React from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      
      {/* Floating Theme Toggle (optional positioning, or might be inside Navbar) */}
      <div className="fixed top-6 right-6 z-50 mix-blend-difference hidden lg:block">
        <ThemeToggle />
      </div>

      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
          <Hero />
          <MarqueeStrip />
          <Works />
          <About />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
