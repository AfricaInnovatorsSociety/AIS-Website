"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { BlogFrontmatter } from "@/lib/content";

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({
  slug,
  frontmatter,
  index = 0,
}: {
  slug: string;
  frontmatter: BlogFrontmatter;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`} className="group block h-full">
        <Card className="h-full overflow-hidden hover:border-crimson-200 hover:shadow-[var(--shadow-strong)] transition-shadow">
          <CardBody className="!p-7 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-xs text-charcoal-500">
              <CalendarDays className="h-3.5 w-3.5" />
              <time>{formatPostDate(frontmatter.date)}</time>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-crimson-700 transition-colors line-clamp-2">
              {frontmatter.title}
            </h3>
            <p className="mt-3 text-sm text-charcoal-600 leading-relaxed flex-1 line-clamp-3">
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
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-crimson-700 shrink-0">
                Read
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-charcoal-100 text-xs text-charcoal-500">
              By <span className="font-semibold text-charcoal-700">{frontmatter.author}</span>
            </div>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
