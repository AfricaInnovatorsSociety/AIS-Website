"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Container";
import { partners, type Partner } from "@/content/partners";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion/Motion";

function PartnerTile({ partner }: { partner: Partner }) {
  if (!partner.logo) return null;

  const inner = (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "relative aspect-[5/3] rounded-2xl border border-charcoal-100 overflow-hidden flex items-center justify-center p-4 sm:p-5 transition-shadow hover:shadow-[var(--shadow-strong)]",
        partner.tileBg ?? "bg-white",
      )}
    >
      <Image
        src={asset(partner.logo)}
        alt={partner.name}
        width={partner.width ?? 600}
        height={partner.height ?? 400}
        className="object-contain max-h-full max-w-full w-auto h-auto"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
      />
    </motion.div>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-700 focus-visible:ring-offset-2 rounded-2xl"
      >
        {inner}
      </a>
    );
  }

  return <div aria-label={partner.name}>{inner}</div>;
}

export function PartnerStrip() {
  return (
    <Section className="!py-16 md:!py-20 border-t border-charcoal-100">
      <FadeUp className="text-center mb-10 md:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
          In good company
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-balance">
          Backed by partners who believe in African founders.
        </h2>
      </FadeUp>
      <Stagger
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {partners.map((p) => (
          <StaggerItem
            key={p.name}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <PartnerTile partner={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
