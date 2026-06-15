"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { siteConfig } from "@/content/site.config";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function OriginStory() {
  return (
    <motion.div
      className="mt-6 space-y-5 text-lg text-charcoal-700 leading-relaxed text-pretty"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {siteConfig.originStory.map((p, i) => (
        <motion.p
          key={i}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
          }}
        >
          {p}
        </motion.p>
      ))}
    </motion.div>
  );
}

export function MissionVisionValues() {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="inline-flex items-center gap-2 text-crimson-700 mb-3">
            <motion.span
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Target className="h-5 w-5" />
            </motion.span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Mission</span>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-charcoal-900 leading-snug text-balance">
            {siteConfig.mission}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 text-crimson-700 mb-3">
            <Eye className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Vision</span>
          </div>
          <p className="text-xl md:text-2xl text-charcoal-700 leading-snug text-balance">
            {siteConfig.vision}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
      >
        <div className="inline-flex items-center gap-2 text-crimson-700 mb-5">
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Heart className="h-5 w-5" />
          </motion.span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">Values</span>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {siteConfig.values.map((v) => (
            <motion.div
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: easeOut },
                },
              }}
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[var(--color-cream)] border border-charcoal-100 hover:border-crimson-200 transition-colors"
            >
              <h4 className="font-bold text-charcoal-900">{v.title}</h4>
              <p className="mt-1.5 text-sm text-charcoal-600 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
