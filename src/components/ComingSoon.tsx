"use client"

export default function ComingSoon() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap');
      `}</style>
      
      <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-2xl text-center">
          
          <p className="text-xs tracking-[0.3em] mb-6 text-white font-light">
            Hang tight
          </p>

          <h1 
            className="text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-tight"
            style={{
              fontFamily: '"Doto", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 600,
              fontVariationSettings: '"ROND" 0'
            }}
          >
            Under (re)construction
          </h1>

          <p 
            className="text-base md:text-lg text-white mb-10 leading-relaxed"
            style={{
              fontFamily: '"Zalando Sans Expanded", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 400,
              fontStyle: 'normal'
            }}
          >
            Big ideas <span className="font-medium">brewing</span>, pixels <span className="font-medium">moving!</span> We're crafting a new digital home for our architectural work. Coming soon!
          </p>

          <a 
            href="https://www.instagram.com/right.architects" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base px-8 py-3 bg-black border-3 border-white rounded-2xl text-white font-bold shadow-[-5px_5px_0px_0px_white] hover:translate-x-[5px] hover:translate-y-[-5px] transition-all duration-400 cursor-pointer"
            style={{
              fontFamily: '"Doto", sans-serif',
              fontOpticalSizing: 'auto',
              fontWeight: 700,
              fontVariationSettings: '"ROND" 0',
              transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }}
          >
            VISIT US
          </a>

        </div>
      </main>
    </>
  )
}