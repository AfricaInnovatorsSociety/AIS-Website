"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import type { SpotlightFrontmatter } from "@/lib/content";

export function SpotlightCard({
  slug,
  frontmatter,
}: {
  slug: string;
  frontmatter: SpotlightFrontmatter;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link href={`/community/spotlights/${slug}`} className="group block h-full">
        <Card className="overflow-hidden h-full hover:border-crimson-200 hover:shadow-[var(--shadow-strong)] transition-shadow">
          <CardBody className="!p-7">
            <div className="flex items-center gap-4">
              <Avatar name={frontmatter.name} src={frontmatter.photo} size={56} />
              <div>
                <h3 className="font-bold text-charcoal-900 group-hover:text-crimson-700 transition-colors">
                  {frontmatter.name}
                </h3>
                {frontmatter.role && (
                  <p className="text-xs text-charcoal-500">{frontmatter.role}</p>
                )}
              </div>
            </div>
            {frontmatter.venture && (
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-crimson-700 font-semibold">
                {frontmatter.venture}
              </div>
            )}
            <p className="mt-3 text-sm text-charcoal-600 leading-relaxed line-clamp-3">
              {frontmatter.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex gap-1.5 flex-wrap">
                {frontmatter.tags?.slice(0, 2).map((t) => (
                  <Badge key={t} tone="outline" className="capitalize">
                    {t}
                  </Badge>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-crimson-700">
                Read
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
