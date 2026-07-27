"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SummitSpeakerGroup } from "@/content/events/leadership-business-summit-2026-speakers";
import { asset } from "@/lib/asset";
import { Section } from "@/components/ui/Container";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function EventSpeakers({ groups }: { groups: SummitSpeakerGroup[] }) {
  return (
    <Section className="bg-white border-t border-charcoal-100 !pt-12 md:!pt-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3 text-center">
          The lineup
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-balance">
          Speakers & builders
        </h2>
        <p className="mt-3 text-center text-charcoal-600 max-w-2xl mx-auto">
          Founders, operators, faculty, and student builders sharing the journey from vision to venture.
        </p>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group.id}>
              <div className="mb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-charcoal-900">{group.label}</h3>
                {group.description && (
                  <p className="mt-1 text-sm md:text-base text-charcoal-600">{group.description}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {group.speakers.map((speaker, i) => (
                  <motion.article
                    key={speaker.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
                    className="rounded-2xl border border-charcoal-100 bg-[var(--color-cream)] p-5 md:p-6 shadow-[var(--shadow-soft)] hover:border-crimson-200 hover:shadow-[var(--shadow-strong)] transition-shadow"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white shadow-[var(--shadow-soft)]">
                        <Image
                          src={asset(speaker.photo)}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-charcoal-900 leading-snug">{speaker.name}</h4>
                        <p className="mt-1 text-sm font-medium text-crimson-700 leading-snug">
                          {speaker.title}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-charcoal-600 leading-relaxed">{speaker.bio}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
