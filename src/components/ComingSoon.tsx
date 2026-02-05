export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-2xl text-center">

        <p className="text-[11px] tracking-[0.35em] mb-8 text-white/70 font-light [font-family:var(--font-unbounded)]
 uppercase">
          Right Architects
        </p>

        <h1 className="
            text-[34px] 
            sm:text-5xl 
            md:text-6xl 
            lg:text-7xl 
            tracking-tight 
            mb-6 
            leading-[1.05] 
            font-semibold 
            [font-family:var(--font-doto)]
            ">
            Under (re)construction
            </h1>

        <p className="text-base md:text-lg text-white/80 mb-12 leading-relaxed [font-family:var(--font-unbounded)]
">
          Big ideas <span className="font-medium text-white">brewing</span>, pixels{" "}
          <span className="font-medium text-white">moving</span>.  
          We're crafting a new digital home for our architectural work. Launching soon.
        </p>

        <a
          href="https://www.instagram.com/right.architects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-sm md:text-base px-9 py-3.5 border border-white rounded-2xl text-white font-semibold 
          shadow-[-6px_6px_0px_0px_white]
          hover:translate-x-[6px] hover:translate-y-[-6px]
          transition-all duration-300
          [font-family:var(--font-doto)]"
        >
          VISIT INSTAGRAM
        </a>

      </div>
    </main>
  );
}
