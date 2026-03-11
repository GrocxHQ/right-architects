"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";

export default function ProjectStage() {
  const [loaded, setLoaded] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const images = [
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
    "30vw",
    "32vw",
    "40vw",
    "40vw",
    "30vw",
    "32vw",
    "40vw",
    "40vw",
    "30vw",
    "32vw",
  ];

  useEffect(() => {
    const unique = [
      "/hero/structure.png",
      "/hero/structure1.png",
      "/hero/structure2.png",
      "/hero/structure3.png",
    ];
    unique.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
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

      <div className="flex items-center h-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {images.map((src, index) => (
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
                  opacity: 0.7,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}