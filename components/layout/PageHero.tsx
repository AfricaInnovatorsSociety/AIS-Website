"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-crimson-700/10 blur-3xl"
          animate={{ x: [0, 18, -10, 0], y: [0, -14, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-amber-soft/10 blur-3xl"
          animate={{ x: [0, -14, 12, 0], y: [0, 12, -8, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      <motion.div
        className="container-page max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
        }}
      >
        {eyebrow && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
            }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.05]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
            className="mt-5 text-lg md:text-xl text-charcoal-600 max-w-3xl text-pretty leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
            }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
