"use client";

import { motion } from "framer-motion";
import { Wrench, Trophy, Users2, Network, Check } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Program } from "@/content/programs";

const iconMap = {
  workshop: Wrench,
  pitch: Trophy,
  mentor: Users2,
  network: Network,
} as const;

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const Icon = iconMap[program.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden hover:border-crimson-200 hover:shadow-[var(--shadow-strong)] transition-shadow h-full">
        <motion.div
          aria-hidden
          className="gradient-brand origin-left"
          style={{ height: 6 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 + 0.1 }}
        />
        <CardBody className="!p-7 md:!p-8">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 280 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-crimson-50 text-crimson-700 shrink-0"
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-charcoal-900">{program.title}</h3>
              <p className="mt-2 text-charcoal-600 leading-relaxed">{program.description}</p>

              <ul className="mt-5 space-y-2">
                {program.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: index * 0.08 + 0.25 + i * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-charcoal-700"
                  >
                    <Check className="h-4 w-4 mt-0.5 text-crimson-700 shrink-0" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={program.ctaUrl} variant="primary" size="md" withArrow>
                  {program.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
