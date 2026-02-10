"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";

type Project = {
  _id: string;
  title: string;
  slug?: { current: string };
  imageUrl: string;
};

export default function ProjectStage({ projects = [] }: { projects?: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [idle, setIdle] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- AUTO ROTATE ---------------- */
  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects]);

  /* ---------------- ENTRY REVEAL ---------------- */
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------- CURSOR TILT (DESKTOP ONLY) ---------------- */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setTilt({
        x: (y - 0.5) * 6,
        y: (x - 0.5) * -6,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  /* ---------------- IDLE FLOAT ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setIdle((v) => (v === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!projects || projects.length === 0) {
    return (
      <main className="h-screen bg-black text-white flex items-center justify-center">
        <p className="text-white/60 text-sm">No featured projects selected</p>
      </main>
    );
  }

  const total = projects.length;

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      return {
        transform: "translateX(0%) rotateY(0deg) scale(1)",
        zIndex: 50,
        opacity: 1,
      };
    }

    if (diff === 1) {
      return {
        transform: "translateX(38%) rotateY(-30deg) scale(0.85)",
        zIndex: 40,
        opacity: 0.9,
      };
    }

    if (diff === 2) {
      return {
        transform: "translateX(62%) rotateY(-45deg) scale(0.7)",
        zIndex: 30,
        opacity: 0.6,
      };
    }

    if (diff === total - 1) {
      return {
        transform: "translateX(-38%) rotateY(30deg) scale(0.85)",
        zIndex: 40,
        opacity: 0.9,
      };
    }

    if (diff === total - 2) {
      return {
        transform: "translateX(-62%) rotateY(45deg) scale(0.7)",
        zIndex: 30,
        opacity: 0.6,
      };
    }

    return {
      transform: "translateX(0%) scale(0.5)",
      zIndex: 0,
      opacity: 0,
    };
  };

  return (
    <main
      className={`relative h-screen w-full overflow-hidden bg-black transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <Header loaded={loaded} />

      {/* Cinematic Canvas */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "2000px" }}
        >
          {projects.map((project, index) => {
            const style = getCardStyle(index);

            const baseTransform = style.transform;

            const realismTransform =
              index === activeIndex
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${idle ? 1.01 : 1})`
                : "";

            return (
              <div
                key={project._id}
                className="
                  absolute
                  w-[300px] h-[400px]
                  md:w-[340px] md:h-[440px]
                  lg:w-[420px] lg:h-[520px]
                  transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  cursor-pointer
                "
                style={{
                  transform: loaded
                    ? `${baseTransform} ${realismTransform}`
                    : `${baseTransform} scale(0.9) translateZ(-200px)`,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* AMBIENT LIGHTING */}
                {index === activeIndex && (
                  <div className="absolute inset-[-140px] -z-10 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_65%)] blur-3xl transition-opacity duration-700 opacity-100" />
                  </div>
                )}

                {/* CARD */}
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 shadow-2xl">

                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xs tracking-[0.3em] uppercase opacity-80">
                      Project
                    </h3>
                    <h2 className="text-lg md:text-xl lg:text-2xl tracking-[0.2em] uppercase font-bold">
                      {project.title}
                    </h2>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress dots */}
      <div
        className="
        absolute left-1/2 -translate-x-1/2 flex gap-2 z-50
        top-[80%]
        md:top-[85%]
        lg:bottom-12 lg:top-auto
      "
      >
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Footer info */}
      <div className="absolute bottom-8 right-8 text-right text-white/60 text-xs tracking-wider z-50">
        <p className="uppercase">Architecture • Interiors • Greenscape</p>
        <p className="mt-1 text-white/40">Nilambur, Kerala</p>
      </div>
    </main>
  );
}
