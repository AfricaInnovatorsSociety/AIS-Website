"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

const labelMap: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  twitter: "Twitter / X",
  youtube: "YouTube",
};

export function SocialCards({
  links,
}: {
  links: { key: keyof typeof iconMap; url: string }[];
}) {
  return (
    <motion.div
      className="mt-8 grid grid-cols-2 gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {links.map(({ key, url }) => {
        const Icon = iconMap[key];
        return (
          <motion.a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
            }}
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group flex items-center gap-3 p-4 rounded-xl border border-charcoal-100 hover:border-crimson-200 hover:bg-crimson-50/50 transition-colors"
          >
            <Icon className="h-5 w-5 text-crimson-700" />
            <span className="font-semibold flex-1">{labelMap[key]}</span>
            <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
