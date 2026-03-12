"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header({ loaded = true }: { loaded?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "profile", href: "/profile" },
    { label: "contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header
        className={`absolute top-0 left-0 right-0 z-50 hidden lg:flex items-center px-8 lg:px-12 py-0
        transition-opacity duration-700 delay-300
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Link
          href="/"
          className="relative w-[480px] h-[170px] md:w-[620px] md:h-[210px] lg:w-[780px] lg:h-[260px] flex-shrink-0 -mt-6"
        >
          <Image
            src="/right-logo.png"
            alt="RIGHT Architects"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <nav className="flex items-center gap-8 lg:gap-14 ml-auto text-[15px] lowercase font-light tracking-normal lg:tracking-[0.40em] lg:-mt-[72px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive ? "text-black" : "text-black/50 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* MOBILE + TABLET HEADER */}
      <header
        className={`absolute top-0 left-0 right-0 z-[120] flex lg:hidden items-center justify-between px-4 py-0
        transition-opacity duration-700 delay-300
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Link
          href="/"
          className="relative w-[480px] h-[180px] md:w-[580px] md:h-[210px] origin-left -mt-4"
        >
          <Image
            src="/right-logo.png"
            alt="RIGHT Architects"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-12 h-12 md:w-10 md:h-10 aspect-square flex-shrink-0 rounded-full border border-black/20 flex items-center justify-center bg-white/60 backdrop-blur-sm mr-4 -mt-8 md:-mt-10"
        >
          <div className="relative w-6 h-5 md:w-5 md:h-4">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-black/80 transition-all duration-300 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[1.5px] w-full bg-black/80 transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-black/80 transition-all duration-300 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[110] bg-white/95 backdrop-blur-sm
        flex flex-col items-center justify-center gap-10 text-lg lowercase tracking-[0.02em] font-medium
        transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-black/60 hover:text-black transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}