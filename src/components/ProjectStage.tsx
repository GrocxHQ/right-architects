"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ProjectStage() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLAnchorElement>(null);

  const images = [
    "/hero/structure.png",
    "/hero/structure1.png",
    "/hero/structure2.png",
    "/hero/structure3.png",
  ];

  const filmImages = [
    "/hero/structure.png",
    "/hero/structure1.png",
    "/hero/structure2.png",
    "/hero/structure3.png",
    "/hero/structure.png",
    "/hero/structure1.png",
    "/hero/structure2.png",
    "/hero/structure3.png",
    "/hero/structure.png",
    "/hero/structure1.png",
  ];

  const widths = [
    "18vw", "22vw", "32vw", "28vw",
    "18vw", "22vw", "28vw", "32vw",
    "18vw", "22vw",
  ];

  const mobileWidths = [
    "60vw", "75vw", "85vw", "85vw",
  ];

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const steps = [20, 20, 20];
    const pauseDuration = 2000;
    const stepDuration = 400;
    const returnDuration = 1200;

    let currentOffset = 0;
    let stepIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetThreshold = 43 * 5;

    const move = () => {
      const step = steps[stepIndex % steps.length];
      currentOffset += step;

      if (currentOffset >= resetThreshold) {
        track.style.transition = `transform ${returnDuration}ms cubic-bezier(0.76, 0, 0.24, 1)`;
        track.style.transform = `translateX(0px)`;
        currentOffset = 0;
        stepIndex = 0;

        timeoutId = setTimeout(() => {
          timeoutId = setTimeout(move, pauseDuration);
        }, returnDuration);
        return;
      }

      const pxOffset = (currentOffset / 100) * window.innerWidth;
      track.style.transition = `transform ${stepDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
      track.style.transform = `translateX(-${pxOffset}px)`;

      stepIndex++;
      timeoutId = setTimeout(move, pauseDuration + stepDuration);
    };

    timeoutId = setTimeout(move, pauseDuration);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main
      className={`relative h-[100svh] w-full bg-white overflow-hidden transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header loaded={loaded} />

      {/* Mobile — fade slider, each image is a link */}
      <div className="flex md:hidden items-center justify-center h-full relative">
        {images.map((src, index) => (
          <Link key={src} href="/projects" className="absolute">
            <img
              src={src}
              alt="Structure"
              className="object-contain transition-opacity duration-1000"
              style={{
                width: mobileWidths[index],
                opacity: index === current ? 0.45 : 0,
              }}
            />
          </Link>
        ))}
      </div>

      {/* Desktop — film strip */}
      <div className="hidden md:flex items-center h-full overflow-hidden">
        <Link
          href="/projects"
          ref={trackRef}
          className="flex items-center cursor-pointer"
          style={{ width: "max-content", willChange: "transform", gap: "6vw" }}
        >
          {filmImages.map((src, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: index,
              }}
            >
              <img
                src={src}
                alt="Structure"
                style={{
                  width: widths[index],
                  objectFit: "contain",
                  display: "block",
                  opacity: 0.45,
                }}
              />
            </div>
          ))}
        </Link>
      </div>
    </main>
  );
}