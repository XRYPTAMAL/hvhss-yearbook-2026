"use client";

import { motion } from "framer-motion";

export default function SchoolSilhouette() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dusk/25 via-gold/10 to-transparent dark:from-dusk-dim/30 dark:via-gold-dim/10" />

      {/* Sun */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-[22%] h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-light to-gold blur-[2px] opacity-70 dark:opacity-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-1/2 top-[22%] h-64 w-64 -translate-x-1/2 rounded-full bg-gold blur-3xl"
      />

      {/* School silhouette */}
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[45vh] min-h-[260px] fill-ink dark:fill-black"
      >
        <rect x="0" y="260" width="1440" height="160" />
        {/* Main building */}
        <rect x="480" y="140" width="480" height="180" />
        {/* Central tower */}
        <rect x="660" y="70" width="120" height="250" />
        <polygon points="660,70 720,20 780,70" />
        {/* Flag pole */}
        <rect x="718" y="0" width="4" height="24" />
        {/* Side wings */}
        <rect x="300" y="200" width="180" height="120" />
        <rect x="960" y="200" width="180" height="120" />
        {/* Windows row (negative space via lighter rects using opacity) */}
        {Array.from({ length: 10 }).map((_, i) => (
          <rect
            key={i}
            x={510 + i * 42}
            y={190}
            width={18}
            height={26}
            className="fill-ivory/10 dark:fill-ivory/5"
          />
        ))}
        {/* Trees */}
        <circle cx="220" cy="270" r="40" />
        <rect x="212" y="300" width="16" height="30" />
        <circle cx="1220" cy="270" r="40" />
        <rect x="1212" y="300" width="16" height="30" />
      </svg>

      {/* Horizon line glow */}
      <div className="absolute bottom-[26vh] left-0 h-[2px] w-full bg-horizon-gradient min-h-[260px]" />
    </div>
  );
}
