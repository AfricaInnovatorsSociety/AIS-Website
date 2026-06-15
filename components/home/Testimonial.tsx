"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { siteConfig } from "@/content/site.config";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Testimonial() {
  const t = siteConfig.testimonial;
  return (
    <Section className="!py-20 md:!py-28 relative overflow-hidden">
      {/* Soft animated backdrop */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-crimson-700/[0.04] blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.6, rotate: -12 },
            visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: easeOut } },
          }}
        >
          <Quote className="h-10 w-10 mx-auto text-crimson-700" aria-hidden />
        </motion.div>

        <motion.blockquote
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
          }}
          className="mt-6"
        >
          <p className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold leading-[1.25] text-charcoal-900 text-balance">
            &ldquo;{t.quote}&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
          }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <Avatar name={t.name} src={t.photo} size={56} />
          <div className="text-left">
            <div className="font-semibold text-charcoal-900">{t.name}</div>
            <div className="text-sm text-charcoal-500">{t.role}</div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
