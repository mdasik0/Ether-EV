"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";

const HEADER_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

const BLACK = "#000000";
const YELLOW = "#fcb813";

function PulsingNavLink({ href, children }: { href: string; children: ReactNode }) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const runPulse = () => {
    const line = lineRef.current;
    if (!line) return;
    tlRef.current?.kill();
    const tl = gsap.timeline();
    tl.to(line, { backgroundColor: YELLOW, duration: 0.12, ease: "power2.out" })
      .to(line, { backgroundColor: BLACK, duration: 0.12, ease: "power2.in" })
      .to(line, { backgroundColor: YELLOW, duration: 0.12, ease: "power2.out" })
      .to(line, { backgroundColor: BLACK, duration: 0.12, ease: "power2.in" })
      .to(line, { backgroundColor: YELLOW, duration: 0.16, ease: "power2.out" });
    tlRef.current = tl;
  };

  const resetLine = () => {
    tlRef.current?.kill();
    tlRef.current = null;
    const line = lineRef.current;
    if (line) gsap.to(line, { backgroundColor: BLACK, duration: 0.22, ease: "power2.out" });
  };

  const wrapClass =
    "relative inline-block pb-1 text-sm font-normal text-black sm:text-base outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#e8e8e8]";

  const lineClass =
    "pointer-events-none absolute bottom-0 left-[-3px] right-[-3px] h-px origin-center bg-black";

  if (href.startsWith("#")) {
    return (
      <a href={href} className={wrapClass} onMouseEnter={runPulse} onMouseLeave={resetLine} onFocus={runPulse} onBlur={resetLine}>
        {children}
        <span ref={lineRef} className={lineClass} aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={wrapClass} onMouseEnter={runPulse} onMouseLeave={resetLine} onFocus={runPulse} onBlur={resetLine}>
      {children}
      <span ref={lineRef} className={lineClass} aria-hidden />
    </Link>
  );
}

export function HeaderNav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 lg:gap-x-10" aria-label="Primary">
      {HEADER_NAV.map(({ label, href }) => (
        <PulsingNavLink key={label} href={href}>
          {label}
        </PulsingNavLink>
      ))}
    </nav>
  );
}
