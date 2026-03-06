"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

type Project = {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  imageUrl: string;
};

type ProjectStageProps = {
  projects?: Project[];
};

export default function ProjectStage({ projects = [] }: ProjectStageProps) {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    "/hero/structure.png",
    "/hero/structure1.png",
    "/hero/structure2.png",
    "/hero/structure3.png",
  ];

  /* Page fade-in */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  /* Image slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`relative h-[100svh] w-full bg-white transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <Header loaded={loaded} />

      {/* Centered Image Slider */}
      <div className="flex items-center justify-center h-full relative">
        {images.map((src, index) => {
  const isLarge = index === 0 || index === 2 || index === 3;

  return (
    <img
      key={src}
      src={src}
      alt="Structure"
      className={`absolute object-contain transition-opacity duration-1000
      ${
        isLarge
          ? "md:w-[70vw] lg:w-[60vw]"
          : "md:w-[60vw] lg:w-[50vw]"
      }
      ${index === current ? "opacity-100" : "opacity-0"}
      `}
    />
  );
})}
      </div>
    </main>
  );
}