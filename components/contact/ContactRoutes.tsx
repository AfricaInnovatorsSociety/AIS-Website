"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  MessageSquare,
  Users2,
  Handshake,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<string, LucideIcon> = {
  general: MessageSquare,
  mentor: Users2,
  partner: Handshake,
  news: Newspaper,
};

export type ContactRoute = {
  key: keyof typeof iconMap;
  title: string;
  description: string;
  cta: string;
  url: string;
};

export function ContactRoutes({ routes }: { routes: ContactRoute[] }) {
  return (
    <motion.div
      className="grid sm:grid-cols-2 gap-5 md:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {routes.map((route) => {
        const Icon = iconMap[route.key] ?? MessageSquare;
        return (
          <motion.div
            key={route.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
            }}
            whileHover={{ y: -4 }}
          >
            <Card className="overflow-hidden hover:border-crimson-200 hover:shadow-[var(--shadow-strong)] transition-shadow h-full">
              <CardBody className="!p-7 md:!p-8 h-full flex flex-col">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-crimson-50 text-crimson-700 mb-5"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-xl font-bold text-charcoal-900">{route.title}</h3>
                <p className="mt-2 text-charcoal-600 leading-relaxed flex-1">
                  {route.description}
                </p>
                <div className="mt-6">
                  <Button href={route.url} variant="primary" size="md" withArrow>
                    {route.cta}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
