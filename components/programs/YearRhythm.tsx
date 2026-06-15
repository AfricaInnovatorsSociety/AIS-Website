"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const steps = [
  { term: "Fall", focus: "Foundations workshops + idea validation" },
  { term: "Winter", focus: "Pitch Nights + mentor matching" },
  { term: "Spring", focus: "Build sprints + investor sessions" },
  { term: "Summer", focus: "Startup Weekend + alumni showcase" },
];

export function YearRhythm() {
  const ref = useRef<HTMLOListElement | null>(null);
  // Progress of the timeline as user scrolls past it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ol ref={ref} className="relative pl-6 space-y-6">
      {/* Static rail (subtle) */}
      <div aria-hidden className="absolute left-0 top-0 bottom-0 w-0.5 bg-crimson-100 rounded-full" />
      {/* Animated progress rail */}
      <motion.div
        aria-hidden
        className="absolute left-0 top-0 w-0.5 bg-crimson-700 rounded-full origin-top"
        style={{ height: lineHeight }}
      />

      {steps.map((step, i) => (
        <motion.li
          key={step.term}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: easeOut, delay: i * 0.08 }}
          className="relative"
        >
          <motion.div
            className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-crimson-700 ring-4 ring-[var(--color-cream)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: easeOut, delay: i * 0.08 + 0.1 }}
          />
          <h4 className="font-bold text-charcoal-900">{step.term}</h4>
          <p className="text-sm text-charcoal-600 mt-0.5">{step.focus}</p>
        </motion.li>
      ))}
    </ol>
  );
}
