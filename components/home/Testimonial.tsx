"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/cn";

const easeOut = [0.16, 1, 0.3, 1] as const;
const AUTO_MS = 7000;

export function Testimonial() {
  const items = siteConfig.testimonials;
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const count = items.length;
  const current = items[index];

  useEffect(() => {
    if (reduce || paused || count <= 1) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused, count, index]);

  function go(next: number, dir: number) {
    setDirection(dir);
    setIndex((next + count) % count);
  }

  return (
    <Section className="!py-20 md:!py-28 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-crimson-700/[0.04] blur-3xl pointer-events-none"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-5">
          Voices from the community
        </p>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Quote className="mx-auto h-10 w-10 text-crimson-700" aria-hidden />

          <div className="relative mt-6" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.name}
                custom={direction}
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * 36 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * -36 }
                }
                transition={{ duration: 0.45, ease: easeOut }}
                className="w-full"
              >
                <blockquote>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.35] text-charcoal-900 text-balance">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Avatar
                    name={current.name}
                    src={current.photo}
                    size={64}
                    className="!ring-crimson-100"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-charcoal-900">{current.name}</div>
                    <div className="text-sm text-charcoal-500">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1, -1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 bg-white text-charcoal-700 transition-colors hover:border-crimson-300 hover:text-crimson-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-crimson-700"
                      : "w-2.5 bg-charcoal-200 hover:bg-crimson-300",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(index + 1, 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 bg-white text-charcoal-700 transition-colors hover:border-crimson-300 hover:text-crimson-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {!reduce && (
            <div className="mx-auto mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-charcoal-100">
              <motion.div
                key={`progress-${index}-${paused}`}
                className="h-full origin-left bg-crimson-700"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
