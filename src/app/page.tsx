"use client";

import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 pt-12 max-md:pt-6">
        {/* Desktop & Tablet Nav */}
        <nav className="flex justify-center gap-16 text-sm tracking-[0.2em] uppercase text-gray-800 font-medium max-lg:gap-6 max-lg:text-xs max-md:hidden">
          <span>Home</span>
          <span>Work</span>
          <span>Process</span>
          <span>Profile</span>
          <span>Contact</span>
        </nav>

        {/* Mobile Hamburger */}
        <div className="hidden max-md:flex justify-end items-center px-6">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="hidden max-md:block absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col items-center gap-6 py-8 text-sm tracking-[0.2em] uppercase text-gray-800 font-medium">
              <span onClick={() => setMenuOpen(false)}>Home</span>
              <span onClick={() => setMenuOpen(false)}>Work</span>
              <span onClick={() => setMenuOpen(false)}>Process</span>
              <span onClick={() => setMenuOpen(false)}>Profile</span>
              <span onClick={() => setMenuOpen(false)}>Contact</span>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="relative w-full max-w-[1800px] px-12 max-lg:px-8 max-md:px-6">
          
          {/* Left: Hero Text */}
          <div className="absolute left-54 top-[45%] -translate-y-1/2 z-10 space-y-6 max-w-xl
                          max-lg:left-1/2 max-lg:top-[40%] max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:text-center max-lg:space-y-4 max-lg:max-w-md
                          max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:text-center max-md:space-y-4 max-md:max-w-sm">
            <h1 className="font-serif text-[150px] leading-[0.95] tracking-tight text-gray-900
                           max-lg:text-[90px]
                           max-md:text-[70px]" 
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              RIGHT
            </h1>

            <p className="text-xl tracking-[0.7em] uppercase text-gray-600 font-bold
                          max-lg:text-base max-lg:tracking-[0.4em]
                          max-md:text-lg max-md:tracking-[0.3em]" 
               style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              ARCHITECTs
            </p>

            <div className="pt-10 max-lg:pt-6 max-md:pt-6 max-lg:flex max-lg:justify-center">
              <span className="inline-flex items-center gap-2 text-lg text-gray-600
                               max-lg:text-base
                               max-md:text-base">
                Get in Touch <span>→</span>
              </span>
            </div>
          </div>

          {/* Right: Large Structure Image */}
          <div className="relative ml-auto w-[60%] h-screen flex items-center justify-end pr-0
                          max-lg:w-full max-lg:ml-0 max-lg:h-screen max-lg:items-end max-lg:justify-center max-lg:pb-0
                          max-md:w-full max-md:ml-0 max-md:h-screen max-md:items-end max-md:justify-center max-md:pb-0">
            <div className="relative w-full h-[90vh]
                            max-lg:h-[45vh] max-lg:w-[80%]
                            max-md:h-[40vh] max-md:w-full">
              <Image
                src="/hero/structure.png"
                alt="Architectural form sketch"
                fill
                priority
                className="object-contain object-right 
                           max-lg:object-bottom
                           max-md:object-bottom"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}