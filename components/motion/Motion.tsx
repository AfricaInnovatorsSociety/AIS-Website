"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

const easeOut = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/*                                 Variants                                   */
/* -------------------------------------------------------------------------- */

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

/* -------------------------------------------------------------------------- */
/*                              FadeUp wrapper                                */
/* -------------------------------------------------------------------------- */

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
  once?: boolean;
  amount?: number;
} & Omit<MotionProps, "variants" | "initial" | "animate" | "whileInView">;

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
  amount = 0.2,
  ...rest
}: FadeUpProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cmp = motion[as] as any;
  return (
    <Cmp
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={fadeUpVariants}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Cmp>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Stagger group + child element                        */
/* -------------------------------------------------------------------------- */

export function Stagger({
  children,
  className,
  variants = staggerContainer,
  once = true,
  amount = 0.2,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number;
  as?: keyof typeof motion;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cmp = motion[as] as any;
  return (
    <Cmp
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </Cmp>
  );
}

export function StaggerItem({
  children,
  className,
  variants = fadeUpVariants,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: keyof typeof motion;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cmp = motion[as] as any;
  return (
    <Cmp variants={variants} className={className}>
      {children}
    </Cmp>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Animated number (CountUp)                        */
/* -------------------------------------------------------------------------- */

/**
 * Animates a numeric value as it scrolls into view.
 * Supports values like "100+", "$30K+", "10+" — any numeric portion is animated,
 * any prefix/suffix is kept.
 */
export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  // Parse value into [prefix, number, suffix]
  const match = value.match(/^([^\d.]*)(\d[\d.,]*)\s*([a-zA-Z+%]*)$/);
  const prefix = match?.[1] ?? "";
  const numberStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const isThousand = /^\d+K$/i.test(numberStr + suffix);
  const target = parseFloat(numberStr.replace(/,/g, ""));

  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: 80,
    damping: 22,
    duration: duration * 1000,
  });
  const display = useTransform(spring, (v) => {
    if (Number.isNaN(target)) return value;
    if (isThousand) {
      return `${prefix}${Math.round(v).toLocaleString()}K${suffix.replace(/^K$/i, "")}`;
    }
    if (numberStr.includes(",")) {
      return `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
    }
    if (numberStr.includes(".")) {
      return `${prefix}${v.toFixed(1)}${suffix}`;
    }
    return `${prefix}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    if (inView && !Number.isNaN(target)) {
      mv.set(target);
    }
  }, [inView, mv, target]);

  if (Number.isNaN(target)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span ref={ref} className={className}>
      <motion.span aria-hidden>{display}</motion.span>
      <span className="sr-only">{value}</span>
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Floating gradient blob (decorative)                  */
/* -------------------------------------------------------------------------- */

export function FloatingBlob({
  className,
  size = 480,
  color = "var(--color-crimson-700)",
  duration = 18,
  delay = 0,
}: {
  className?: string;
  size?: number;
  color?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn("absolute rounded-full blur-3xl opacity-20", className)}
      style={{ width: size, height: size, backgroundColor: color }}
      animate={{
        x: [0, 24, -16, 0],
        y: [0, -18, 12, 0],
        scale: [1, 1.06, 0.96, 1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
}
