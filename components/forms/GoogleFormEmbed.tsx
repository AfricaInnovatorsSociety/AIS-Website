"use client";

import { cn } from "@/lib/cn";

export function GoogleFormEmbed({
  src,
  title,
  height = 1265,
  className,
}: {
  src: string;
  title: string;
  height?: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-[var(--shadow-soft)]", className)}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        className="block w-full max-w-full border-0"
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
}
