"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * A small decorative animation:
 * a glowing orb with a satellite that orbits it.
 *
 * Used as a homepage hero accent. Uses Framer Motion to animate
 * SVG paths so we keep the bundle small (no Lottie dependency).
 */
export function Orbit({ className, size = 220 }: { className?: string; size?: number }) {
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }} aria-hidden>
      {/* outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-crimson-200"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      {/* inner ring */}
      <motion.div
        className="absolute inset-[14%] rounded-full border border-amber-200"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
      {/* core */}
      <motion.div
        className="absolute inset-[34%] rounded-full gradient-brand shadow-[0_0_36px_rgba(196,18,48,0.5)]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* satellites */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{ width: size, height: size }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.2,
          }}
        >
          <span
            className="absolute h-2.5 w-2.5 rounded-full"
            style={{
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: i % 2 === 0 ? "var(--color-amber-soft)" : "var(--color-crimson-700)",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(245,158,11,0.7)" : "rgba(196,18,48,0.6)"}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
